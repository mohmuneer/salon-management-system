const ar = {
  // Navigation
  dashboard: 'لوحة التحكم',
  customers: 'العملاء',
  appointments: 'الحجوزات',
  employees: 'الموظفون',
  services: 'الخدمات',
  products: 'المنتجات',
  sales: 'المبيعات',
  reports: 'التقارير',
  settings: 'الإعدادات',

  // Common
  add: 'إضافة',
  edit: 'تعديل',
  delete: 'حذف',
  save: 'حفظ',
  cancel: 'إلغاء',
  search: 'بحث',
  filter: 'تصفية',
  export: 'تصدير',
  import: 'استيراد',
  loading: 'جاري التحميل...',
  error: 'خطأ',
  success: 'تم بنجاح',

  // Auth
  login: 'تسجيل الدخول',
  logout: 'تسجيل الخروج',
  register: 'إنشاء حساب',
  email: 'البريد الإلكتروني',
  password: 'كلمة المرور',
  rememberMe: 'تذكرني',
  forgotPassword: 'هل نسيت كلمة المرور؟',

  // Customer
  firstName: 'الاسم الأول',
  lastName: 'الاسم الأخير',
  phone: 'رقم الهاتف',
  address: 'العنوان',
  city: 'المدينة',
  loyaltyPoints: 'نقاط الولاء',
  visitCount: 'عدد الزيارات',

  // Appointment
  appointmentDate: 'تاريخ الموعد',
  appointmentTime: 'وقت الموعد',
  service: 'الخدمة',
  employee: 'الموظف',
  status: 'الحالة',
  pending: 'قيد الانتظار',
  confirmed: 'مؤكد',
  completed: 'مكتمل',
  cancelled: 'ملغى',

  // Sales
  total: 'الإجمالي',
  discount: 'الخصم',
  tax: 'الضريبة',
  paymentMethod: 'طريقة الدفع',
  cash: 'نقدي',
  card: 'بطاقة',
  transfer: 'تحويل بنكي',

  // Messages
  confirmDelete: 'هل أنت متأكد من الحذف؟',
  deleteSuccess: 'تم الحذف بنجاح',
  saveSuccess: 'تم الحفظ بنجاح',
  errorOccurred: 'حدث خطأ ما',
}

const en = {
  // Navigation
  dashboard: 'Dashboard',
  customers: 'Customers',
  appointments: 'Appointments',
  employees: 'Employees',
  services: 'Services',
  products: 'Products',
  sales: 'Sales',
  reports: 'Reports',
  settings: 'Settings',

  // Common
  add: 'Add',
  edit: 'Edit',
  delete: 'Delete',
  save: 'Save',
  cancel: 'Cancel',
  search: 'Search',
  filter: 'Filter',
  export: 'Export',
  import: 'Import',
  loading: 'Loading...',
  error: 'Error',
  success: 'Success',

  // Auth
  login: 'Login',
  logout: 'Logout',
  register: 'Register',
  email: 'Email',
  password: 'Password',
  rememberMe: 'Remember me',
  forgotPassword: 'Forgot password?',

  // Customer
  firstName: 'First Name',
  lastName: 'Last Name',
  phone: 'Phone',
  address: 'Address',
  city: 'City',
  loyaltyPoints: 'Loyalty Points',
  visitCount: 'Visit Count',

  // Appointment
  appointmentDate: 'Appointment Date',
  appointmentTime: 'Appointment Time',
  service: 'Service',
  employee: 'Employee',
  status: 'Status',
  pending: 'Pending',
  confirmed: 'Confirmed',
  completed: 'Completed',
  cancelled: 'Cancelled',

  // Sales
  total: 'Total',
  discount: 'Discount',
  tax: 'Tax',
  paymentMethod: 'Payment Method',
  cash: 'Cash',
  card: 'Card',
  transfer: 'Bank Transfer',

  // Messages
  confirmDelete: 'Are you sure you want to delete?',
  deleteSuccess: 'Deleted successfully',
  saveSuccess: 'Saved successfully',
  errorOccurred: 'An error occurred',
}

export const translations = { ar, en }

export const t = (key, language = 'ar') => {
  return translations[language]?.[key] || key
}
