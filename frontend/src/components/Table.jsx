import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Table = ({
  columns,
  data,
  onEdit,
  onDelete,
  loading = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) => {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-light border-b">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-3 text-right text-sm font-semibold text-dark">
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-3 text-right text-sm font-semibold text-dark">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + 1} className="text-center py-8">
                  جاري التحميل...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="text-center py-8 text-gray-500">
                  لا توجد بيانات
                </td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-light transition">
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4 text-sm">
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(row)}
                          className="text-primary hover:text-opacity-70 transition"
                        >
                          تعديل
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(row.id)}
                          className="text-red-600 hover:text-opacity-70 transition"
                        >
                          حذف
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center px-6 py-4 border-t">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 text-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
            السابق
          </button>
          <span className="text-sm text-gray-600">
            صفحة {currentPage} من {totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 text-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            التالي
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Table
