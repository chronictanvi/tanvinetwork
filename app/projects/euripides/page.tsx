'use client'
import Image from 'next/image'

import acaju from './acaju.png'
import proof from './proof.jpg'

import cherry from './cherry.jpg'

import herakles from './herakles.png'
import charactergif from './charactergif.gif'
import eg1 from './original_ba491f1a7b92dd1d51ee4d344585dd97.png'
import eg2 from './199449.jpeg'

import eg3 from './207195.png'
import eg4 from './12323.png'
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
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-16 px-5">
        <div className="flex flex-col  gap-10  md:flex-row">
          <div>
            <p className="pb-3 text-sm tracking-wider text-zinc-400"> OVERVIEW</p>{' '}
            <h1 className="pb-5 text-3xl font-bold leading-9  text-gray-900 dark:text-gray-100 md:leading-9">
              Euripides is a reverse stress body typeface designed for Anne Carson's Grief Lessons,
              a translation of Four Plays by Euripides.
            </h1>
            {/* Download Button */}
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="mt-8 ">
                <a
                  href="/static/fonts/Euripides.woff2" // Link to the font file in the public folder
                  download="Euripides.woff" // Name the file that will be downloaded
                >
                  <button
                    className="rounded-lg border-2 border-black	 px-4 py-4 text-black hover:bg-red-400 dark:border-white dark:text-white"
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
                    className="rounded-lg border-2 border-black	 px-4 py-4 text-black hover:bg-red-400 dark:border-white dark:text-white"
                    onClick={downloadEuripides}
                  >
                    Download .otf
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
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
              <a
                className="pb-3 text-sm uppercase tracking-wider text-zinc-400 hover:underline"
                href="https://fontsinuse.com/search?terms=euripides&page=1"
              >
                {' '}
                Fonts in Use{' '}
              </a>
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
          </div>
        </div>

    

        <FontViewer />
        <CharacterViewer />



{/* Ideation */}

            {/* <div className="flex flex-col items-end gap-10 md:flex-row">
          <div className="basis-1/2">
        
            <Image src={herakles} alt="screenshot from anne carson" className="" />
      <Image src={charactergif} alt="screenshot from anne carson" className="" unoptimized /> 
          </div>
          <div className="basis-1/2">
            <p className="pb-3  text-sm uppercase tracking-wider text-zinc-400"> IDEATION </p>
            <h1 className="text-2xl"> How can the cliche of body text be challenged? </h1>{' '}
            <p className=" pt-5 text-lg font-light">
              {' '}
              What is to translate the form of a glyph — such that the shifts in the weight consider
              the sentiment of the text? 
            </p>
          </div>
        </div> */}




      </div>



      <div className="mx-auto mt-12 flex max-w-6xl  flex-col gap-16 px-5">
        <p className="pb-3 text-center text-sm uppercase tracking-wider text-zinc-400"> IN USE </p>


            <div className="">
            <Image src={eg2} alt="Stamp" className="my-5" unoptimized />
            <p className='text-center'> from <em><a className ="underline" href ="https://fontsinuse.com/uses/54526/maeluraamat-by-paide-teater" >Mäluraamat by Paide Teater

 </a></em></p> 
<p className='text-center'> Designed by Ran-Re Reimann. License: All Rights Reserved.
</p>
          </div>



   <div className="">
            <Image src={eg4} alt="Stamp" className="my-5" unoptimized />
             <p className='text-center'> from <em><a className ="underline" href ="https://www.instagram.com/1000___n/" >Le Paysan et le Marin
 </a></em></p> 
<p className='text-center'> by Milène Laforge</p>
          </div>
          
            <div className="">
            <Image src={eg1} alt="Stamp" className="my-5" unoptimized />
             <p className='text-center'> from <em><a className ="underline" href ="https://fontsinuse.com/uses/73388/utterances-composing-a-care-informed-research" >Utterances: Composing a Care-Informed Research Practice in the Cracks
 </a></em></p> 
<p className='text-center'> by The Promiscuous Care Study Group</p>
          </div>




 <div className="">
            <Image src={eg3} alt="Stamp" className="my-5" unoptimized />
             <p className='text-center'> from <em><a className ="underline" href ="https://fontsinuse.com/uses/57077/owomaniya-2023" >Owomaniya 2023

 </a></em></p> 
<p className='text-center'> by Studio Ping Pong</p>
          </div>



        <div className="mx-auto flex max-w-6xl flex-col gap-10  md:flex-row">
          <div className="basis-1/2">
            <Image src={acaju} alt="Stamp" className="" unoptimized />

          </div>



          <div className="basis-1/2 ">
            <Image src={cherry} alt="Poster" className="" unoptimized />
          </div>
        </div>
        <Image src={proof} alt="Poster" className="" unoptimized />
      </div>
    </div>
  )
}
