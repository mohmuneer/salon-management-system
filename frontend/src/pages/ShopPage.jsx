import React, { useState } from 'react'
import { ShoppingCart, Search, Filter, Star } from 'lucide-react'

const ShopPage = () => {
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    { id: 1, name: 'شامبو تقوية الشعر', price: 65, category: 'shampoo', rating: 5, image: '🧴', inStock: true },
    { id: 2, name: 'بلسم ترطيب عميق', price: 75, category: 'conditioner', rating: 4, image: '🧴', inStock: true },
    { id: 3, name: 'زيت الأرجان الطبيعي', price: 150, category: 'oil', rating: 5, image: '🧴', inStock: true },
    { id: 4, name: 'كريم الوجه المرطب', price: 120, category: 'skincare', rating: 4, image: '🧴', inStock: true },
    { id: 5, name: 'ماسك الشعر الفاخر', price: 85, category: 'mask', rating: 5, image: '🧴', inStock: true },
    { id: 6, name: 'مجموعة العناية الكاملة', price: 350, category: 'sets', rating: 5, image: '🧴', inStock: false },
    { id: 7, name: 'سيرم تصفيف الشعر', price: 95, category: 'serum', rating: 4, image: '🧴', inStock: true },
    { id: 8, name: 'حمام كريمي للشعر', price: 110, category: 'bath', rating: 5, image: '🧴', inStock: true },
  ]

  const categories = [
    { value: 'all', label: 'الكل' },
    { value: 'shampoo', label: 'الشامبو' },
    { value: 'conditioner', label: 'البلسم' },
    { value: 'oil', label: 'الزيوت' },
    { value: 'skincare', label: 'العناية بالبشرة' },
    { value: 'mask', label: 'الأقنعة' },
  ]

  const filtered = products.filter(p => {
    const matchesSearch = p.name.includes(searchTerm)
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">متجرنا</h1>
            <div className="relative">
              <ShoppingCart size={32} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
          <p className="text-xl">منتجات تجميل عالية الجودة</p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 mb-6 flex-col md:flex-row">
            <div className="flex-1 relative">
              <Search size={20} className="absolute right-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن المنتج..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === cat.value
                    ? 'bg-primary text-white'
                    : 'bg-white text-dark border border-gray-300 hover:border-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              <p className="text-xl">لا توجد منتجات مطابقة</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {filtered.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  {/* Image */}
                  <div className="bg-gradient-to-br from-primary to-secondary h-48 flex items-center justify-center text-5xl relative">
                    {product.image}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-bold">نفذ المخزون</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-dark mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex gap-1 mb-3">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-primary">{product.price} ر.س</p>
                      <button
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
                        أضف
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <section className="py-12 bg-white sticky bottom-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-light rounded-lg p-6 flex justify-between items-center">
              <div>
                <p className="text-gray-600">المجموع: {cart.length} منتج</p>
                <p className="text-3xl font-bold text-primary">{totalPrice} ر.س</p>
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
                إتمام الشراء
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ShopPage
