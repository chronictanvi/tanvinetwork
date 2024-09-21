import CharacterViewer from '@/components/CharacterViewer'
import FontViewer from '@/components/FontViewer'

export default function Euripides() {
  return (
    <div style={{ fontFamily: 'Euripides' }} className="max-w-8xl mx-auto mt-12">
      <div className="mx-auto mt-12 flex max-w-6xl flex-row flex-col gap-16 px-5">
        <></>
        <div className="flex basis-2/3 flex-col  pr-16 pt-8 md:space-y-5">
          <p className="pb-3 text-sm tracking-wider text-zinc-400">OVERVIEW</p>{' '}
          <h1 className="pb-5 text-3xl font-bold leading-9  text-gray-900 dark:text-gray-100 md:leading-9">
            Euripidesyarn run build is a reverse stress body typeface designed for Anne Carson's Grief Lessons, a
            translation of Four Plays by Euripides.
          </h1>
          <div className="pb-5">
            <p className=" pb-2 text-xl font-light">
              How can the cliche of body text be challenged? What is to translate the form of a
              glyph — such that the shifts in the weight consider the sentiment of the text? 
            </p>
          </div>
          {/* Download Button */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="mt-8 ">
              <a
                href="public/static/fonts/Euripides.woff" // Link to the font file in the public folder
                download="Euripides.woff" // Name the file that will be downloaded
                className="rounded-lg border-2 border-white	 px-4 py-4 text-white hover:bg-red-600"
              >
                Download .woff
              </a>
            </div>
            <div className="mt-8 ">
              <a
                href="public/static/fonts/Euripides.otf" // Link to the font file in the public folder
                download="Euripides.otf" // Name the file that will be downloaded
                className="rounded-lg border-2 border-white	 px-4 py-4 text-white hover:bg-red-600"
              >
                Download .otf
              </a>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row">
          <div className=" mb-10 basis-1/3">
            <p className="pb-3 text-sm tracking-wider text-zinc-400">SCOPE</p>
            <ul>
              <li>Type Design</li>
            </ul>
          </div>
          <div className="mb-10 basis-1/3 ">
            <p className="pb-3 text-sm tracking-wider text-zinc-400">TOOLS</p>
            <ul>
              <li>Robofont</li>
              {/* <li>Proofs made in Adobe InDesign. </li> <li> GitHub for version control. </li> */}
            </ul>
          </div>
          <div className="mb-10 basis-1/3 ">
            <p className="pb-3 text-sm tracking-wider text-zinc-400">MENTORSHIP</p>
            <ul>
              <li>Dai Foldes</li>
              <li>Victoria Rushton </li>
            </ul>
          </div>
          <div className="mb-10 basis-1/3 ">
            <p className="pb-3 text-sm tracking-wider text-zinc-400">VERSION</p>
            <ul>
              <li>2.0 — currently under revision!</li>
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

      <FontViewer />
      <CharacterViewer />
    </div>
  )
}
