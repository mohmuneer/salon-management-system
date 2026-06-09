import React, { useState, useEffect } from 'react'
import { Users, Calendar, DollarSign, TrendingUp } from 'lucide-react'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import useLanguageStore from '../stores/languageStore'
import { t } from '../locales/translations'

const DashboardPage = () => {
  const language = useLanguageStore((state) => state.language)
  const [stats, setStats] = useState([
    { label: 'إجمالي العملاء', value: '1,245', icon: Users, trend: 12 },
    { label: 'الحجوزات هذا الأسبوع', value: '42', icon: Calendar, trend: 8 },
    { label: 'المبيعات هذا الشهر', value: '45,230 ر.س', icon: DollarSign, trend: 15 },
    { label: 'معدل الرضا', value: '4.8/5', icon: TrendingUp, color: 'secondary' },
  ])

  const salesData = [
    { month: 'يناير', sales: 4000 },
    { month: 'فبراير', sales: 3000 },
    { month: 'مارس', sales: 2000 },
    { month: 'أبريل', sales: 2780 },
    { month: 'مايو', sales: 1890 },
    { month: 'يونيو', sales: 2390 },
  ]

  const servicesData = [
    { name: 'تسريح', value: 30 },
    { name: 'صبغة', value: 25 },
    { name: 'معالجة', value: 20 },
    { name: 'مكياج', value: 25 },
  ]

  const COLORS = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981']

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-dark mb-8">لوحة التحكم</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Sales Chart */}
          <div className="lg:col-span-2 card">
            <h2 className="text-xl font-bold text-dark mb-4">المبيعات الشهرية</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  name="المبيعات"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Services Distribution */}
          <div className="card">
            <h2 className="text-xl font-bold text-dark mb-4">توزيع الخدمات</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={servicesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {servicesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="card">
          <h2 className="text-xl font-bold text-dark mb-4">الأنشطة الحديثة</h2>
          <div className="space-y-3">
            {[
              { time: '2:30 PM', message: 'تم إضافة عميل جديد - فاطمة أحمد' },
              { time: '2:15 PM', message: 'تم تأكيد موعد - ساعدة محمد' },
              { time: '1:45 PM', message: 'تم إكمال مبيعة بقيمة 150 ر.س' },
              { time: '1:20 PM', message: 'تم تعديل جدول الموظف - نور' },
            ].map((activity, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <span className="text-gray-600">{activity.message}</span>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
