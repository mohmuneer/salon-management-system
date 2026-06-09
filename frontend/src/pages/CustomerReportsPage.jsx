import React from 'react'

const CustomerReportsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = React.useState('month')

  const reports = [
    {
      id: 1,
      title: 'تقرير قيمة العميل (CLV)',
      description: 'تحليل قيمة العميل على مدى حياته',
      metrics: [
        { label: 'متوسط CLV', value: '2,450 ر.س' },
        { label: 'أعلى CLV', value: '8,900 ر.س' },
        { label: 'أقل CLV', value: '150 ر.س' },
      ]
    },
    {
      id: 2,
      title: 'تقرير الاحتفاظ بالعملاء',
      description: 'معدل الاحتفاظ والتوقف عن الخدمة',
      metrics: [
        { label: 'معدل الاحتفاظ', value: '76.4%' },
        { label: 'معدل الخسارة', value: '23.6%' },
        { label: 'عملاء مستردون', value: '12' },
      ]
    },
    {
      id: 3,
      title: 'تقرير الرضا والتقييمات',
      description: 'تقييمات العملاء والتعليقات',
      metrics: [
        { label: 'متوسط التقييم', value: '4.6/5' },
        { label: 'عدد التقييمات', value: '245' },
        { label: 'التقييمات الإيجابية', value: '92.6%' },
      ]
    },
    {
      id: 4,
      title: 'تقرير التجزئة',
      description: 'توزيع العملاء حسب الفئات',
      metrics: [
        { label: 'عملاء VIP', value: '15' },
        { label: 'عملاء منتظمون', value: '80' },
        { label: 'عملاء جدد', value: '45' },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">تقارير العملاء</h1>
          <p className="text-gray-600">تحليل شامل للبيانات والمؤشرات</p>
        </div>

        {/* Period Selector */}
        <div className="mb-8 flex gap-2">
          {[
            { value: 'week', label: 'هذا الأسبوع' },
            { value: 'month', label: 'هذا الشهر' },
            { value: 'quarter', label: 'هذا الربع' },
            { value: 'year', label: 'هذا العام' },
          ].map(period => (
            <button
              key={period.value}
              onClick={() => setSelectedPeriod(period.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedPeriod === period.value
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark border border-gray-300 hover:border-primary'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map(report => (
            <div key={report.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-dark mb-2">{report.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{report.description}</p>
              <div className="space-y-3 mb-6">
                {report.metrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-700">{metric.label}</span>
                    <span className="font-bold text-primary text-lg">{metric.value}</span>
                  </div>
                ))}
              </div>
              <button className="w-full border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                عرض التقرير الكامل
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomerReportsPage
