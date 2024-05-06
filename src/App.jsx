// React
// import { useState } from 'react'
// Router
import RootLayout from './styles/layout/RootLayer/RootLayout'
import PageError from './components/PageError/PageError'
import Home from './pages/Home/Home'
import Game from './pages/Game/Game'
import Contact from './pages/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Style
import './styles/styles.scss'
// MUI
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import originalTheme from './styles/themes/Themes'
// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from './features/ModeTheme/modeThemeSlice'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/game',
        element: <Game />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

function App() {
  const { modeTheme } = useSelector(modeThemeSelector)
  const { theme } = originalTheme(modeTheme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
