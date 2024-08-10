interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}
const projectsData = [
  {
    title: 'Comrade',
    description: `Exploring alternative ways of faciliatating conversation on digital platforms, taking into considertation the fluidity of information exchange and the impact of interpretation on dialogue. 
    for.`,
    imgSrc: '/static/images/comrade-cover.png',
    href: '/projects/comrade',
  },
  {
    title: 'Spotify',
    description: `Unlocking new experiences tailored to audiences in Japan, by crafting social contexts in which music consumption gains meaning and value within the Spotify platform.    `,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/projects/spotify',
  },
]

export default projectsData
