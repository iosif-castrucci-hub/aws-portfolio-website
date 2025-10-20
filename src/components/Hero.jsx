import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'


export default function Hero({ sections }) {
const scrollToProjects = () => sections.projects?.current?.scrollIntoView({ behavior: 'smooth' })


return (
<div className="relative py-20 md:py-28">
{/* Glow Orbs */}
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
<div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
</div>


<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-center"
>
<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
Iosif Castrucci
</h1>
<p className="mt-4 text-lg md:text-xl text-slate-300">Solution Architect</p>
<p className="mt-3 max-w-2xl mx-auto text-slate-400">
Designing reliable, scalable solutions on AWS. I focus on IaC, automation, and secure-by-design architectures.
</p>


<div className="mt-8 flex items-center justify-center gap-3">
<a href="#projects" onClick={(e)=>{e.preventDefault(); scrollToProjects();}} className="btn">
View Projects <ArrowRight size={16} />
</a>
<a className="btn" href="https://github.com/iosif-castrucci-hub" target="_blank" rel="noreferrer">
<Github size={16}/> GitHub
</a>
<a className="btn" href="https://www.linkedin.com/in/iosifcastrucci" target="_blank" rel="noreferrer">
<Linkedin size={16}/> LinkedIn
</a>
</div>
</motion.div>
</div>
)
}
