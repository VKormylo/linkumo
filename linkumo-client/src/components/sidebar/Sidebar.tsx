import { NavLink } from 'react-router-dom'
import LogoIcon from '~/assets/logo.svg?react'
import HomeIcon from '~/assets/icons/home.svg?react'
import CollectionsIcon from '~/assets/icons/collections.svg?react'
import FavoritesIcon from '~/assets/icons/favorites.svg?react'
import SettingsIcon from '~/assets/icons/settings.svg?react'

const Sidebar = () => {
  const linkBase =
    'flex items-center gap-3 px-4 py-3 rounded transition-colors duration-200 rubik-16-regular'
  const linkActive = 'bg-primary-100 text-primary-800'
  const linkInactive =
    'text-primary-400 hover:bg-primary-100 hover:text-primary-800'

  return (
    <aside className="flex h-screen w-[346px] flex-col justify-between bg-gray-50 px-[38px] py-12">
      <div>
        <a href="/">
          <LogoIcon className="hover:cursor-pointer" />
        </a>

        <nav className="mt-12 flex flex-col gap-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            <HomeIcon />
            Home
          </NavLink>

          <NavLink
            to="/my-collections"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            <CollectionsIcon />
            My Collections
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            <FavoritesIcon />
            Favorites
          </NavLink>
        </nav>
      </div>

      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive} text-primary-800`
          }
        >
          <SettingsIcon />
          Settings
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar
