import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import headernav from '../public/static/favicons/android-chrome-512x512.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-10 ">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="hidden h-8 w-8 sm:block">
              {' '}
              <Image src={headernav} alt="Icon for Homepage" />{' '}
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-8 w-8 text-2xl font-semibold sm:block">
                {/* {siteMetadata.headerTitle} */}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
            >
              {link.title}
            </Link>
          ))}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
