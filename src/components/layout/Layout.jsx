import Navbar from './Navbar'
import MobileNav from './MobileNav'
import Footer from './Footer'
import ThemeToggle from '../ui/ThemeToggle'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <main className="min-h-screen pb-16 md:pb-0">
        {children}
      </main>
      <MobileNav />
      <Footer />
    </>
  )
}
