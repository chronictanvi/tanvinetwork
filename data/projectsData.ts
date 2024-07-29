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
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://thepeoplesay.org/',
  },
  {
    title: 'Data by Design',
    description: `Leading product design for a digital book chronicling the history of data visualisation.`,
    imgSrc: '/static/images/dxd.gif',
    href: 'https://dataxdesign.io',
  },


  {
    title: 'Coming soon: Comrade',
    description: `Exploring alternative ways of faciliatating conversation on digital platforms, taking into considertation the fluidity of information exchange and the impact of interpretation on dialogue. 
    for.`,
    imgSrc: '/static/images/comrade-cover.png',
    href: '',
  },

]

export default projectsData
