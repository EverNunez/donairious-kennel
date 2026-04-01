import { useState, useEffect } from 'react'
import { getDogs } from '../../services/dogsService'
import DogCard from '../ui/DogCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const FILTERS = [{ key:'todos',label:'Todos' },{ key:'pomerania',label:'Pomerania' },{ key:'yorkshire',label:'Yorkshire' }]

const DEMO = [
  { id:1, nombre:'Perla',     raza:'pomerania', color:'Blanco nieve',  descripcion:'Pequeña y delicada, su pelaje esponjoso parece algodón.',    estado:'disponible',   foto_url:null, visible:true },
  { id:2, nombre:'Valentina', raza:'yorkshire', color:'Dorado y azul', descripcion:'Elegante con sedoso pelaje bicolor. Carácter afectuoso.',     estado:'seleccionado', foto_url:null, visible:true },
  { id:3, nombre:'Azul',      raza:'pomerania', color:'Gris azulado',  descripcion:'Coloración excepcional. Pelaje grisáceo con destellos.',      estado:'disponible',   foto_url:null, visible:true },
  { id:4, nombre:'Luna',      raza:'yorkshire', color:'Bronceado',     descripcion:'Pequeña en tamaño, enorme en personalidad y ternura.',        estado:'disponible',   foto_url:null, visible:true },
  { id:5, nombre:'Chocolate', raza:'pomerania', color:'Marrón cálido', descripcion:'Pelaje chocolatado irresistible. Afectuoso y juguetón.',      estado:'disponible',   foto_url:null, visible:true },
  { id:6, nombre:'Isabela',   raza:'yorkshire', color:'Dorado suave',  descripcion:'Princesa de pelo sedoso y ojos brillantes. Muy cariñosa.',    estado:'disponible',   foto_url:null, visible:true },
]

export default function DogsSection() {
  const [dogs,    setDogs]    = useState([])
  const [filter,  setFilter]  = useState('todos')
  const [loading, setLoading] = useState(true)
  
  useScrollReveal()

  useEffect(() => {
  getDogs()
    .then(data => {
      setDogs(data || [])
    })
    .catch((err) => {
      console.error(err)
      setDogs([])
    })
    .finally(() => setLoading(false))
}, [])

  const filtered = filter === 'todos' ? dogs : dogs.filter(d => d.raza === filter)

  return (
    <section id="ejemplares" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-tag">✦ Nuestros ejemplares</div>
          <h2 className="section-title">Conoce a nuestros<br/>pequeños corazones</h2>
          <p className="section-subtitle mx-auto">Cada uno es especial. Criados en casa con amor y dedicación</p>
         
        </div>
        <div className="flex items-center justify-center gap-3 mb-12 reveal reveal-delay-1">
          {FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              className={`px-6 py-2.5 rounded-full font-ui text-sm font-bold tracking-widest uppercase transition-all duration-200 ${filter===f.key?'bg-gradient-to-r from-sky to-rose-light border border-gold text-gray-800 shadow-soft':'bg-cream text-gray-500 hover:bg-sky-pale'}`}>
              {f.label}
            </button>
          ))}
        </div>
        {loading
          ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">{[1,2,3,4,5,6].map(i=><div key={i} className="h-80 rounded-3xl bg-gradient-to-br from-sky-pale to-rose-pale animate-pulse"/>)}</div>
          : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              
            </div>
        }
      </div>
    </section>
  )
}