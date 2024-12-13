import Link from 'next/link'

export function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/" className="text-2xl font-bold">
        BandR
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  )
}

