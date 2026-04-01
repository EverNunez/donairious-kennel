import { useState, useEffect } from 'react'
import { getDogs } from '../../services/dogsService'
import DogCard from '../ui/DogCard'

const FILTERS = [
  { key:'todos',     label:'Todos'     },
  { key:'pomerania', label:'Pomerania' },
  { key:'yorkshire', label:'Yorkshire' },
]

export default function DogsSection() {
  const [dogs,    setDogs]    = useState([])
  const [filter,  setFilter]  = useState('todos')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDogs()
      .then(data => setDogs(data || []))
      .catch(err => { console.error(err); setDogs([]) })
      .finally(() => setLoading(false))
  }, [])

  const filtered = filter === 'todos' ? dogs : dogs.filter(d => d.raza === filter)

  return (
    <section id="ejemplares" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-tag">✦ Nuestros ejemplares</div>
          <h2 className="section-title">Conoce a nuestros<br/>pequeños corazones</h2>
          <p className="section-subtitle mx-auto">Cada uno es especial. Criados en casa con amor y dedicación</p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-2.5 rounded-full font-ui text-sm font-bold tracking-widest uppercase transition-all duration-200 ${
                filter === f.key
                  ? 'bg-gradient-to-r from-sky to-rose-light border border-gold text-gray-800 shadow-soft'
                  : 'bg-cream text-gray-500 hover:bg-sky-pale'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-80 rounded-3xl bg-gradient-to-br from-sky-pale to-rose-pale animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🐾</p>
            <p className="font-display italic text-gray-400 text-xl">No hay ejemplares aún</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(dog => (
              <div key={dog.id}>
                <DogCard dog={dog} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
