import React, { useState } from 'react'
import { Heart, Phone, Mail, MapPin, Gift, TrendingUp, MessageSquare, Calendar } from 'lucide-react'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

const CustomerDetailPage = ({ customerId = 1 }) => {
  const [customer, setCustomer] = useState({
    id: customerId,
    name: 'فاطمة أحمد',
    phone: '0501234567',
    email: 'fatima@email.com',
    city: 'الرياض',
    joinDate: '2024-01-15',
    loyaltyPoints: 450,
    totalSpent: 2500,
    visitCount: 12,
    lastVisit: '2026-06-05',
    status: 'active',
    preferences: {
      preferredStaff: 'نور محمد',
      preferredTime: '14:00',
      preferredDay: 'الجمعة',
      notes: 'تفضل التسريحات الكلاسيكية، حساسة من الصبغات القوية'
    }
  })

  const appointments = [
    { id: 1, date: '2026-06-05', time: '14:00', service: 'تسريح + صبغة', staff: 'نور محمد', status: 'مكتم��ة', price: 300 },
    { id: 2, date: '2026-05-28', time: '15:00', service: 'مكياج', staff: 'فاطمة علي', status: 'مكتملة', price: 200 },
    { id: 3, date: '2026-05-15', time: '10:00', service: 'عناية الشعر', staff: 'سارة عبدالله', status: 'مكتملة', price: 150 },
  ]

  const purchases = [
    { id: 1, date: '2026-06-05', items: 'شامبو + بلسم', amount: 120, type: 'منتجات' },
    { id: 2, date: '2026-05-28', items: 'زيت الأرجان', amount: 150, type: 'منتجات' },
    { id: 3, date: '2026-05-15', items: 'مجموعة العناية', amount: 350, type: 'منتجات' },
  ]

  const interactions = [
    { id: 1, type: 'call', date: '2026-06-05', message: 'استفسار عن عرض جديد', staff: 'نور محمد' },
    { id: 2, type: 'whatsapp', date: '2026-06-01', message: 'تأكيد الموعد', staff: 'سارة عبدالله' },
    { id: 3, type: 'message', date: '2026-05-28', message: 'تذكير قبل الموعد', staff: 'فاطمة علي' },
  ]

  const [activeTab, setActiveTab] = useState('overview')
  const [newNote, setNewNote] = useState('')

  const addNote = () => {
    if (newNote.trim()) {
      // Add note logic
      setNewNote('')
    }
  }

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-dark mb-2">{customer.name}</h1>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={18} />
                  {customer.phone}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={18} />
                  {customer.email}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  {customer.city}
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className={`px-4 py-2 rounded-full font-semibold ${
                customer.status === 'active'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {customer.status === 'active' ? 'عميل نشط' : 'عميل غير نشط'}
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Gift size={20} />
                <span className="text-sm">نقاط الولاء</span>
              </div>
              <p className="text-3xl font-bold">{customer.loyaltyPoints}</p>
            </div>
            <div className="bg-gradient-to-br from-accent to-yellow-500 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={20} />
                <span className="text-sm">إجمالي الإنفاق</span>
              </div>
              <p className="text-3xl font-bold">{customer.totalSpent} ر.س</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} />
                <span className="text-sm">عدد الزيارات</span>
              </div>
              <p className="text-3xl font-bold">{customer.visitCount}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart size={20} />
                <span className="text-sm">آخر زيارة</span>
              </div>
              <p className="text-sm font-semibold">{customer.lastVisit}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-300">
          {[
            { id: 'overview', label: 'نظرة ��امة' },
            { id: 'appointments', label: 'الحجوزات' },
            { id: 'purchases', label: 'المشتريات' },
            { id: 'interactions', label: 'التفاعلات' },
            { id: 'preferences', label: 'التفضيلات' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-4 font-semibold transition ${
                activeTab === tab.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Customer Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-dark mb-4">معلومات العميل</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">تاريخ الانضمام:</span>
                      <span className="font-semibold">{customer.joinDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">آخر زيارة:</span>
                      <span className="font-semibold">{customer.lastVisit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">عدد الزيارات:</span>
                      <span className="font-semibold">{customer.visitCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">إجمالي الإنفاق:</span>
                      <span className="font-semibold text-primary">{customer.totalSpent} ر.س</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-dark mb-4">النشاط الأخير</h2>
                  <div className="space-y-4">
                    {[
                      { date: '2026-06-05', action: 'إتمام حجز - تسريح + صبغة', icon: '✓' },
                      { date: '2026-05-28', action: 'إتمام حجز - مكياج', icon: '✓' },
                      { date: '2026-05-15', action: 'إتمام حجز - عناية الشعر', icon: '✓' },
                    ].map((activity, idx) => (
                      <div key={idx} className="flex gap-4 pb-3 border-b last:border-b-0">
                        <div className="text-green-600 font-bold">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="text-gray-700">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-dark mb-4">إجراءات سريعة</h3>
                  <div className="space-y-3">
                    <button className="w-full btn-primary text-center">حجز موعد</button>
                    <button className="w-full border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">إرسال رسالة</button>
                    <button className="w-full border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">منح نقاط</button>
                  </div>
                </div>

                {/* Loyalty Status */}
                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">حالة الولاء</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>النقاط الحالية</span>
                        <span className="font-bold">{customer.loyaltyPoints}/1000</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div
                          className="bg-white h-2 rounded-full"
                          style={{ width: `${(customer.loyaltyPoints / 1000) * 100}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-sm opacity-80">يمكن الحصول على هدية بعد 550 نقطة</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-dark mb-6">سجل الحجوزات</h2>
              <div className="space-y-4">
                {appointments.map(apt => (
                  <div key={apt.id} className="border rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-bold text-dark">{apt.service}</p>
                        <p className="text-sm text-gray-600">{apt.date} - {apt.time}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        apt.status === 'مكتملة'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {apt.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>الموظف: {apt.staff}</span>
                      <span className="font-semibold text-primary">{apt.price} ر.س</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Purchases Tab */}
          {activeTab === 'purchases' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-dark mb-6">سجل المشتريات</h2>
              <div className="space-y-4">
                {purchases.map(purchase => (
                  <div key={purchase.id} className="border rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-dark">{purchase.items}</p>
                        <p className="text-sm text-gray-600">{purchase.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary text-lg">{purchase.amount} ر.س</p>
                        <p className="text-sm text-gray-600">{purchase.type}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactions Tab */}
          {activeTab === 'interactions' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-dark mb-6">سجل التفاعلات</h2>
              <div className="space-y-4">
                {interactions.map(interaction => (
                  <div key={interaction.id} className="border rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex gap-4">
                      <div className={`p-3 rounded-lg ${
                        interaction.type === 'call'
                          ? 'bg-blue-100 text-blue-600'
                          : interaction.type === 'whatsapp'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <MessageSquare size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-dark">{interaction.message}</p>
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                          <span>{interaction.staff}</span>
                          <span>{interaction.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-dark mb-6">التفضيلات</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-2">الموظف المفضل</label>
                    <div className="bg-light p-3 rounded-lg">
                      {customer.preferences.preferredStaff}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-2">الوقت المفضل</label>
                    <div className="bg-light p-3 rounded-lg">
                      {customer.preferences.preferredTime}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-2">اليوم المفضل</label>
                    <div className="bg-light p-3 rounded-lg">
                      {customer.preferences.preferredDay}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-dark mb-6">الملاحظات والتفضيلات الخاصة</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 bg-light p-4 rounded-lg">
                      {customer.preferences.notes}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-2">أضف ملاحظة جديدة</label>
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="أكتب ملاحظة جديدة..."
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={addNote}
                      className="mt-3 btn-primary"
                    >
                      حفظ ��لملاحظة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomerDetailPage
