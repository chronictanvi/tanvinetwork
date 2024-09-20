'use client'

import { useState } from 'react'

const FontViewer = () => {
  const [previewText, setPreviewText] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  const [fontSize, setFontSize] = useState(40)

  const handleTextChange = (e) => setPreviewText(e.target.value)
  const handleSizeChange = (e) => setFontSize(e.target.value)

  return (
    <div style={{ fontFamily: 'Euripides' }}>
      <h1>Font Preview</h1>
      <input
        type="text"
        value={previewText}
        onChange={handleTextChange}
        placeholder="Type to preview..."
        style={{ padding: '10px', fontSize: '20px' }}
      />
      <label>
        Font Size:
        <input type="range" min="10" max="100" value={fontSize} onChange={handleSizeChange} />
        {fontSize}px
      </label>
      <div className="character-preview" style={{ fontSize: `${fontSize}px`, marginTop: '20px' }}>
        {previewText.split('').map((char, index) => (
          <span key={index} style={{ marginRight: '10px' }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}

export default FontViewer
