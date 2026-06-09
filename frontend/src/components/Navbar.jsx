import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, LogOut, Settings, User } from 'lucide-react'
import useLanguageStore from '../stores/languageStore'
import { t } from '../locales/translations'

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const language = useLanguageStore((state) => state.language)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
              SM
            </div>
            <span className="hidden md:inline font-bold text-lg text-dark">صالون إدارة</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/dashboard" className="text-dark hover:text-primary transition">
              {t('dashboard', language)}
            </Link>
            <Link to="/customers" className="text-dark hover:text-primary transition">
              {t('customers', language)}
            </Link>
            <Link to="/appointments" className="text-dark hover:text-primary transition">
              {t('appointments', language)}
            </Link>
            <Link to="/sales" className="text-dark hover:text-primary transition">
              {t('sales', language)}
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user && (
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-sm text-gray-600">{user.name}</span>
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}`}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-dark"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/dashboard" className="block px-4 py-2 text-dark hover:bg-light rounded">
              {t('dashboard', language)}
            </Link>
            <Link to="/customers" className="block px-4 py-2 text-dark hover:bg-light rounded">
              {t('customers', language)}
            </Link>
            <Link to="/appointments" className="block px-4 py-2 text-dark hover:bg-light rounded">
              {t('appointments', language)}
            </Link>
            <button
              onClick={onLogout}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-light rounded"
            >
              {t('logout', language)}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
