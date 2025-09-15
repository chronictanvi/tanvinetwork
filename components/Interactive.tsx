import React, { useState, useEffect, useRef } from 'react'

const InteractiveTextEffects = () => {
  const [effectsEnabled, setEffectsEnabled] = useState(true)
  const [stylesEnabled, setStylesEnabled] = useState(true)
  const textRef = useRef(null)

  const colors = ['#ff0000', '#f87171', '#fecaca', '#fca5a5', '#ef4444']
  const stars = ['❋', '✦', '⁕', '✺', '✹', '✤', '✿', '❉']
  const colorArray = ['red', 'orange', 'green', 'aqua', 'blue']

  const [currentColorIndex, setCurrentColorIndex] = useState(-1)
  const [currentStarIndex, setCurrentStarIndex] = useState(-1)
  const [originalTexts, setOriginalTexts] = useState([])

  // CSS variables
  const cssVariables = {
    '--black': '#000000',
    '--white': '#ffffff',
    '--light-grey': '#f5f5f5',
    '--red': '#ff0000',
    '--orange': '#f87171',
    '--green': '#fecaca',
    '--aqua': '#fca5a5',
    '--blue': '#ef4444',
  }
  useEffect(() => {
    // Apply CSS variables to document root
    Object.entries(cssVariables).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value)
    })
  }, [])

  const wrapTextInSpans = (text) => {
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return ' '
      }
      return (
        <span
          key={index}
          className="effect--span text-gray-900 dark:text-white"
          data-original={char}
          onMouseOver={effectsEnabled ? (e) => handleMouseOver(e, index) : undefined}
          style={{
            transition: 'color 0.3s ease',
          }}
        >
          {char}
        </span>
      )
    })
  }

  const handleMouseOver = (e, index) => {
    const span = e.target
    const newStarIndex = (currentStarIndex + 1) % stars.length
    const newColorIndex = (currentColorIndex + 1) % colors.length

    setCurrentStarIndex(newStarIndex)
    setCurrentColorIndex(newColorIndex)

    const originalChar = span.getAttribute('data-original')

    span.innerText = stars[newStarIndex]
    span.style.color = colors[newColorIndex]

    setTimeout(() => {
      span.innerText = originalChar
      span.style.color = ''
      span.className = 'effect--span text-gray-900 dark:text-white'
    }, 1000)
  }

  return (
    <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
      {wrapTextInSpans("Hello, I'm Tanvi.")}
    </h1>
  )
}

export default InteractiveTextEffects
