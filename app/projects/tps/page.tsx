'use client'

import Image from 'next/image'

import modular from './Rec.png'

export default function PeopleSay() {
  return (
    <>
      <section className="mx-auto max-w-6xl items-center justify-start px-5 py-24  ">
        <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-16 px-5 md:flex-row ">
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

          <div className="my-10 flex flex-row md:flex-col">
            {/* <div className="basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">SCOPE</p>
              <ul>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>User Interface Design</li>
              </ul>
            </div> */}
            <div className="basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">TOOLS</p>
              <ul>
                <li>Figma </li>
                <li>next.js</li>
              </ul>
            </div>
            <div className="basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">ROLE</p>
              <ul>
                <li>Design Lead </li>
              </ul>
            </div>
            <div className="basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
                DURATION
              </p>
              <ul>
                <li>APRIL 2024 – PRESENT </li>
              </ul>
            </div>
            {/* <div className="basis-1/2">
            <p className="text-sm pb-3 text-zinc-400 tracking-wider">
              METHODOLOGY
            </p>
            <p> Design Systems </p>
          </div> */}
          </div>
        </div>

        <Image src={modular} alt="Picture of the author" />
        <div className=" my-10 flex flex-col gap-16 py-5 md:flex-row">
          <div className="basis-1/2">
            <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">CONTEXT</p>
            <p className="text-xl">
              The American population is rapidly aging. Our society needs to prepare for this
              demographic shift.
            </p>
          </div>

          <div className=" basis-1/2">
            <p className="pb-3 text-sm tracking-wider text-zinc-800  dark:text-zinc-400">GOAL</p>
            <p className=" text-xl">
              Developing a qualitative data base cataloging the experiences of older adults across
              America, to inform how policy makers frame the National Plan on Aging.
            </p>
          </div>
          {/* <div className="basis-1/2">
            <p className="text-zinc-400  py-3">TEAM</p>
            <p>
              UX Researchers, Content Writers, Localization Specialists for
              Japanese, Prototypers, Content Strategist and Product Managers and
              one other Lead Designer.
            </p>
          </div> */}
        </div>
      </section>
      <section className="z-0  bg-white px-5 py-16 text-black">
        <div className="mx-auto py-5 "></div>
        <div className="mx-auto max-w-3xl items-center justify-start">
          {/* <div className="basis-1/2">
            <p className=" py-3  ">APPROACH</p>
            <p className="text-2xl ">
              Uncover insights and translate concepts into features that address
              customer behaviours and motivations.
            </p>
          </div>
          <Image
            src={keyscreens}
            alt="Picture of the author"
            className="pt-5"
          /> */}
          <div className=" max-w-4xl gap-2 ">
            <div className=" basis-1/2 pb-12 ">
              <p className="pb-3 text-sm uppercase tracking-wider">The challenge</p>
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight  md:text-4xl md:leading-10">
                A Comprehensive Database
              </h1>
              <p className="py-5 text-xl">
                Take data, highlight value of spoken word and qualitative data, make it easily
                accessible to policy makers
              </p>{' '}
              <p className="pb-5">
                We created a research pool that reflects projections of the demographics of America
                in 2040, with a special emphasis on participants who are lower income, of color, or
                residents of rural areas. We also spoke with caregivers, program staff, and
                subject-matter experts in the aging space.
              </p>
              <Image src={modular} alt="Picture of the author" className="py-5" />
            </div>

            <div className=" basis-1/2">
              <p className="pb-3 text-sm tracking-wider">FOUNDATIONAL RESEARCH</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Offerings for Fans
              </h1>
              <p className="py-5 ">
                We conducted research amongst fervent artists, independent devotees, everyday music
                lovers and active members of fan communities — to understand how fans navigate
                Japan’s unique music scene. We identified fandom as the{' '}
                <span className="font-bold"> single largest opportunity for premium growth </span>{' '}
                for the following reasons:
              </p>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col  gap-10  md:flex-row">
              <div className="basis-1/2 py-5">
                <h4 className="py-3 text-2xl"> Widespread demand</h4>
                <p>
                  ● Fandom isn’t a niche interest - it’s deeply ingrained in people’s everyday
                  lives.
                </p>{' '}
                <p className="py-5">
                  ● 62% of Japanese consumers with an audio interest are regularly engaging in fan
                  activities.
                </p>
              </div>

              <div className="basis-1/2 py-5 ">
                <h4 className="py-3 text-2xl">High willingness to pay</h4>
                <p>
                  ● Fans’ willingness to pay (WTP) to strengthen their connection with artists is
                  remarkably high.
                </p>{' '}
                <p className="py-5">
                  ● Around 90% of participants in our study had one or two artists they passionately
                  support and invest in.
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-black  ">
        <section className="mx-auto max-w-3xl items-center justify-start bg-black px-5 py-32  text-gray-100  ">
          <div className="  py-8  ">
            <p className="pb-3 text-sm  tracking-wider ">FURTHER UNDERSTANDING</p>
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight  md:text-4xl md:leading-10">
              User Insights
            </h1>
            <p className="py-5 ">
              We spoke to a variety of people to understand how fans navigate discovery of new
              content and reminsce on their listening history. and what can be improved. We focused
              on data stories as presented in Wrapped — Spotify's annual event for revealing how
              fan's are interacting with the artists.
            </p>
          </div>
          <div className="mx-auto flex max-w-4xl flex-col gap-10 py-16 md:flex-row">
            <div className="basis-1/2">
              <h4 className="py-3 text-lg font-bold">
                {' '}
                “It would be good to put this in context. Is 40 listens in a year a lot or not?”
              </h4>
              <p>
                Listeners find data stories about things they already know (such as their Top
                Artist) less interesting. They are interested in diving deeper and ‘getting to know
                themselves better’.
              </p>
            </div>

            <div className="basis-1/2 ">
              <Image src={modular} alt="Picture of the author" className="" unoptimized />
            </div>
          </div>
          <div className="mx-auto flex max-w-4xl flex-col gap-10  py-16 md:flex-row">
            <div className="basis-1/2">
              <h4 className="py-3 text-lg font-bold">
                “Knowing that other people listen to music in another way than me would influence
                what music I choose to listen to”
              </h4>
              <p>
                Listeners would like to be reminded about what songs they listen to — or might have
                forgotten about. Recommendations also carry a social component — listeners are
                curious about songs that other fans are listening to.
              </p>
            </div>

            <div className="basis-1/2 ">
              <Image src={modular} alt="Picture of the author" className="" />
            </div>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col gap-10 py-16 md:flex-row">
            <div className="basis-1/2">
              <h4 className="py-3 text-lg font-bold">
                {' '}
                “Wrapped is too infrequent. How does my listening change over a day? How does it
                change over seasons? ”
              </h4>
              <p>
                Listeners want more — There is a strong desire to access their ‘fan narrative’ more
                frequently.
              </p>
            </div>

            <div className="basis-1/2 ">
              <Image src={modular} alt="Picture of the author" unoptimized />
            </div>
          </div>
        </section>
      </section>
      <section className="bg-white  px-5 py-32 text-black">
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
        <Image src={modular} alt="Picture of the author" className="" />
        <div className="mx-auto max-w-3xl items-center justify-start">
          <p className="pb-3 pt-12 text-sm tracking-wider">SYNTHESIS</p>
          <h1 className="pb-5 text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10 ">
            Content for Fandom
          </h1>
          <p>
            Developing special content for Japanese fans required us to understand the data we had
            access to and what would be feasible to curate. We categorised the curation
            opportunities as the following:
          </p>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col gap-5 pt-5 md:flex-row">
          <div className="basis-1/2">
            <h3 className="  pt-5  text-xl">Infrastructure </h3>
            <p className=" pt-2">
              Collect fan memories in one place, tapping into sentimentality and memorabilia.
            </p>
          </div>

          <div className="basis-1/2 ">
            <h3 className="  pt-5  text-xl ">Platform Content</h3>
            <p className=" pt-2">
              Launch an extended version of listening stats that is highly localized and meet local
              fandom needs
            </p>
          </div>

          <div className="basis-1/2">
            <h3 className=" pt-5   text-xl">Partnership Integration</h3>
            <p className=" pt-2">
              By providing exclusive content through partnerships, we can provide value that
              stretches beyond our platform.
            </p>
          </div>
        </div>{' '}
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
          </figcaption> */}
          {/* <div className="basis-1/2 ">
            {" "}
            <Image
              src={zoomie}
              alt="Picture of the author"
              unoptimized
              className=""
            />
          </div> 
        </div>*/}
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
      </section>
      <section className=" bg-black  ">
        <section className="mx-auto max-w-3xl items-center justify-start bg-black px-5 py-32  ">
          <div className="  py-8  ">
            <p className="py-5 "></p>
            <h1 className="text-4xl font-bold  leading-9 tracking-tight  text-gray-100 md:text-4xl md:leading-10">
              Result
            </h1>
            <p className="py-5 text-gray-100">
              The final prototype met our goal to uncover insights and translate concepts into
              features that address customer behaviours and motivations.
            </p>
            <Image src={modular} alt="Picture of the author" className="pt-12" unoptimized />
            <h1 className="pt-32 text-4xl font-bold leading-9 tracking-tight text-gray-100 md:text-4xl md:leading-10">
              What's Next
            </h1>
            <p className="py-5 text-gray-100">
              The final prototype was tested with 10 Japanese users and received over all positive
              feedback. It is now under development.
            </p>
          </div>
        </section>
      </section>
      <h1 className="bg-black py-5  pb-12 text-center text-5xl font-bold leading-9 tracking-tight text-red-100 dark:text-red-400 md:leading-10">
        ありがとう!
      </h1>
    </>
  )
}
