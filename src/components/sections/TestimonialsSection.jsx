const T = [
  { text:'Gracias a Donairious Kennel encontramos el integrante perfecto para nuestra familia. El acompañamiento fue increíble.', name:'Carolina M.', pet:'Mamá de Copito 🐕', avatar:'🌸', stars:5 },
  { text:'Nuestra Yorkita llegó sana, bien socializada y llena de amor. Miriam nos dio todo el apoyo necesario. ¡100% recomendados!', name:'Andrea & Familia', pet:'Dueños de Lucía 🐕‍🦺', avatar:'💛', stars:5 },
  { text:'Se nota que cada cachorro es criado con dedicación y amor genuino. Nuestro Pomerania es simplemente perfecto.', name:'Roberto P.', pet:'Papá de Max 🐕', avatar:'🌟', stars:5 },
  { text:'El proceso fue muy transparente. Nos orientaron perfectamente y hasta hoy siguen preguntando cómo está nuestra pequeña.', name:'Valentina R.', pet:'Mamá de Cannela 🐕‍🦺', avatar:'🎀', stars:5 },
  { text:'Con Donairious Kennel encontré profesionalismo, amor y calidad en cada detalle.', name:'Diego & Sofía', pet:'Dueños de Nube 🐕', avatar:'☁️', stars:5 },
  { text:'Nuestro Yorkie llegó con documentación y vacunas al día. El mejor regalo para nuestra familia.', name:'Marcela G.', pet:'Mamá de Miel 🐕‍🦺', avatar:'🍯', stars:5 },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-tag">✦ Familias felices</div>
          <h2 className="section-title">Lo que dicen las<br/>familias Donairious</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {T.map((t, i) => (
            <article key={i} className={`relative bg-gradient-to-br from-sky-pale to-rose-pale rounded-3xl p-7 border border-gold/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card reveal reveal-delay-${(i%3)+1}`}>
              <div className="absolute top-4 left-6 font-display text-7xl text-gold/20 leading-none select-none">"</div>
              <div className="relative">
                <div className="text-yellow-400 text-sm mb-3 tracking-wide">{'★'.repeat(t.stars)}</div>
                <p className="font-body italic text-gray-600 leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky to-gold-light border-2 border-gold flex items-center justify-center text-xl flex-shrink-0">{t.avatar}</div>
                  <div>
                    <p className="font-display text-gray-800">{t.name}</p>
                    <p className="font-ui text-xs text-gold font-semibold tracking-wide">{t.pet}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}