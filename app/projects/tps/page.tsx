'use client'

import Image from 'next/image'

import process from './process.png'
import early2 from './Browse by Theme.png'
import video from './video.gif'
import cover from './cover1.png'
import v1 from './Database.png'
import proto from './Proto1.png'
import expanded from './5_Expand.gif'
import airtable from './Airtable.png'
import results from './UsersSpikes.png'
import topics from './2_Topics.gif'
import research from './240619_ThePeopleSay_Graphics.png'
import pplogo from './PPLogo.png'

import TPSGraph from '@/components/TPSGraph'

export default function PeopleSay() {
  return (
    <div>
      <section className="py-15 mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl  gap-16 ">
          <div className="flex  flex-col md:space-y-5">
            <p className=" text-sm tracking-wider text-zinc-800 dark:text-zinc-400">OVERVIEW</p>
            <h1 className="pb-5 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:leading-9">
              The People Say is a web-based qualitative database designed to help policymakers hear
              the voices of the public when shaping policy.
            </h1>
            <p className="pb-2 text-xl font-light">
              The database features first-hand insights from a diverse group of older adults and
              caregivers, as well as feedback from subject-matter experts on policies affecting
              older adults.
            </p>
          </div>

          {/* <div className="my-10 flex flex-row gap-8 md:flex-col">
            <div>
              <p className="pb-2 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">ROLE</p>
              <ul>
                <li>Design Lead</li>
              </ul>
            </div>
            <div>
              <p className="pb-2 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
                DURATION
              </p>
              <ul>
                <li>April 2024 – January 2025</li>
              </ul>
            </div>
            <div>
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">SCOPE</p>
              <ul>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>User Interface Design</li>
              </ul>
            </div>
            <div>
              <p className="pb-2 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">TOOLS</p>
              <ul>
                <li>Figma</li>
                <li>Laravel</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div> */}
        </div>
        <Image
          src={cover}
          alt="Cover of The People Say project"
          className="rounded-xl py-5 pb-20"
        />
      </section>

      <section className=" bg-[#1B2840] ">
        <div className="mx-auto flex max-w-3xl flex-col gap-16 py-10 md:flex-row">
          <div className="flex basis-2/3 flex-col pr-16 pt-8 md:space-y-5">
            <Image src={pplogo} alt="Cover of The People Say project" className="py-5 pb-20" />
            <p className=" text-sm tracking-wider text-zinc-800 dark:text-zinc-400">ABOUT PPL</p>
            <h1 className="pb-5 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:leading-9">
              Public Policy Lab uses human-centered methods to design in and for systems that result
              in improved policies and services for millions of Americans.
            </h1>
          </div>

          <div className="my-10 flex flex-row gap-8 md:flex-col">
            <div>
              <p className="pb-2 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">ROLE</p>
              <ul>
                <li>Design Engineering Fellow</li>
              </ul>
            </div>
            <div>
              <p className="pb-2 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
                DURATION
              </p>
              <ul>
                <li>April 2024 – January 2025</li>
              </ul>
            </div>
            <div>
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">SCOPE</p>
              <ul>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>User Interface Design</li>
              </ul>
            </div>
            <div>
              <p className="pb-2 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">TOOLS</p>
              <ul>
                <li>Figma</li>
                <li>Laravel</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className="mx-auto max-w-3xl py-10">
          <div className="py-10">
            <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">CONTEXT</p>
            <p className="text-3xl font-bold">
              The American population is rapidly aging. <br />
              Our society needs to prepare for this demographic shift.
            </p>
          </div>
          <TPSGraph />

          <div className="my-10 flex flex-col gap-16 py-5 md:flex-row">
            <div className="basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
                PROBLEM
              </p>
              <p className="text-xl">
                Health and aging policies and systems are typically designed from the perspective of
                people who run systems, rather than those who use them.
              </p>
              <p className="pt-5">
                Even when advocates, policymakers, and providers do seek to learn from older adults,
                those engagements often have significant limitations.
              </p>
            </div>
            <div className="basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">GOAL</p>
              <p className="text-xl">
                Highlight the value of spoken word and qualitative data. Make the experiences of
                older adults across America easily accessible to policymakers.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="z-0 bg-white px-5 py-16 text-black">
        <div className="mx-auto max-w-3xl">
          <div
            className="
 pb-12"
          >
            <p
              className="
 pb-3 text-sm uppercase tracking-wider"
            >
              THE CHALLENGE
            </p>
            <h1 className="text-4xl leading-9 tracking-tight md:text-2xl md:leading-10">
              Inaccessible Data
            </h1>
            <p className="py-5 text-xl">
              The database includes 2,400 units of data, 100 detailed tags, and 100 hours of media —
              overwhelming for non-experts like policymakers.
            </p>
            <Image src={airtable} alt="Airtable prototype of database" className="rounded-xl" />
          </div>

          {/* <div className="flex flex-col gap-5 md:flex-row">
            <div className="basis-1/2 ">
              <p className="pb-3 text-sm tracking-wider">MY GOALS</p>

              <p className="pb-5 text-xl">
                My role was to take this data and present it in a way that is parsable for the
                average user.
              </p>
              <ul className="list-disc pl-5">
                <li>Combine data into a cohesive experience</li>
                <li>Deliver an MVP that lays the foundation for a scalable system</li>
                <li>Make data easily accessible but still secure</li>
              </ul>
            </div>
            <div className="basis-1/2">
              <Image
                src={video}
                alt="Animated screen recording of the interface"
                className="rounded-xl"
                unoptimized
              />
            </div>
          </div> */}
          <div className="flex max-w-4xl flex-col gap-2 md:flex-row">
            <div className="pb-12">
              <p className="pb-3 text-sm uppercase tracking-wider">FUNCTIONALITY</p>
              <h1 className="text-xl font-extrabold leading-9 tracking-tight md:text-2xl md:leading-10">
                Content Offerings{' '}
              </h1>
              <p className="py-5 text-lg">
                This website revolves around three main ingredients — The Partcipants, The Database,
                and the Policy Insights. In short; the data is collected, processed, uploaded to
                Airtable, and then queried to the website. This process takes 2800 data units and
                converts them to easily acccesible content.
              </p>
              <p className="pb-5 text-xl">
                My role was to take this data and present it in a way that is parsable for the
                average user.
              </p>
              <ul className="list-disc pl-5">
                <li>Combine data into a cohesive experience</li>
                <li>Deliver an MVP that lays the foundation for a scalable system</li>
                <li>Make data easily accessible but still secure</li>
              </ul>
            </div>
          </div>
          <Image src={process} alt="Design process diagram" className="mt-10 rounded-xl" />
        </div>
      </section>

      <section className="z-0 bg-white px-5 py-16 text-gray-100 dark:text-gray-900">
        <div className="mx-auto max-w-3xl ">
          {/* PROTOTYPE */}
          <div className=" gap-5 ">
            <div className="">
              <p className="pb-3 text-sm uppercase tracking-wider">PROTOTYPE</p>
              <h1 className="text-4xl font-extrabold tracking-tight">The Database</h1>
              <p className="py-3">
                I began by building a filtering system that makes the full dataset accessible.
              </p>
            </div>
            <div className="py-5">
              <p className="text-sm font-bold uppercase tracking-wider">1.</p>
              <h2 className="py-5 text-xl">Filters & Results</h2>
              <p className="py-3 font-bold">
                What should appear when the page loads? All data? A curated subset?
              </p>
              <p>
                Based on user research, we decided the full dataset (~2,400 units) loads by default.
                Filters on the left narrow results, sorted by relevance. A key focus was clearly
                indicating which filters are active.
              </p>
            </div>
          </div>

          <Image
            src={topics}
            alt="Filter design iterations"
            className="my-10 rounded-xl"
            unoptimized
          />

          <p className="mx-auto max-w-xl py-5">
            We tested multiple visual signifiers. Ultimately, showing the number of results
            decreasing/increasing with each filter adjustment was sufficient feedback for users.
          </p>

          <div className="mx-auto max-w-5xl py-16">
            <div className="mx-auto flex flex-col gap-4 md:flex-row">
              <div className="basis-1/2">
                <Image
                  src={early2}
                  alt="Early theme-based prototype"
                  className="rounded-xl"
                  unoptimized
                />
              </div>
              <div className="basis-1/2">
                <Image src={v1} alt="Revised filter interface" className="rounded-xl" unoptimized />
              </div>
            </div>
            <figcaption className="py-3 text-center">
              Left: early exploration by Petey Routzahn. Right: updated filtering concept.
            </figcaption>
          </div>

          {/* DATA UNIT */}
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="">
              <p className="text-sm font-bold uppercase tracking-wider">2.</p>
              <h2 className="py-5 text-xl">Data Card & Expansion</h2>
              <p className="py-3 font-bold">What metadata should each card show?</p>
              <p>
                Users needed to track filter state and interpret richly tagged results. We made each
                card expandable to reveal relevant details based on context and user flow.
              </p>
            </div>
          </div>

          <Image
            src={expanded}
            alt="Expanded data card example"
            className="my-10 rounded-xl"
            unoptimized
          />

          <div className="mx-auto flex max-w-6xl flex-row gap-4 py-5">
            <Image
              src={proto}
              alt="Prototype: expanded data card"
              className="rounded-xl"
              unoptimized
            />
          </div>
          <figcaption className="text-center">Content card with expanded view</figcaption>

          <div className="">
            <p className="pb-3 text-sm uppercase tracking-wider">USERFLOW</p>
            <h1 className="text-4xl font-extrabold tracking-tight">Accounts</h1>
            <p className="py-3">
              I began by building a filtering system that makes the full dataset accessible.
            </p>
          </div>
        </div>
      </section>

      <section id="results and testing" className=" bg-black  ">
        <section className="mx-auto max-w-3xl items-center justify-start bg-black px-5 py-32  ">
          <div className="  py-8  ">
            <p className="py-5 "></p>
            <h1 className="text-4xl font-bold  leading-9 tracking-tight  text-gray-100 md:text-4xl md:leading-10">
              Result
            </h1>
            <p className="py-5 text-gray-100">
              The final prototype met our goal to uncover insights and translate concepts into
              features that address customer behaviours and motivations. Presented at the Senate..
              Press coverage by EPIC etc
            </p>
            <Image src={results} alt="Picture of the author" className="pt-12" unoptimized />
            <h1 className="pt-32 text-4xl font-bold leading-9 tracking-tight text-gray-100 md:text-4xl md:leading-10">
              What's Next
            </h1>
            <p className="py-5 text-gray-100">
              Continue to improve the platform's UX to meet the needs of user base and as more
              research is done support more data.
            </p>
          </div>
        </section>
      </section>
    </div>
  )
}
