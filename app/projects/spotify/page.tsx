import { genPageMetadata } from 'app/seo'
import spotifyFast from './spotify-fast.gif'
import blackpink from './blackpink-card.png'
import july from './july-highlights.png'

import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Spotify' })

import Link from '@/components/Link'

export default function Spotify() {
  return (
    <>
      <div className=" my-6 max-w-3xl items-center justify-start px-10 md:mt-2 md:border-r-2 xl:pr-52">
        <div className="  px-14 pb-8 md:space-y-5 md:px-6 ">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
            Japan is the 2nd largest music market in the world. But 63% of revenue still comes from
            physical sales.
          </h1>
          <p className="py-5">
            I was part of an ambitious project to unlock new experiences tailored to audiences in-
            Japan, by crafting social contexts in which music consumption gains meaning and value
            within the Spotify platform.
          </p>

          <small>
            To comply with my non-disclosure agreement, I have omitted and obfuscated confidential
            information in this case study. All information in this case study is my own and does
            not necessarily reflect the views of Spotify.
          </small>
        </div>
      </div>
      <Image src={spotifyFast} alt="Picture of the author" className="w-full	" />

      <div className="my-10 grid grid-cols-4 gap-4">
        <div className="col-span-1 col-start-2">
          <p className="text-zinc-400">THE CONTEXT</p>
          <p>
            Spotify is looking to differentiate their offering and accelerate stick user growth with
            new & existing music streamers in Japan.
          </p>
        </div>
        <div className="col-span-1 col-start-3">
          <p className="text-zinc-400">ROLE</p>
          <p>
            Uncover insights and translate concepts into features that address customer behaviours
            and motivations.
          </p>
        </div>
      </div>

      <div className="my-10 grid grid-cols-4 gap-4">
        <div className="col-span-1 col-start-2 ">
          <p className="text-zinc-400">GOAL</p>
          <p>
            Out of the Total Available Market, Spotify only takes up a small fraction of users. Our
            goal is to increase Subs/Monthly Active Users to 40 in Japan by 2025.
          </p>
        </div>
        <div className="col-span-1 col-start-3">
          <p className="text-zinc-400">TEAM</p>
          <p>
            UX Researchers, Content Writers, Localization Specialists for Japanese, Prototypers,
            Content Strategist and Product Managers and one other Lead Designer.
          </p>
        </div>
      </div>
      <div className="my-10 grid grid-cols-4 gap-4">
        <div className="col-span-2 col-start-2 ">
          <div className="  d:px-6 pb-8 ">
            <p className="py-5 text-zinc-400">THE CHALLENGE</p>
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
              A Distinct Market
            </h1>
            <p className="py-5">
              This isn’t just a localisation effort. Japan, the world’s second largest music
              industry, is distinct from other markets. There is specific cultural value placed on
              restricted items and the desire to be acknowledged as a fan. Monetization is largely
              granted in this phenomena.
            </p>
            <p className="font-body py-5">
              “Exclusive” 限定 (gentei) vs “Feeling special” 特別感 (tokubetsu-kan). Exclusivity in
              Japan isn’t limited to content — it also taps into the desire for unique and special
              things. Our goal for the project was to develop a prototype that could test concepts
              with users about their interest and willingness to pay by tapping into a sense of
              feeling special.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-zinc-200 py-16 text-black">
        <div className="my-10 grid grid-cols-4 gap-4">
          <div className="col-span-2 col-start-2 ">
            <div className=" pb-8 ">
              <p className="py-5">FOUNDATIONAL RESEARCH</p>
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-100 dark:text-gray-900 md:text-4xl md:leading-10">
                Why fandom?
              </h1>
              <p className="py-5">
                We spoke to a variety of people — including fervent artist or independent devotees,
                everyday music lovers and active members of fan communities — to understand how fans
                navigate Japan’s unique music scene. We identified Fandom as the single largest
                opportunity for Premium Growth for the following reasons:
              </p>

              <p className="py-5">FURTHER UNDERSTANDING</p>
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-100 dark:text-gray-900 md:text-4xl md:leading-10">
                What needs focus: Early Insights from the field
              </h1>
              <p className="py-5">
                We spoke to a variety of people — including fervent artist or independent devotees,
                everyday music lovers and active members of fan communities — to understand how fans
                navigate Japan’s unique music scene. We identified Fandom as the single largest
                opportunity for Premium Growth for the following reasons:
              </p>
            </div>
          </div>
        </div>
        <div className="my-10 grid grid-cols-4 gap-20">
          <div className="col-span-1 col-start-2">
            <Image src={blackpink} alt="Picture of the author" className="w-full	" />
            <h3 className="py-3 text-xl text-zinc-400">Genuine Community </h3>
            <p>
              Spotify is looking to differentiate their offering and accelerate stick user growth
              with new & existing music streamers in Japan.
            </p>
          </div>
          <div className="col-span-1 col-start-3">
            <Image src={july} alt="Picture of the author" className="w-full	" />
            <h3 className="py-3 text-xl text-zinc-400">A more frequent cadence of devotion</h3>
            <p>
              Uncover insights and translate concepts into features that address customer behaviours
              and motivations.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
