import React from 'react'

const StatCard = ({ icon: Icon, label, value, color = 'primary', trend }) => (
  <div className="card">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-600 text-sm">{label}</p>
        <p className="text-3xl font-bold mt-2">{value}</p>
        {trend && (
          <p className={`text-sm mt-2 ${
            trend > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend > 0 ? '+' : ''}{trend}% من الشهر الماضي
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg bg-opacity-10`} style={{ backgroundColor: `var(--${color})` }}>
        <Icon size={24} style={{ color: `var(--${color})` }} />
      </div>
    </div>
  </div>
)

export default StatCard
