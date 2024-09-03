import { genPageMetadata } from "app/seo";
// import spotifyFast from "./spotify-fast.gif";
import blackpink from "./blackpink-card.png";
import cover from "./Hero-Image--3.gif";
import zoomie from "./custom-page.png";
import otherpeople from "./otherpeople.png";
import takeaway from "./takeaway.png";
import process from "./process4.png";
import physical from "./physical.png";
import modular2 from "./Modular2.png";
import consideration from "./Consideration English.png";
import sweetbutpsycho from "./sweetbutpsycho.png";

import keyscreens from "./KEYSCREENS.png";
import elements from "./element_grid.png";
import userflow from "./userflow.png";
import contentflow from "./contentflow.png";
import mainstream from "./Mainstream.png";
import eveninglistens from "./eveninglistens.gif";
import mins from "./53min-t.gif";
import modular from "./Modular.png";
import titles from "./titles.gif";

import thedeepend from "./thedeepend.jpg";

import Image from "next/image";

export const metadata = genPageMetadata({ title: "Spotify" });

export default function Spotify() {
  return (
    <>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-16 md:flex-row">
        <div className="flex basis-2/3 flex-col  pr-16 pt-8 md:space-y-5">
          <p className="text-sm">OVERVIEW</p>{" "}
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:leading-9">
            Japan is the 2nd largest music market in the world. But 63% of
            revenue still comes from physical sales.
          </h1>
          <div className="flex-auto">
            <p className=" text-xl font-light">
              I was part of an ambitious project to unlock new experiences
              tailored to audiences in- Japan, by crafting social contexts in
              which music consumption gains meaning and value within the Spotify
              platform.
            </p>
          </div>
          <div className="">
            <small>
              To comply with my non-disclosure agreement, I have omitted and
              obfuscated confidential information in this case study. All
              information in this case study is my own and does not necessarily
              reflect the views of Spotify.
            </small>
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
              <li>Firebase</li>{" "}
            </ul>
          </div>
          <div className="basis-1/2">
            <p className="py-3 text-zinc-400">KEY METHODOLOGY</p>
            <p>Mixed-methods research</p>
          </div>
        </div>
      </div>

      {/* <div className=" max-w-8xl my-20 flex flex-col justify-start gap-2 pb-2 align-top md:mt-2  px-5 md:flex-row md:px-20 ">
        <div className="  basis-1/2 ">
          <Image
            src={thedeepend}
            alt="Picture of the author"
            className="w-full"
          />
        </div>
      </div> */}

      <section className="mx-auto max-w-6xl py-24 items-center justify-start  ">
        <Image src={cover} alt="Picture of the author" />
        <div className=" my-10 flex flex-col gap-16 md:flex-row">
          <div className="basis-1/2">
            <p className="text-zinc-400 py-3">CONTEXT</p>
            <p className="text-xl">
              Spotify is looking to differentiate their offering and accelerate
              stick user growth with new & existing music streamers in Japan.
            </p>
          </div>

          <div className=" basis-1/2">
            <p className="text-zinc-400 py-3">GOAL</p>
            <p className=" text-xl">
              Out of the Total Available Market, Spotify only takes up a small
              fraction of users. Our goal is to increase Subs/Monthly Active
              Users to 40 in Japan by 2025.
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

      <section className="bg-white  px-5 py-16 text-black">
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
              <p className="py-5  uppercase">The challenge</p>
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight  md:text-4xl md:leading-10">
                A Distinct Market
              </h1>
              <p className="py-5 text-xl">
                In Japan, Spotify is viewed merely as a basic utility with
                limited offerings.
              </p>{" "}
              <p className="pb-5">
                {" "}
                Japan is distinct from other markets. There is specific cultural
                value placed on restricted items and the desire to be
                acknowledged as a fan. Exclusivity in Japan isn’t limited to
                content — it also taps into the{" "}
                <span className="font-bold">
                  {" "}
                  desire for unique and special things.{" "}
                </span>
                {/* To increase our market share, Spotify in Japan needs to be
                differentiated to improve product/market fit and attract new
                subscribers. Our goal for the project was to develop a prototype
                that could test concepts with users about their interest and
                willingness to pay by tapping into a sense of feeling special. */}
              </p>
              <Image
                src={physical}
                alt="Picture of the author"
                className="py-5"
              />
            </div>

            <div className=" basis-1/2">
              <p className="py-5">FOUNDATIONAL RESEARCH</p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Offerings for Fans
              </h1>
              <p className="py-5 ">
                We conducted research amongst fervent artists, independent
                devotees, everyday music lovers and active members of fan
                communities — to understand how fans navigate Japan’s unique
                music scene. We identified fandom as the{" "}
                <span className="font-bold">
                  {" "}
                  single largest opportunity for premium growth{" "}
                </span>{" "}
                for the following reasons:
              </p>
            </div>
            <div className="mx-auto flex max-w-4xl flex-col  gap-10  md:flex-row">
              <div className="basis-1/2 py-5">
                <h4 className="text-2xl py-3"> Widespread demand</h4>
                <p>
                  ● Fandom isn’t a niche interest - it’s deeply ingrained in
                  people’s everyday lives.
                </p>{" "}
                <p className="py-5">
                  ● 62% of Japanese consumers with an audio interest are
                  regularly engaging in fan activities.
                </p>
              </div>

              <div className="basis-1/2 py-5 ">
                <h4 className="text-2xl py-3">High willingness to pay</h4>
                <p>
                  ● Fans’ willingness to pay (WTP) to strengthen their
                  connection with artists is remarkably high.
                </p>{" "}
                <p className="py-5">
                  ● Around 90% of participants in our study had one or two
                  artists they passionately support and invest in.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-32 items-center justify-start  ">
        <div className="  py-8  ">
          <p className="py-5 ">FURTHER UNDERSTANDING</p>
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
            User Insights
          </h1>
          <p className="py-5">
            We spoke to a variety of people to understand how fans navigate
            discovery of new content and reminsce on their listening history.
            and what can be improved. We focused on data stories as presented in
            Wrapped — Spotify's annual event for revealing how fan's are
            interacting with the artists.
          </p>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col gap-10 py-16 md:flex-row">
          <div className="basis-1/2">
            <h4 className="text-lg font-bold py-3">
              {" "}
              “It would be good to put this in context. Is 40 listens in a year
              a lot or not?”
            </h4>
            <p>
              Listeners find data stories about things they already know (such
              as their Top Artist) less interesting. They are interested in
              diving deeper and ‘getting to know themselves better’.
            </p>
          </div>

          <div className="basis-1/2 ">
            <Image
              src={mins}
              alt="Picture of the author"
              className=""
              unoptimized
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col gap-10  py-16 md:flex-row">
          <div className="basis-1/2">
            <h4 className="text-lg font-bold py-3">
              “Knowing that other people listen to music in another way than me
              would influence what music I choose to listen to”
            </h4>
            <p>
              Listeners would like to be reminded about what songs they listen
              to — or might have forgotten about. Recommendations also carry a
              social component — listeners are curious about songs that other
              fans are listening to.
            </p>
          </div>

          <div className="basis-1/2 ">
            <Image src={otherpeople} alt="Picture of the author" className="" />
          </div>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col gap-10 py-16 md:flex-row">
          <div className="basis-1/2">
            <h4 className="text-lg font-bold py-3">
              {" "}
              “Wrapped is too infrequent. How does my listening change over a
              day? How does it change over seasons? ”
            </h4>
            <p>
              Listeners want more — There is a strong desire to access their
              ‘fan narrative’ more frequently.
            </p>
          </div>

          <div className="basis-1/2 ">
            <Image
              src={eveninglistens}
              alt="Picture of the author"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="bg-white  px-5 py-32 text-black">
        <div className="mx-auto max-w-3xl items-center justify-start">
          <div className="">
            <div className=" basis-1/2 pb-5 ">
              <p className="py-5">STRATEGY </p>
              <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
                Creating Data Stories
              </h1>
              <p className="py-5 pb-24">
                Compelling data stories require diversity; users are not
                interested in mere numbers and avoid redundant information.{" "}
                <span className="font-bold">
                  {" "}
                  It's crucial to offer a range of content.{" "}
                </span>{" "}
                Presenting data as a simple statement like "they didn't listen
                much" may come across as confrontational and lacks the power to
                inspire further action. Our proposal is modular — Emphasize the
                narrative and exclude elements that don't captivate interest. It
                allows for a curated set of data stories created for specific
                users.
              </p>
            </div>
          </div>
        </div>
        <Image src={userflow} alt="Picture of the author" className="" />
        <div className="mx-auto max-w-3xl items-center justify-start">
          <p className="py-5  pt-12">SYNTHESIS</p>
          <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10 pb-5 ">
            Content for Fandom
          </h1>
          <p>
            Developing special content for Japanese fans required us to
            understand the data we had access to and what would be feasible to
            curate. We categorised the curation opportunities as the following:
          </p>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col gap-5 pt-5 md:flex-row">
          <div className="basis-1/2">
            <h3 className="  text-xl  pt-5">Infrastructure </h3>
            <p className=" pt-2">
              Collect fan memories in one place, tapping into sentimentality and
              memorabilia.
            </p>
          </div>

          <div className="basis-1/2 ">
            <h3 className="  text-xl  pt-5 ">Platform Content</h3>
            <p className=" pt-2">
              Launch an extended version of listening stats that is highly
              localized and meet local fandom needs
            </p>
          </div>

          <div className="basis-1/2">
            <h3 className=" text-xl   pt-5">Partnership Integration</h3>
            <p className=" pt-2">
              By providing exclusive content through partnerships, we can
              provide value that stretches beyond our platform.
            </p>
          </div>
        </div>{" "}
        <div className="mx-auto max-w-3xl py-10 ">
          <Image
            src={contentflow}
            alt="Picture of the author"
            className="py-5"
          />
          <figcaption className="italic text-center">
            An example of a user journey forming the overall story and walking
            the user through different kinds of components.
          </figcaption>
        </div>
        <div className="mx-auto max-w-3xl pt-12 ">
          <p className="py-5">PROCESS </p>
          <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-800 dark:text-gray-900 md:text-4xl md:leading-10">
            Iteration
          </h1>
          <p className="py-5">
            {" "}
            While fleshing out the content cards from wireframes, some of the
            considerations I made were around complexity of visual information,
            layout and modularity.
          </p>
          <Image src={process} alt="Picture of the author" className="py-5" />
          <figcaption className="italic text-center">
            Going from low fidelity wireframes to high fidelity content cards
          </figcaption>
        </div>
        <div className="mx-auto max-w-3xl pt-32 justify-items-center">
          <div className="mx-auto flex flex-col gap-24 md:flex-row">
            <div className="basis-1/2">
              <h4 className="text-2xl pb-5">Complexity</h4>
              <p>
                The individual components had to be simple but memorable. For
                example, this data story is packed with information — there is a
                subset of fans, minutes, song that is most listened to, how
                mainstream that song is, song that is least listened to, how
                mainstream that song is.{" "}
              </p>{" "}
              <p className="py-5">
                {" "}
                I distilled the content cards to one main takeaway, so the
                scrolling experience is not overwhelming.
              </p>
            </div>

            <div className="basis-1/2 ">
              <Image
                src={mainstream}
                alt="Picture of the author"
                className=""
              />
              <figcaption className="italic text-center pt-5">
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
              <h4 className="text-2xl py-3">Variation</h4>
              <p>
                I explored concepts for simplified aesthetics for a Japanese
                audience, retaining only the essential information on each data
                card. I wanted to develop the cards in a manner that they could
                be flexible in how much space they take up.
              </p>
            </div>

            <div className=" pt-12">
              <Image
                src={sweetbutpsycho}
                alt="Picture of the author"
                className=""
              />
              <figcaption className="italic text-center pt-5">
                Different layout options for the same content
              </figcaption>
            </div>
          </div>

          <div className="mx-auto py-5 ">
            <h4 className="text-2xl pt-12 py-5">Prototyping</h4>
            <p className="pb-5">
              To make things scalable, I first organized the data as variables
              connected them to the components so they auto-populate.{" "}
            </p>{" "}
            <p>
              {" "}
              The components were built with variables such as [artist
              name] and [song title] which pulled directly from the user’s
              database to make custom prototypes.
            </p>
          </div>

          <Image
            src={modular}
            alt="Picture of the author"
            className="pt-12"
            unoptimized
          />
          <figcaption className="italic text-center pt-5">
            Framework for building custom content for each user with Figma
            variables
          </figcaption>
          <Image
            src={modular2}
            alt="Picture of the author"
            className="pt-12"
            unoptimized
          />
          <figcaption className="italic text-center pt-5">
            Application of modular system
          </figcaption>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-32 items-center justify-start  ">
        <div className="  py-8  ">
          <p className="py-5 "></p>
          <h1 className="text-4xl font-bold  leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
            Result
          </h1>
          <p className="py-5">
            The final prototype met our goal to uncover insights and translate
            concepts into features that address customer behaviours and
            motivations.
          </p>
          <Image
            src={consideration}
            alt="Picture of the author"
            className="pt-12"
            unoptimized
          />
          <h1 className="text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:leading-10">
            What's Next
          </h1>
          <p className="py-5">
            The final prototype was tested with 10 Japanese users and received
            over all positive feedback. It is now under development.
          </p>
        </div>
      </section>
      <h1 className="text-5xl text-center pt-5 font-bold leading-9 tracking-tight text-red-100 dark:text-red-400 md:leading-10">
        ありがとう!
      </h1>
    </>
  );
}
