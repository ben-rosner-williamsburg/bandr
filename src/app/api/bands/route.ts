import { NextResponse } from 'next/server'

export async function GET() {
  // Fetch bands from your database
  const bands = [
    { id: '1', name: 'The Beatles', datesSeen: ['1969-01-30'], venue: 'Apple Corps rooftop', rating: 5 },
    // ... more bands
  ]

  return NextResponse.json(bands)
}

