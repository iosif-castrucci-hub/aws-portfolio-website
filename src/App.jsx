import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'


export default function App() {
const sections = {
home: useRef(null),
projects: useRef(null),
skills: useRef(null),
about: useRef(null),
contact: useRef(null),
}


return (
<div className="min-h-screen bg-aws-gradient">
<Navbar sections={sections} />


<main>
<section ref={sections.home} id="home" className="section">
<Hero sections={sections} />
</section>


<section ref={sections.projects} id="projects" className="section mt-24">
<Projects />
</section>


<section ref={sections.skills} id="skills" className="section mt-24">
<Skills />
</section>


<section ref={sections.about} id="about" className="section mt-24">
<About />
</section>


<section ref={sections.contact} id="contact" className="section mt-24 mb-28">
<Contact />
</section>
</main>


<footer className="section pb-10 text-center text-sm text-slate-500">
© {new Date().getFullYear()} Iosif Castrucci — All rights reserved.
</footer>
</div>
)
}
