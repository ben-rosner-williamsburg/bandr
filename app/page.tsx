import { BandList } from '../components/band-list'
import { Header } from '../components/header'

export default function HomePage() {
  return (
    <main className="min-h-screen p-4">
      <Header />
      <BandList />
    </main>
  )
}
