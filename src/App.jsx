import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Products from './components/Products'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
