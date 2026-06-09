import React from 'react'

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      name: 'تسريح شعر',
      category: 'تسريح',
      price: 100,
      duration: 60,
      image: '✂️',
      description: 'تسريحات عصرية وحديثة بأيدي محترفين',
      details: ['تسريحات للمناسبات', 'تسريحات يومية', 'قصات حديثة', 'تصميمات مخصصة'],
    },
    {
      id: 2,
      name: 'صبغة الشعر',
      category: 'صبغة',
      price: 150,
      duration: 120,
      image: '🎨',
      description: 'صبغات عالية الجودة وآمنة للشعر',
      details: ['صبغات طبيعية', 'صبغات عازلة', 'تفتيح آمن', 'تغطية الشيب'],
    },
    {
      id: 3,
      name: 'مكياج احترافي',
      category: 'مكياج',
      price: 200,
      duration: 90,
      image: '💄',
      description: 'مكياج احترافي لكل المناسبات',
      details: ['مكياج يومي', 'مكياج سهرة', 'مكياج عرس', 'مكياج فوتوغرافي'],
    },
    {
      id: 4,
      name: 'منيكير وبديكير',
      category: 'أظافر',
      price: 80,
      duration: 45,
      image: '💅',
      description: 'عناية كاملة بالأظافر والقدمين',
      details: ['تنظيف عميق', 'تقشير', 'تلميع احترافي', 'تصاميم فنية'],
    },
    {
      id: 5,
      name: 'معالجة الشعر',
      category: 'معالجة',
      price: 120,
      duration: 75,
      image: '🧖‍♀️',
      description: 'معالجات متقدمة لتنعيم وترطيب الشعر',
      details: ['كيراتين', 'بروتين', 'زيوت طبيعية', 'ترميم الأطراف'],
    },
    {
      id: 6,
      name: 'باقة عروس',
      category: 'عروس',
      price: 500,
      duration: 240,
      image: '👰',
      description: 'باقة كاملة لعروسك في أجمل يوم',
      details: ['تسريح + مكياج', 'معالجة الشعر', 'منيكير وبديكير', 'تدليك استرخاء'],
    },
  ]

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">خدماتنا المتميزة</h1>
          <p className="text-xl">اختر من مجموعة واسعة من الخدمات المتخصصة</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                {/* Image */}
                <div className="bg-gradient-to-br from-primary to-secondary h-48 flex items-center justify-center text-6xl">
                  {service.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-dark">{service.name}</h3>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Details */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 font-semibold mb-2">التفاصيل:</p>
                    <ul className="space-y-1">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="text-2xl font-bold text-primary">{service.price} ر.س</p>
                      <p className="text-sm text-gray-600">{service.duration} دقيقة</p>
                    </div>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
                      احجز الآن
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">عروضنا الخاصة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'باقة الصيف',
                price: 250,
                oldPrice: 350,
                services: ['تسريح + صبغة', 'منيكير وبديكير', 'قناع شعر'],
              },
              {
                title: 'باقة المناسبات',
                price: 400,
                oldPrice: 550,
                services: ['مكياج احترافي', 'تسريح فاخر', 'مانيكير فني'],
              },
            ].map((offer, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                <div className="mb-4">
                  <p className="text-4xl font-bold">{offer.price} ر.س</p>
                  <p className="line-through opacity-70">{offer.oldPrice} ر.س</p>
                </div>
                <ul className="mb-6 space-y-2">
                  {offer.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span>✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white text-primary py-2 rounded-lg font-bold hover:bg-opacity-90 transition">
                  احجز العرض
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
