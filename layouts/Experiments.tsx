import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function ExperimentsLayout({ content, next, prev, children }: LayoutProps) {
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="px-4 md:px-8 lg:px-12">

        {/* Main Content */}
        <div className="py-12">
          <div className="prose prose-lg max-w-none dark:prose-invert">{children}</div>
        </div>

        {/* Horizontal Divider */}
        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Navigation Footer */}
        <footer className="py-12">
          <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
            {prev && prev.path && (
              <div>
                <Link
                  href={`/${prev.path}`}
                  className="text-primary-500 hover:text-primary-600 hover:underline dark:hover:text-primary-400"
                  aria-label={`Previous: ${prev.title}`}
                >
                  &larr; {prev.title}
                </Link>
              </div>
            )}
            {next && next.path && (
              <div className="sm:ml-auto">
                <Link
                  href={`/${next.path}`}
                  className="text-primary-500 hover:text-primary-600 hover:underline dark:hover:text-primary-400"
                  aria-label={`Next: ${next.title}`}
                >
                  {next.title} &rarr;
                </Link>
              </div>
            )}
          </div>
        </footer>
      </article>
    </SectionContainer>
  )
}
