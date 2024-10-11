import { genPageMetadata } from 'app/seo'
import Image from 'next/image'

import cat from './cat.png'
import sampleconv from './sampleconversation.png'
import demo1 from './demo1.png'
import desirepath from './desirepath.png'
import figb from './figb.png'
import v1 from './v1.png'
import v2 from './v2.gif'
import figb1 from './figb1.png'
import figc from './figc.png'
import figa from './figa.png'
import figa2 from './figa2.jpg'
import figd from './figd.png'
import final from './final.png'
import minesweeper from './minesweeper.png'
import pangaro from './pangaro.png'
import joke from './joke.png'
import cover from './comrade-cover.png'

import notes from './notes.png'
import mississippi from './mississippi.png'
import heirarchy from './heirarchy.png'

export const metadata = genPageMetadata({ title: 'Comrade' })

export default function Comrade() {
  return (
    <div className=" px-5 ">
      <Image src={cover} alt="Picture of the author" />
      <div className="mx-auto my-32 flex max-w-5xl flex-col gap-16 md:flex-row">
        <div className="flex basis-2/3 flex-col pb-5 pr-16 pt-8 md:space-y-5">
          <p className="text-sm">OVERVIEW</p>{' '}
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:leading-9">
            Comrade tries to offer a material way to express the topography of a conversation.
          </h1>
          <div className="flex-auto">
            <p className=" text-xl font-light">
              It holds information about the spatial layout of a dialogue. It attempts to be a
              canvas for your train of thought, providing 2D visual presence for deviations in a
              conversation.
            </p>
          </div>
        </div>

        <div className="my-10 flex flex-row gap-4 md:flex-col">
          <div className="basis-1/2">
            <p className="pb-3 text-zinc-400">SCOPE</p>
            <ul>
              <li>User Research</li>
              <li>Art Direction</li>
              <li>User Interface Design</li>
            </ul>
          </div>
          <div className="basis-1/2">
            <p className="py-3 text-zinc-400">TOOLS</p>
            <ul>
              <li>Figma </li>
              <li>Vue.js </li>
              <li>Firebase</li>{' '}
            </ul>
          </div>
          <div className="basis-1/2">
            <p className="py-3 text-zinc-400">KEY METHODOLOGY</p>
            <p>Mixed-methods research</p>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-5xl items-center justify-start pb-32">
        <div className="max-w-9xl mx-auto flex flex-col gap-24 pb-2 md:flex-row">
          <div className="">
            <Image src={minesweeper} alt="Picture of the author" />
            <figcaption className="py-2">Minesweeper, Curt Johnson @ Microsoft</figcaption>
          </div>
          <div className="basis-1/2">
            <Image src={desirepath} alt="Picture of the author" />
            <figcaption className="py-2">‘Desire path’ through a park</figcaption>
          </div>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-24 pb-2 pt-32 md:flex-row">
          <div className="basis-2/3 pb-8">
            <p className="py-5 text-zinc-400">CONTEXT</p>
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
              Conversations are a factor of the language that facilitates them —
            </h1>
            <p className="py-8 text-xl">
              In digital conversations, there is an added medium — the visual interface. Most
              digital interfaces and platforms visualize ‘a stream of thought’ or conversation as a
              straight line.
            </p>
            <p className="font-body text pb-5">
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
          <div className="basis-1/3">
            <Image src={sampleconv} alt="Picture of the author" />
          </div>
        </div>
      </section>

      <section className="bg-white py-32 text-black">
        <div className="mx-auto max-w-5xl items-center justify-start">
          <div className=" flex flex-col gap-24 pb-2  md:flex-row">
            <div className="pb-8">
              <p className="py-5">INSPIRATION</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                The performance of socialness on the internet is nuanced and pools intent from
                multiple directions.
              </h1>
              <p className="py-5">
                This internal context shapes the conversation and its outcomes. And so, a
                conversation meanders — the trace of path it takes is probably different for both
                the people.
              </p>
              <p className="pb-5">
                Maybe they thought about some other things, had thoughts that intruded but didn’t
                quite make their way to being expressed. How does one start a conversation? How do
                people respond when they start?
              </p>
              <Image src={pangaro} alt="Picture of the author" />
              <figcaption className="py-2">A Model of Conversation by Paul Pangaro</figcaption>
            </div>
            <div>
              <div className="basis-1/3">
                <Image src={mississippi} alt="Picture of the author" />
                <figcaption className="py-2">
                  The Alluvial Valley of the Lower Mississippi River, Harold Fisk, 1944.{' '}
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl items-center justify-start py-32 ">
        <div className="py-8">
          <div className="flex flex-col gap-10 py-16 md:flex-row">
            <div>
              <p className="py-5 text-zinc-400">PROCESS</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-200 md:text-4xl md:leading-10">
                The whiteboard version explores the possibility of rearranging the squares—
              </h1>
              <p className="py-5">
                Forming a matrix of content that is arranged by a logic that the participants
                collectively decide on by labeling direction.
              </p>
            </div>
            <div>
              <Image src={demo1} alt="Picture of the author" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 py-16 md:flex-row">
          <div className="basis-1/2">
            <h4 className="py-3 text-lg ">BACKEND AND TOOLS</h4>
            <p className="pb-10">
              The current version is written in VSCode and powered by Vite.js, a frontend tool that
              sets up a development environment for frameworks like React, with a dev server by
              Vercel. It uses HTML, CSS, React, supported by Typescript. The CSS is generated by
              Tailwind classNames. Design prototypes of the project are constructed in Figma.{' '}
            </p>
            <Image src={heirarchy} alt="Picture of the author" />
          </div>
          <div className="basis-1/2">
            <Image src={notes} alt="Picture of the author" />
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
            <Image src={v1} alt="Picture of the author" />
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
            <Image src={v2} alt="Picture of the author" unoptimized />
          </div>
        </div>

        <div className="mx-auto max-w-5xl items-center justify-start">
          <div className="flex max-w-5xl flex-col gap-2 md:flex-row">
            <div className="basis-1/2 pb-8">
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

        <Image src={final} alt="Picture of the author" className=" py-5" />
      </section>

      <section className=" py-32 ">
        <div className="mx-auto max-w-5xl items-center justify-start">
          <div className="mx-auto flex flex-col gap-10 py-5 md:flex-row">
            <div className="basis-1/2">
              <p className="text-zinc-400">FEATURES</p>
              <h4 className="py-3 text-4xl font-bold">Malleability</h4>
              <p>
                You decide what rules you’re playing by; You can actively affect the social
                contract. Everything is transient; nothing is permanent. You can go back and change
                what you said; you can choose to be antagonistic and delete what everyone else said.
                but it comes down to whatever social agreement you have with other people.There are
                less constraints, so you have to have a mutual agreement to play along. That itself
                can be broken, too.
              </p>
            </div>
            <div className="basis-1/2">
              <Image src={cat} alt="Picture of the author" />
            </div>
          </div>
          {/* ----------- Taking turns ----------- */}
          <div className="mx-auto flex flex-col gap-10 py-5 md:flex-row">
            <div className="basis-1/2">
              <p className="text-zinc-400">FEATURES</p>
              <h4 className="py-3 text-4xl font-bold">Speaking / Listening</h4>
              <p>
                You can’t see what someone else’s content is and enter your content at the same
                time, because you can only be in one square at the same time. You can either digest
                information and respond, or make a decision to type and ignore what else is going
                on. You can see what is going on, because you can see colors changing and
                contributions being made. You have to balance the pacing of the call and response.
              </p>
            </div>
            <div className="basis-1/2">
              <Image src={figa} alt="Picture of the author" />
              <Image src={figa2} alt="Picture of the author" />

              <p>
                Fig A. In this figure. we see two discrete blocks on the top right, and a mass of
                conversation that somewhat resembles a black-berry bush at the bottom. These two
                areas are disconnected, both in their content and arrangement — the top two squares
                just confirm the presence of the other person, and acknowledge the medium.{' '}
              </p>
              <p className="py-3">
                {' '}
                ‘hello are you there?’ <br></br> ‘yeah i am here’{' '}
              </p>
              <p>
                The blackberry bush is made up of teal (User 1) giving me feedback on the project,
                with me in peach (User 2) asking a few clarifying questions or elaborating on my
                intention. User 1 talks more, takes up more space, but that's par for the course for
                the nature of this conversation.
              </p>
            </div>
          </div>
          {/* ----------- Analysis ----------- */}
          <div className="mx-auto flex flex-col gap-10 py-5 md:flex-row">
            <div className="basis-1/2">
              <p className=" text-zinc-400">FEATURES</p>
              <h4 className="py-3 text-4xl font-bold">Analysis</h4>
              <p>
                The second factor to analyse is the temporal distance as it tracks the sequence.
                (timestamp). Each part shows a shift in context. Finally the conversation concludes.
              </p>
              <Image src={figb1} alt="Picture of the author" />
              <p>Fig B.1 Key mapping of how this conversation actually unfolds.</p>
            </div>
            <div className="basis-1/2">
              <Image src={figb} alt="Picture of the author" />

              <p>
                Fig B. Here is a conversation between two people on a blind date. They are
                strangers. I use a prompt here to guide the conversation. Once the conversation has
                concluded, unless you have a recording of the conversation, it's a little hard to
                decode what this couldve possibly been about.
              </p>

              <Image src={figc} alt="Picture of the author" />
              <p>
                Fig C. Progression of topics within a conversation between 2 people. Here, theres
                multiple streams of topics to follow. In a conversation with more than 3 people,
                this gets further complicated — with multiple voices, and more ground to cover.
              </p>
            </div>
          </div>
          {/* ----------- Memorialization----------- */}
          <div className="mx-auto flex flex-col gap-10 py-10 md:flex-row">
            <div className="basis-1/2">
              <p className="text-zinc-400">FEATURES</p>
              <h4 className="py-3 text-4xl font-bold">Memorialization</h4>
              <p>
                When people revisit the grid, it acts as a visual artifact that is connected to a
                process of having a conversation. The artifact is a gift or a reminder. The patterns
                give a glimpse into the nature of the conversation by visualizing the data.
              </p>
            </div>
            <div className="basis-1/2">
              <Image src={figd} alt="Picture of the author" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
