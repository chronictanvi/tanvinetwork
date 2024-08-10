import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import defaultimg from './ocean.jpeg'

export const metadata = genPageMetadata({ title: 'Comrade' })

export default function Comrade() {
  return (
    <div className="px-5">
      <div className="max-w-8xl my-20 flex flex-col justify-start gap-2 pb-2 align-top md:mt-2 md:flex-row md:px-20">
        <div className="flex basis-1/2 flex-col py-5 pt-8 md:mr-48 md:space-y-5">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:leading-9">
            Comrade tries to offer a material way to express the topography of a conversation.
          </h1>
          <div className="flex-auto">
            <p className="py-5 text-xl font-light">
              It holds information about the spatial layout of a dialogue. It attempts to be a
              canvas for your train of thought, providing 2D visual presence for deviations in a
              conversation.
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <Image src={defaultimg} alt="Picture of the author" className="w-full" />
        </div>
      </div>

      <section className="mx-auto max-w-5xl items-center justify-start pb-16">
        <div className="my-10 flex flex-col gap-16 md:flex-row">
          <div className="basis-1/2">
            <p className="py-3 text-zinc-400">SCOPE</p>
            <p>User Research</p>
            <p>Art Direction</p>
            <p>User Interface Design</p>
          </div>
          <div className="basis-1/2">
            <p className="py-3 text-zinc-400">TOOLS</p>
            <p>Figma next.js Firebase git</p>
          </div>
          <div className="basis-1/2">
            <p className="py-3 text-zinc-400">KEY METHODOLOGY</p>
            <p>Mixed-methods research</p>
          </div>
        </div>
        <div className="max-w-9xl mx-auto flex flex-col gap-2 pb-2 md:flex-row">
          <div className="basis-1/2">
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
          <div className="basis-1/2">
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
        </div>
        <div className="max-w-9xl mx-auto flex flex-col gap-2 md:flex-row">
          <div className="basis-1/2">
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
          <div className="basis-1/2">
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
        </div>
        <div className="max-w-5xl">
          <div className="pb-8">
            <p className="py-5 text-zinc-400">CONTEXT</p>
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
              Conversations are a factor of the language that facilitates them —
            </h1>
            <p className="py-5">
              In digital conversations, there is an added medium — the visual interface. Most
              digital interfaces and platforms visualize ‘a stream of thought’ or conversation as a
              straight line.
            </p>
            <p className="font-body py-5">
              One thought follows another — resulting in a stack that's navigated top to bottom.
              ‘Replies’ on messaging platforms like (iMessage, Signal, Telegram, WhatsApp, WeChat,
              KakaoTalk) are presented linearly.
            </p>
            <p className="font-body py-5">
              In messaging, navigating through text is tedious — you either ‘scroll’ or search for
              keywords - hoping to be transported to the right spot. It is hard to get a sense of
              when a topic shift occurs unless you read through everything. Usually, you start from
              the top and keep scrolling to the bottom. It’s one-dimensional.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white  py-16 text-black">
        <div className="mx-auto max-w-5xl items-center justify-start">
          <div className="max-w-5xl gap-2">
            <div className="basis-1/2 pb-8">
              <p className="py-5">INSPIRATION</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-5xl md:leading-10">
                The performance of socialness on the internet is nuanced and pools intent from
                multiple directions.
              </h1>
              <p className="py-5">
                This internal context shapes the conversation and its outcomes. And so, a
                conversation meanders — the trace of path it takes is probably different for both
                the people.
              </p>
              <p className="py-5">
                Maybe they thought about some other things, had thoughts that intruded but didn’t
                quite make their way to being expressed. How does one start a conversation? How do
                people respond when they start?
              </p>
            </div>
            <div>
              <p className="py-5">PROTOTYPING</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                The whiteboard version explores the possibility of rearranging the squares—
              </h1>
              <p className="py-5">
                Forming a matrix of content that is arranged by a logic that the participants
                collectively decide on by labeling direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl items-center justify-start ">
        <div className="py-8">
          <p className="py-5 text-zinc-400">DEEPER INSIGHTS</p>
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
            PROCESS
          </h1>
          <p className="py-5"></p>
        </div>
        <div className="flex flex-col gap-10 py-16 md:flex-row">
          <div className="basis-1/2">
            <h4 className="py-3 text-lg font-bold">BACKEND AND TOOLS</h4>
            <p>
              The current version is written in VSCode and powered by Vite.js, a frontend tool that
              sets up a development environment for frameworks like React, with a dev server by
              Vercel. It uses HTML, CSS, React, supported by Typescript. The CSS is generated by
              Tailwind classNames. Design prototypes of the project are constructed in Figma.
            </p>
          </div>
          <div className="basis-1/2">
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-10 py-16 md:flex-row">
          <div className="basis-1/2">
            <h4 className="py-3 text-lg font-bold">VERSION 1</h4>
            <p>
              Designing a quick prototype for testing digital affordances. Mapping user needs from
              research to implementation.
            </p>
          </div>
          <div className="basis-1/2">
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-10 py-16 md:flex-row">
          <div className="basis-1/2">
            <h4 className="py-3 text-lg font-bold">VERSION 2</h4>
            <p>
              The final version of Comrade consists of a front-end website with a realtime database
              that allows multiple people to use the site simultaneously.
            </p>
          </div>
          <div className="basis-1/2">
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
        </div>
      </section>

      <section className="bg-white pt-16 text-black">
        <div className="mx-auto max-w-5xl items-center justify-start">
          <div className="flex max-w-5xl flex-col gap-2 md:flex-row">
            <div className="basis-1/2 pb-8">
              <p className="py-5">Synthesis</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Synthesis
              </h1>
              <p className="py-5">
                In this playground, each reply exists as a distinct artifact that can be tinkered
                with. As thoughts occupy space and time, the grid of artifacts a becomes a
                structuring mechanism.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-5 md:flex-row">
          <div className="basis-1/2">
            <h3 className="pt-5 text-xl text-zinc-400">Infrastructure</h3>
            <p className="pt-2">
              You can think of it as a map — maps are semiotically useful things, especially when we
              start from different contexts — they behave as a framework that facilitates getting
              people to make bridges: and agree on goals, means, language .. in general useful for
              designing meaning collaboratively.
            </p>
          </div>
        </div>

        <Image src={defaultimg} alt="Picture of the author" className=" py-5" />
      </section>

      <section className="mx-auto max-w-5xl items-center justify-start ">
        <div className="py-8">
          <p className="py-5 text-zinc-400">FEATURES</p>
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
            How we got there —
          </h1>
          <p className="py-5">
            In an age where everything is demanding your time, Spotify gives you an opportunity to
            reminisce and grow. Spotify connects you with your communities, reminds you of the
            memories you have made, and expands your relationships with music.
          </p>
        </div>

        <div className="mx-auto flex flex-col gap-10 py-5 md:flex-row">
          <div className="basis-1/2">
            <h4 className="py-3 text-2xl font-bold">Malleability</h4>
            <p>
              You decide what rules you’re playing by; You can actively affect the social contract.
              Everything is transient; nothing is permanent. You can go back and change what you
              said; you can choose to be antagonistic and delete what everyone else said. but it
              comes down to whatever social agreement you have with other people.There are less
              constraints, so you have to have a mutual agreement to play along. That itself can be
              broken, too.
            </p>
          </div>
          <div className="basis-1/2">
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-10 py-5 md:flex-row">
          <div className="basis-1/2">
            <h4 className="py-3 text-2xl font-bold">Speaking / Listening</h4>
            <p>
              You can’t see what someone else’s content is and enter your content at the same time,
              because you can only be in one square at the same time. You can either digest
              information and respond, or make a decision to type and ignore what else is going on.
              You can see what is going on, because you can see colors changing and contributions
              being made. You have to balance the pacing of the call and response.
            </p>
          </div>
          <div className="basis-1/2"></div>
        </div>
        <div className="mx-auto gap-10 py-5">
          <div className="my-10">
            <h4 className="py-3 text-2xl font-bold">Analysis</h4>
            <p>
              Simplified aesthetics for a Japanese audience, retaining only the essential
              information on each data card.
            </p>
          </div>
          <div>
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-10 py-10 md:flex-row">
          <div className="basis-1/2">
            <h4 className="py-3 text-2xl font-bold">Memorialization</h4>
            <p>
              When people revisit the grid, it acts as a visual artifact that is connected to a
              process of having a conversation. The artifact is a gift or a reminder. The patterns
              give a glimpse into the nature of the conversation by visualizing the data.
            </p>
          </div>
          <div className="basis-1/2">
            <Image src={defaultimg} alt="Picture of the author" />
          </div>
        </div>
      </section>
    </div>
  )
}
