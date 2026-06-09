import React from 'react'
import { Star, MapPin, Phone, Mail, Clock } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="font-bold text-primary">SM</span>
            </div>
            <h1 className="text-xl font-bold">صالون إدارة</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:opacity-80 transition">الخدمات</a>
            <a href="#gallery" className="hover:opacity-80 transition">أعمالنا</a>
            <a href="#booking" className="hover:opacity-80 transition">احجز موعد</a>
            <a href="#contact" className="hover:opacity-80 transition">تواصل معنا</a>
          </div>
          <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
            تسجيل دخول
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            تجربة تجميل فاخرة
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            افضل صالون كوافير وتجميل في المملكة - خدمات احترافية وموظفون متخصصون
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
              احجز موعد الآن
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition">
              تعرف على المزيد
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '✂️', name: 'تسريح', desc: 'تسريحات عصرية وحديثة' },
              { icon: '🎨', name: 'صبغة', desc: 'صبغات آمنة وعالية الجودة' },
              { icon: '💄', name: 'مكياج', desc: 'مكياج احترافي لكل المناسبات' },
              { icon: '💅', name: 'منيكير وبديكير', desc: 'عناية كاملة بالأظافر' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <p className="text-primary font-bold text-lg">من 50 ر.س</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">معرض أعمالنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                <div className="bg-gradient-to-br from-primary to-secondary h-64 flex items-center justify-center text-white text-4xl group-hover:scale-110 transition duration-300">
                  <span>💇‍♀️ عمل {item}</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                  <button className="hidden group-hover:block bg-white text-primary px-6 py-2 rounded-lg font-bold">
                    اعرض التفاصيل
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">احجز موعدك الآن</h2>
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">الخدمة</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>اختر الخدمة</option>
                    <option>تسريح</option>
                    <option>صبغة</option>
                    <option>مكياج</option>
                    <option>منيكير وبديكير</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">الموظفة</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>اختر الموظفة</option>
                    <option>فاطمة أحمد</option>
                    <option>نور محمد</option>
                    <option>سارة علي</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">التاريخ</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">الوقت</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-2">ملاحظات إضافية</label>
                <textarea
                  rows="4"
                  placeholder="أي ملاحظات أو تفضيلات خاصة"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                تأكيد الحجز
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">آراء عملائنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'فاطمة أحمد', rating: 5, text: 'خدمة ممتازة وموظفات محترفات جداً' },
              { name: 'نور محمد', rating: 5, text: 'أفضل صالون زرته في حياتي' },
              { name: 'سارة علي', rating: 4, text: 'تجربة رائعة وأسعار معقولة' },
            ].map((review, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <p className="font-semibold text-dark">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">تواصل معنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Phone, label: 'الهاتف', value: '+966 50 1234567' },
              { icon: Mail, label: 'البريد', value: 'info@salon.com' },
              { icon: MapPin, label: 'العنوان', value: 'الرياض، حي النخيل' },
              { icon: Clock, label: 'ساعات العمل', value: '9 صباحاً - 9 مساءً' },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <Icon size={40} className="text-primary mx-auto mb-3" />
                  <p className="text-gray-600 text-sm mb-2">{contact.label}</p>
                  <p className="font-semibold text-dark">{contact.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">موقعنا</h2>
          <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-3" />
              <p>خريطة جوجل - حي النخيل، الرياض</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">عن الصالون</h3>
              <p className="text-gray-400">أفضل صالون كوافير وتجميل متخصص بتقديم خدمات عالية الجودة</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">الروابط السريعة</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">الخدمات</a></li>
                <li><a href="#" className="hover:text-white">أعمالنا</a></li>
                <li><a href="#" className="hover:text-white">احجز موعد</a></li>
                <li><a href="#" className="hover:text-white">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">الخدمات</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">تسريح</a></li>
                <li><a href="#" className="hover:text-white">صبغة</a></li>
                <li><a href="#" className="hover:text-white">مكياج</a></li>
                <li><a href="#" className="hover:text-white">منيكير</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">تابعنا</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary">f</a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary">I</a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary">T</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 صالون إدارة. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
