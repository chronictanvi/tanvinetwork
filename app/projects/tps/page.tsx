'use client'

import Image from 'next/image'

import process from './process.png'
import early2 from './Browse by Theme.png'
import screen1 from './screen1.png'
import screen2 from './screen2.png'
import sitemap from './SiteMap.png'
import screen3 from './screen3.png'
import screen4 from './screen3.png'
import explore from './explore.gif'
import before3 from './Before3.png'
import after4 from './After4.png'
import card1 from './motioncard.gif'
import before5 from './Before5.png'
import after6 from './After6.png'

import cover from './video-homepage-2.gif'

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
    <div>
      {/* Construction Notice */}
      {/* s */}

      {/* Hero Section */}
      <section className="z-0 bg-cyan-950 px-5 py-32 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col pb-12 md:flex-row">
            {/* Left Column: Overview Text */}
            <div className="basis-3/4 pr-10">
              <div className="max-w-[65ch] py-5 pt-20">
                <p className="pb-3 text-sm tracking-wider text-zinc-300">OVERVIEW</p>

                <h1 className="text-3xl font-bold tracking-tight text-gray-100">
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
                  <p className="pb-2 text-sm tracking-wider text-zinc-300">ROLE</p>
                  <ul className="text-sm text-zinc-200">
                    <li>Design Engineering Fellow</li>
                  </ul>
                  <p className="py-3 text-sm text-zinc-400">
                    See the{' '}
                    <a
                      className="underline"
                      href="https://thepeoplesay.org/about/about-our-team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About Our Team
                    </a>{' '}
                    page for a complete list of project collaborators.
                  </p>
                </div>

                <div>
                  <p className="pb-2 text-sm tracking-wider text-zinc-300">DURATION</p>
                  <ul className="text-sm text-zinc-200">
                    <li>
                      Completed in 2024 with the{' '}
                      <a
                        className="underline"
                        href="https://www.publicpolicylab.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Public Policy Lab
                      </a>{' '}
                      for{' '}
                      <a
                        className="underline"
                        href="https://www.thescanfoundation.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        The SCAN Foundation
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="pb-2 text-sm tracking-wider text-zinc-300">TOOLS</p>
                  <ul className="text-sm text-zinc-200">
                    <li>Figma</li>
                    <li>Laravel</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Image src={cover} alt="Cover of The People Say project" className="rounded-2xl" />
        </div>
      </section>

      {/* Core Challenge Section */}
      <section className="bg-white px-3 text-black">
        <div className="mx-auto max-w-6xl py-32">
          <div className="mx-auto items-center py-12 text-center">
            <p className="pb-3 text-sm tracking-wider text-zinc-800">THE CORE CHALLENGE</p>
            <div className="mx-auto max-w-[65ch]">
              <p className="text-3xl font-bold tracking-tight">
                How can we make data accessible for busy policymakers who need to understand lived
                experiences of older adults?
              </p>
              <div className="py-10">
                <blockquote className="border-l-4 border-teal-500 pl-4 text-lg italic">
                  Including things real constituents have said would make any policy proposal
                  stronger and more believable
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
            <p className="py-5 text-sm tracking-wider text-zinc-800">THE PROBLEM SPACE</p>

            <div className="flex flex-col gap-12 md:flex-row">
              <div className="basis-1/2">
                <h2 className="text-lg font-extrabold tracking-tight md:leading-10">
                  Demographics Challenge
                </h2>
                <p>
                  By 2030, adults over 65 will represent 20% of the US population—25% in rural areas
                  by 2040. Yet our health and aging policies are designed from the perspective of
                  system operators, not the people who actually use these systems.
                </p>
              </div>
              <div className="basis-1/2">
                <h2 className="text-lg font-extrabold tracking-tight md:leading-10">
                  Research Challenge
                </h2>
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

          {/* Uncomment if TPSGraph component is available */}
          {/* <div className="mt-10">
            <TPSGraph />
          </div> */}
        </div>
      </section>

      {/* Strategy Section */}
      <section className="z-0 bg-neutral-50 px-5 py-20 text-black">
        <div className="mx-auto max-w-3xl ">
          <div
            id="Creating a bridge between lived experience and policy decisions
"
            className="flex max-w-6xl flex-col py-12 "
          >
            <div className="max-w-[65ch] ">
              <p className="pb-3 text-sm uppercase tracking-wider">STRATEGY</p>

              <h2 className="text-2xl font-extrabold tracking-tight">
                Creating a bridge between lived experience and policy decisions
              </h2>

              <p className="py-5">
                Our approach centered on making 100+ hours of interview data accessible to busy
                policymakers who need compelling, authentic voices to strengthen their proposals. We
                designed for three core user journeys while ensuring the platform could scale as a
                model for participatory policy development.
              </p>
            </div>

            <div className="mt-10">
              <Image
                src={process}
                alt="Design process diagram"
                className="rounded-xl md:max-w-3xl"
              />
            </div>
          </div>
          <div id="framework" className="max-w-[65ch] py-12 ">
            <h2 className="py-2 text-2xl font-extrabold tracking-tight">
              Information Architecture: Designing for Discovery
            </h2>
            <p>
              Our site architecture balances comprehensive access to data with intuitive navigation
              for busy policymakers. The structure reflects our three-part framework while
              accommodating different research approaches and time constraints.
            </p>{' '}
          </div>
        </div>
        <Image src={sitemap} alt="Site map of The People Say project" />{' '}
        {/* <p className="text-center text-sm">
          Our site architecture balances comprehensive access to data with intuitive navigation for
          busy policymakers. The structure reflects our three-part framework while accommodating
          different research approaches and time constraints.
        </p> */}
      </section>

      {/* Design Decisions Section 1 */}
      <section className="z-0 bg-white px-3 px-5 py-16 text-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="gap-5 pb-12">
            <div className="flex flex-col py-5 md:flex-row">
              <div className="max-w-[65ch] pr-10">
                <p className="pb-3 text-sm uppercase tracking-wider">DESIGN DECISIONS</p>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Content Strategy: From Codes to Stories{' '}
                </h2>
                <p className="py-3">
                  Challenge: Academic research codes don't match how policymakers think about
                  problems. than academic frameworks.
                </p>
                <p>
                  Solution: I synthesized qualitative codes into intuitive themes that aligned with
                  policy areas and real-world applications. than academic frameworks.
                </p>
                <p className="py-3">
                  Impact: Users could find relevant insights using their own mental models rather
                  than academic frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="basis-3/4">
                <div className="bg-[#E4E4E4]">
                  <div className="items-center md:px-20 md:py-20">
                    <Image src={explore} alt="Data exploration interface" className="rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="basis-1/4">
                <p className="text-sm">
                  This module on the homepage gives an easy way to discover what topics the data is
                  sorted by without overwhelming the user.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <div className="basis-3/4">
                <Image src={module2} alt="Data point detail view" />
              </div>
              <div className="basis-1/4">
                <p className="text-sm">
                  The content cards are tagged with the topics and also organised by themes in the
                  insight section. This cross linkage encourages serendipitous discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Decisions Section 2 */}
      <section className="z-0 bg-[#E4E4E4] px-5 pt-16 text-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="gap-5 pb-12">
            <div className="flex flex-col py-5 md:flex-row">
              <div className="max-w-[65ch] pr-10">
                <p className="pb-3 text-sm uppercase tracking-wider">DESIGN DECISIONS II</p>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Navigation: Balancing Discovery & Depth
                </h2>
                <p className="py-3">
                  Challenge: 2,400+ data points could overwhelm users, but hiding content reduces
                  discoverability.{' '}
                </p>{' '}
                <p> Decision: Load the full dataset by default with progressive filtering. </p>{' '}
                <p className="py-3">
                  {' '}
                  Rationale: User research showed that seeing the scope of data increased trust,
                  while robust filtering prevented information overload.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-5 pb-32 md:flex-row">
          <div className="flex basis-1/2 flex-col gap-5">
            <div>
              <Image src={filter1} alt="Filter design - before iteration" />
            </div>
            <div>
              <p className="pl-3 text-xs">
                Before. The visual focus is on the filters, as they take up more real estate. the
                user has to first know what themes they want to explore before viewing the juicy
                data.
              </p>
            </div>
          </div>

          <div className="flex basis-1/2 flex-col gap-5">
            <div>
              <Image src={filter2} alt="Filter design - after iteration" />
            </div>
            <div>
              <p className="pl-3 text-xs">
                After. Filters are more integrated in the design and take up less visual space,
                allowing for more of the dataset to be visible, shifting the focus on the data
                itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Decisions Section 3 */}
      <section className="z-0 bg-white px-5 py-16 text-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="gap-5 pb-12">
            <div className="flex flex-col py-5 md:flex-row">
              <div className="max-w-[65ch] pr-10">
                <p className="pb-3 text-sm uppercase tracking-wider">DESIGN DECISIONS III</p>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Content Cards: Optimizing for Engagement
                </h2>
                <div className="py-3">
                  <p>
                    Testing showed that information overload decreased engagement. A simpler card
                    with clear entry points drove 2× more click-throughs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-3  md:flex-row">
          <div className="flex  basis-1/2 flex-col gap-2">
            <div>
              <Image src={before5} alt="Filter design - before iteration" />
            </div>
            <div>
              <p className="pl-3 text-center">Before.</p>
            </div>
          </div>

          <div className="flex basis-1/2 flex-col gap-5">
            <div>
              <Image src={after6} alt="Filter design - after iteration" />
            </div>
            <div>
              <p className="pl-3 text-center ">After.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Random Animation Section */}
      <section className="bg-[#DFDFDF] text-black">
        <div className="flex flex-col  gap-12 md:mx-auto md:flex-row  md:px-24">
          <Image src={card1} alt="Filter design - after iteration" />
        </div>
      </section>

      {/* Design Iterations Section */}
      {/* <section className="bg-[#E4E4E4] text-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-24 py-32 md:flex-row">
          <div className="flex flex-col gap-5">
            <div>
              <Image src={screen1} alt="Design iteration - screen 1" />
            </div>
            <div>
              <p className="pl-3 text-xs">-</p>
            </div>
          </div>

          <div className="flex w-auto flex-col gap-5">
            <div>
              <Image src={screen2} alt="Design iteration - screen 2" />
            </div>
            <div>
              <p className="pl-3 text-xs">-</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <Image src={screen3} alt="Design iteration - screen 3" />
            </div>
            <div>
              <p className="pl-3 text-xs">-</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <Image src={screen4} alt="Design iteration - screen 4" />
            </div>
            <div>
              <p className="pl-3 text-xs">-</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Results Section */}
      <section id="results-and-testing" className="bg-black">
        <div className="mx-auto max-w-3xl items-center justify-start bg-black px-5 py-32">
          <div className="py-8">
            <h2 className="pb-3 text-4xl font-bold leading-9 tracking-tight text-gray-100 md:text-4xl md:leading-10">
              Result
            </h2>

            <p className="mb-6 text-lg text-gray-100">
            The People Say has been used as a data source to inform <a href="https://thepeoplesay.org/storage/media/The-Growing-Cost-of-Inaction-A-Practical-Framework-for-Addressing--the-Long-Term-Care-Financing-Challenge.pdf">reports </a> and policy proposals and decisions.


            <ul className="mb-8 list-inside list-disc space-y-3 text-base text-gray-100 md:text-lg">
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

            <blockquote className="border-l-4 border-teal-500 pl-4 text-lg italic text-gray-100">
              "We believe this platform can help systems leaders hear what matters most to older
              adults—and build systems that reflect those values."
              <br />
              <span className="mt-2 block font-medium not-italic text-teal-700">
                — The SCAN Foundation
              </span>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}
