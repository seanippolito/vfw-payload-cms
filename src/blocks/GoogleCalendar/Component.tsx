import React from 'react'

import type { GoogleCalendarBlock as GoogleCalendarBlockProps } from '@/payload-types'

export const GoogleCalendarBlock: React.FC<GoogleCalendarBlockProps> = ({ permalink }) => {
  // Default to a specific calendar if no `permalink` is provided
  const defaultSrc = 'https://calendar.google.com/calendar/embed?src=ippolitosean%40gmail.com&ctz=America%2FLos_Angeles';

  return (
    <iframe
      src={permalink || defaultSrc}
      style={{ border: 20 }}
      width="800"
      height="600"
      allowFullScreen={true}
      loading="lazy"
      title="Google Calendar"
    ></iframe>
  );
}
