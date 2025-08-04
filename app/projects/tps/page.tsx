'use client'

import Image from 'next/image'

import process from './process.png'
import early2 from './Browse by Theme.png'
import screen1 from './screen1.png'
import screen2 from './screen2.png'
import sitemap from './SiteMap.png'
import screen3 from './screen3.png'

import screen4 from './screen4.png'

import explore from './explore.gif'
import cover from './output.gif'
import cover2 from './cover1.png'
import module2 from './1.2.png'
import proto from './Proto1.png'
import expanded from './5_Expand.gif'
import airtable from './Airtable.png'
import module1 from './database explore.png'

import module3 from './mobile-de-2.png'
import module4 from './3.1.png'

import filter1 from './datafilter-v1.png'
import filter2 from './datafilter-v3.png'

import results from './UsersSpikes.png'
import topics from './2_Topics.gif'
import keywords from './1_Keywords.gif'

import research from './240619_ThePeopleSay_Graphics.png'
import pplogo from './PPLogo.png'

import TPSGraph from '@/components/TPSGraph'

export default function PeopleSay() {
  return (
    <div className="">
      <section className="z-0 items-center bg-blue-300 p-2 text-center text-black">
        <h1> ⚒️ This page is under construction. ⚒️ </h1>
      </section>

      <section className="z-0 bg-blue-50 px-5 py-32 text-black">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col pb-12 md:flex-row">
            {/* Left Column: Overview Text */}
            <div className="basis-3/4 pr-10">
              <div className="max-w-[65ch] py-5 pt-20">
                <p className="pb-3 text-sm tracking-wider text-zinc-800">OVERVIEW</p>

                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  The People Say is a web-based qualitative database designed to help policymakers
                  hear the voices of the public when shaping policy.
                </h1>

                <p className="mt-5 text-xl font-light">
                  The database features first-hand insights from a diverse group of older adults and
                  caregivers, as well as feedback from subject-matter experts on policies affecting
                  older adults.
                </p>
              </div>
            </div>

            {/* Right Column: Role, Duration, Scope, Tools */}
            <div className="basis-1/4">
              <div className="my-12 flex flex-col gap-5">
                <div>
                  <p className="pb-2 text-sm tracking-wider text-zinc-800">ROLE</p>
                  <ul className="text-sm text-zinc-800">
                    <li>Design Engineering Fellow</li>
                  </ul>
                  <p className="py-3 text-sm text-zinc-500">
                    See the{' '}
                    <a className="underline" href="https://thepeoplesay.org/about/about-our-team">
                      About Our Team
                    </a>{' '}
                    page for a complete list of project collaborators.
                  </p>
                </div>

                <div>
                  <p className="pb-2 text-sm tracking-wider text-zinc-800">DURATION</p>
                  <ul className="text-sm text-zinc-800">
                    <li>
                      Completed in 2024 with the{' '}
                      <a className="underline" href="https://www.publicpolicylab.org/">
                        Public Policy Lab
                      </a>{' '}
                      for{' '}
                      <a className="underline" href="https://www.thescanfoundation.org/">
                        The SCAN Foundation
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div>
                  <p className="pb-2 text-sm tracking-wider text-zinc-800">SCOPE</p>
                  <ul className="text-sm text-zinc-800">
                    <li>User Research</li>
                    <li>User Interface Design</li>
                    <li>Product Development</li>
                  </ul>
                </div> */}

                <div>
                  <p className="pb-2 text-sm tracking-wider text-zinc-800">TOOLS</p>
                  <ul className="text-sm text-zinc-800">
                    <li>Figma</li>
                    <li>Laravel</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Image src={module4} alt="Cover of The People Say project" className=" " />
        </div>
      </section>

      {/* graph section */}

      <section className="sm: bg-white px-3  text-black">
        <section className="mx-auto max-w-6xl py-32">
          <div
            className=" mx-auto items-center  
 py-12 text-center "
          >
            <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
              THE CORE CHALLENGE
            </p>
            <div className="mx-auto max-w-[65ch]">
              <p
                className=" text-3xl font-bold 
 tracking-tight"
              >
                How can we make data accessible for busy policymakers who need to understand lived
                experiences of older adults?
              </p>
              <div className="py-10 ">
                <blockquote className="border-l-4 border-teal-500 pl-4 text-lg italic">
                  “Including things real constituents have said would make any policy proposal
                  stronger and more believable"
                  <br />
                  <span className="mt-2 block text-base font-medium not-italic text-teal-700">
                    — Marc A. Cohen, PhD,
                  </span>
                  <span className="mt-2 block text-base font-medium not-italic text-teal-600">
                    Co-Director LeadingAge LTSS Center, UMASS Boston
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="my-10">
            <p className=" py-5  text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
              THE PROBLEM SPACE
            </p>

            <div className=" flex flex-row gap-12  ">
              <div className="basis-1/2">
                <h1 className="text-lg font-extrabold tracking-tight  md:leading-10">
                  Demographics Challenge
                </h1>

                <p>
                  By 2030, adults over 65 will represent 20% of the US population—25% in rural areas
                  by 2040. Yet our health and aging policies are designed from the perspective of
                  system operators, not the people who actually use these systems.
                </p>
              </div>
              <div className="basis-1/2">
                <h1 className="text-lg font-extrabold tracking-tight md:leading-10">
                  Research Challenge
                </h1>
                <p>
                  Even when policymakers try to include older adult voices, engagement is limited
                  and insights remain buried in academic reports.
                </p>
                <p className="pt-5">
                  The SCAN Foundation had commissioned 100+ in-depth interviews with older adults,
                  caregivers, and frontline workers—but the rich insights were trapped in
                  transcripts and codebooks that policymakers couldn't easily access or explore.
                </p>
              </div>
            </div>
          </div>

          <div className="  ">{/* <TPSGraph /> */}</div>
        </section>
      </section>

      <section className="sm:  z-0 bg-blue-100  px-3 px-5 py-20 text-black">
        <div className="  mx-auto max-w-6xl">
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
              <div className=" max-w-[65ch]">
                <p className="pb-3 text-sm uppercase tracking-wider"> STRATEGY</p>

                <p className="pb-5 ">
                  We categorized the site into three parts: the people, the data and the analysis.{' '}
                  <br></br>
                </p>
              </div>
            </div>

            <div className="">
              <Image
                src={process}
                alt="Design process diagram"
                className=" mt-10 rounded-xl md:max-w-3xl"
              />
            </div>

            <Image src={sitemap} alt="Cover of The People Say project" className=" " />
          </div>
        </div>
      </section>

      {/* section 1 */}

      <section className="sm: z-0 bg-white  px-3 px-5 py-16 text-gray-900 dark:text-gray-900">
        <div className="mx-auto max-w-6xl ">
          <div className=" gap-5 pb-12">
            <div className="flex flex-col py-5  md:flex-row">
              <div className="  max-w-[65ch] pr-10">
                <p className="pb-3 text-sm uppercase tracking-wider">DESIGN DECISIONS </p>
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
              <div className="basis-3/4">
                <div className=" bg-[#E4E4E4]">
                  <div className="items-center md:px-20 md:py-20">
                    <Image src={explore} alt="Filter design iterations" className="rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="basis-1/4">
                <p className="text-sm">
                  This module on the homepage gives a easy way to discover what topics the data is
                  sorted by without overwhelming the user.
                </p>
              </div>
            </div>

            <div className="flex flex-col  gap-5 md:flex-row">
              <div className="basis-3/4">
                <Image src={module2} alt="Filter design iterations" className=" " unoptimized />
              </div>

              <div className="basis-1/4">
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

      <section className="z-0 bg-[#E4E4E4] px-5 pt-16 text-gray-900 dark:text-gray-900">
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

          {/* <div className="flex  flex-col gap-10 ">
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
          </div> */}
        </div>
        e
        <div className="  mx-auto flex max-w-6xl flex-col gap-5  pb-32 md:flex-row">
          <div className="flex  basis-1/2 flex-col gap-5">
            <div>
              <Image src={filter1} alt="Filter design iterations" className=" " unoptimized />
            </div>

            <div>
              <p className="pl-3 text-xs">Before.</p>
            </div>
          </div>

          <div className=" flex  basis-1/2 flex-col gap-5">
            <div>
              <Image src={filter2} alt="Filter design iterations" className=" " unoptimized />
            </div>

            <div>
              <p className="pl-3 text-xs">
                After. Filters are more integrated in the design and take up less visual space.
              </p>
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
                  <h4> Original version:</h4>
                  <p>displayed long quotes with ambiguous filtering</p>
                </p>{' '}
                <p>
                  <h4> Revised version:</h4>
                  <ul className="list-disc">
                    <li> Introduced concise, scannable quote excerpts</li>
                    <li> Moved theme and population tags to the top for quick relevance</li>
                    <li> Added one-click access to full quote context and transcript location </li>
                    <li> Improved visual hierarchy to emphasize voice over metadata </li>
                  </ul>
                </p>{' '}
                <p>
                  <br></br>
                  <h4 className=""> Why:</h4>
                  Testing showed that information overload decreased engagement. A simpler card with
                  clear entry points drove 2× more click-throughs.
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
              <p className="pl-3 text-xs">Before</p>
            </div>
          </div>
          <div className=" flex w-auto  flex-col gap-5">
            <div>
              <Image src={screen2} alt="Filter design iterations" className=" " unoptimized />
            </div>

            <div>
              <p className="pl-3 text-xs">After</p>
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
            <h1 className="pb-3 text-4xl  font-bold leading-9 tracking-tight  text-gray-100 md:text-4xl md:leading-10">
              Result
            </h1>

            <p className="mb-6 text-lg ">
              <strong>The People Say</strong> is now featured as a core tool in The SCAN
              Foundation’s advocacy and funding efforts. It has:
            </p>
            <ul className="mb-8 list-inside list-disc space-y-3 text-base  md:text-lg">
              <li>
                Informed policy briefs used at the <strong>state and federal level</strong>
              </li>
              <li>
                Been featured in public presentations to{' '}
                <strong>health systems leaders and funders</strong>
              </li>
              <li>
                Supported <strong>journalists, aging researchers, and nonprofit advocates</strong>{' '}
                in centering lived experience in their work
              </li>
              <li>
                Helped shape a broader narrative around <strong>equity in aging policy</strong>
              </li>
            </ul>

            <blockquote className="border-l-4 border-teal-500 pl-4 text-lg italic ">
              “We believe this platform can help systems leaders hear what matters most to older
              adults—and build systems that reflect those values.”
              <br />
              <span className="mt-2 block font-medium not-italic text-teal-700">
                — The SCAN Foundation
              </span>
            </blockquote>

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
