const ITEMS = [
  { emoji:'🐕',   bg:'from-sky-pale to-sky',         tall:true  },
  { emoji:'🐕‍🦺', bg:'from-rose-pale to-rose',       tall:false },
  { emoji:'🐕',   bg:'from-sky-light to-sky-dark',   tall:false },
  { emoji:'🐕‍🦺', bg:'from-rose-light to-rose-dark', tall:false },
  { emoji:'🐕',   bg:'from-gold-pale to-gold-light', tall:true  },
  { emoji:'🐕‍🦺', bg:'from-sky-pale to-rose-pale',   tall:false },
]

export default function GallerySection() {
  return (
    <section id="galeria" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-tag">✦ Galería</div>
          <h2 className="section-title">Momentos que<br/>llenan el corazón</h2>
          <p className="section-subtitle mx-auto">Instantes únicos de nuestros ejemplares</p>
        </div>
        <div className="grid grid-cols-3 auto-rows-[180px] gap-3 mb-10 reveal reveal-delay-1">
          {ITEMS.map((item, i) => (
            <a key={i} href="https://instagram.com/donairious2016" target="_blank" rel="noopener noreferrer"
               className={`rounded-2xl overflow-hidden relative group cursor-pointer bg-gradient-to-br ${item.bg} flex items-center justify-center ${item.tall?'row-span-2':''}`}>
              <span className="text-6xl transition-transform duration-500 group-hover:scale-110 drop-shadow-lg">{item.emoji}</span>
              <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-rose/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center">
                <span className="text-2xl">💛</span>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center reveal reveal-delay-2">
          <a href="https://instagram.com/donairious2016" target="_blank" rel="noopener noreferrer" className="btn-outline">📷 Ver más en @donairious2016</a>
        </div>
      </div>
    </section>
  )
}