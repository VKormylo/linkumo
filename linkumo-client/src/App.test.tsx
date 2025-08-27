import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app heading', () => {
  render(<App />)
  expect(screen.getByText(/Linkumo/i)).toBeInTheDocument()
})
