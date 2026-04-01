const RAZA_COLORS = {
  pomerania: { bg:'from-sky-pale to-sky-light',  badge:'badge',      label:'Lulú de Pomerania' },
  yorkshire: { bg:'from-rose-pale to-rose-light', badge:'badge-rose', label:'Yorkshire Terrier' },
}
const ESTADO_LABELS = {
  disponible:    { text:'Información disponible',   style:'badge-gold' },
  seleccionado:  { text:'Para familia responsable', style:'badge-rose' },
  no_disponible: { text:'No disponible',            style:'badge'      },
}

export default function DogCard({ dog }) {
  const raza   = RAZA_COLORS[dog.raza]     || RAZA_COLORS.pomerania
  const estado = ESTADO_LABELS[dog.estado] || ESTADO_LABELS.disponible
  return (
    <article className="card-base group cursor-pointer">
      <div className={`relative h-60 bg-gradient-to-br ${raza.bg} overflow-hidden`}>
        {dog.foto_url
          ? <img src={dog.foto_url} alt={dog.nombre} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          : <div className="w-full h-full flex items-center justify-center text-7xl">{dog.raza==='yorkshire'?'🐕‍🦺':'🐕'}</div>
        }
        <div className="absolute top-3 right-3"><span className={`${estado.style} shadow-sm`}>{estado.text}</span></div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl italic text-gray-800 mb-1">{dog.nombre}</h3>
        <div className={`${raza.badge} mb-2`}>{raza.label}</div>
        {dog.color && <p className="font-ui text-xs text-gray-400 tracking-wide mb-3">🎨 {dog.color}</p>}
        {dog.descripcion && <p className="font-body text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">{dog.descripcion}</p>}
        <a href="https://wa.me/595993514339" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-pale to-rose-pale border border-sky text-gray-600 font-ui text-xs font-bold tracking-widest uppercase hover:border-gold hover:text-gray-800 transition-all duration-200">
          💬 Consultar información
        </a>
      </div>
    </article>
  )
}