'use client'

import { useState } from 'react'

const FontViewer = () => {
  const [previewText, setPreviewText] = useState('ABCXYZ')
  const [fontSize, setFontSize] = useState(40)
  const [trackSize, setTrackSize] = useState(0)

  const handleTextChange = (e) => setPreviewText(e.target.value)
  const handleSizeChange = (e) => setFontSize(e.target.value)

  return (
    <div style={{ fontFamily: 'Euripides' }} className=" py-16 ">
      {/* <p className=" pb-3 text-center text-sm uppercase tracking-wider text-zinc-400">
        Font Preview
      </p> */}
      <div className="flex flex-col md:flex-row">
        <div>
          <input
            type="text"
            value={previewText}
            onChange={handleTextChange}
            placeholder="Type to preview..."
            style={{ padding: '10px', fontSize: '20px', background: 'none' }}
            className="mr-12 "
          />
        </div>
        <div className="my-5 md:my-0">
          <label className="">
            Font Size:
            <input
              type="range"
              min="10"
              max="150"
              value={fontSize}
              onChange={handleSizeChange}
              className="mx-4"
            />
            {fontSize}px
          </label>
        </div>
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
          <span key={index} style={{}}>
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}

export default FontViewer
