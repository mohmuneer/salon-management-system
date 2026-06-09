import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Search, Plus } from 'lucide-react'

const CustomersPage = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchCustomers = async (page = 1, searchTerm = '') => {
    setLoading(true)
    try {
      const response = await api.get('/customers', {
        params: {
          page,
          search: searchTerm,
          per_page: 15,
        },
      })
      setCustomers(response.data.data)
      setCurrentPage(response.data.current_page)
      setTotalPages(response.data.last_page)
    } catch (error) {
      toast.error('فشل تحميل العملاء')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCustomers(1, search)
    }, 300)
    return () => clearTimeout(timer)
  }, [search])

  const handleDelete = async (id) => {
    if (!window.confirm('هل أنت متأكد من الحذف؟')) return
    try {
      await api.delete(`/customers/${id}`)
      toast.success('تم الحذف بنجاح')
      fetchCustomers(currentPage, search)
    } catch (error) {
      toast.error('فشل الحذف')
    }
  }

  const columns = [
    { key: 'first_name', label: 'الاسم' },
    { key: 'phone', label: 'الهاتف' },
    { key: 'email', label: 'البريد الإلكتروني' },
    { key: 'visit_count', label: 'عدد الزيارات' },
    { key: 'loyalty_points', label: 'نقاط الولاء' },
  ]

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-dark">العملاء</h1>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            إضافة عميل
          </button>
        </div>

        {/* Search */}
        <div className="card mb-6">
          <div className="relative">
            <Search size={20} className="absolute right-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث عن عميل..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pr-10 w-full"
            />
          </div>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          data={customers}
          loading={loading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => fetchCustomers(page, search)}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default CustomersPage
