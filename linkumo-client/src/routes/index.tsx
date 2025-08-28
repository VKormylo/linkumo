import { Routes, Route } from 'react-router-dom'
import ComponentsPreview from '~/pages/components-preview-page/ComponentsPreview'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/componentsPreview" element={<ComponentsPreview />} />
    </Routes>
  )
}
