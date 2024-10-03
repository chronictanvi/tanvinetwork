import { genPageMetadata } from "app/seo";

import Content from "./Content";

import Image from "next/image";

export const metadata = genPageMetadata({ title: "Spotify" });

export default function Spotify() {
  return (
    <>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-16 px-5 md:flex-row ">
        <div className="flex basis-2/3 flex-col  pr-16 pt-8 md:space-y-5">
          <p className="text-sm pb-3 text-zinc-800 tracking-wider">OVERVIEW</p>{" "}
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:leading-9 pb-5">
            Japan is the 2nd largest music market in the world. But 63% of
            revenue still comes from physical sales.
          </h1>
          <div className="pb-5">
            <p className=" text-xl font-light pb-2">
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

        <div className="my-10 flex flex-row md:flex-col">
          <div className="basis-1/2">
            <p className="text-sm pb-3 text-zinc-800 dark:text-zinc-400 tracking-wider">SCOPE</p>
            <ul>
              <li>User Research</li>
              <li>Prototyping</li>
              <li>User Interface Design</li>
            </ul>
          </div>
          <div className="basis-1/2">
            <p className="text-sm pb-3 text-zinc-800 dark:text-zinc-400 tracking-wider">TOOLS</p>
            <ul>
              <li>Figma </li>
              <li>next.js</li>
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

      {/* <div className=" max-w-8xl my-20 flex flex-col justify-start gap-2 pb-2 align-top md:mt-2  px-5 md:flex-row md:px-20 ">
        <div className="  basis-1/2 ">
          <Image
            src={thedeepend}
            alt="Picture of the author"
            className="w-full"
          />
        </div>
      </div> */}

      <Content />
    </>
  );
}
