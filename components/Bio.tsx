'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import yuchi from './yuchi.png'

function debounce(func, timeout = 500) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

export default function Bio() {
  const [showYuchi, setShowYuchi] = useState(false)

  return (
    <div className="flex justify-between divide-y divide-gray-200 px-5 dark:divide-gray-700 md:px-10">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hello, I'm Tanvi.
        </h1>
        <p className="max-w-2xl leading-8 tracking-tighter text-gray-500 dark:text-gray-300 md:text-lg">
          I'm a Product Designer based in Brooklyn, NY.{' '}
          {/*  I live with my cat{' '}
          <span
            onMouseLeave={debounce(() => {
              console.log('debounced')
              setShowYuchi(false)
            })}
            onMouseEnter={() => setShowYuchi(true)}
          >
            Mr. Yuchi.
          </span>{' '} */}
          <br></br>
          Recently I've worked at{' '}
          <Link
            className="underline decoration-primary-400
              underline-offset-4
              hover:decoration-dotted"
            href="https://www.pentagram.com/"
          >
            Pentagram,
          </Link>{' '}
          <Link
            className="underline decoration-primary-400
            underline-offset-4
            hover:decoration-dotted"
            href="https://www.publicpolicylab.org/"
          >
            Public Policy Lab
          </Link>{' '}
          and{' '}
          <Link
            className="underline decoration-primary-400
               underline-offset-4
               hover:decoration-dotted"
            href=" https://spotify.design/"
          >
            Spotify.
          </Link>{' '}
          <br></br>I also curate the world's largest repository of{' '}
          <Link
            className="underline decoration-primary-400
            underline-offset-4
            hover:decoration-dotted"
            href="https://www.are.na/tanvi/frog-based-design "
          >
            {' '}
            frog based design artifacts.
          </Link>
        </p>
        <p className="hidden max-w-2xl leading-8 tracking-tighter text-gray-500 dark:text-gray-300 md:visible md:text-lg">
          {' '}
          Here's some work I've done recently:
        </p>
      </div>
      {showYuchi && (
        <Image
          alt="photo of my black cat yuchi laying on his back"
          className="absolute"
          src={yuchi}
          objectFit="contain"
        />
      )}
    </div>
  )
}
