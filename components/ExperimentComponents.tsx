import { ReactNode } from 'react'

interface ExperimentRowProps {
  children: ReactNode
}

export function ExperimentRow({ children }: ExperimentRowProps) {
  return (
    <div className="grid grid-cols-1 gap-6 border-b border-gray-200 last:border-b-0 dark:border-gray-700 md:grid-cols-[2fr_3fr_5fr] md:items-start">
      {children}
    </div>
  )
}

interface ExperimentTitleProps {
  children: ReactNode
}

export function ExperimentTitle({ children }: ExperimentTitleProps) {
  return <div className="text-lg  pt-4 font-bold leading-snug">{children}</div>
}

interface ExperimentDescProps {
  children: ReactNode
}

export function ExperimentDesc({ children }: ExperimentDescProps) {
  return <div className="text-sm text-gray-600 dark:text-gray-400">{children}</div>
}

interface ExperimentMediaProps {
  children: ReactNode
}

export function ExperimentMedia({ children }: ExperimentMediaProps) {
  return (
    <div className="w-full [&>iframe]:min-h-[400px] [&>iframe]:w-full  [&>iframe]:border-0 [&>img]:w-full  [&>video]:min-h-[300px] [&>video]:w-full ">
      {children}
    </div>
  )
}

// interface ExperimentLinksProps {
//   children: ReactNode
// }

// export function ExperimentLinks({ children }: ExperimentLinksProps) {
//   return (
//     <div className="flex flex-col gap-2 text-sm [&>a]:text-red-500 [&>a]:no-underline [&>a]:transition-all hover:[&>a]:underline">
//       {children}
//     </div>
//   )
// }

// Alternative card-style layout
interface ExperimentCardProps {
  children: ReactNode
}

export function ExperimentCard({ children }: ExperimentCardProps) {
  return (
    <div className="border-b border-gray-200 py-8 last:border-b-0 dark:border-gray-700">
      {children}
    </div>
  )
}

interface ExperimentCardGridProps {
  children: ReactNode
}

export function ExperimentCardGrid({ children }: ExperimentCardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">{children}</div>
  )
}

interface ExperimentCardContentProps {
  children: ReactNode
}

export function ExperimentCardContent({ children }: ExperimentCardContentProps) {
  return (
    <div className="flex flex-col gap-4 [&>h3]:m-0 [&>h3]:text-xl [&>h3]:font-bold [&>p]:m-0 [&>p]:text-[0.95rem] [&>p]:leading-relaxed [&>p]:text-gray-600 dark:[&>p]:text-gray-400">
      {children}
    </div>
  )
}

interface ExperimentCardActionsProps {
  children: ReactNode
}

export function ExperimentCardActions({ children }: ExperimentCardActionsProps) {
  return (
    <div className="mt-2 flex gap-4 [&>a]:text-sm [&>a]:text-red-500 [&>a]:no-underline hover:[&>a]:underline">
      {children}
    </div>
  )
}

// Video embed component
interface VideoEmbedProps {
  src: string
  title?: string
  autoplay?: boolean
}

export function VideoEmbed({ src, title = 'Video', autoplay = false }: VideoEmbedProps) {
  const autoplayParams = autoplay ? '&autoplay=1&muted=1' : ''
  return (
    <iframe
      src={`${src}${autoplayParams}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video w-full rounded-md border border-gray-200 dark:border-gray-700"
    />
  )
}
