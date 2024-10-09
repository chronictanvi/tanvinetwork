'use client'
import Image from 'next/image'

import acaju from './acaju.png'
import cherry from './cherry.jpg'

import CharacterViewer from '@/components/CharacterViewer'
import FontViewer from '@/components/FontViewer'

const event = ({ action, category, label, value }: any) => {
  ;(window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

const downloadEuripides = () => {
  event({
    action: 'dwld_euripides',
    category: 'ecommerce',
    label: 'Item dowloaded',
    value: 'Font',
  })
}

export default function Euripides() {
  return (
    <div style={{ fontFamily: 'Euripides' }} className="max-w-8xl mx-auto  dark:bg-black">
      <div className="mx-auto mt-12 flex max-w-6xl flex-row flex-col gap-16 px-5">
        <></>
        <div className="flex basis-2/3 flex-col  pr-16 pt-8 md:space-y-5">
          <p className="pb-3 text-sm tracking-wider text-zinc-400">OVERVIEW</p>{' '}
          <h1 className="pb-5 text-3xl font-bold leading-9  text-gray-900 dark:text-gray-100 md:leading-9">
            Euripides is a reverse stress body typeface designed for Anne Carson's Grief Lessons, a
            translation of Four Plays by Euripides.
          </h1>
          <div className="pb-5">
            <p className=" pb-2 text-xl font-light">
              How can the cliche of body text be challenged? What is to translate the form of a
              glyph — such that the shifts in the weight consider the sentiment of the text? 
            </p>
          </div>
          {/* Download Button */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="mt-8 ">
              <a
                href="/static/fonts/Euripides.woff2" // Link to the font file in the public folder
                download="Euripides.woff" // Name the file that will be downloaded
              >
                <button
                  className="rounded-lg border-2 border-white	 px-4 py-4 text-white hover:bg-red-600"
                  onClick={downloadEuripides}
                >
                  Download .woff
                </button>
              </a>
            </div>
            <div className="mt-8 ">
              <a
                href="/static/fonts/Euripides.otf" // Link to the font file in the public folder
                download="Euripides.otf" // Name the file that will be downloaded
              >
                {' '}
                <button
                  className="rounded-lg border-2 border-white	 px-4 py-4 text-white hover:bg-red-600"
                  onClick={downloadEuripides}
                >
                  Download .otf
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row">
          <div className=" mb-10 basis-1/3">
            <p className="pb-3 text-sm tracking-wider text-zinc-400">SCOPE</p>
            <ul>
              <li>Type Design</li>
            </ul>
          </div>
          <div className="mb-10 basis-1/3 ">
            <p className="pb-3 text-sm tracking-wider text-zinc-400">TOOLS</p>
            <ul>
              <li>Robofont</li>
              {/* <li>Proofs made in Adobe InDesign. </li> <li> GitHub for version control. </li> */}
            </ul>
          </div>
          <div className="mb-10 basis-1/3 ">
            <p className="pb-3 text-sm tracking-wider text-zinc-400">MENTORSHIP</p>
            <ul>
              <li>Dai Foldes</li>
              <li>Victoria Rushton </li>
            </ul>
          </div>
          <div className="mb-10 basis-1/3 ">
            <p className="pb-3 text-sm tracking-wider text-zinc-400">VERSION / LICENSE </p>
            <ul>
              <li>
                2.0 — currently under revision! Free for Personal Use. Contact me for Commercial
                uses.
              </li>
            </ul>
          </div>
          {/* <div className="basis-1/2">
            <p className="pb-3 text-sm tracking-wider text-zinc-400">LICENSE</p>
            <p> </p>
          </div> */}
        </div>
        <FontViewer />
      </div>
      <CharacterViewer />
      <div className="mx-auto mt-12 flex max-w-6xl flex-row flex-col gap-16 px-5">
        <p className="pb-3 text-center text-sm tracking-wider text-zinc-400"> IN USE </p>
        <div className="mx-auto flex max-w-4xl flex-col gap-10 md:flex-row">
          <div className="basis-1/2">
            <Image src={acaju} alt="Stamp" className="" unoptimized />
          </div>

          <div className="basis-1/2 ">
            <Image src={cherry} alt="Poster" className="" unoptimized />
          </div>
        </div>
      </div>
    </div>
  )
}
