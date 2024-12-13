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

export function BandList() {
  const [searchQuery, setSearchQuery] = useState('')
  // Fetch bands data here or pass it as a prop

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
        <ScrollArea className="h-[600px]">
          {/* Map through your bands data and render each band */}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
