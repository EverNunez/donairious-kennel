const STEPS = [
  { num:'01', icon:'💬', title:'Consulta Inicial',          desc:'Nos contactas por WhatsApp o Instagram. Conversamos sobre tus expectativas y la raza que más se adapta a ti.' },
  { num:'02', icon:'🌸', title:'Orientación Personalizada', desc:'Te presentamos los ejemplares con toda la información: características, temperamento y cuidados.' },
  { num:'03', icon:'⭐', title:'Selección Responsable',     desc:'Juntos elegimos el ejemplar ideal. Priorizamos el bienestar del cachorro y tu compatibilidad familiar.' },
  { num:'04', icon:'💛', title:'Seguimiento y Amor',        desc:'Una vez que el cachorro llega a su nuevo hogar, seguimos en contacto. Tu éxito es nuestro éxito.' },
]

export default function ProcessSection() {
  const scroll = () => { const el = document.querySelector('#contacto'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior:'smooth' }) }
  return (
    <section id="proceso" className="py-28 bg-gradient-to-br from-sky-pale via-rose-pale to-gold-pale relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16 reveal">
          <div className="section-tag">✦ Nuestro proceso</div>
          <h2 className="section-title">Acompañamiento<br/>personalizado</h2>
          <p className="section-subtitle mx-auto">Te guiamos en cada paso para que la experiencia sea especial</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.num} className={`reveal reveal-delay-${i+1}`}>
              <div className="bg-white rounded-3xl p-7 shadow-soft h-full relative transition-all duration-300 hover:-translate-y-2 hover:shadow-float">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-sky to-gold-light border-2 border-white shadow-gold flex items-center justify-center font-ui text-xs font-bold text-gray-700">{step.num}</div>
                <div className="text-4xl mb-4 mt-2 text-center">{step.icon}</div>
                <h3 className="font-display text-lg text-gray-800 text-center mb-3">{step.title}</h3>
                <p className="font-body text-sm text-gray-500 text-center leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14 reveal">
          <p className="font-display italic text-gray-400 text-xl mb-5">¿Listo para comenzar?</p>
          <button onClick={scroll} className="btn-primary">Consultar información</button>
        </div>
      </div>
    </section>
  )
}