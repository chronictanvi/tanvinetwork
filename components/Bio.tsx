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
    <div className="flex justify-between divide-y divide-gray-200 px-10 dark:divide-gray-700 md:px-20">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          hi hi.
        </h1>
        <p className="max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400">
          I'm a Design Fellow at{' '}
          <Link className="underline" href="https://www.publicpolicylab.org/">
            Public Policy Lab
          </Link>
          . Previously I was a <br />
          Design Technologist at Spotify. I live in Brooklyn with my cat{' '}
          <span
            onMouseLeave={debounce(() => {
              console.log('debounced')
              setShowYuchi(false)
            })}
            onMouseEnter={() => setShowYuchi(true)}
          >
            Yuchi
          </span>
          . I also curate the world's largest respository of{' '}
          <Link className="underline" href="https://www.are.na/tanvi/frog-based-design ">
            {' '}
            frog based design artifacts.
          </Link>
        </p>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Here's some work I've done recently:
        </p>
      </div>
      {showYuchi && (
        <Image
          alt="photo of my black cat yuchi laying on his back, nips out"
          className="max-w-xs"
          src={yuchi}
          objectFit="contain"
        />
      )}
    </div>
  )
}
