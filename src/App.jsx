import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import StoryPage from './pages/StoryPage'
import NotFound from './pages/NotFound'

/** Restores the top of the page on navigation, or jumps to a #hash target. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section exists before scrolling to it.
      const id = requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return () => cancelAnimationFrame(id)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' })
    return undefined
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
