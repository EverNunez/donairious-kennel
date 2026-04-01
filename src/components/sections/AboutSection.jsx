export default function AboutSection() {
  return (
    <section id="nosotros" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none" style={{background:'radial-gradient(circle,#c8eaf5,transparent)'}}/>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[440px] reveal">
            <div className="absolute top-0 left-0 w-[65%] h-[300px] rounded-3xl overflow-hidden shadow-float bg-gradient-to-br from-sky-pale to-sky-light flex items-center justify-center">
              <span className="text-8xl animate-float">🐕</span>
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[230px] rounded-3xl overflow-hidden shadow-card bg-gradient-to-br from-rose-pale to-rose-light flex items-center justify-center border-4 border-white">
              <span className="text-7xl animate-float [animation-delay:1.5s]">🐕‍🦺</span>
            </div>
            <div className="absolute top-[44%] left-[56%] -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gold rounded-2xl px-4 py-3 text-center shadow-gold z-10">
              <span className="text-2xl block mb-1">💛</span>
              <p className="font-display italic text-xs text-gray-600 leading-tight">Familia<br/>Donairious</p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="section-tag">✦ Quiénes somos</div>
            <h2 className="section-title">Una familia unida<br/>por el amor a los perros</h2>
            <p className="font-body text-gray-500 leading-relaxed mb-4 text-lg">Somos <strong className="text-gray-700">Donairious Kennel</strong>, un criadero familiar que cría con amor genuino desde 2016.</p>
            <p className="font-body text-gray-500 leading-relaxed mb-8 text-lg">Nos especializamos en <strong className="text-gray-700">Lulú de Pomerania</strong> y <strong className="text-gray-700">Yorkshire Terrier</strong>, criados en casa, con atención individual y cuidados veterinarios.</p>
            <div className="space-y-4">
              {[
                { icon:'🌸', title:'Crianza familiar',    desc:'Cada cachorro crece en un ambiente hogareño y lleno de amor' },
                { icon:'⭐', title:'Salud garantizada',   desc:'Controles veterinarios, vacunas y seguimiento constante' },
                { icon:'💙', title:'Acompañamiento real', desc:'Te orientamos antes, durante y después del proceso' },
              ].map(v => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-pale flex items-center justify-center text-xl flex-shrink-0">{v.icon}</div>
                  <div>
                    <p className="font-display font-semibold text-gray-800">{v.title}</p>
                    <p className="font-body text-sm text-gray-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}