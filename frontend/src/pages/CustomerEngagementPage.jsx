import React, { useState } from 'react'
import { Mail, MessageSquare, Bell, Calendar, Gift, AlertCircle } from 'lucide-react'
import Navbar from '../components/Navbar'

const CustomerEngagementPage = () => {
  const [activeTab, setActiveTab] = useState('loyalty')
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'عرض الصيف الخاص',
      type: 'discount',
      status: 'active',
      startDate: '2026-06-01',
      endDate: '2026-08-31',
      targetSegment: 'VIP',
      discount: 20,
      applicableServices: ['تسريح', 'صبغة', 'معالجة'],
      sentTo: 450,
      converted: 127,
    },
    {
      id: 2,
      name: 'استعيد عميلك - عرض خاص',
      type: 'recovery',
      status: 'active',
      startDate: '2026-05-15',
      endDate: '2026-06-30',
      targetSegment: 'At Risk',
      discount: 30,
      applicableServices: ['جميع الخدمات'],
      sentTo: 120,
      converted: 28,
    },
    {
      id: 3,
      name: 'برنامج الإحالة",
      type: 'referral',
      status: 'planned',
      startDate: '2026-07-01',
      endDate: '2026-12-31',
      targetSegment: 'Regular',
      reward: 'نقاط ولاء',
      sentTo: 0,
      converted: 0,
    },
  ])

  const [inactiveCustomers, setInactiveCustomers] = useState([
    { id: 3, name: 'سارة عبدالله', lastVisit: '2026-04-10', daysSince: 60, email: 'sarah@email.com' },
    { id: 4, name: 'ليلى علي', lastVisit: '2026-02-15', daysSince: 145, email: 'layla@email.com' },
  ])

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">تفعيل وتثقيف العملاء</h1>
          <p className="text-gray-600">إدارة الحملات والعروض والبرامج لزيادة ولاء العملاء</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-300">
          {[
            { id: 'loyalty', label: 'برنامج الولاء' },
            { id: 'campaigns', label: 'الحملات والعروض' },
            { id: 'inactive', label: 'العملاء غير النشطين' },
            { id: 'communication', label: 'وسائل التواصل' },
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
          {/* Loyalty Program Tab */}
          {activeTab === 'loyalty' && (
            <div className="space-y-6">
              {/* Program Overview */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-dark mb-6">برنامج الولاء الحالي</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-6">
                    <p className="text-sm opacity-80 mb-2">إجمالي النقاط الموزعة</p>
                    <p className="text-4xl font-bold">12,450</p>
                    <p className="text-sm opacity-80 mt-2">هذا الشهر</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent to-yellow-500 text-white rounded-lg p-6">
                    <p className="text-sm opacity-80 mb-2">العملاء المشاركون</p>
                    <p className="text-4xl font-bold">185</p>
                    <p className="text-sm opacity-80 mt-2">من أصل 245</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
                    <p className="text-sm opacity-80 mb-2">الجوائز المطلوبة</p>
                    <p className="text-4xl font-bold">28</p>
                    <p className="text-sm opacity-80 mt-2">جوائز هذا الشهر</p>
                  </div>
                </div>

                {/* Loyalty Tiers */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-dark mb-4">مستويات الولاء</h3>
                  <div className="space-y-3">
                    {[
                      { tier: 'Bronze', minPoints: 0, maxPoints: 500, benefits: ['خصم 5%', 'تنبيهات العروض'], members: 120 },
                      { tier: 'Silver', minPoints: 501, maxPoints: 1000, benefits: ['خصم 10%', 'أولوية الحجز', 'هدايا مجانية'], members: 45 },
                      { tier: 'Gold', minPoints: 1001, maxPoints: 2000, benefits: ['خصم 15%', 'خدمة VIP', 'هدايا قيمة'], members: 15 },
                      { tier: 'Platinum', minPoints: 2001, maxPoints: null, benefits: ['خصم 20%', 'مدير حساب', 'هدايا حصرية'], members: 5 },
                    ].map((tier, idx) => (
                      <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-dark mb-2">{tier.tier}</p>
                            <p className="text-sm text-gray-600 mb-3">
                              {tier.maxPoints ? `من ${tier.minPoints} إلى ${tier.maxPoints} نقطة` : `من ${tier.minPoints} نقطة فما فوق`}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {tier.benefits.map((benefit, i) => (
                                <span key={i} className="bg-light px-3 py-1 rounded-full text-sm text-gray-700">
                                  ✓ {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-3xl font-bold text-primary">{tier.members}</p>
                            <p className="text-sm text-gray-600">عضو</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-dark">الحملات والعروض</h2>
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
                  + حملة جديدة
                </button>
              </div>

              {campaigns.map(campaign => (
                <div key={campaign.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark">{campaign.name}</h3>
                      <p className="text-gray-600 text-sm">{campaign.type} - {campaign.targetSegment}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      campaign.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : campaign.status === 'planned'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {campaign.status === 'active' ? 'نشط' : campaign.status === 'planned' ? 'مخطط' : 'منتهي'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">الفترة</p>
                      <p className="font-semibold text-dark">{campaign.startDate} إلى {campaign.endDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">الخصم</p>
                      <p className="font-semibold text-primary text-lg">{campaign.discount}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">الإرسالات</p>
                      <p className="font-semibold text-dark">{campaign.sentTo}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">معدل التحويل</p>
                      <p className="font-semibold text-dark">{((campaign.converted / campaign.sentTo) * 100).toFixed(1)}%</p>
                    </div>
                  </div>

                  <div className="bg-light p-3 rounded-lg text-sm text-gray-700 mb-4">
                    <strong>الخدمات المشمولة:</strong> {campaign.applicableServices.join(', ')}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                      تعديل
                    </button>
                    <button className="flex-1 border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Inactive Customers Tab */}
          {activeTab === 'inactive' && (
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex gap-3">
                  <AlertCircle size={24} className="text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-yellow-800">عملاء على وشك الرحيل</h3>
                    <p className="text-yellow-700 text-sm">{inactiveCustomers.length} عميل لم يزوروا الصالون منذ فترة طويلة. يحتاجون إلى رعاية فورية.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {inactiveCustomers.map(customer => (
                  <div key={customer.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-dark">{customer.name}</h3>
                        <p className="text-gray-600 text-sm">آخر زيارة: {customer.lastVisit} ({customer.daysSince} يوم)</p>
                      </div>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        عامل خطر
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center gap-2">
                        <Mail size={18} />
                        إرسال عرض
                      </button>
                      <button className="border-2 border-secondary text-secondary px-6 py-2 rounded-lg font-semibold hover:bg-secondary hover:text-white transition flex items-center gap-2">
                        <MessageSquare size={18} />
                        رسالة شخصية
                      </button>
                      <button className="border-2 border-primary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition flex items-center gap-2">
                        <Gift size={18} />
                        منحة خاصة
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Communication Tab */}
          {activeTab === 'communication' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-dark mb-6">وسائل التواصل</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Campaigns */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail size={28} className="text-blue-600" />
                    <h3 className="text-xl font-bold text-dark">حملات البريد الإلكتروني</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">رسائل مرسلة</span>
                      <span className="font-bold">3,450</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">معدل الفتح</span>
                      <span className="font-bold text-green-600">28.5%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">معدل النقر</span>
                      <span className="font-bold text-green-600">12.3%</span>
                    </div>
                    <button className="w-full mt-4 btn-primary">إنشاء حملة جديدة</button>
                  </div>
                </div>

                {/* SMS Campaigns */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare size={28} className="text-green-600" />
                    <h3 className="text-xl font-bold text-dark">حملات الرسائل النصية</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">رسائل مرسلة</span>
                      <span className="font-bold">1,200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">معدل التسليم</span>
                      <span className="font-bold text-green-600">98.7%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">معدل الاستجابة</span>
                      <span className="font-bold text-green-600">35.2%</span>
                    </div>
                    <button className="w-full mt-4 btn-primary">إنشاء حملة جديدة</button>
                  </div>
                </div>

                {/* WhatsApp Campaigns */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Bell size={28} className="text-green-600" />
                    <h3 className="text-xl font-bold text-dark">رسائل WhatsApp</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">رسائل مرسلة</span>
                      <span className="font-bold">890</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">معدل التسليم</span>
                      <span className="font-bold text-green-600">99.2%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">معدل الفتح</span>
                      <span className="font-bold text-green-600">87.4%</span>
                    </div>
                    <button className="w-full mt-4 btn-primary">إنشاء حملة جديدة</button>
                  </div>
                </div>

                {/* Push Notifications */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Bell size={28} className="text-red-600" />
                    <h3 className="text-xl font-bold text-dark">إشعارات فورية</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">إشعارات مرسلة</span>
                      <span className="font-bold">2,340</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">معدل الفتح</span>
                      <span className="font-bold text-green-600">64.3%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">معدل التحويل</span>
                      <span className="font-bold text-green-600">18.7%</span>
                    </div>
                    <button className="w-full mt-4 btn-primary">إرسال إشعار</button>
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

export default CustomerEngagementPage
