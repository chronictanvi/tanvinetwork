import { genPageMetadata } from "app/seo";
import cover from "./Hero-Image--3.gif";
import Content from "./Content";

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

      <Content />
    </>
  );
}
