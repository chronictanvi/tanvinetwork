import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <section className="max-w-8xl xxl:max-w-5xl mx-auto sm:px-6 xl:px-0">{children}</section>
}
