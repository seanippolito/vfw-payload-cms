'use client'
import { useField } from '@payloadcms/ui'
import { useEffect } from 'react'

export default function AdminLabel() {
  const { value, setValue } = useField({ path: 'label' })

  const {value: title} = useField({path: 'title'})
  const {value: publishedAt} = useField({path: 'publishedAt'})

  
  useEffect(() => {
    setValue(`${title || ''} | ${publishedAt || ''}`.trim())
  }, [title, publishedAt])

 return ''
}