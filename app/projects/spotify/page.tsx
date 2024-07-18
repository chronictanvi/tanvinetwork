import { genPageMetadata } from 'app/seo'
import spotifyFast from './spotify-fast.gif'
import blackpink from './blackpink-card.png'
import july from './july-highlights.gif'
import zoomie from './custom-page.png'
import elements from './element_grid.png'
import userflow from './userflow.png'
import contentflow from './contentflow.png'

import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Spotify' })

import Link from '@/components/Link'

export default function Spotify() {
  return (
    <>
      <div className=" my-20 items-center justify-start md:mt-2 md:max-w-3xl md:border-r-2 md:px-10 ">
        <div className="  px-14 pt-8 md:space-y-5 md:px-6 ">
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
      <section className="mx-auto max-w-3xl items-center justify-start  ">
        <div className=" my-10 flex flex-col gap-10 md:flex-row">
          <div className="basis-1/2">
            <p className="text-zinc-400">CONTEXT</p>
            <p>
              Spotify is looking to differentiate their offering and accelerate stick user growth
              with new & existing music streamers in Japan.
            </p>
          </div>
          <div className="basis-1/2">
            <p className="text-zinc-400">ROLE</p>
            <p>
              Uncover insights and translate concepts into features that address customer behaviours
              and motivations.
            </p>
          </div>
        </div>

        <div className="my-10 flex flex-col gap-10 md:flex-row">
          <div className=" basis-1/2">
            <p className="text-zinc-400">GOAL</p>
            <p>
              Out of the Total Available Market, Spotify only takes up a small fraction of users.
              Our goal is to increase Subs/Monthly Active Users to 40 in Japan by 2025.
            </p>
          </div>
          <div className="basis-1/2">
            <p className="text-zinc-400">TEAM</p>
            <p>
              UX Researchers, Content Writers, Localization Specialists for Japanese, Prototypers,
              Content Strategist and Product Managers and one other Lead Designer.
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="max-w-3xl ">
            <div className="  pb-8  ">
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
                “Exclusive” 限定 (gentei) vs “Feeling special” 特別感 (tokubetsu-kan). Exclusivity
                in Japan isn’t limited to content — it also taps into the desire for unique and
                special things. Our goal for the project was to develop a prototype that could test
                concepts with users about their interest and willingness to pay by tapping into a
                sense of feeling special.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 text-black">
        <div className="mx-auto max-w-3xl items-center justify-start">
          <div className=" max-w-4xl gap-2 ">
            <div className=" basis-1/2 pb-8 ">
              <p className="py-5">FOUNDATIONAL RESEARCH</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Why fandom?
              </h1>
              <p className="py-5">
                We spoke to a variety of people — including fervent artist or independent devotees,
                everyday music lovers and active members of fan communities — to understand how fans
                navigate Japan’s unique music scene. We identified Fandom as the single largest
                opportunity for Premium Growth for the following reasons:
              </p>
            </div>
            <div></div>
            <div>
              <p className="py-5">FURTHER UNDERSTANDING</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                What needs focus:{' '}
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 pb-2 md:flex-row">
          <div className="basis-1/2">
            <Image src={blackpink} alt="Picture of the author" className="" />
          </div>
          <div className="basis-1/2 ">
            <Image src={july} alt="Picture of the author" className="" />
          </div>
        </div>{' '}
        <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row">
          <div className="basis-1/2">
            <Image src={elements} alt="Picture of the author" className="" />
            <h3 className=" pt-5 text-xl text-zinc-400">Data in Context </h3>
            <p className=" pt-2">
              “It would be good to put this in context. Is 40 listens in a year a lot or not?”
            </p>
          </div>
          <div className="basis-1/2 ">
            <Image src={zoomie} alt="Picture of the author" className="" />
            <h3 className=" pt-5 text-xl text-zinc-400">Human Recommendations </h3>
            <p className=" pt-2">
              “Knowing that other people listen to music in another way than me would influence what
              music I choose to listen to”
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl items-center justify-start  ">
        <div>
          <div className="max-w-3xl pt-10 ">
            <div className="  py-8  ">
              <p className="py-5 text-zinc-400">DEEPER INSIGHTS</p>
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
                Designing with Data
              </h1>
              <p className="py-5">
                Before I could jump into designing, it was important to understand the data we had
                access to and what would be feasible to curate. Unlike Wrapped1, the cadence for
                these data stories would be more frequent, and thus required more data. I partnered
                with our data scientist and used this framework to investigate what data we had
                access to. This revealed some gaps in our approach. 1.
                https://newsroom.spotify.com/2023-wrapped/
              </p>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col gap-2 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4> Not all data is accounted for.</h4>
                <p>
                  Anniversary dates — fans relationship with artists also exists outside of the
                  platform. We need to collect that data from the user. And encourage them to enter
                  it in.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={zoomie} alt="Picture of the author" className="" />
              </div>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col gap-2 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4> Not all data is accounted for.</h4>
                <p>
                  Anniversary dates — fans relationship with artists also exists outside of the
                  platform. We need to collect that data from the user. And encourage them to enter
                  it in.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={zoomie} alt="Picture of the author" className="" />
              </div>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col gap-2 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4> Not all data is accounted for.</h4>
                <p>
                  Anniversary dates — fans relationship with artists also exists outside of the
                  platform. We need to collect that data from the user. And encourage them to enter
                  it in.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={zoomie} alt="Picture of the author" className="" />
              </div>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col gap-2 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4> Not all data is accounted for.</h4>
                <p>
                  Anniversary dates — fans relationship with artists also exists outside of the
                  platform. We need to collect that data from the user. And encourage them to enter
                  it in.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={zoomie} alt="Picture of the author" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-16 text-black">
        <div className="mx-auto max-w-4xl items-center justify-start">
          <div className="flex max-w-4xl flex-col gap-2 md:flex-row">
            <div className=" basis-1/2 pb-8 ">
              <p className="py-5">Synthesis</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Synthesis
              </h1>
              <p className="py-5">
                Compelling data stories require diversity; users are not interested in mere numbers
                and avoid redundant information. It's crucial to offer a range of content.
                Presenting data as a simple statement like "they didn't listen much" may come across
                as confrontational and lacks the power to inspire further action. Emphasize the
                narrative and exclude elements that don't captivate interest. Our proposal is
                modular — It allows for a curated set of data stories created for specific users.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col gap-5 md:flex-row">
          <div className="basis-1/2">
            <h3 className=" pt-5 text-xl text-zinc-400">Infrastructure </h3>
            <p className=" pt-2">
              Collect fan memories in one place, we can tap into sentimentality and memorabilia.
            </p>
          </div>
          <div className="basis-1/2 ">
            <h3 className=" pt-5 text-xl text-zinc-400">Platform Content</h3>
            <p className=" pt-2">
              Launch an extended version of listening stats that is highly localized and meet local
              fandom needs
            </p>
          </div>
          <div className="basis-1/2">
            <h3 className=" pt-5 text-xl text-zinc-400">Partnership Integration</h3>
            <p className=" pt-2">
              By providing exclusive content through partnerships, we can provide value that
              stretches beyond our platform.
            </p>
          </div>
        </div>{' '}
        <div className="mx-auto max-w-4xl py-5 ">
          <Image src={contentflow} alt="Picture of the author" className="pt-5" />
        </div>
        <div className="mx-auto max-w-4xl pt-10 ">
          <div className="  py-8  ">
            <p className="py-5 text-zinc-400">PROCESS</p>
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-100 dark:text-gray-800 md:text-4xl md:leading-10">
              Presenting Premium Value
            </h1>
            <p className="py-5">
              In an age where everything is demanding your time, Spotify gives you an opportunity to
              reminisce and grow. Spotify connects you with your communities, reminds you of the
              memories you have made and expands your relationships with music.
            </p>
          </div>
        </div>
        <Image src={userflow} alt="Picture of the author" className="" />
      </section>
      <section className="mx-auto max-w-3xl  items-center justify-start  ">
        <div>
          <div>
            <div className="  mx-auto  items-center justify-start py-8  ">
              <p className="py-5 text-zinc-400">PROCESS</p>
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
                How we got there —
              </h1>
              <p className="py-5">
                In an age where everything is demanding your time, Spotify gives you an opportunity
                to reminisce and grow. Spotify connects you with your communities, reminds you of
                the memories you have made and expands your relationships with music.
              </p>
            </div>

            <div className="mx-auto flex max-w-4xl flex-col gap-2 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4>Complexity</h4>
                <p>
                  This data story is packed with information — there is a subset of fans, minutes,
                  song that is most listened to, how mainstream that song is, song that is least
                  listened to, how mainstream that song is. To make the data stories easy to digest,
                  I limited the data points in each story to 1 or 2.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={zoomie} alt="Picture of the author" className="" />
              </div>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col gap-2 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4> Surfaces</h4>
                <p>
                  Celebrations are best when they come as a surpirse. I explored how data stories
                  can be organically surfaced across the Spotify experience to create moments of
                  delight.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={zoomie} alt="Picture of the author" className="" />
              </div>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col gap-2 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4>Iterations</h4>
                <p>
                  Simplified Aesthetics for a Japanese audience, retaining only the esential
                  information on each data card.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={zoomie} alt="Picture of the author" className="" />
              </div>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col gap-2 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4> Not all data is accounted for.</h4>
                <p>
                  Anniversary dates — fans relationship with artists also exists outside of the
                  platform. We need to collect that data from the user. And encourage them to enter
                  it in.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={zoomie} alt="Picture of the author" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// <h3 className=" pt-5 text-xl text-zinc-400">Genuine Community </h3>
// <p className=" pt-2">
//   Spotify is looking to differentiate their offering and accelerate stick user growth
//   with new & existing music streamers in Japan.
// </p>
{
  /* <h3 className=" pt-5 text-xl text-zinc-400">Faster Cadence</h3>
            <p className=" pt-2">
              Uncover insights and translate concepts into features that address customer behaviours
              and motivations.
            </p> */
}
