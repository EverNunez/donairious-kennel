import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../lib/AuthContext'
import Logo from '../../components/ui/Logo'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [loading,  setLoading]  = useState(false)
  const { signIn } = useAuth()
  const navigate   = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await signIn(email, password)
      if (error) { toast.error('Credenciales incorrectas. Verifica tu correo y contraseña.') }
      else { toast.success('¡Bienvenida, Miriam! 🌸'); navigate('/admin') }
    } catch { toast.error('Error al conectar. Verifica tu conexión.') }
    finally  { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-pale via-rose-pale to-gold-pale flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2rem] shadow-float border border-gold/10 p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4"><Logo size="lg" /></div>
            <h1 className="font-display text-2xl text-gray-800 mb-1">Panel Administrador</h1>
            <p className="font-body italic text-gray-400">Donairious Kennel</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div><label className="label-field">Correo electrónico</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="input-field" placeholder="tu@correo.com" required /></div>
            <div><label className="label-field">Contraseña</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="input-field" placeholder="••••••••" required /></div>
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
              {loading ? 'Ingresando...' : '🔑 Ingresar al panel'}
            </button>
          </form>
          <div className="mt-6 p-4 rounded-2xl bg-gold-pale border border-gold-light text-center">
            <p className="font-ui text-xs text-gray-500">🔒 Solo para administradoras autorizadas.<br/>Acceso privado de Donairious Kennel.</p>
          </div>
          <div className="text-center mt-4">
            <a href="/" className="font-ui text-xs text-gray-400 hover:text-gray-600 transition-colors">← Volver a la página principal</a>
          </div>
        </div>
      </div>
    </div>
  )
}