import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Mail, Lock } from 'lucide-react'
import toast from 'react-hot-toast'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await login(email, password)
      if (result?.token) {
        toast.success('تم تسجيل الدخول بنجاح')
        navigate('/dashboard')
      } else {
        toast.error('فشل تسجيل الدخول')
      }
    } catch (error) {
      toast.error('حدث خطأ ما')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white font-bold">SM</span>
            </div>
            <h1 className="text-2xl font-bold text-dark">صالون إدارة</h1>
            <p className="text-gray-600 mt-1">نظام إدارة الصالون والتجميل</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail size={18} className="absolute right-3 top-3 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pr-10"
                  placeholder="example@salon.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock size={18} className="absolute right-3 top-3 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-10"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-primary rounded"
              />
              <label htmlFor="remember" className="mr-2 text-sm text-gray-600">
                تذكرني
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary font-semibold mt-6"
            >
              {loading ? 'جاري التحميل...' : 'تسجيل الدخول'}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              هل نسيت كلمة المرور؟
              <a href="#" className="text-primary font-medium hover:underline mr-1">
                استرجاع كلمة المرور
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
