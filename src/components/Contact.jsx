import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'


export default function Contact(){
return (
<motion.div
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.35 }}
className="card p-6"
>
<h2 className="section-title">Contact</h2>
<p className="section-subtitle">Let's connect.</p>


<div className="mt-4 flex flex-col md:flex-row gap-3">
<a className="btn" href="mailto:contact@yourdomain.com">
<Mail size={16}/> Email
</a>
<a className="btn" href="https://github.com/iosif-castrucci-hub" target="_blank" rel="noreferrer">
<Github size={16}/> GitHub
</a>
<a className="btn" href="https://www.linkedin.com/in/iosifcastrucci" target="_blank" rel="noreferrer">
<Linkedin size={16}/> LinkedIn
</a>
</div>
</motion.div>
)
}
