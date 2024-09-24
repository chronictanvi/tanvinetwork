'use client'

import { useState } from 'react'

const FontViewer = () => {
  const [previewText, setPreviewText] = useState('ABCXYZ')
  const [fontSize, setFontSize] = useState(40)
  const [trackSize, setTrackSize] = useState(0)

  const handleTextChange = (e) => setPreviewText(e.target.value)
  const handleSizeChange = (e) => setFontSize(e.target.value)
  const handleTrackChange = (e) => setTrackSize(e.target.value)

  return (
    <div style={{ fontFamily: 'Euripides' }} className="mx-auto px-16 py-16 ">
      <p className="pb-3 text-sm uppercase tracking-wider text-zinc-400">Font Preview</p>
      <div>
        <input
          type="text"
          value={previewText}
          onChange={handleTextChange}
          placeholder="Type to preview..."
          style={{ padding: '10px', fontSize: '20px', background: 'none' }}
          className="mr-5"
        />
        <label>
          Font Size:
          <input type="range" min="10" max="100" value={fontSize} onChange={handleSizeChange} />
          {fontSize}px
        </label>
        {/* <label className="mr-5 px-5">
          Tracking:
          <input
            type="range"
            min="0"
            max="5"
            value={trackSize}
            onChange={handleTrackChange}
            className="mx-5"
          />
          {trackSize}
        </label> */}
      </div>
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
