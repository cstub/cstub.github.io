import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/terminal.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { FaRobot } from 'react-icons/fa'
const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-1">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <>
              <div className="block text-2xl font-semibold sm:hidden">CS</div>
              <div className="hidden text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            </>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-3">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto pr-2 sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="m-1 block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <Link href="/llm" aria-label="LLM Input">
          <FaRobot
            size={24}
            className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
          />
        </Link>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
