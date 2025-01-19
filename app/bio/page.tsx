import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <title>Bio</title>
      <meta name="description" content="Your bio page description here" />

      <main className="container mx-auto p-4">
        <h1 className="mb-4 text-4xl font-bold">Bio</h1>
        <p className="text-lg">
          Welcome to the bio page! This is where you can share your story, achievements, and other
          interesting information.
        </p>
      </main>
    </>
  )
}
