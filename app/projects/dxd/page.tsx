import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import cat from './cat.png'
import color from './ColorResearch.png'
import typography from './TypographicResearch.png'
import typography2 from './PPNeueMontreal.png'
import footnotes from './footnotes.gif'
import peabodyscrolly from './peabodyscrolly.gif'
export const metadata = genPageMetadata({ title: 'DxD' })

export default function Data() {
  return (
    <div className="">
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="flex basis-2/3 flex-col pr-16 pt-8 md:space-y-5">
            <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">OVERVIEW</p>
            <h1 className="pb-5 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              A digital book offering a new history of data visualization from the eighteenth
              century to the present.
            </h1>
            <p className="pb-2 text-xl font-light">
              Through a set of six interactive case studies, <strong>Data By Design</strong> will
              show how visualizations of data, like the data themselves, are never neutral
              informational forms. They always carry implicit assumptions—and, at times, explicit
              arguments—about how knowledge is produced and who is authorized to produce it.
            </p>
            <small>This project is in beta.</small>
          </div>

          <div className="my-10 flex flex-row md:flex-col">
            <div className="basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">ROLE</p>
              <ul>
                <li>Lead Designer</li>
              </ul>
            </div>
            <div className="basis-1/2">
              <p className="pb-3 text-sm tracking-wider text-zinc-800 dark:text-zinc-400">TOOLS</p>
              <ul>
                <li>Figma</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="my-10 ">
          <div className="">
            <p className="pb-3 text-center text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
              CONTEXT
            </p>
            <p className=" text-center text-2xl">
              What is the story we tell about the emergence of modern data visualization?{' '}
            </p>{' '}
            <p className=" text-center text-2xl">How might we tell that story differently?</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="my-10 ">
          <div className="">
            <p className="pb-3 text-center text-sm tracking-wider text-zinc-800 dark:text-zinc-400">
              DESIGN LANGUAGE{' '}
            </p>
            <p className="  text-2xl">
              The visual foundation builds heavily from the primary typeface, William by Vocal Type
              is a contemporary interpretation of a monoline engineering template-based lettering
              style that W. E. B. Du Bois and his Black students at Atlanta University used in their
              information design and experience design for the American Negro Exhibit in 1900 at the
              Exposition Universelle in Paris.
            </p>{' '}
          </div>
        </div>

        <Image src={typography} alt="Illustration" className="py-1" />
        <Image src={typography2} alt="Illustration" className="py-1" />

        <Image src={color} alt="Illustration" className="py-1" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="">
          <p className="py-3">APPROACH</p>
          <h2 className="text-2xl">Visualization as Evidence, Interaction as Argument</h2>
          <p className="py-5 ">
            The design responds to the historical timeline of the content, but look and feel like
            the contemporary web.
          </p>

          <Image src={cat} alt="Illustration" className="pt-5" />
        </div>
      </section>
      <section className=" bg-black  ">
        <section className="mx-auto max-w-3xl items-center justify-start bg-black px-5 py-32  text-gray-100  ">
          <div className="  py-8  ">
            <p className="pb-3 text-sm  tracking-wider ">SITE WIDE</p>
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight  md:text-4xl md:leading-10">
              Interaction as Argument
            </h1>
            <p className="py-5 ">
              Throughtout the site, we made an effort to have the academic content be in concert
              with the visual structure of the website itself.
            </p>
          </div>
          {/* / 3 cols --- make and insert icons here   */}
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
                Launch an extended version of listening stats that is highly localized and meet
                local fandom needs
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
          <div className="mx-auto flex max-w-4xl flex-col gap-10 py-16 md:flex-row">
            <div className="basis-1/2">
              <h4 className="py-3 text-lg font-bold">
                {' '}
                Expandable inline footnotes that can be collapsed for a more compact view.
              </h4>
              <p>
                {' '}
                “I hate scrolling to the end of a document to find what the citation is. I lose
                track of where I was in the article, and how the footnote relates to the rhetoric
                cited.” — Anonymous academic
              </p>
            </div>

            <div className="basis-1/2 ">
              <Image src={footnotes} alt="Picture of the author" className="" unoptimized />
            </div>
          </div>
          <div className="mx-auto flex max-w-4xl flex-col gap-10  py-16 md:flex-row">
            <div className="basis-1/2">
              <h4 className="py-3 text-lg font-bold">A sense of discovery </h4>
              <p>
                Meta narrative of viz as you navigate the site. For this we exapnded the glyph set
                to include icons.
              </p>
            </div>

            <div className="basis-1/2 ">
              <Image src={cat} alt="Picture of the author" className="" />
            </div>
          </div>
          <div className="mx-auto flex max-w-4xl flex-col gap-10 py-16 md:flex-row">
            <div className="basis-1/2">
              <h4 className="py-3 text-lg font-bold">
                {' '}
                Information Overload: Hard to intuintvely parse which image corresponds to what text{' '}
              </h4>
              <p>
                We opt for progressive disclosure to avoid information overload whereever possible.
                Eg. Hover to zoom or reveal relevant content thats part of a subset
              </p>
            </div>

            <div className="basis-1/2 ">
              <Image src={cat} alt="Picture of the author" unoptimized />
            </div>
          </div>
        </section>
      </section>

      <section className="bg-white  px-5 py-32 text-black">
        <div className="mx-auto max-w-3xl items-center justify-start">
          <div className="">
            <div className=" basis-1/2 pb-5 ">
              <p className="pb-3 text-sm tracking-wider">APPLICATION </p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Application Varies in Each chapter{' '}
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
          <Image src={peabodyscrolly} alt="Picture of the author" className="" />
          <figcaption className="text-center italic">
            An example of a scrollytell used to explain different components of a historical data
            viz.
          </figcaption>
        </div>
        <div className="mx-auto max-w-3xl items-center justify-start">
          <p className="pb-3 pt-12 text-sm tracking-wider">DESCTIPTION: BROOKS</p>
          <h1 className="pb-5 text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10 ">
            Violence in Data
          </h1>
          <p>Attempts to not restage violence by having a toggle and alt text</p>
        </div>

        <div className="mx-auto max-w-3xl py-10 ">
          <Image src={cat} alt="Picture of the author" className="py-5" />
          <figcaption className="text-center italic">
            An example of a user journey forming the overall story and walking the user through
            different kinds of components.
          </figcaption>
        </div>
        <div className="mx-auto max-w-3xl pt-12 ">
          <p className="pb-3 text-sm tracking-wider">PROCESS </p>
          <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
            Inspiration
          </h1>
          <p className="py-5">
            {' '}
            While fleshing out the content cards from wireframes, some of the considerations I made
            were around complexity of visual information, layout and modularity.
          </p>
          <Image src={cat} alt="Picture of the author" className="py-5" />
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
              <Image src={cat} alt="Picture of the author" className="" />
              <figcaption className="pt-5 text-center italic">
                This data card is too complex!
              </figcaption>
            </div>
          </div>

          <div className="mx-auto gap-24 py-12 ">
            <div className=" my-5">
              <h4 className="py-3 text-2xl">Iteration</h4>
              <p></p>
            </div>

            <div className=" pt-12">
              <Image src={cat} alt="Picture of the author" className="" />
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

          <Image src={cat} alt="Picture of the author" className="pt-12" unoptimized />
          <figcaption className="pt-5 text-center italic">
            Framework for building custom content for each user with Figma variables
          </figcaption>
          <Image src={cat} alt="Picture of the author" className="pt-12" unoptimized />
          <figcaption className="pt-5 text-center italic">Application of modular system</figcaption>
        </div>
      </section>
    </div>
  )
}
