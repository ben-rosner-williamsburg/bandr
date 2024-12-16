'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

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
  const [bands] = useState<Band[]>(mockBands)
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bands.map((band, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{band.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p>Venue: {Array.isArray(band.venue) ? band.venue.join(', ') : band.venue}</p>
              <p>Dates Seen: {Array.isArray(band.datesSeen) ? band.datesSeen.join(', ') : band.datesSeen}</p>
              <p>Rating: {band.rating}/5</p>
            </CardContent>
          </Card>
        ))}
      </div>
    )
}