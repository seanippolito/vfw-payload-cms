import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import type { Event } from '@/payload-types' // Assuming an 'Event' type exists
import { RichText } from '../../../../components/RichText'

// Fetch events from Payload
async function getEvents(): Promise<Event[]> {
  const payload = await getPayload({ config: configPromise })
  try {
    const result = await payload.find({
      collection: 'events', // Use the slug of your Events/Calendar collection
      // Add sorting, e.g., by date:
      // sort: 'eventDate', // Assuming you have an 'eventDate' field
      limit: 100, // Adjust limit as needed
    })
    return result.docs
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default async function CalendarPage() {
  const events = await getEvents()

  return (
    <div className="prose max-w-none">
      <h1>Calendar & Food Menu</h1>

      {events.length === 0 ? (
        <p>No upcoming events found.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              {/* Basic rendering - customize as needed */}
              <strong>{event.title}</strong> {/* Assuming 'title' field */}
              {event.eventDate && (
                <span className="ml-2 text-sm text-gray-600">
                  {new Date(event.eventDate).toLocaleDateString()} {/* Format date */}
                </span>
              )}
              {/* Add more details like description, time, food menu, etc. */}
              {/* Use RichText component for description */}
              {event.description && <RichText content={event.description} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
