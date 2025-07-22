import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import { useState } from 'react'
import Bio from '@/components/Bio'
import OtherPortfolio from '@/components/OtherPortfolio'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <Bio />
      <div className="  overflow-x-hidden py-12">
        <div className="container m-4">
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
        {/* <div className="m-4 px-12 py-3 ">
          <OtherPortfolio />
        </div> */}
      </div>
    </>
  )
}
