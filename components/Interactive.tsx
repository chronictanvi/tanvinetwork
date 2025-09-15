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
          className="effect--span"
          data-original={char}
          onMouseOver={effectsEnabled ? (e) => handleMouseOver(e, index) : undefined}
          style={{
            transition: ' 0.3s ease',
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
      span.style.color = 'var(--white)'
    }, 1000)
  }

  const containerStyle = {
    transition: 'all 0.3s ease',
  }

  const switchStyle = {
    margin: '0 1rem',
    cursor: 'pointer',
  }

  //   const headerStyle = {
  //     fontSize: '2rem',
  //     marginBottom: '2rem',
  //     fontWeight: 'bold',
  //   }

  //   const controlsStyle = {
  //     marginBottom: '2rem',
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     gap: '1rem',
  //     alignItems: 'center',
  //   }

  //   const labelStyle = {
  //     display: 'flex',
  //     alignItems: 'center',
  //     gap: '0.5rem',
  //     cursor: 'pointer',
  //   }

  //   const demoTextStyle = {
  //     fontSize: '1.5rem',
  //     lineHeight: '1.6',
  //     maxWidth: '800px',
  //   }

  //   if (!stylesEnabled) {
  //     return (
  //       <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
  //         <div style={controlsStyle}>
  //           <label style={labelStyle}>
  //             <input
  //               type="checkbox"
  //               checked={stylesEnabled}
  //               onChange={(e) => setStylesEnabled(e.target.checked)}
  //               style={switchStyle}
  //             />
  //             Enable Styles
  //           </label>
  //         </div>
  //         <div>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <div style={containerStyle}>
      {/* <div style={controlsStyle}>        
        <label style={labelStyle}>
          <input
            type="checkbox"
            checked={effectsEnabled}
            onChange={(e) => setEffectsEnabled(e.target.checked)}
            style={switchStyle}
          />
          Enable Effects
        </label>
        
        <label style={labelStyle}>
          <input
            type="checkbox"
            checked={stylesEnabled}
            onChange={(e) => setStylesEnabled(e.target.checked)}
            style={switchStyle}
          />
          Enable Styles
        </label>
      </div> */}

      <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {wrapTextInSpans("Hello, I'm Tanvi.")}
      </h1>
    </div>
  )
}

export default InteractiveTextEffects
