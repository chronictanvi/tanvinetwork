'use client'

import dynamic from 'next/dynamic'

const OpticalGridSketch = dynamic(() => import('./OpticalGridSketch'), {
  ssr: false,
})

export default function OpticalGrid() {
  return <OpticalGridSketch />
}
