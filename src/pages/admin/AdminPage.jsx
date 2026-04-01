// pages/admin/AdminPage.jsx
import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../lib/AuthContext'
import { getAllDogs, createDog, updateDog, deleteDog, toggleVisibility } from '../../services/dogsService'
import Logo from '../../components/ui/Logo'
import toast from 'react-hot-toast'
 
const RAZA_LABELS  = { pomerania: 'Lulú de Pomerania', yorkshire: 'Yorkshire Terrier' }
const ESTADO_LABELS = { disponible: 'Información disponible', seleccionado: 'Para familia responsable', no_disponible: 'No disponible' }
 
// ─── FORM MODAL ────────────────────────────────────────────────────────────────
function DogForm({ initial, onSave, onClose }) {
  const [form,     setForm]     = useState(initial || { nombre:'', raza:'pomerania', color:'', descripcion:'', estado:'disponible' })
  const [preview,  setPreview]  = useState(initial?.foto_url || null)
  const [imgFile,  setImgFile]  = useState(null)
  const [saving,   setSaving]   = useState(false)
  const fileRef = useRef()
 
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
 
  const handleFile = e => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) { toast.error('La imagen debe ser menor a 5MB'); return }
    setImgFile(file)
    setPreview(URL.createObjectURL(file))
  }
 
  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.nombre.trim()) { toast.error('El nombre es obligatorio'); return }
    setSaving(true)
    try {
      if (initial) {
        await updateDog(initial.id, form, imgFile)
        toast.success('¡Ejemplar actualizado! 🌸')
      } else {
        await createDog({ ...form, imageFile: imgFile })
        toast.success('¡Ejemplar agregado! 🐾')
      }
      onSave()
    } catch (err) {
      toast.error('Error al guardar: ' + (err.message || 'Intenta de nuevo'))
    } finally {
      setSaving(false)
    }
  }
 
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-4xl shadow-float w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-7">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl text-gray-800">
              {initial ? 'Editar ejemplar' : 'Agregar ejemplar'}
            </h2>
            <button onClick={onClose} className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
              ✕
            </button>
          </div>
 
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Photo upload */}
            <div>
              <label className="label-field">Foto del ejemplar</label>
              <div
                onClick={() => fileRef.current?.click()}
                className="relative h-44 rounded-3xl border-2 border-dashed border-sky
                           bg-sky-pale hover:border-gold hover:bg-gold-pale
                           flex flex-col items-center justify-center gap-3
                           cursor-pointer transition-all duration-200 overflow-hidden"
              >
                {preview ? (
                  <>
                    <img src={preview} alt="preview" className="absolute inset-0 w-full h-full object-cover rounded-3xl" />
                    <div className="absolute inset-0 bg-black/30 rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <p className="text-white font-ui text-sm font-bold">Cambiar foto</p>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-4xl">📸</span>
                    <p className="font-ui text-sm text-gray-500">Toca para subir una foto</p>
                    <p className="font-ui text-xs text-gray-400">JPG, PNG · Máx 5MB</p>
                  </>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
            </div>
 
            {/* Nombre */}
            <div>
              <label className="label-field">Nombre del ejemplar *</label>
              <input name="nombre" value={form.nombre} onChange={handleChange}
                className="input-field" placeholder="Ej: Perla, Luna, Chocolate..." required />
            </div>
 
            {/* Raza */}
            <div>
              <label className="label-field">Raza *</label>
              <select name="raza" value={form.raza} onChange={handleChange} className="input-field appearance-none">
                <option value="pomerania">Lulú de Pomerania</option>
                <option value="yorkshire">Yorkshire Terrier</option>
              </select>
            </div>
 
            {/* Color */}
            <div>
              <label className="label-field">Color / Coloración</label>
              <input name="color" value={form.color} onChange={handleChange}
                className="input-field" placeholder="Ej: Blanco nieve, Gris azulado..." />
            </div>
 
            {/* Descripción */}
            <div>
              <label className="label-field">Descripción</label>
              <textarea name="descripcion" value={form.descripcion} onChange={handleChange}
                className="input-field resize-none" rows={3}
                placeholder="Describe el carácter, características especiales..." />
            </div>
 
            {/* Estado */}
            <div>
              <label className="label-field">Estado</label>
              <select name="estado" value={form.estado} onChange={handleChange} className="input-field appearance-none">
                <option value="disponible">Información disponible</option>
                <option value="seleccionado">Para familia responsable</option>
                <option value="no_disponible">No disponible</option>
              </select>
            </div>
 
            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onClose} className="btn-outline flex-1 justify-center">
                Cancelar
              </button>
              <button type="submit" disabled={saving} className="btn-primary flex-1 justify-center disabled:opacity-60">
                {saving ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-gray-700/30 border-t-gray-700 rounded-full animate-spin" />
                    Guardando...
                  </span>
                ) : (
                  initial ? '💾 Guardar cambios' : '🐾 Agregar ejemplar'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
 
// ─── MAIN ADMIN PAGE ──────────────────────────────────────────────────────────
export default function AdminPage() {
  const { user, signOut }        = useAuth()
  const [dogs,    setDogs]       = useState([])
  const [loading, setLoading]    = useState(true)
  const [modal,   setModal]      = useState(null) // null | 'new' | dog-object
  const [deleting, setDeleting]  = useState(null)
  const [filter,  setFilter]     = useState('todos')
 
  const loadDogs = async () => {
    try {
      setLoading(true)
      const data = await getAllDogs()
      setDogs(data)
    } catch (err) {
      toast.error('Error al cargar los datos de Supabase.')
      setDogs([])
    } finally {
      setLoading(false)
    }
  }
 
  useEffect(() => { loadDogs() }, [])
 
  const handleDelete = async (dog) => {
    if (!window.confirm(`¿Eliminar a ${dog.nombre}? Esta acción no se puede deshacer.`)) return
    setDeleting(dog.id)
    try {
      await deleteDog(dog.id, dog.foto_url)
      toast.success(`${dog.nombre} eliminado`)
      setDogs(prev => prev.filter(d => d.id !== dog.id))
    } catch (err) {
      toast.error('Error al eliminar: ' + (err.message || 'Intenta de nuevo'))
    } finally {
      setDeleting(null)
    }
  }
 
  const handleToggle = async (dog) => {
    try {
      const updated = await toggleVisibility(dog.id, dog.visible)
      setDogs(prev => prev.map(d => d.id === dog.id ? updated : d))
      toast.success(updated.visible ? `${dog.nombre} ahora es visible 👁️` : `${dog.nombre} oculto`)
    } catch {
      toast.error('Error al cambiar visibilidad')
    }
  }
 
  const filtered = filter === 'todos' ? dogs
    : filter === 'visible'  ? dogs.filter(d =>  d.visible)
    : filter === 'oculto'   ? dogs.filter(d => !d.visible)
    : dogs.filter(d => d.raza === filter)
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-pale/40 to-rose-pale/40">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-sky-light sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <div>
              <h1 className="font-display text-lg text-gray-800">Panel Admin</h1>
              <p className="font-ui text-xs text-gray-400">Donairious Kennel</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-ui text-xs text-gray-500 hidden sm:block">{user?.email}</p>
            <a href="/" target="_blank" className="btn-ghost text-xs hidden sm:flex">
              🌐 Ver sitio
            </a>
            <button onClick={signOut} className="btn-outline text-xs px-4 py-2">
              Salir
            </button>
          </div>
        </div>
      </header>
 
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label:'Total',      val: dogs.length,                          emoji:'🐾' },
            { label:'Visibles',   val: dogs.filter(d=>d.visible).length,     emoji:'👁️' },
            { label:'Pomerania',  val: dogs.filter(d=>d.raza==='pomerania').length, emoji:'🐕' },
            { label:'Yorkshire',  val: dogs.filter(d=>d.raza==='yorkshire').length, emoji:'🐕‍🦺' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-4 shadow-soft text-center border border-sky-light">
              <p className="text-2xl mb-1">{s.emoji}</p>
              <p className="font-display text-2xl font-bold text-gray-800">{s.val}</p>
              <p className="font-ui text-xs text-gray-400 tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
 
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {['todos','pomerania','yorkshire','visible','oculto'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full font-ui text-xs font-bold tracking-wide uppercase transition-all
                  ${filter === f
                    ? 'bg-gradient-to-r from-sky to-rose-light border border-gold text-gray-800'
                    : 'bg-white text-gray-500 hover:bg-sky-pale border border-transparent'
                  }`}
              >
                {f === 'todos' ? 'Todos' : f === 'visible' ? '👁️ Visibles' : f === 'oculto' ? '🙈 Ocultos' : f === 'pomerania' ? 'Pomerania' : 'Yorkshire'}
              </button>
            ))}
          </div>
          <button onClick={() => setModal('new')} className="btn-primary text-xs px-5 py-2.5">
            + Agregar ejemplar
          </button>
        </div>
 
        {/* Dogs list */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1,2,3].map(i => <div key={i} className="h-56 rounded-3xl bg-white animate-pulse shadow-soft" />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl shadow-soft border border-sky-light">
            <p className="text-5xl mb-4">🐾</p>
            <p className="font-display italic text-gray-400 text-xl mb-2">No hay ejemplares aquí</p>
            <p className="font-ui text-sm text-gray-300 mb-6">Agrega tu primer ejemplar para comenzar</p>
            <button onClick={() => setModal('new')} className="btn-primary">+ Agregar ejemplar</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(dog => (
              <div key={dog.id} className="bg-white rounded-3xl shadow-soft border border-sky-light overflow-hidden
                                           transition-all duration-200 hover:shadow-card">
                {/* Image */}
                <div className={`relative h-44 flex items-center justify-center
                  ${dog.raza === 'yorkshire'
                    ? 'bg-gradient-to-br from-rose-pale to-rose-light'
                    : 'bg-gradient-to-br from-sky-pale to-sky-light'
                  }`}
                >
                  {dog.foto_url ? (
                    <img src={dog.foto_url} alt={dog.nombre} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-6xl">{dog.raza === 'yorkshire' ? '🐕‍🦺' : '🐕'}</span>
                  )}
                  {/* Visible toggle */}
                  <button
                    onClick={() => handleToggle(dog)}
                    title={dog.visible ? 'Ocultar del sitio' : 'Mostrar en el sitio'}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur
                               flex items-center justify-center text-sm shadow-sm
                               hover:scale-110 transition-transform"
                  >
                    {dog.visible ? '👁️' : '🙈'}
                  </button>
                </div>
 
                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display text-lg text-gray-800 italic">{dog.nombre}</h3>
                      <p className="font-ui text-xs text-gold font-semibold tracking-wide">
                        {RAZA_LABELS[dog.raza]}
                      </p>
                    </div>
                    <span className={`badge-gold text-xs flex-shrink-0 ${!dog.visible ? 'opacity-50' : ''}`}>
                      {dog.visible ? 'Visible' : 'Oculto'}
                    </span>
                  </div>
                  {dog.color && <p className="font-ui text-xs text-gray-400 mb-1">🎨 {dog.color}</p>}
                  {dog.descripcion && (
                    <p className="font-body text-xs text-gray-500 mb-3 line-clamp-2">{dog.descripcion}</p>
                  )}
                  <p className="font-ui text-xs text-gray-400 mb-4">
                    📋 {ESTADO_LABELS[dog.estado] || dog.estado}
                  </p>
 
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setModal(dog)}
                      className="flex-1 py-2 rounded-xl bg-sky-pale border border-sky
                                 font-ui text-xs font-bold text-gray-600 tracking-wide
                                 hover:border-gold hover:bg-gold-pale transition-all duration-200"
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleDelete(dog)}
                      disabled={deleting === dog.id}
                      className="flex-1 py-2 rounded-xl bg-red-50 border border-red-100
                                 font-ui text-xs font-bold text-red-400 tracking-wide
                                 hover:bg-red-100 hover:border-red-300 transition-all duration-200
                                 disabled:opacity-50"
                    >
                      {deleting === dog.id ? '...' : '🗑️ Eliminar'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
 
      {/* Modal */}
      {modal && (
        <DogForm
          initial={modal === 'new' ? null : modal}
          onSave={() => { setModal(null); loadDogs() }}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}