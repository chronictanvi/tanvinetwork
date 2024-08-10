import { genPageMetadata } from "app/seo";
// import spotifyFast from "./spotify-fast.gif";
import blackpink from "./blackpink-card.png";
import july from "./july-highlights.gif";
import zoomie from "./custom-page.png";
import otherpeople from "./otherpeople.png";
import sweetbutpsycho from "./sweetbutpsycho.png";

import keyscreens from "./KEYSCREENS.png";
import elements from "./element_grid.png";
import userflow from "./userflow.png";
import contentflow from "./contentflow.png";
import mainstream from "./Mainstream.png";
import eveninglistens from "./eveninglistens.gif";
import mins from "./53min-t.gif";
import titles from "./titles.gif";

import thedeepend from "./thedeepend.jpg";

import Image from "next/image";

export const metadata = genPageMetadata({ title: "Spotify" });

export default function Spotify() {
  return (
    <>
      <div className=" max-w-8xl my-20 flex flex-col justify-start gap-2 pb-2 align-top md:mt-2  px-5 md:flex-row md:px-20 ">
        <div className="  md:mr-48 py-5 flex basis-1/2 flex-col pt-8 md:space-y-5 ">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100  md:leading-9">
            Japan is the 2nd largest music market in the world. But 63% of
            revenue still comes from physical sales.
          </h1>

          <div className="flex-auto">
            <p className=" py-5 text-xl font-light">
              I was part of an ambitious project to unlock new experiences
              tailored to audiences in- Japan, by crafting social contexts in
              which music consumption gains meaning and value within the Spotify
              platform.
            </p>
          </div>
          <div className="flex-none">
            <small>
              To comply with my non-disclosure agreement, I have omitted and
              obfuscated confidential information in this case study. All
              information in this case study is my own and does not necessarily
              reflect the views of Spotify.
            </small>
          </div>
        </div>

        <div className="  basis-1/2 ">
          <Image
            src={thedeepend}
            alt="Picture of the author"
            className="w-full"
          />
        </div>
      </div>

      <section className="mx-auto max-w-7xl  items-center justify-start  ">
        <div className=" my-10 flex flex-col gap-16 md:flex-row">
          <div className="basis-1/2">
            <p className="text-zinc-400 py-3">CONTEXT</p>
            <p>
              Spotify is looking to differentiate their offering and accelerate
              stick user growth with new & existing music streamers in Japan.
            </p>
          </div>
          <div className="basis-1/2">
            <p className="text-zinc-400 py-3">APPROACH</p>
            <p>
              Uncover insights and translate concepts into features that address
              customer behaviours and motivations.
            </p>
          </div>

          <div className=" basis-1/2">
            <p className="text-zinc-400 py-3">GOAL</p>
            <p>
              Out of the Total Available Market, Spotify only takes up a small
              fraction of users. Our goal is to increase Subs/Monthly Active
              Users to 40 in Japan by 2025.
            </p>
          </div>
          {/* <div className="basis-1/2">
            <p className="text-zinc-400">TEAM</p>
            <p>
              UX Researchers, Content Writers, Localization Specialists for
              Japanese, Prototypers, Content Strategist and Product Managers and
              one other Lead Designer.
            </p>
          </div> */}
        </div>

        {/* <div className="mx-auto flex max-w-9xl flex-col gap-2 pb-2 md:flex-row">
          <div className="basis-1/2">
            <Image src={blackpink} alt="Picture of the author" className="" />
          </div>
          <div className="basis-1/2 ">
            <Image src={july} alt="Picture of the author" className="" />
          </div>
        </div>{" "}
        <div className="mx-auto flex max-w-9xl flex-col gap-2 md:flex-row">
          <div className="basis-1/2">
            <Image src={elements} alt="Picture of the author" className="" />
          </div>
          <div className="basis-1/2 ">
            <Image src={zoomie} alt="Picture of the author" className="" />
          </div>
        </div> */}   </section>

      <div className="mx-auto  py-5 ">
        <Image
          src={keyscreens}
          alt="Picture of the author"
          className="pt-5"
        />
      </div>
      <section className="mx-auto  px-5 max-w-6xl pb-16 items-center justify-start  ">

        <div className=" ">
          <div className="max-w-3xl ">
            <div className="  pb-8  ">
              <p className="py-5 text-zinc-400">THE CHALLENGE</p>
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
                A Distinct Market
              </h1>
              <p className="py-5">
                This isn’t just a localisation effort. Japan, the world’s second
                largest music industry, is distinct from other markets. There is
                specific cultural value placed on restricted items and the
                desire to be acknowledged as a fan. Monetization is largely
                granted in this phenomena.
              </p>
              <p className="font-body py-5">
                “Exclusive” 限定 (gentei) vs “Feeling special” 特別感
                (tokubetsu-kan).
              </p><p>Exclusivity in Japan isn’t limited to content —
                it also taps into the desire for unique and special things. Our
                goal for the project was to develop a prototype that could test
                concepts with users about their interest and willingness to pay
                by tapping into a sense of feeling special.
              </p>
            </div>
          </div>
        </div>
      </section >
      <section className="bg-white  px-5 py-16 text-black">
        <div className="mx-auto max-w-3xl items-center justify-start">
          <div className=" max-w-4xl gap-2 ">
            <div className=" basis-1/2  ">
              <p className="py-5">FOUNDATIONAL RESEARCH</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Why fandom?
              </h1>
              <p className="py-5 ">
                We spoke to a variety of people — including fervent artist or independent devotees, everyday music lovers and active members of fan communities — to understand how fans navigate Japan’s unique music scene. We identified Fandom as the single largest opportunity for Premium Growth for the following reasons:
              </p>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col  gap-10  md:flex-row">
              <div className="basis-1/2 py-8">
                <h4 className="text-2xl py-3">
                  {" "}
                  Widespread demand
                </h4>
                <p>
                  ● Fandom isn’t a niche interest - it’s deeply ingrained in people’s everyday lives.
                </p>          <p className="py-5">
                  ● 62% of Japanese consumers with an audio interest are regularly engaging in
                  fan activities.
                </p>
              </div>

              <div className="basis-1/2 py-8 ">
                <h4 className="text-2xl py-3">
                  High willingness to pay
                </h4>
                <p>
                  ● Fans’ willingness to pay (WTP) to strengthen their connection with artists is remarkably high.
                </p> <p className="py-5">

                  ● Around 90% of participants in our study had one or two artists they passionately support and invest in.


                </p>  </div>
            </div>
            <div></div>

          </div>
        </div>
      </section >
      <section className="mx-auto max-w-3xl  px-5 items-center justify-start  ">
        <div>
          <div className="max-w-3xl pt-10 ">
            <div className="  py-8  ">
              <p className="py-5 text-zinc-400">DEEPER INSIGHTS</p>
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
                Designing with Data
              </h1>
              <p className="py-5">

                We spoke to a variety of people — including fervent artist or independent devotees, everyday music lovers and active members of fan communities — to understand how fans navigate Japan’s unique music scene. We identified Fandom as the single largest opportunity for Premium Growth for the following reasons:


              </p>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col gap-10 py-16 md:flex-row">
              <div className="basis-1/2">
                <h4 className="text-lg font-bold py-3">
                  {" "}
                  “It would be good to put this in context. Is 40 listens in a
                  year a lot or not?”
                </h4>
                <p>
                  Listeners find data stories about things they already know
                  (such as their Top Artist) less interesting. They are
                  interested in diving deeper and ‘getting to know themselves
                  better’.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={mins} alt="Picture of the author" className="" />
              </div>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col gap-10  py-16 md:flex-row">
              <div className="basis-1/2">
                <h4 className="text-lg font-bold py-3">
                  “Knowing that other people listen to music in another way than
                  me would influence what music I choose to listen to”
                </h4>
                <p>
                  Listeners would like to be reminded about what songs they
                  listen to — or might have forgotten about. Recommendations
                  also carry a social component — listeners are curious about
                  songs that other fans are listening to.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image
                  src={otherpeople}
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="mx-auto flex max-w-4xl flex-col gap-10 py-16 md:flex-row">
              <div className="basis-1/2">
                <h4 className="text-lg font-bold py-3">
                  {" "}
                  “Wrapped is too infrequent. How does my listening change over
                  a day? How does it change over seasons? ”
                </h4>
                <p>
                  Listeners want more — There is a strong desire to access their ‘fan narrative’ more frequently.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={eveninglistens} alt="Picture of the author" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  px-5 pt-16 text-black">
        <div className="mx-auto max-w-4xl items-center justify-start">
          <div className="flex max-w-4xl flex-col gap-2 md:flex-row">
            <div className=" basis-1/2 pb-8 ">
              <p className="py-5">Synthesis </p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Synthesis
              </h1>
              <p className="py-5">
                Compelling data stories require diversity; users are not
                interested in mere numbers and avoid redundant information. It's
                crucial to offer a range of content. Presenting data as a simple
                statement like "they didn't listen much" may come across as
                confrontational and lacks the power to inspire further action.

              </p> <p>
                Our proposal is modular — Emphasize the narrative and exclude elements that don't
                captivate interest. It allows for a
                curated set of data stories created for specific users.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col gap-5 md:flex-row">
          <div className="basis-1/2">
            <h3 className=" pt-5 text-xl text-zinc-400">Infrastructure </h3>
            <p className=" pt-2">
              Collect fan memories in one place, we can tap into sentimentality
              and memorabilia.
            </p>
          </div>

          <div className="basis-1/2 ">
            <h3 className=" pt-5 text-xl text-zinc-400">Platform Content</h3>
            <p className=" pt-2">
              Launch an extended version of listening stats that is highly
              localized and meet local fandom needs
            </p>
          </div>

          <div className="basis-1/2">
            <h3 className=" pt-5 text-xl text-zinc-400">
              Partnership Integration
            </h3>
            <p className=" pt-2">
              By providing exclusive content through partnerships, we can
              provide value that stretches beyond our platform.
            </p>
          </div>
        </div>{" "}
        <div className="mx-auto max-w-4xl py-5 ">
          <Image
            src={contentflow}
            alt="Picture of the author"
            className="pt-5"
          />
        </div>
        <div className="mx-auto max-w-4xl pt-10 ">
          <div className="  py-8  ">
            <p className="py-5 text-zinc-400">PROCESS</p>
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-100 dark:text-gray-800 md:text-4xl md:leading-10">
              Presenting Premium Value
            </h1>
            <p className="py-5">
              In an age where everything is demanding your time, Spotify gives
              you an opportunity to reminisce and grow. Spotify connects you
              with your communities, reminds you of the memories yo u have made
              and expands your relationships with music.
            </p>
          </div>
        </div>
        <Image src={userflow} alt="Picture of the author" className="" />
      </section>

      <section className="mx-auto max-w-5xl  px-5 items-center justify-start  ">
        <div>
          <div>
            <div className=" mx-auto  items-center justify-start py-8  ">
              <p className="py-5 text-zinc-400">PROCESS</p>
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
                How we got there —
              </h1>
              <p className="py-5">
                In an age where everything is demanding your time, Spotify gives
                you an opportunity to reminisce and grow. Spotify connects you
                with your communities, reminds you of the memories you have made
                and expands your relationships with music.
              </p><p> This required us to understand the data we had access to and what would be feasible to curate. Here are some of the considerations I made:
              </p>
            </div>

            <div className="mx-auto flex flex-col gap-10 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4 className="text-lg font-bold py-3">Complexity</h4>
                <p>
                  This data story is packed with information — there is a subset
                  of fans, minutes, song that is most listened to, how
                  mainstream that song is, song that is least listened to, how
                  mainstream that song is. To make the data stories easy to
                  digest, I limited the data points in each story to 1 or 2.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image
                  src={mainstream}
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>
            <div className="mx-auto flex flex-col gap-10 py-5 md:flex-row">
              <div className="basis-1/2">
                <h4 className="text-lg font-bold py-3"> Surfaces</h4>
                <p>
                  Celebrations are best when they come as a surpirse. I explored
                  how data stories can be organically surfaced across the
                  Spotify experience to create moments of delight.
                </p>
              </div>

              <div className="basis-1/2 "></div>
            </div>
            <div className="mx-auto   gap-10 py-5 ">
              <div className=" my-10">
                <h4 className="text-lg font-bold py-3">Iterations</h4>
                <p>
                  Simplified Aesthetics for a Japanese audience, retaining only
                  the esential information on each data card.
                </p>
              </div>

              <div className=" ">
                <Image
                  src={sweetbutpsycho}
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>
            <div className="mx-auto flex flex-col gap-10 py-10 md:flex-row">
              <div className="basis-1/2">
                <h4 className="text-lg font-bold py-3">Modularity</h4>
                <p>
                  To make things scalable, I first organized the data as
                  variables connected them to the components so they
                  auto-populate. The components were built with variables such
                  as [artist name] and [song title] which pulled directly from
                  the user’s database to make custom prototypes.
                </p>
              </div>

              <div className="basis-1/2 ">
                <Image src={titles} alt="Picture of the author" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// <h3 className=" pt-5 text-xl text-zinc-400">Genuine Community </h3>
// <p className=" pt-2">
//   Spotify is looking to differentiate their offering and accelerate stick user growth
//   with new & existing music streamers in Japan.
// </p>

/* <h3 className=" pt-5 text-xl text-zinc-400">Faster Cadence</h3>
            <p className=" pt-2">
              Uncover insights and translate concepts into features that address customer behaviours
              and motivations.
            </p> */
