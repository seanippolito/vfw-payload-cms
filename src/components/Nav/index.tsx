import { Link } from '@payloadcms/ui'

export default function MyCustomNav() {
  return (
    <nav>
      <ul>
        <li className="py-30 border-8 border-red-400 bg-blue-500 text-blue-500">
          <Link href="/admin">Dashboard</Link>
        </li>
        <li>
          <Link href="/Home">Home</Link>
        </li>
      </ul>
    </nav>
  )
}