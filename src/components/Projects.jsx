import { motion } from 'framer-motion'


{projects.length === 0 ? (
<EmptyState />
) : (
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{projects.map((p, i) => (
<motion.a
href={p.link || '#'}
target={p.link ? '_blank' : undefined}
rel={p.link ? 'noreferrer' : undefined}
key={i}
className="card p-4 hover:bg-slate-900/80 transition block"
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.3, delay: i * 0.05 }}
>
<div className="flex items-center justify-between">
<h3 className="font-semibold text-lg">{p.title}</h3>
{p.year && <span className="text-xs text-slate-400">{p.year}</span>}
</div>
{p.description && <p className="mt-2 text-slate-300 text-sm">{p.description}</p>}
{Array.isArray(p.tags) && p.tags.length > 0 && (
<div className="mt-3 flex flex-wrap gap-2">
{p.tags.map((t, idx) => <span key={idx} className="tag">{t}</span>)}
</div>
)}
</motion.a>
))}
</div>
)}
</div>
)
}


function EmptyState(){
return (
<div className="card mt-8 p-6">
<h3 className="font-semibold">No projects yet</h3>
<p className="text-slate-300 mt-2 text-sm">
Add your first project by editing <code>src/data/projects.json</code> and pushing to GitHub. The UI updates automatically.
</p>
<pre className="mt-4 text-xs overflow-auto bg-slate-950/60 p-4 rounded-xl border border-slate-800">
{`[
{
"title": "Serverless API on AWS",
"description": "API Gateway + Lambda + DynamoDB with IaC",
"tags": ["API Gateway", "Lambda", "DynamoDB", "IaC"],
"link": "https://github.com/your-repo",
"year": 2025
}
]`}
</pre>
</div>
)
}
