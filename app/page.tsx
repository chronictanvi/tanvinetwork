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
        <div className="px-5 md:px-12">
          <h4 className="border-b border-gray-200 py-4 text-sm uppercase dark:border-gray-700">
            currently tinkering on
          </h4>
          <div className="grid grid-cols-1 gap-24 md:gap-8  py-8 md:grid-cols-2 md:items-end">
            <div className="flex flex-col items-center">
              <DraggablePosterStack />
              <div className="pt-4 text-center">
                <Link
                  href="/blog/posters"
                  className="hover:text-black-600 rounded-full border border-primary-400 bg-transparent p-3 text-xs font-medium uppercase leading-6 tracking-wide text-primary-400 hover:bg-primary-400 hover:text-white"
                >
                  Posters ↗
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[400px] max-w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 border-b border-gray-200 bg-slate-100 px-3 py-2 dark:border-gray-700 dark:bg-slate-800">
                  {/* <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" /> 
                  </div> */}
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-300">
                    Bridget Riley Simulator
                  </span>
                </div>
                <OpticalGrid className="h-[400px] w-[400px] max-w-full overflow-hidden [&_canvas]:!h-full [&_canvas]:!w-full" />
              </div>
              <div className="pt-8 text-center">
                <Link
                  href="/blog/experiments-example"
                  className="hover:text-black-600 rounded-full border border-primary-400 bg-transparent p-3 text-xs font-medium uppercase leading-6 tracking-wide text-primary-400 hover:bg-primary-400 hover:text-white"
                >
                  Experiments ↗
                </Link>
              </div>
            </div>
          </div>
         
        </div>

   <div className="px-5 md:px-12 mt-12 md:mt-32">
          <h4 className="border-b border-gray-200 py-4 text-sm uppercase dark:border-gray-700">
          select projects 
          </h4>
          </div>


        <div className="container mt-12 md:mt-12">
         
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
        {/* <div className="m-4 px-3 py-3 md:px-5">
          <OtherPortfolio />
        </div> */}
      </div>
    </>
  )
}
