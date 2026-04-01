import Logo from '../ui/Logo'

export default function HeroSection() {
  const scroll = (href) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior:'smooth' })
  }
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-pale via-rose-pale to-cream">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-40 animate-float" style={{background:'radial-gradient(circle,#c8eaf5,transparent)'}}/>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-35 animate-float [animation-delay:2s]" style={{background:'radial-gradient(circle,#fcd9e4,transparent)'}}/>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center animate-fade-up">
        <div className="section-tag mb-6">✦ Crianza Familiar Responsable desde 2016 ✦</div>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Logo size="hero" />
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-gold/30 animate-[spin_20s_linear_infinite]"/>
            <div className="absolute -inset-6 rounded-full border border-dotted border-sky/30 animate-[spin_30s_linear_infinite_reverse]"/>
          </div>
        </div>
        <h1 className="font-display font-bold leading-[1.1] mb-5">
          <span className="block text-4xl md:text-6xl text-gray-800">Amor, Dedicación</span>
          <span className="block text-4xl md:text-6xl text-gradient">& Crianza Responsable</span>
        </h1>
        <p className="section-subtitle mx-auto mb-10 text-gray-500">
          Especialistas en <em className="text-gold not-italic font-medium">Lulú de Pomerania</em> y <em className="text-gold not-italic font-medium">Yorkshire Terrier</em>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button onClick={() => scroll('#ejemplares')} className="btn-primary">Ver Ejemplares</button>
          <button onClick={() => scroll('#contacto')}   className="btn-outline">Contactar</button>
        </div>
        <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full glass shadow-soft">
          <div className="text-center"><p className="font-display text-2xl font-bold text-gray-800">+8</p><p className="font-ui text-[10px] tracking-widest uppercase text-gray-400">Años</p></div>
          <div className="w-px h-8 bg-sky-light"/>
          <div className="text-center"><p className="font-display text-2xl font-bold text-gray-800">FCI</p><p className="font-ui text-[10px] tracking-widest uppercase text-gray-400">Registro</p></div>
          <div className="w-px h-8 bg-sky-light"/>
          <div className="text-center"><p className="text-2xl">💛</p><p className="font-ui text-[10px] tracking-widest uppercase text-gray-400">Amor</p></div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-ui text-[10px] tracking-[0.15em] uppercase text-gray-400">
        <span>Descubre más</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"/>
      </div>
    </section>
  )
}