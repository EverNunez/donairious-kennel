import { Navigate } from 'react-router-dom'
import { useAuth } from '../../lib/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-pale to-rose-pale">
      <div className="text-center">
        <div className="text-5xl animate-bounce mb-4">🐾</div>
        <p className="font-display italic text-gray-400 text-xl">Cargando...</p>
      </div>
    </div>
  )
  if (!user) return <Navigate to="/admin/login" replace />
  return children
}