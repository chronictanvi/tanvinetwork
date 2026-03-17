'use client'

import OpticalGrid from '@/components/OpticalGrid'
import {
  ExperimentRow,
  ExperimentTitle,
  ExperimentDesc,
  ExperimentMedia,
} from '@/components/ExperimentComponents'
import Link from 'next/link'

export default function ExperimentsShowcase() {
  return (
    <div className="p-12">
 <ExperimentRow>
  <ExperimentTitle>Dubois Explorer</ExperimentTitle>
  <ExperimentDesc>
    Studies for the print cover for Data by Design. 
  </ExperimentDesc>
  <ExperimentMedia>
    <div className=" " style={{position: 'relative', paddingBottom: '56.13%', height: 0, overflow: 'hidden'}}>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/1173813048?h=ef139ffbe0&title=0&byline=0&portrait=0&loop=1" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}></iframe>
    </div>
  </ExperimentMedia>
  
</ExperimentRow>
   
 
    </div>
  )
}
