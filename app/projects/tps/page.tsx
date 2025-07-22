'use client'

import Image from 'next/image'

import process from './process.png'
import early2 from './Browse by Theme.png'
import screen1 from './screen1.png'
import screen2 from './screen2.png'

import screen3 from './screen3.png'

import screen4 from './screen4.png'

import video from './video.gif'
import cover from './output.gif'
import module2 from './1.2.png'
import proto from './Proto1.png'
import expanded from './5_Expand.gif'
import airtable from './Airtable.png'
import module1 from './database explore.png'

import module3 from './mobile-de-2.png'
import module4 from './3.1.png'

import results from './UsersSpikes.png'
import topics from './2_Topics.gif'
import keywords from './1_Keywords.gif'

import research from './240619_ThePeopleSay_Graphics.png'
import pplogo from './PPLogo.png'

import TPSGraph from '@/components/TPSGraph'

export default function PeopleSay() {
  return (
    <div className="">
      <section className="sm:  z-0 bg-blue-100  px-3 px-5 py-20 text-black">
        {/* <Image
          src={cover}
          alt="Cover of The People Say project"
          className="border-1 rounded-2xl "
        /> */}

        <div className="  mx-auto max-w-6xl">
          <div className=""></div>

          <div className="flex flex-col py-5  md:flex-row">
            <div className=" basis-3/4 content-center pr-10">
              <div className="mx-auto max-w-6xl  py-5 pt-20 ">
                <div className=" prose flex flex-col ">
                  <p className="pb-3 text-sm tracking-wider text-zinc-800 ">OVERVIEW</p>

                  <h1 className="text-gray-00 text-3xl font-bold tracking-tight ">
                    The People Say is a web-based qualitative database designed to help policymakers
                    hear the voices of the public when shaping policy.
                  </h1>
                  <p className="mt-0 text-xl font-light ">
                    The database features first-hand insights from a diverse group of older adults
                    and caregivers, as well as feedback from subject-matter experts on policies
                    affecting older adults.
                  </p>
                </div>

                <div className="my-10 flex flex-row  gap-8 md:flex-col">
                  <div className="my-10 flex flex-col gap-8 md:flex-row">
                    <div className="basis-1/2">
                      <div className="pb-5">
                        <p className="pb-2 text-sm tracking-wider text-zinc-800 ">ROLE</p>
                        <ul className=" text-sm  text-zinc-800 ">
                          <li>Design Engineering Fellow</li>
                        </ul>
                        <p className="py-3 text-sm text-zinc-500">
                          See the{' '}
                          <a
                            className="underline"
                            href="https://thepeoplesay.org/about/about-our-team "
                          >
                            About Our Team
                          </a>{' '}
                          page for a complete list of project collaborators.
                        </p>
                      </div>
                      <div>
                        <p className="pb-2 text-sm tracking-wider text-zinc-800 ">DURATION</p>
                        <ul className=" text-sm  text-zinc-800 ">
                          Completed in 2024 with the{' '}
                          <a href="https://www.publicpolicylab.org/"> Public Policy Lab</a> for{' '}
                          <a className="underline" href="https://www.thescanfoundation.org/">
                            {' '}
                            The SCAN Foundation
                          </a>
                        </ul>
                      </div>
                    </div>

                    <div className="basis-1/2">
                      <div className="pb-5">
                        <p className="pb-3 text-sm tracking-wider text-zinc-800 ">SCOPE</p>
                        <ul className=" text-sm  text-zinc-800 ">
                          <li>User Research</li>
                          <li>User Interface Design</li>
                          <li>Product Development</li>
                        </ul>
                      </div>
                      <div>
                        <p className="pb-2 text-sm tracking-wider text-zinc-800 ">TOOLS</p>
                        <ul className="  text-sm  text-zinc-800">
                          <li>Figma</li>
                          <li>Laravel</li>
                          <li>Tailwind CSS</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/4 content-center ">
              <Image
                src={module3}
                alt="Filter design iterations"
                className="my-10 rounded-xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* graph section */}

      <section className="sm: bg-white px-3  text-black">
        <section className="mx-auto max-w-6xl py-10">
          <div className="py-10">
            <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">CONTEXT</p>
            <p
              className="text-3xl font-bold
 tracking-tight"
            >
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

      <section className="sm:  z-0 bg-blue-100  px-3 px-5 py-20 text-black">
        <div className="  mx-auto max-w-6xl">
          <div id="The Solution" className="  py-24">
            <div
              className="
   max-w-[65ch] content-center pb-12 "
            >
              <p
                className="
 pb-3 text-sm uppercase tracking-wider"
              >
                THE SOLUTION
              </p>
              <h1 className="text-xl font-extrabold tracking-tight md:text-2xl md:leading-10">
                A Platform for Experiences
              </h1>
              <p className="py-3 ">
                {' '}
                Visitors can search and filter the database, read curated insight pages with
                accompanying video playlists, view participant profiles, read about our research
                methodology, and more. The content of the qualitative research database was
                collected from 66 older adults from around the country, seven caregivers and staff,
                and 13 subject-matter experts from government agencies, policy think tanks, research
                organizations, and academia.
              </p>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <div className="">
                <Image
                  src={cover}
                  alt="Filter design iterations"
                  className="rounded-2xl"
                  unoptimized
                />
              </div>

              <div>
                <p className="text-sm">Homepage, www.thepeoplesay.org</p>
              </div>
            </div>

            <div className="py-12">
              <Image
                src={cover}
                alt="Airtable prototype of database"
                className=" border-gray mx-auto rounded-2xl border-2 md:max-w-6xl"
                unoptimized
              />
            </div>
          </div>
          {/* 
          <div id="The Challenge" className="   prose py-24">
            <div
              className="
 content-center "
            >
              <p
                className="
 pb-3 text-sm uppercase tracking-wider"
              >
                THE CHALLENGE
              </p>
              <h1 className="text-xl font-extrabold tracking-tight md:text-2xl md:leading-10">
                Inaccessible Data
              </h1>
              <p className="  py-3">
                The database includes 2,400 units of data, 100 detailed tags, and 100 hours of media
                — overwhelming for non-experts like policymakers.
              </p>
            </div>

            <div>
              <Image
                src={airtable}
                alt="Airtable prototype of database"
                className="rounded-xl pb-5"
              />
            </div>
          </div> */}
          <div>
            <div className=" flex max-w-6xl flex-col  md:flex-row">
              <div
                className="mx-auto max-w-[65ch] items-center
 text-center"
              >
                <p className="pb-3 text-sm uppercase tracking-wider">FUNCTIONALITY</p>
                <h1 className="text-xl font-extrabold  tracking-tight md:text-2xl md:leading-10">
                  Content Offerings{' '}
                </h1>
                <p className="py-3 ">
                  This website revolves around three main ingredients — The Partcipants, The
                  Database, and the Policy Insights. The data is collected, processed, uploaded to
                  Airtable, and then queried to the website.
                </p>
                <p className="pb-5 ">
                  My role was to take this data and present it in a way that is easily parsable:
                </p>
                {/* <ul className="list-disc pl-5">
                  <li>Combine data into a cohesive experience</li>
                  <li>Deliver an MVP that lays the foundation for a scalable system</li>
                  <li>Make data easily accessible but still secure</li>
                </ul> */}
              </div>
            </div>

            <div className="place-items-center">
              <Image
                src={process}
                alt="Design process diagram"
                className=" mt-10 rounded-xl md:max-w-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 1 */}

      <section className="sm: z-0 bg-white  px-3 px-5 py-16 text-gray-900 dark:text-gray-900">
        <div className="mx-auto max-w-6xl ">
          <div className=" gap-5 pb-12">
            <div className="flex flex-col py-5  md:flex-row">
              <div className="  max-w-[65ch] pr-10">
                <p className="pb-3 text-sm uppercase tracking-wider">PROTOTYPE / THE DATABASE </p>
                <h1 className="text-4xl font-extrabold tracking-tight">Accessing the data </h1>
                <p className="py-3">
                  I began by building a filtering system that makes the full dataset accessible.
                  Based on user research, we decided the full dataset (~2,400 units) loads by
                  default. Filters on the left narrow results, sorted by relevance. A key focus was
                  clearly indicating which filters are active.
                </p>
              </div>
            </div>
          </div>

          <div className="flex  flex-col gap-10">
            <div className="flex flex-col gap-5 md:flex-row">
              <div>
                <Image src={module1} alt="Filter design iterations" className="" unoptimized />
              </div>

              <div>
                <p className="text-sm">
                  This module on the homepage gives a easy way to discover what topics the data is
                  sorted by without overwhelming the user.
                </p>
              </div>
            </div>

            <div className="flex flex-col  gap-5 md:flex-row">
              <div>
                <Image src={module2} alt="Filter design iterations" className=" " unoptimized />
              </div>

              <div>
                <p className="text-sm">
                  On clicking a data point the content is arranged with meta data on the left and
                  main content from the interview on the right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}

      <section className="z-0 bg-white px-5 py-16 text-gray-900 dark:text-gray-900">
        <div className="mx-auto max-w-6xl ">
          <div className=" gap-5 pb-12">
            <div className="flex flex-col py-5  md:flex-row">
              <div className="  max-w-[65ch] pr-10">
                <p className="pb-3 text-sm uppercase tracking-wider">PROTOTYPE / THE DATABASE </p>
                <h1 className="text-4xl font-extrabold tracking-tight">Searching for Content </h1>
                <p className="py-3">
                  I began by building a filtering system that makes the full dataset accessible.
                  Based on user research, we decided the full dataset (~2,400 units) loads by
                  default. Filters on the left narrow results, sorted by relevance. A key focus was
                  clearly indicating which filters are active.
                </p>
              </div>
            </div>
          </div>

          <div className="flex  flex-col gap-10 ">
            <div className="flex flex-col  gap-5 md:flex-row">
              <div className="basis-3/4">
                <Image
                  src={topics}
                  alt="Filter design iterations"
                  className=" border-2"
                  unoptimized
                />
              </div>

              <div className="basis-1/4">
                <p className="text-sm">
                  I began by building a filtering system that makes the full dataset accessible.
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-5 md:flex-row">
              <div className="basis-3/4">
                <Image
                  src={expanded}
                  alt="Filter design iterations"
                  className="border-2"
                  unoptimized
                />
              </div>

              <div className="basis-1/4">
                <p className="text-sm">
                  Clicking on a tag on a data point leads to a filtered data base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="z-0 bg-white px-5 py-16 text-gray-900 dark:text-gray-900">
        <div className="mx-auto max-w-6xl ">
          <div className=" gap-5 pb-12">
            <div className="flex flex-col py-5  md:flex-row">
              <div className="  max-w-[65ch] pr-10">
                <p className="pb-3 text-sm uppercase tracking-wider">PROTOTYPE / THE DATABASE </p>
                <h1 className="text-4xl font-extrabold tracking-tight">Laying out the Content </h1>
                <p className="py-3">
                  The layout of the content cards themselves went under many revisions, even after
                  launch.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex  flex-col gap-10 
          "
          >
            <div className="flex flex-col  gap-5 md:flex-row">
              <div>
                <Image src={module4} alt="Filter design iterations" className=" " unoptimized />
              </div>

              <div>
                <p className="text-sm">
                  On clicking a data point the content is arranged with meta data on the left and
                  main content from the interview on the right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* full width section */}

      <section className="bg-[#E4E4E4] text-black">
        <div className="  mx-auto flex max-w-6xl flex-col   gap-12 px-24 py-32 md:flex-row">
          <div className="flex   flex-col gap-5">
            <div>
              <Image src={screen1} alt="Filter design iterations" className=" " unoptimized />
            </div>

            <div>
              <p className="pl-3 text-xs">
                On clicking a data point the content is arranged with meta data on the left and main
                content from the interview on the right.
              </p>
            </div>
          </div>
          <div className=" flex w-auto  flex-col gap-5">
            <div>
              <Image src={screen2} alt="Filter design iterations" className=" " unoptimized />
            </div>

            <div>
              <p className="pl-3 text-xs">
                On clicking a data point the content is arranged with meta data on the left and main
                content from the interview on the right.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <Image src={screen3} alt="Filter design iterations" className=" " unoptimized />
            </div>

            <div>
              <p className="pl-3 text-xs">
                On clicking a data point the content is arranged with meta data on the left and main
                content from the interview on the right.
              </p>
            </div>
          </div>
          <div className="flex   flex-col gap-5">
            <div>
              <Image src={screen3} alt="Filter design iterations" className=" " unoptimized />
            </div>

            <div>
              <p className="pl-3 text-xs">
                On clicking a data point the content is arranged with meta data on the left and main
                content from the interview on the right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* conclusion */}

      <section id="results and testing" className=" bg-black  ">
        <section className="mx-auto max-w-3xl items-center justify-start bg-black px-5 py-32  ">
          <div className="  py-8  ">
            <p className="py-5 "></p>
            <h1 className="text-4xl font-bold  leading-9 tracking-tight  text-gray-100 md:text-4xl md:leading-10">
              Result
            </h1>
            <p className="py-5 text-gray-100">
              <br></br>The People Say was launched at the US Capitol in July 2024.
            </p>
            {/* <Image src={results} alt="Picture of the author" className="pt-12" unoptimized /> */}
            {/* <h1 className="pt-32 text-4xl font-bold leading-9 tracking-tight text-gray-100 md:text-4xl md:leading-10">
              What's Next
            </h1>
            <p className="py-5 text-gray-100">
              Continue to improve the platform's UX to meet the needs of user base and as more
              research is done support more data.
            </p> */}
          </div>
        </section>
      </section>
    </div>
  )
}
