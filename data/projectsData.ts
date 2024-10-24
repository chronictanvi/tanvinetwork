interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}
const projectsData = [
  {
    title: 'Spotify',
    description: `Unlocking new experiences tailored to audiences in Japan, by crafting social contexts in which music consumption gains meaning and value within the Spotify platform.  Under NDA. Reach out to access this case study. `,
    imgSrc: '/static/images/spot.jpeg',
    href: '/projects/spotify',
  },
  {
    title: 'The People Say',
    description: `A public platform to help policymakers and systems leaders better incorporate older Americans’ needs and preferences into social-scale programs. `,
    imgSrc: '/static/images/time-machine.png',
    href: 'https://thepeoplesay.org/',
  },
  {
    title: 'Comrade',
    description: `Exploring alternative ways of faciliatating conversation on digital platforms, taking into considertation the fluidity of information exchange and the impact of interpretation on dialogue. 
    for.`,
    imgSrc: '/static/images/comrade-cover.png',
    href: '/projects/comrade',
  },

  {
    title: 'Data by Design',
    description: `Leading product design for a digital book chronicling the history of data visualisation.`,
    imgSrc: '/static/images/dxd.gif',
    href: 'https://dataxdesign.io',
  },

  {
    title: 'Euripides',
    description: `Euripides is a reverse stress body typeface designed for Anne Carson's Grief Lessons, a translation of Four Plays by Euripides.    `,
    imgSrc: '/static/images/ERPD.gif',
    href: '/projects/euripides',
  },
]

export default projectsData
