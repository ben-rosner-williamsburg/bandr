'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { ScrollArea } from '../components/ui/scroll-area'
import { Button } from '../components/ui/button'

interface Venue {
  name: string
  date: string
}

interface Band {
  id: string
  name: string
  venues: Venue[]
  rating: number
}

const mockBands: Band[] = [
  { id: '1', name: 'The Beatles', venues: [{ name: 'Apple Corps rooftop', date: '1969-01-30' }], rating: 5 },
  { id: '2', name: 'Queen', venues: [{ name: 'Wembley Stadium', date: '1985-07-13' }], rating: 5 },
  { id: '3', name: 'Pink Floyd', venues: [{ name: 'Earls Court', date: '1994-10-15' }], rating: 4 },
]

export function BandList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [bands, setBands] = useState<Band[]>(mockBands)
  const [newBandName, setNewBandName] = useState('')
  const [newVenues, setNewVenues] = useState<Venue[]>([{ name: '', date: '' }])
  const [newBandRating, setNewBandRating] = useState<number>(5)

  const filteredBands = bands.filter(band => 
    band.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddVenue = () => {
    setNewVenues([...newVenues, { name: '', date: '' }])
  }

  const handleVenueChange = (index: number, field: keyof Venue, value: string) => {
    const updatedVenues = newVenues.map((venue, i) => 
      i === index ? { ...venue, [field]: value } : venue
    )
    setNewVenues(updatedVenues)
  }

  const handleAddBand = (e: React.FormEvent) => {
    e.preventDefault()
    if (newBandName && newVenues.every(venue => venue.name && venue.date)) {
      const newBand: Band = {
        id: Date.now().toString(),
        name: newBandName,
        venues: newVenues,
        rating: newBandRating,
      }
      setBands([...bands, newBand])
      setNewBandName('')
      setNewVenues([{ name: '', date: '' }])
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
          {newVenues.map((venue, index) => (
            <div key={index} className="flex space-x-2">
              <Input
                placeholder="Venue"
                value={venue.name}
                onChange={(e) => handleVenueChange(index, 'name', e.target.value)}
                required
              />
              <Input
                type="date"
                value={venue.date}
                onChange={(e) => handleVenueChange(index, 'date', e.target.value)}
                required
              />
            </div>
          ))}
          <Button type="button" onClick={handleAddVenue} variant="outline">Add Another Venue</Button>
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
                {band.venues.map((venue, index) => (
                  <p key={index}>
                    Venue: {venue.name}, Date: {venue.date}
                  </p>
                ))}
                <p>Rating: {band.rating}/5</p>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

