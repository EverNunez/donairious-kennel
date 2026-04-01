import { useState, useEffect } from 'react'
import Logo from '../ui/Logo'

const NAV_LINKS = [
  { label:'Inicio',     href:'#inicio'     },
  { label:'Nosotros',   href:'#nosotros'   },
  { label:'Razas',      href:'#razas'      },
  { label:'Ejemplares', href:'#ejemplares' },
  { label:'Proceso',    href:'#proceso'    },
  { label:'Galería',    href:'#galeria'    },
  { label:'Familias',   href:'#testimonios'},
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (e, href) => {
    e.preventDefault(); setOpen(false)
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior:'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-soft py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#inicio" onClick={e => go(e,'#inicio')}><Logo size="sm" /></a>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}><a href={href} onClick={e => go(e,href)} className="btn-ghost text-xs">{label}</a></li>
          ))}
        </ul>
        <a href="#contacto" onClick={e => go(e,'#contacto')} className="hidden lg:flex btn-primary text-xs px-5 py-2.5">Contacto</a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-xl hover:bg-sky-pale transition-colors">
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${open?'rotate-45 translate-y-2':''}`}/>
            <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${open?'opacity-0':''}`}/>
            <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${open?'-rotate-45 -translate-y-2':''}`}/>
          </div>
        </button>
      </div>
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open?'max-h-96 opacity-100':'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-sky-light px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={e => go(e,href)} className="py-2.5 px-4 rounded-xl font-ui text-sm font-semibold text-gray-600 hover:bg-sky-pale">{label}</a>
          ))}
          <a href="#contacto" onClick={e => go(e,'#contacto')} className="mt-2 btn-primary justify-center">Contacto</a>
        </div>
      </div>
    </nav>
  )
}