import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import ContactInfo from './components/sections/ContactInfo'

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ContactInfo />
      </Layout>
    </ThemeProvider>
  )
}
