import clsx from 'clsx'
import React from 'react'
import NextImage from 'next/image'

export default function MyCustomAction() {

  return (
    /* eslint-disable @next/next/no-img-element */
    <NextImage
      alt="SoSAi Logo"
      width={193}
      height={34}
      decoding="async"
      className={clsx('max-w-37.5 w-full h-[34px]')}
      src="/sosai.svg"
    />
  )
}
