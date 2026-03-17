'use client'

import dynamic from 'next/dynamic'

const OpticalGridSketch = dynamic(() => import('./OpticalGridSketch'), {
  ssr: false,
})

interface OpticalGridProps {
  className?: string
}

export default function OpticalGrid({ className }: OpticalGridProps) {
  return <OpticalGridSketch className={className} />
}
