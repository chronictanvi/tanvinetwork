'use client'

import Image from 'next/image'
import process from './process.png'
import early2 from './Browse by Theme.png'
import variants from '.app/projects/tps/variants.png'
import video from './video.gif'
import cover from './cover.png'

import v1 from './Database.png'
import proto from './Proto1.png'

import expanded from './5_Expand.gif'

import topics from './2_Topics.gif'

export default function PeopleSay() {
  return (
    <div>
      <section className="mx-auto max-w-6xl items-center justify-start px-5  ">
        <div className="mx-auto flex max-w-3xl flex-col gap-16 pb-10 md:flex-row ">
          <div className="flex basis-2/3 flex-col  pr-16 pt-8 md:space-y-5">
            <p className="pb-3 text-sm tracking-wider text-zinc-800  dark:text-zinc-400">
              OVERVIEW
            </p>{' '}
            <h1 className="pb-5 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:leading-9">
              The People Say is a web-based qualitative database designed to help policymakers hear
              the voices of the public when shaping policy.
            </h1>
            <div className="pb-5">
              <p className=" pb-2 text-xl font-light">
                The database features first-hand insights from a diverse group of older adults and
                caregivers, as well as feedback from subject-matter experts on policies affecting
                older adults.
              </p>
            </div>
          </div>

          <div className="my-10 flex flex-row gap-8 md:flex-col ">
            <div className=" ">
              <p className="pb-2 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">ROLE</p>
              <ul>
                <li>Design Lead </li>
              </ul>
            </div>
            <div className="  ">
              <p className="pb-2 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
                DURATION
              </p>
              <ul>
                <li>April 2024 – Present </li>
              </ul>
            </div>
            <div className="">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">SCOPE</p>
              <ul>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>User Interface Design</li>
              </ul>
            </div>
            <div className="">
              <p className=" pb-2 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">TOOLS</p>
              <ul>
                <li>Figma </li>
                <li>Lavarel </li>
                <li>Tailwind CSS </li>
              </ul>
            </div>
          </div>
        </div>
        <Image src={cover} alt="Picture of the author" />
        <section className="mx-auto max-w-3xl items-center justify-start">
          <div className=" pt-20">
            <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">CONTEXT</p>

            <p className="text-3xl font-bold">
              The American population is rapidly aging.<br></br> Our society needs to prepare for
              this demographic shift.
            </p>
          </div>
          <div className=" mb-10 flex flex-col gap-16 py-10 md:flex-row">
            <div className="basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
                PROBLEM
              </p>
              <p className="text-xl">
                Health and aging policies and systems are typically designed from the perspective of
                people who run systems, rather than those who use them.{' '}
              </p>
              <p className="pt-5">
                Even when advocates, policymakers, and providers do seek to learn from older adults,
                those engagements often have significant limitations.
              </p>
            </div>

            <div className=" basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800  dark:text-zinc-400">GOAL</p>
              <p className=" text-xl">
                Take data, highlight value of spoken word and qualitative data, make the experiences
                of older adults across America easily accessible to policy makers
              </p>
            </div>
          </div>
          Graph animated here?
        </section>
      </section>

      <section className="z-0  bg-white px-5 py-16 text-black">
        <div className="mx-auto max-w-3xl items-center justify-start">
          <div className=" flex max-w-4xl  flex-col gap-2 md:flex-row ">
            <div className=" basis-1/2 pb-12 ">
              <p className="pb-3 text-sm uppercase tracking-wider">The challenge</p>
              <h1 className="text-xl font-extrabold leading-9 tracking-tight  md:text-2xl md:leading-10">
                Inaccessible Data
              </h1>
              <p className="py-5 text-lg">
                Existing datasets and surveys do not adequately focus on priority populations or
                capture the lived experience of older adults, and their insights often remain siloed
                within commissioning organizations and agencies.
              </p>{' '}
            </div>

            <div className=" basis-1/2 pb-12 ">
              <p className="pb-3 text-sm uppercase tracking-wider">The Solution</p>
              <h1 className="text-xl font-extrabold leading-9 tracking-tight  md:text-2xl md:leading-10">
                A Comprehensive Database
              </h1>
              <p className="py-5 text-lg">
                We created a research pool that reflects projections of the demographics of America
                in 2040, with a special emphasis on participants who are lower income, of color, or
                residents of rural areas. We also spoke with caregivers, program staff, and
                subject-matter experts in the aging space.
              </p>{' '}
              <p className="pb-5"></p>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-5 md:flex-row">
              <div className="basis-2/3">
                {' '}
                <p className="pb-3 text-sm tracking-wider">FUNCTIONALITY</p>
                <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                  Content Offerings
                </h1>
                <p className="py-5 ">
                  This website revolves around three main ingredients — The Partcipants, The
                  Database, and the Policy Insights. In short; the data is collected, processed,
                  uploaded to Airtable, and then queried to the website. This process takes 2800
                  data units and converts them to easily acccesible content.
                </p>
              </div>
              <div className="basis-1/3">
                <Image src={video} alt="Picture of the author" className="" unoptimized />
              </div>
            </div>
            <Image src={process} alt="Picture of the author" className="rounded-xl	" />
          </div>
        </div>
      </section>
      <section className=" z-0  bg-white px-5 py-16 text-gray-900 dark:text-gray-100">
        <section className="  mx-auto max-w-3xl items-center justify-start   ">
          <section id="filters">
            <div className=" flex flex-col gap-5 md:flex-row">
              <div className=" basis-1/2">
                <p className="pb-3 text-sm uppercase tracking-wider">PROTOTYPE</p>
                <h1 className=" text-4xl font-extrabold leading-9 tracking-tight  md:text-4xl md:leading-10">
                  The Database
                </h1>
                <p className="py-3">
                  {' '}
                  I started laying the groundwork for the project by trying to make a filtering
                  system to make the database come to life.
                </p>
              </div>
              <div className=" basis-1/2 py-5">
                <p className=" text-sm font-bold uppercase tracking-wider">1.</p>
                <h2 className="py-5 text-xl ">Filters & Results</h2>
                <h4 className="py-3 text-lg font-bold">
                  <p> What shows on the page when you land?</p>{' '}
                  <p> Is it all the data points or should we start from a clean slate?</p>{' '}
                  <p> What about a curated selection of the top data points?</p>
                </h4>
                <p>
                  Through user research, I decided on the flow that when the Search the Database
                  page loads, all ~2,400 data units are visible. You can select items from the menus
                  on the left to narrow down the results. The results are sorted by relevance, in
                  descending order. The top results are data units that have the most matches with
                  the topics you’ve selected. This lead to the focus - how does a user keep track of
                  what filters are activated?{' '}
                </p>{' '}
              </div>
            </div>
            <div className="py-5 ">
              <div className="rounded-xl	">
                <Image
                  src={topics}
                  alt="Picture of the author"
                  className="rounded-xl 	"
                  unoptimized
                />
              </div>
            </div>
            <div className="mx-24 mx-auto max-w-xl gap-10 py-5 ">
              <p>
                {' '}
                I developed multiple iterations of what signifiers should be included to convey the
                filtering mechanism. Ultimately, the team decided that simply showing the number of
                search results decreasing / increasing on fiddling with the filters is enough of a
                hint for our users.
              </p>
            </div>
            <div className=" mx-auto max-w-5xl gap-10 py-16 ">
              <div className="">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 py-5  md:flex-row ">
                  <div className="basis-1/2 ">
                    <Image src={early2} alt="Poster" className=" rounded- xl" unoptimized />
                  </div>
                  <div className="basis-1/2 ">
                    <Image src={v1} alt="Poster" className="" unoptimized />
                  </div>
                </div>
                <figcaption className="py-3 text-center">
                  {' '}
                  Left: v0. early exploration by Petey Routzahn. <br></br>Right: v1. Revised concept
                  for filters{' '}
                </figcaption>
              </div>

              <div className=" ">
                {/* show process  of how it evolved?  */}

                {/* 
              add before and after here for this?  */}

                {/* <Image
                  src={demographics}
                  alt="Picture of the author"
                  className="py-5"
                  unoptimized
                /> */}
              </div>
            </div>
          </section>
          <section id="data unit">
            <div className=" flex flex-col gap-5 md:flex-row">
              <div className=" basis-1/2"></div>
              <div className=" basis-1/2">
                <p className=" text-sm font-bold uppercase tracking-wider">2.</p>
                <h2 className="py-5 text-xl ">Data Card & Expansion</h2>
                <h4 className="py-3 text-lg font-bold">
                  What information does the data card need? These were tagged with A LOT of meta
                  data.
                </h4>
                <p>
                  Through user research, I decided on the flow that when the Search the Database
                  page loads, all ~2,400 data units are visible. You can select items from the menus
                  on the left to narrow down the results. The results are sorted by relevance, in
                  descending order. The top results are data units that have the most matches with
                  the topics you’ve selected. This lead to the focus - how does a user keep track of
                  what filters are activated?{' '}
                </p>{' '}
              </div>
            </div>
            <Image
              src={expanded}
              alt="Picture of the author"
              className="rounded-xl py-10	"
              unoptimized
            />
          </section>
          <div className="">
            <div className="mx-auto flex max-w-6xl flex-row gap-4 py-5  ">
              <Image src={proto} alt="Poster" className=" rounded- xl" unoptimized />
            </div>
            <figcaption className="text-center"> Content card with its expanded view</figcaption>
            <Image src={variants} alt="Poster" className="pt-5" />
            <figcaption className="text-center"> Iterations </figcaption>
          </div>
        </section>
      </section>
      {/* <section>
        <div className="mx-auto max-w-3xl items-center justify-start">
          <div className="">
            <div className=" basis-1/2 pb-5 ">
              <p className="pb-3 text-sm tracking-wider">STRATEGY </p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Creating Data Stories
              </h1>
              <p className="py-5 pb-24">
                Compelling data stories require diversity; users are not interested in mere numbers
                and avoid redundant information.{' '}
                <span className="font-bold"> It's crucial to offer a range of content. </span>{' '}
                Presenting data as a simple statement like "they didn't listen much" may come across
                as confrontational and lacks the power to inspire further action. Our proposal is
                modular — Emphasize the narrative and exclude elements that don't captivate
                interest. It allows for a curated set of data stories created for specific users.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl py-10 ">
          <Image src={modular} alt="Picture of the author" className="py-5" />
          <figcaption className="text-center italic">
            An example of a user journey forming the overall story and walking the user through
            different kinds of components.
          </figcaption>
        </div>
        <div className="mx-auto max-w-3xl pt-12 ">
          <p className="pb-3 text-sm tracking-wider">PROCESS </p>
          <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
            Iteration
          </h1>
          <p className="py-5">
            {' '}
            While fleshing out the content cards from wireframes, some of the considerations I made
            were around complexity of visual information, layout and modularity.
          </p>
          <Image src={modular} alt="Picture of the author" className="py-5" />
          <figcaption className="text-center italic">
            Going from low fidelity wireframes to high fidelity content cards
          </figcaption>
        </div>
        <div className="mx-auto max-w-3xl justify-items-center pt-32">
          <div className="mx-auto flex flex-col gap-24 md:flex-row">
            <div className="basis-1/2">
              <h4 className="pb-5 text-2xl">Complexity</h4>
              <p>
                The individual components had to be simple but memorable. For example, this data
                story is packed with information — there is a subset of fans, minutes, song that is
                most listened to, how mainstream that song is, song that is least listened to, how
                mainstream that song is.{' '}
              </p>{' '}
              <p className="py-5">
                {' '}
                I distilled the content cards to one main takeaway, so the scrolling experience is
                not overwhelming.
              </p>
            </div>

            <div className="basis-1/2 ">
              <Image src={modular} alt="Picture of the author" className="" />
              <figcaption className="pt-5 text-center italic">
                This data card is too complex!
              </figcaption>
            </div>
          </div>

          {/* <h4 className="text-3xl "> Surfaces</h4> */}
      {/* <div className="mx-auto ">
          <div className="py-5 pb-12 ">
            <p>
              Celebrations are best when they come as a surpirse. I explored how
              data stories can be organically surfaced across the Spotify
              experience to create moments of delight.
            </p>
          </div>
          <Image src={process} alt="Picture of the author" />
          <figcaption className="text-center py-12 text-zinc-400 italic">
            {" "}
            Here I explore Custom UI as a form of collectible from initial
            concept to wireframes to final prototype{" "}
          </figcaption> 
    <div className="basis-1/2 ">
            {" "}
            <Image
              src={zoomie}
              alt="Picture of the author"
              unoptimized
              className=""
            />
          </div> 
        </div>
      <div className="mx-auto gap-24 py-12 ">
        <div className=" my-5">
          <h4 className="py-3 text-2xl">Variation</h4>
          <p>
            I explored concepts for simplified aesthetics for a Japanese audience, retaining
            only the essential information on each data card. I wanted to develop the cards in a
            manner that they could be flexible in how much space they take up.
          </p>
        </div>

        <div className=" pt-12">
          <Image src={modular} alt="Picture of the author" className="" />
          <figcaption className="pt-5 text-center italic">
            Different layout options for the same content
          </figcaption>
        </div>
      </div>

      <div className="mx-auto py-5 ">
        <h4 className="py-5 pt-12 text-2xl">Prototyping</h4>
        <p className="pb-5">
          To make things scalable, I first organized the data as variables connected them to the
          components so they auto-populate.{' '}
        </p>{' '}
        <p>
          {' '}
          The components were built with variables such as [artist name] and [song title] which
          pulled directly from the user’s database to make custom prototypes.
        </p>
      </div>

      <Image src={modular} alt="Picture of the author" className="pt-12" unoptimized />
      <figcaption className="pt-5 text-center italic">
        Framework for building custom content for each user with Figma variables
      </figcaption>
      <Image src={modular} alt="Picture of the author" className="pt-12" unoptimized />
      <figcaption className="pt-5 text-center italic">Application of modular system</figcaption>
    </div>
      </section > */}

      <section className=" bg-black  ">
        <section className="mx-auto max-w-3xl items-center justify-start bg-black px-5 py-32  ">
          <div className="  py-8  ">
            <p className="py-5 "></p>
            <h1 className="text-4xl font-bold  leading-9 tracking-tight  text-gray-100 md:text-4xl md:leading-10">
              Result
            </h1>
            <p className="py-5 text-gray-100">We're live! </p>

            {/* <Image src={modular} alt="Picture of the author" className="pt-12" unoptimized /> */}
            <h1 className="pt-32 text-4xl font-bold leading-9 tracking-tight text-gray-100 md:text-4xl md:leading-10">
              What's Next
            </h1>
            <p className="py-5 text-gray-100">
              {/* The final prototype was tested with 10 Japanese users and received over all positive
              feedback. It is now under development. */}
            </p>
          </div>
        </section>
      </section>
    </div>
  )
}
