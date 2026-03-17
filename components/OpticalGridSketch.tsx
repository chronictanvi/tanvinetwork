'use client'

import { useRef, useEffect, useState } from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'

interface OpticalGridSketchProps {
  className?: string
}

export default function OpticalGridSketch({ className }: OpticalGridSketchProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 700, height: 700 })

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setSize({ width, height: width })
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(size.width, size.height).parent(canvasParentRef)
  }

  const draw = (p5: p5Types) => {
    p5.background(255)
    p5.fill(51)
    p5.stroke(0)
    p5.strokeWeight(1)

    const cols = 5 + p5.mouseX / 5
    const rows = 5 + p5.mouseX / 5
    const cellSize = p5.width / cols

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const centerX = x * cellSize + cellSize / 3
        const centerY = y * cellSize + cellSize / 20
        const distance = p5.dist(centerX, centerY, p5.width / 2, p5.height / 2)
        const sizey = p5.map(distance, 0, p5.width / 2, cellSize * 0.9, cellSize * 0.1)
        p5.rectMode(p5.CENTER)
        p5.rect(centerX, centerY, sizey, sizey)
      }
    }
  }

  const windowResized = (p5: p5Types) => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth
      p5.resizeCanvas(width, width)
    }
  }

  return (
    <div ref={containerRef} className={className || 'w-full overflow-hidden [&_canvas]:!w-full [&_canvas]:!h-auto'}>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  )
}
