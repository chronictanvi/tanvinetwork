import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Bio from '@/components/Bio'
import OtherPortfolio from '@/components/OtherPortfolio'
import DraggablePosterStack from '@/components/DraggablePosterStack'
import OpticalGrid from '@/components/OpticalGrid'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Home' })

export default function Home() {
  return (
    <>
      <Bio />
      <div className="overflow-x-hidden py-12">
        <div className="px-12">
          <h4 className="border-b border-gray-200 py-4 text-sm uppercase dark:border-gray-700">
            currently tinkering on on
          </h4>
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
            <div>
              <DraggablePosterStack />
              <div className="pt-4">
                <Link
                  href="/blog/posters"
                  className="hover:text-black-600 rounded-full border border-primary-400 bg-transparent p-3 text-xs font-medium uppercase leading-6 tracking-wide text-primary-400 hover:bg-primary-400 hover:text-white"
                >
                  Posters &rarr;
                </Link>
              </div>
            </div>
            <div className="p-10">
              <div className="w-[400px] max-w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Bridget Riley Simulator
                  </span>
                </div>
                <OpticalGrid className="h-[400px] w-[400px] max-w-full overflow-hidden [&_canvas]:!h-full [&_canvas]:!w-full" />
              </div>
              <div className="pt-4">
                <Link
                  href="/blog/experiments-example"
                  className="hover:text-black-600 rounded-full border border-primary-400 bg-transparent p-3 text-xs font-medium uppercase leading-6 tracking-wide text-primary-400 hover:bg-primary-400 hover:text-white"
                >
                  Experiments &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h4 className="border-b border-gray-200 py-4 text-sm uppercase dark:border-gray-700">
           Select Projects
          </h4>
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              calltoaction={d.calltoaction}
            />
          ))}
        </div>
        <div className="m-4 px-3 py-3 md:px-5">
          <OtherPortfolio />
        </div>
      </div>
    </>
  )
}
