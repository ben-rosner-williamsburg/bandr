'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { ScrollArea } from '../components/ui/scroll-area'
import { Button } from '../components/ui/button'

interface Band {
  id: string
  name: string
  datesSeen: string[]
  venue: string | string[],
  rating: number
}

const mockBands: Band[] = [
  { id: '1', name: 'Phish', datesSeen: ['2012-12-28', '2013-12-28', '2016-12-28', '2017-07-21', '2017-12-28', '2018-12-28', '2023-12-28'], venue: 'Madison Square Garden', rating: 5 },
  { id: '2', name: 'Dead & Company', datesSeen: ['2015-11-07', '2017-11-12', '2022-07-15', '2023-06-21'], venue: ['Citi Field', "Madison Square Garden"], rating: 4 },
  { id: '3', name: 'Goose', datesSeen: ['2022-06-24'], venue: 'Radio City Music Hall', rating: 5 },
]

export function BandList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [bands, setBands] = useState<Band[]>(mockBands)
  const [newBandName, setNewBandName] = useState('')
  const [newBandVenue, setNewBandVenue] = useState('')
  const [newBandDate, setNewBandDate] = useState('')
  const [newBandRating, setNewBandRating] = useState<number>(5)

  const filteredBands = bands.filter(band => 
    band.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const handleAddBand = (e: React.FormEvent) => {
    e.preventDefault()
    if (newBandName && newBandVenue && newBandDate) {
      const newBand: Band = {
        id: Date.now().toString(),
        name: newBandName,
        datesSeen: [newBandDate],
        venue: newBandVenue || [newBandVenue],
        rating: newBandRating,
      }
      setBands([...bands, newBand])
      setNewBandName('')
      setNewBandVenue('')
      setNewBandDate('')
      setNewBandRating(5)
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>My Concert History</CardTitle>
        <Input
          placeholder="Search bands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm mb-4"
        />
        <form onSubmit={handleAddBand} className="space-y-2">
          <Input
            placeholder="Band name"
            value={newBandName}
            onChange={(e) => setNewBandName(e.target.value)}
            required
          />
          <Input
            placeholder="Venue"
            value={newBandVenue}
            onChange={(e) => setNewBandVenue(e.target.value)}
            required
          />
          <Input
            type="date"
            value={newBandDate}
            onChange={(e) => setNewBandDate(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Rating (1-5)"
            value={newBandRating}
            onChange={(e) => setNewBandRating(Number(e.target.value))}
            min="1"
            max="5"
            required
          />
          <Button type="submit">Add Band</Button>
        </form>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {filteredBands.map(band => (
            <Card key={band.id} className="mb-4 p-4" variant="secondary">
              <CardTitle className="text-lg">{band.name}</CardTitle>
              <CardContent className="pt-2">
                <p>Venue: {band.venue}</p>
                <p>Dates Seen: {band.datesSeen.join(', ')}</p>
                <p>Rating: {band.rating}/5</p>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}