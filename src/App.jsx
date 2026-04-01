import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './lib/AuthContext'
import ProtectedRoute from './components/ui/ProtectedRoute'
import Navbar    from './components/layout/Navbar'
import Footer    from './components/layout/Footer'
import HomePage  from './pages/HomePage'
import LoginPage from './pages/admin/LoginPage'
import AdminPage from './pages/admin/AdminPage'

function PublicLayout() {
  return (
    <>
      <Navbar />
      <main><HomePage /></main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-center" toastOptions={{ style: { borderRadius:'16px', border:'1px solid #c8eaf5', fontFamily:'"Lato",sans-serif' } }} />
        <Routes>
          <Route path="/" element={<PublicLayout />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
          <Route path="*" element={<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}><a href="/">Volver al inicio</a></div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}