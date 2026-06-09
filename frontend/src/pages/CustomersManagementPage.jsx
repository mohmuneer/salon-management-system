import React, { useState } from 'react'
import { Plus, Search, Filter, Phone, Mail, Gift, TrendingUp, AlertCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

const CustomersManagementPage = () => {
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterSegment, setFilterSegment] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'فاطمة أحمد',
      phone: '0501234567',
      email: 'fatima@email.com',
      city: 'الرياض',
      visits: 12,
      loyaltyPoints: 450,
      totalSpent: 2500,
      lastVisit: '2026-06-05',
      status: 'active',
      segment: 'VIP',
      rating: 5,
    },
    {
      id: 2,
      name: 'نور محمد',
      phone: '0509876543',
      email: 'noor@email.com',
      city: 'جدة',
      visits: 8,
      loyaltyPoints: 280,
      totalSpent: 1800,
      lastVisit: '2026-05-28',
      status: 'active',
      segment: 'Regular',
      rating: 4,
    },
    {
      id: 3,
      name: 'سارة عبدالله',
      phone: '0505555555',
      email: 'sarah@email.com',
      city: 'الدمام',
      visits: 3,
      loyaltyPoints: 45,
      totalSpent: 350,
      lastVisit: '2026-04-10',
      status: 'inactive',
      segment: 'New',
      rating: 3,
    },
    {
      id: 4,
      name: 'ليلى علي',
      phone: '0507777777',
      email: 'layla@email.com',
      city: 'الرياض',
      visits: 5,
      loyaltyPoints: 120,
      totalSpent: 750,
      lastVisit: '2026-02-15',
      status: 'inactive',
      segment: 'At Risk',
      rating: 4,
    },
  ])

  const segments = [
    { value: 'all', label: 'الكل' },
    { value: 'VIP', label: 'VIP - عملاء مميزون' },
    { value: 'Regular', label: 'Regular - عملاء منتظمون' },
    { value: 'New', label: 'New - عملاء جدد' },
    { value: 'At Risk', label: 'At Risk - عملاء على وشك الرحيل' },
  ]

  const filtered = customers.filter(c => {
    const matchSearch = c.name.includes(search) || c.phone.includes(search) || c.email.includes(search)
    const matchStatus = filterStatus === 'all' || c.status === filterStatus
    const matchSegment = filterSegment === 'all' || c.segment === filterSegment
    return matchSearch && matchStatus && matchSegment
  })

  const columns = [
    { key: 'name', label: 'الاسم' },
    { key: 'phone', label: 'الهاتف', render: (val) => <a href={`tel:${val}`} className="text-primary hover:underline">{val}</a> },
    { key: 'email', label: 'البريد', render: (val) => <a href={`mailto:${val}`} className="text-primary hover:underline">{val}</a> },
    { key: 'visits', label: 'الزيارات' },
    { key: 'totalSpent', label: 'الإنفاق', render: (val) => <span className="text-primary font-bold">{val} ر.س</span> },
    { key: 'status', label: 'الحالة', render: (val) => <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
      val === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
    }`}>{val === 'active' ? 'نشط' : 'غير نشط'}</span> },
    { key: 'segment', label: 'الفئة', render: (val) => <span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{val}</span> },
  ]

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-dark mb-2">إدارة العملاء (CRM)</h1>
            <p className="text-gray-600">إدارة شاملة لبيانات ومعاملات العملاء</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            إضافة عميل
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                <Gift size={24} />
              </div>
              <h3 className="text-gray-600">إجمالي العملاء</h3>
            </div>
            <p className="text-3xl font-bold text-dark">{customers.length}</p>
            <p className="text-sm text-green-600 mt-2">+2 عميل هذا الأسبوع</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-gray-600">العملاء النشطون</h3>
            </div>
            <p className="text-3xl font-bold text-dark">{customers.filter(c => c.status === 'active').length}</p>
            <p className="text-sm text-green-600 mt-2">معدل نشاط عالي</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-gray-600">عملاء على وشك الرحيل</h3>
            </div>
            <p className="text-3xl font-bold text-dark">{customers.filter(c => c.segment === 'At Risk').length}</p>
            <p className="text-sm text-red-600 mt-2">يحتاجون إلى رعاية</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-gray-600">إجمالي الإيرادات</h3>
            </div>
            <p className="text-3xl font-bold text-dark">8400 ر.س</p>
            <p className="text-sm text-green-600 mt-2">هذا الشهر</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-dark mb-2">البحث</label>
              <div className="relative">
                <Search size={20} className="absolute right-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث بالاسم أو الهاتف أو البريد..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">الحالة</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">الكل</option>
                <option value="active">نشط</option>
                <option value="inactive">غير نشط</option>
              </select>
            </div>

            {/* Segment Filter */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">الفئة</label>
              <select
                value={filterSegment}
                onChange={(e) => setFilterSegment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {segments.map(seg => (
                  <option key={seg.value} value={seg.value}>{seg.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <Table
          columns={columns}
          data={filtered}
          currentPage={currentPage}
          totalPages={1}
          onPageChange={setCurrentPage}
          onEdit={(customer) => console.log('Edit:', customer)}
          onDelete={(id) => console.log('Delete:', id)}
        />

        {/* Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {segments.slice(1).map(segment => {
            const count = customers.filter(c => c.segment === segment.value).length
            const total = customers.filter(c => c.segment === segment.value).reduce((sum, c) => sum + c.totalSpent, 0)
            return (
              <div key={segment.value} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-dark mb-2">{segment.label}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{count}</p>
                <p className="text-sm text-gray-600 mb-3">عملاء في هذه الفئة</p>
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600">الإيرادات: <span className="font-bold text-primary">{total} ر.س</span></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CustomersManagementPage
