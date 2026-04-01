import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ nombre:'', raza:'', mensaje:'' })
  const [sent, setSent] = useState(false)
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    if (!form.nombre.trim()) return
    const msg = encodeURIComponent(
      `¡Hola! Soy *${form.nombre}* y me gustaría conocer más sobre Donairious Kennel.` +
      (form.raza    ? `\n🐕 Raza: *${form.raza}*` : '') +
      (form.mensaje ? `\n💬 ${form.mensaje}` : '')
    )
    window.open(`https://wa.me/?text=${msg}`, '_blank')
    setSent(true)
  }
  return (
    <section id="contacto" className="py-28 bg-gradient-to-b from-sky-pale to-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="section-tag">✦ Contáctanos</div>
            <h2 className="section-title">Estamos aquí<br/>para orientarte</h2>
            <p className="font-body text-gray-500 leading-relaxed mb-8 text-lg">Escríbenos para conocer más sobre nuestros ejemplares y nuestro proceso de selección responsable.</p>
            <div className="space-y-4 mb-8">
              <a href="https://wa.me/595993514339" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 hover:border-emerald-400 hover:translate-x-1.5 transition-all duration-200">
                <span className="text-3xl">💬</span>
                <div><p className="font-display font-semibold text-gray-800">WhatsApp</p><p className="font-ui text-sm text-gray-500">Consulta información directamente</p></div>
              </a>
              <a href="https://instagram.com/donairious2016" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-rose-pale to-sky-pale border border-sky hover:border-gold hover:translate-x-1.5 transition-all duration-200">
                <span className="text-3xl">📷</span>
                <div><p className="font-display font-semibold text-gray-800">Instagram</p><p className="font-ui text-sm text-gray-500">@donairious2016</p></div>
              </a>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-3xl p-8 shadow-float border border-gold/10">
              {sent ? (
                <div className="text-center py-10">
                  <p className="text-5xl mb-4">🌸</p>
                  <h3 className="font-display text-2xl text-gray-800 mb-2">¡Mensaje enviado!</h3>
                  <p className="font-body text-gray-500 mb-6">Gracias por contactarnos. Te responderemos pronto.</p>
                  <button onClick={() => { setSent(false); setForm({ nombre:'', raza:'', mensaje:'' }) }} className="btn-outline">Enviar otro mensaje</button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl text-gray-800 mb-1">Envíanos un mensaje</h3>
                  <p className="font-body italic text-gray-400 mb-6">Cuéntanos sobre ti y lo que buscas</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div><label className="label-field">Tu nombre</label><input name="nombre" value={form.nombre} onChange={handleChange} className="input-field" placeholder="¿Cómo te llamas?" required /></div>
                    <div><label className="label-field">Raza de interés</label>
                      <select name="raza" value={form.raza} onChange={handleChange} className="input-field appearance-none">
                        <option value="">Selecciona una opción</option>
                        <option>Lulú de Pomerania</option><option>Yorkshire Terrier</option><option>Ambas razas</option><option>Necesito orientación</option>
                      </select>
                    </div>
                    <div><label className="label-field">Tu consulta</label><textarea name="mensaje" value={form.mensaje} onChange={handleChange} className="input-field resize-none" rows={4} placeholder="Cuéntanos qué quieres saber..."/></div>
                    <button type="submit" className="btn-primary w-full justify-center">Enviar consulta 💛</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}