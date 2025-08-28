import LogoIcon from '~/assets/logo.svg?react'
import AppRoutes from './routes'

function App() {
  return (
    <>
      <header className='flex items-center'>
        <a href='/'>
          <LogoIcon />
        </a>
        <a className='ml-10' href='/componentsPreview'>Components Preview</a>
      </header>
      <main>
        <AppRoutes />
      </main>
    </>
  )
}

export default App
