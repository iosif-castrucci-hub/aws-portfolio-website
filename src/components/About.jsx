import { motion } from 'framer-motion'


export default function About(){
return (
<motion.div
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.35 }}
className="card p-6"
>
<h2 className="section-title">About</h2>
<p className="section-subtitle">A quick summary of who I am.</p>
<p className="mt-4 text-slate-300">
I'm <strong>Iosif Castrucci</strong>, a Solution Architect specialized in designing scalable, reliable cloud systems on AWS.
My focus areas include infrastructure as code, serverless architectures, and security-by-design.
</p>
<p className="mt-3 text-slate-300">
I enjoy turning business requirements into robust architectures, with an emphasis on automation (CI/CD) and cost-efficiency.
</p>
</motion.div>
)
}
