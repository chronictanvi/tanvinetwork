'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

const posters = [
  { src: '/static/images/DataGrab.gif', alt: 'DataGrab' },
  { src: '/static/images/February.gif', alt: 'February' },
  { src: '/static/images/Atlanta_Contempo.gif', alt: 'Atlanta Contempo' },
  { src: '/static/images/derya.png', alt: 'Derya' },
  { src: '/static/images/KateElswit.gif', alt: 'Kate Elswit' },
  { src: '/static/images/73.png', alt: 'Kauna Malgawi' },
  { src: '/static/images/12_AtlantaStudies.png', alt: 'Atlanta Studies' },
  { src: '/static/images/DataEcologies.jpg', alt: 'Data Ecologies' },
  { src: '/static/images/89.png', alt: '89' },
  { src: '/static/images/3.png', alt: 'Vauhini Vara' },
  { src: '/static/images/endo.gif', alt: 'Endo' },
]

interface PosterState {
  x: number
  y: number
  rotation: number
  zIndex: number
}

export default function DraggablePosterStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [posterStates, setPosterStates] = useState<PosterState[]>([])
  const [dragging, setDragging] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [topZ, setTopZ] = useState(posters.length)

  useEffect(() => {
    const states = posters.map((_, i) => ({
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 30,
      rotation: (Math.random() - 0.5) * 20,
      zIndex: i,
    }))
    setPosterStates(states)
  }, [])

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, index: number) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      })
      setDragging(index)
      setTopZ((z) => {
        const newZ = z + 1
        setPosterStates((prev) =>
          prev.map((s, i) => (i === index ? { ...s, zIndex: newZ } : s))
        )
        return newZ
      })
      target.setPointerCapture(e.pointerId)
    },
    []
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (dragging === null || !containerRef.current) return
      const containerRect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - containerRect.left - containerRect.width / 2 - dragOffset.x
      const y = e.clientY - containerRect.top - containerRect.height / 2 - dragOffset.y
      setPosterStates((prev) =>
        prev.map((s, i) => (i === dragging ? { ...s, x, y } : s))
      )
    },
    [dragging, dragOffset]
  )

  const handlePointerUp = useCallback(() => {
    setDragging(null)
  }, [])

  if (posterStates.length === 0) return null

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] w-full select-none overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {posters.map((poster, i) => (
        <div
          key={poster.src}
          className="absolute left-1/2 top-1/2 cursor-grab shadow-xl transition-shadow hover:shadow-2xl active:cursor-grabbing"
          style={{
            transform: `translate(-50%, -50%) translate(${posterStates[i].x}px, ${posterStates[i].y}px) rotate(${posterStates[i].rotation}deg)`,
            zIndex: posterStates[i].zIndex,
            transition: dragging === i ? 'none' : 'box-shadow 0.2s',
          }}
          onPointerDown={(e) => handlePointerDown(e, i)}
        >
          <img
            src={poster.src}
            alt={poster.alt}
            className="pointer-events-none h-auto w-48 rounded-sm border border-gray-200 dark:border-gray-700 md:w-64"
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}
