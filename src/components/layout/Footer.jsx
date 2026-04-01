import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Logo size="md" className="mb-5" />
            <p className="font-body text-gray-400 leading-relaxed max-w-xs">Una familia que cría con amor, dedicación y responsabilidad desde 2016.</p>
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com/donairious2016" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-lg hover:bg-gold transition-all duration-200">📷</a>
              <a href="https://wa.me/595993514339" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-lg hover:bg-gold transition-all duration-200">💬</a>
            </div>
          </div>
          <div>
            <h4 className="font-display italic text-gold text-lg mb-5">Navegación</h4>
            <ul className="space-y-2.5">
              {['Inicio','Nosotros','Razas','Ejemplares','Proceso','Galería'].map(item => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="font-ui text-sm text-gray-400 hover:text-gold transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display italic text-gold text-lg mb-5">Contacto</h4>
            <p className="font-body text-gray-400 mb-2">📷 @donairious2016</p>
            <p className="font-body text-gray-400 mb-2">💬 WhatsApp disponible</p>
            <p className="font-body text-gray-400 mb-4">🌐 Registro FCI</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center">
        <p className="font-ui text-xs text-gray-500">© {new Date().getFullYear()} Donairious Kennel · Crianza Familiar Responsable</p>
      </div>
    </footer>
  )
}