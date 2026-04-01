const BREEDS = [
  { name:'Lulú de Pomerania', origin:'🌍 Alemania / Polonia', emoji:'🐕', bg:'from-sky-pale to-sky', badge:'badge', desc:'Pequeños en tamaño, enormes en personalidad. Conocido por su exuberante pelaje esponjoso y carácter vivaz.', tags:['Pelaje esponjoso','Cariñoso','Inteligente','Juguetón'] },
  { name:'Yorkshire Terrier',  origin:'🌍 Inglaterra',         emoji:'🐕‍🦺', bg:'from-rose-pale to-rose', badge:'badge-rose', desc:'Elegancia pura en un pequeño cuerpo. Con su sedoso pelaje bicolor conquista todos los corazones.', tags:['Pelaje sedoso','Valiente','Leal','Elegante'], featured:true },
]

export default function BreedsSection() {
  return (
    <section id="razas" className="py-28 bg-gradient-to-b from-cream to-sky-pale">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-tag">✦ Nuestras razas</div>
          <h2 className="section-title">Amor por la raza,<br/>pasión por la crianza</h2>
          <p className="section-subtitle mx-auto">Dos razas excepcionales, criadas con los más altos estándares</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BREEDS.map((breed, i) => (
            <article key={breed.name} className={`card-base relative reveal reveal-delay-${i+1}`}>
              {breed.featured && <div className="absolute top-4 right-4 z-10 badge-gold shadow-sm">✦ Destacada</div>}
              <div className={`h-56 bg-gradient-to-br ${breed.bg} flex items-center justify-center`}>
                <span className="text-8xl animate-float" style={{ animationDelay:`${i}s` }}>{breed.emoji}</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-gray-800 mb-1">{breed.name}</h3>
                <p className="font-ui text-xs text-gray-400 tracking-wide mb-3">{breed.origin}</p>
                <p className="font-body text-gray-500 leading-relaxed mb-4">{breed.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {breed.tags.map(t => <span key={t} className={breed.badge}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}