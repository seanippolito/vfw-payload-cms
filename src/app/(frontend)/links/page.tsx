import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import type { Link } from '@/payload-types'

// Fetch links from Payload
async function getLinks(): Promise<Link[]> {
  const payload = await getPayload({ config: configPromise })
  try {
    const result = await payload.find({
      collection: 'links', // Use the slug of your Links collection
      // Add sorting or filtering if needed, e.g.:
      // sort: 'order', // Assuming you have an 'order' field
      limit: 100, // Adjust limit as needed
    })
    return result.docs
  } catch (error) {
    console.error('Error fetching links:', error)
    return []
  }
}

export default async function LinksPage() {
  const links = await getLinks()

  return (
    <div className="prose max-w-none">
      {' '}
      {/* Use Tailwind typography */}
      <h1>Useful Links</h1>
      {links.length === 0 ? (
        <p>No links found.</p>
      ) : (
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-vfw-red hover:underline"
              >
                {link.label}
              </a>
              {link.description && <p className="text-sm text-gray-600 mt-1">{link.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
