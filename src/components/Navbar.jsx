import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'


const navItems = [
{ id: 'home', label: 'Home' },
{ id: 'projects', label: 'Projects' },
{ id: 'skills', label: 'Skills' },
{ id: 'about', label: 'About' },
{ id: 'contact', label: 'Contact' },
]


export default function Navbar({ sections }) {
const [open, setOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)


useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 8)
window.addEventListener('scroll', onScroll)
return () => window.removeEventListener('scroll', onScroll)
}, [])


const scrollTo = (id) => {
const ref = sections[id]
if (ref?.current) {
ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
setOpen(false)
}
}


return (
<div className={`sticky top-0 z-50 transition ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-800' : ''}`}>
<nav className="section py-4 flex items-center justify-between">
<a href="#home" onClick={(e)=>{e.preventDefault();scrollTo('home')}} className="font-semibold tracking-tight">Iosif Castrucci</a>


<div className="hidden md:flex gap-6 text-sm">
{navItems.map(item => (
<a key={item.id} href={`#${item.id}`} onClick={(e)=>{e.preventDefault();scrollTo(item.id)}} className="text-slate-300 hover:text-slate-100">
{item.label}
</a>
))}
</div>


<button className="md:hidden btn" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
{open ? <X size={18}/> : <Menu size={18}/>}
</button>
</nav>


{open && (
<div className="md:hidden section pb-4">
<div className="card p-2 divide-y divide-slate-800">
{navItems.map(item => (
<button key={item.id} onClick={()=>scrollTo(item.id)} className="w-full text-left px-3 py-3 hover:bg-slate-800/60">
{item.label}
</button>
))}
</div>
</div>
)}
</div>
)
}
