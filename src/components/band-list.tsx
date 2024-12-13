'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Band {
  id: string
  name: string
  datesSeen: string[]
  venue: string
  rating: number
}

const mockBands: Band[] = [
  { id: '1', name: 'The Beatles', datesSeen: ['1969-01-30'], venue: 'Apple Corps rooftop', rating: 5 },
  { id: '2', name: 'Queen', datesSeen: ['1985-07-13'], venue: 'Wembley Stadium', rating: 5 },
  { id: '3', name: 'Pink Floyd', datesSeen: ['1994-10-15'], venue: 'Earls Court', rating: 4 },
]

export function BandList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [bands] = useState<Band[]>(mockBands)

  const filteredBands = bands.filter(band => 
    band.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>My Concert History</CardTitle>
        <Input
          placeholder="Search bands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {filteredBands.map(band => (
            <div key={band.id} className="mb-4 p-4 border rounded">
              <h3 className="text-lg font-semibold">{band.name}</h3>
              <p>Venue: {band.venue}</p>
              <p>Dates Seen: {band.datesSeen.join(', ')}</p>
              <p>Rating: {band.rating}/5</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
