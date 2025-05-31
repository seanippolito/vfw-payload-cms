import clsx from 'clsx'
import React from 'react'
import NextImage from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <NextImage
      alt="VFW Post 5985"
      width={150}
      height={150}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx(className)}
      src="CrossOfMalta_vector.svg"
    />
  )
}
