import React, { useState } from 'react'
import { Star } from 'lucide-react'

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryItems = [
    { id: 1, category: 'hairstyle', title: 'تسريحة عصرية', image: '💇‍♀️', rating: 5 },
    { id: 2, category: 'color', title: 'صبغة احترافية', image: '🎨', rating: 5 },
    { id: 3, category: 'makeup', title: 'مكياج سهرة', image: '💄', rating: 4 },
    { id: 4, category: 'hairstyle', title: 'قصة حديثة', image: '✂️', rating: 5 },
    { id: 5, category: 'color', title: 'تفتيح ولون', image: '🌈', rating: 5 },
    { id: 6, category: 'makeup', title: 'مكياج طبيعي', image: '✨', rating: 4 },
    { id: 7, category: 'nails', title: 'تصميم أظافر', image: '💅', rating: 5 },
    { id: 8, category: 'bride', title: 'مكياج العروس', image: '👰', rating: 5 },
    { id: 9, category: 'hairstyle', title: 'تسريحة زفاف', image: '👑', rating: 5 },
  ]

  const categories = [
    { value: 'all', label: 'الكل' },
    { value: 'hairstyle', label: 'تسريح' },
    { value: 'color', label: 'صبغة' },
    { value: 'makeup', label: 'مكياج' },
    { value: 'nails', label: 'أظافر' },
    { value: 'bride', label: 'عروس' },
  ]

  const filtered = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">معرض أعمالنا</h1>
          <p className="text-xl">تصفح أحدث أعمالنا وإبداعاتنا</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category.value
                    ? 'bg-primary text-white'
                    : 'bg-white text-dark border-2 border-primary hover:bg-light'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                {/* Image */}
                <div className="bg-gradient-to-br from-primary to-secondary h-64 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                  {item.image}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex flex-col items-center justify-center">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:block hidden">{item.title}</h3>
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-yellow-400 text-yellow-400 group-hover:block hidden"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">قبل وبعد</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { before: '😔', after: '😍', title: 'تحول شامل' },
              { before: '😐', after: '✨', title: 'نتيجة مميزة' },
            ].map((transformation, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center text-6xl mb-3">
                    {transformation.before}
                  </div>
                  <p className="text-center font-semibold text-dark">قبل</p>
                </div>
                <div className="flex items-center">
                  <p className="text-3xl font-bold text-primary">→</p>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-lg h-64 flex items-center justify-center text-6xl mb-3">
                    {transformation.after}
                  </div>
                  <p className="text-center font-semibold text-dark">بعد</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
