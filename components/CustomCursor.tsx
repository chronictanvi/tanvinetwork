'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import react-p5 to avoid SSR issues
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

const CustomCursor = () => {
  const [isOverClickable, setIsOverClickable] = useState(false)
  
  const setup = (p5: any, canvasParentRef: any) => {
    // Create canvas that covers the entire viewport
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    canvas.position(0, 0)
    canvas.style('position', 'fixed')
    canvas.style('top', '0')
    canvas.style('left', '0')
    canvas.style('pointer-events', 'none')
    canvas.style('z-index', '9999')
    p5.clear()
  }

  const draw = (p5: any) => {
    // Clear with transparency
    p5.clear()

    // Don't draw custom cursor if over clickable element
    if (isOverClickable) return

    // Set the fill and stroke colors
    p5.fill('#FF4344')
    p5.stroke('#FF4344')
    p5.strokeWeight(2)

    // Draw a line from previous mouse position to current
    if (p5.pmouseX !== 0 && p5.pmouseY !== 0) {
      p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY)
    }

    // Draw a circle at the current mouse position
    p5.noStroke()
    p5.circle(p5.mouseX, p5.mouseY, 9)
  }

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

  // Handle cursor visibility based on hover state
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check if hovering over a clickable element
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.getAttribute('role') === 'button' ||
        target.onclick !== null ||
        target.style.cursor === 'pointer' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      
      setIsOverClickable(isClickable)
      
      // Show/hide default cursor based on clickable state
      if (isClickable) {
        document.body.style.cursor = 'auto'
      } else {
        document.body.style.cursor = 'none'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Initial cursor hide
    document.body.style.cursor = 'none'

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}

export default CustomCursor
