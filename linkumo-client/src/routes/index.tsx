import { Routes, Route } from 'react-router-dom'
import Auth from '~/pages/auth/Auth'
import ComponentsPreview from '~/pages/components-preview-page/ComponentsPreview'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/componentsPreview" element={<ComponentsPreview />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}
