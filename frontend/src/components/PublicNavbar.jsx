import React from 'react'

const PublicNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
              SM
            </div>
            <span className="hidden md:inline font-bold text-lg text-dark">صالون إدارة</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/" className="text-dark hover:text-primary transition">الرئيسية</a>
            <a href="/services" className="text-dark hover:text-primary transition">الخدمات</a>
            <a href="/gallery" className="text-dark hover:text-primary transition">أعمالنا</a>
            <a href="/shop" className="text-dark hover:text-primary transition">المتجر</a>
            <a href="/contact" className="text-dark hover:text-primary transition">تواصل معنا</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="border-2 border-primary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
              احجز موعد
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a href="/" className="block px-4 py-2 text-dark hover:bg-light rounded">
              الرئيسية
            </a>
            <a href="/services" className="block px-4 py-2 text-dark hover:bg-light rounded">
              الخدمات
            </a>
            <a href="/gallery" className="block px-4 py-2 text-dark hover:bg-light rounded">
              أعمالنا
            </a>
            <a href="/shop" className="block px-4 py-2 text-dark hover:bg-light rounded">
              المتجر
            </a>
            <a href="/contact" className="block px-4 py-2 text-dark hover:bg-light rounded">
              تواصل معنا
            </a>
            <button className="w-full border-2 border-primary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
              احجز موعد
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default PublicNavbar
