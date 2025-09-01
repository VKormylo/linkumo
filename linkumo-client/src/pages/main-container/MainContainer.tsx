import { Outlet } from 'react-router-dom'
import Sidebar from '~/components/sidebar/Sidebar'

const MainContainer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-10">
        <Outlet />
      </main>
    </div>
  )
}

export default MainContainer
