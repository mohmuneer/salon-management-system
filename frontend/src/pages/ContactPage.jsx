import React from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl">نحن هنا للإجابة على جميع أسئلتك</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Phone, label: 'الهاتف', value: '+966 50 1234567', subvalue: '+966 11 1234567' },
              { icon: Mail, label: 'البريد الإلكتروني', value: 'info@salon.com', subvalue: 'support@salon.com' },
              { icon: MapPin, label: 'العنوان', value: 'الرياض، حي النخيل', subvalue: 'شارع الملك فهد' },
              { icon: Clock, label: 'ساعات العمل', value: 'يوميًا 9 صباحًا', subvalue: '9 مساءً' },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <Icon size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-dark mb-2">{contact.label}</h3>
                  <p className="text-gray-700">{contact.value}</p>
                  <p className="text-gray-600 text-sm">{contact.subvalue}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="أدخل اسمك"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="بريدك"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="رقمك"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">الموضوع</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="موضوع الرسالة"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">الرسالة</label>
                  <textarea
                    rows="6"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="اكتب رسالتك هنا"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-bold hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">موقعنا على الخريطة</h2>
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-3" />
                  <p className="font-semibold">خريطة جوجل</p>
                  <p className="text-sm">حي النخيل، الرياض</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">الأسئلة الشائعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'ما هي ساعات العمل؟',
                a: 'نحن مفتوحون يوميًا من 9 صباحًا إلى 9 مساءً',
              },
              {
                q: 'هل يمكنني حجز موعد عبر الهاتف؟',
                a: 'نعم، يمكنك الاتصال بنا أو استخدام تطبيق الحجز الإلكتروني',
              },
              {
                q: 'ما هي طرق الدفع المتاحة؟',
                a: 'نقبل النقد، البطاقات الائتمانية، والتحويل البنكي',
              },
              {
                q: 'هل هناك خصومات للعملاء الجدد؟',
                a: 'نعم، نقدم خصومًا خاصة للعملاء الجدد',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
