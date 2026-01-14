import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import Auth from '~/pages/auth/Auth'
import AuthLogin from '~/pages/auth/auth-login/AuthLogin'
import AuthSignup from '~/pages/auth/auth-signup/AuthSignup'
import ComponentsPreview from '~/pages/components-preview-page/ComponentsPreview'
import Favorites from '~/pages/favorites/Favorites'
import Home from '~/pages/home/Home'
import MainContainer from '~/pages/main-container/MainContainer'
import MyCollections from '~/pages/my-collections/MyCollections'
import Settings from '~/pages/settings/Settings'
import VerifyEmail from '~/pages/verify-email/VerifyEmail'

import App from '~/App'

import { authCheck } from './loaders/authCheck'

export const routerConfig = (
  <Route element={<App />}>
    <Route path="/" element={<MainContainer />} loader={authCheck}>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/my-collections" element={<MyCollections />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
    <Route path="/auth" element={<Auth />}>
      <Route path="/auth/signup" element={<AuthSignup />} />
      <Route path="/auth/login" element={<AuthLogin />} />
    </Route>
    <Route path="/verify-email" element={<VerifyEmail />} />
    <Route path="/componentsPreview" element={<ComponentsPreview />} />
  </Route>
)

export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig)
)
