import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Komal | Graphic Designer</title>
        <meta name="description" content="I’m a passionate graphic designer. Within my designs I value simplicity, symmetry and detail. 
            Whether I'm designing books, branding, logo, packaging or websites. I always strive for beauty and balance." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
