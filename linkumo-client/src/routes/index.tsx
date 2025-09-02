import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from '~/pages/auth/Auth'
import ComponentsPreview from '~/pages/components-preview-page/ComponentsPreview'
import Favorites from '~/pages/favorites/Favorites'
import Home from '~/pages/home/Home'
import MainContainer from '~/pages/main-container/MainContainer'
import MyCollections from '~/pages/my-collections/MyCollections'
import Settings from '~/pages/settings/Settings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/my-collections" element={<MyCollections />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/componentsPreview" element={<ComponentsPreview />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}
