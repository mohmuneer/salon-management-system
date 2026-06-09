import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { Toaster } from 'react-hot-toast'

// Shared Components
import PublicNavbar from './components/PublicNavbar'
import Navbar from './components/Navbar'
ProtectedRoute from './components/ProtectedRoute'

// Public Pages
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import ShopPage from './pages/ShopPage'

// Auth Pages
import LoginPage from './pages/LoginPage'

// Dashboard Pages
import DashboardPage from './pages/DashboardPage'
import CustomersPage from './pages/CustomersPage'

import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><PublicNavbar /><HomePage /></>} />
          <Route path="/services" element={<><PublicNavbar /><ServicesPage /></>} />
          <Route path="/gallery" element={<><PublicNavbar /><GalleryPage /></>} />
          <Route path="/contact" element={<><PublicNavbar /><ContactPage /></>} />
          <Route path="/shop" element={<><PublicNavbar /><ShopPage /></>} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <CustomersPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster position="top-right" />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
