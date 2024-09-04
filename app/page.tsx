import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 px-10 dark:divide-gray-700 md:px-20">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I'm a Design Fellow at{' '}
            <Link className="underline" href="https://www.publicpolicylab.org/">
              Public Policy Lab
            </Link>
            .
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I did my Masters in Interactive Digital Media at NYU Tandon.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here's some work I've done recently:
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 ">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
