import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import {
  ExperimentRow,
  ExperimentTitle,
  ExperimentDesc,
  ExperimentMedia,
  // ExperimentLinks,
  ExperimentCard,
  ExperimentCardGrid,
  ExperimentCardContent,
  ExperimentCardActions,
  VideoEmbed,
} from './ExperimentComponents'
import OpticalGrid from './OpticalGrid'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  ExperimentRow,
  ExperimentTitle,
  ExperimentDesc,
  ExperimentMedia,
  // ExperimentLinks,
  ExperimentCard,
  ExperimentCardGrid,
  ExperimentCardContent,
  ExperimentCardActions,
  VideoEmbed,
  OpticalGrid,
}
