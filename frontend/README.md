# Frontend - React + Inertia.js

## البنية

```
frontend/
├── src/
│   ├── components/       # المكونات المشتركة
│   ├── contexts/         # Context API
│   ├── pages/            # الصفحات الرئيسية
│   ├── stores/           # Zustand State Management
│   ├── lib/              # المكتبات المساعدة
│   ├── locales/          # الترجمات
│   ├── styles/           # الأنماط العامة
│   ├── App.jsx           # التطبيق الرئيسي
│   └── main.jsx          # نقطة الدخول
├── public/               # الملفات الثابتة
├── index.html            # صفحة HTML الرئيسية
├── vite.config.js        # إعدادات Vite
├── tailwind.config.js    # إعدادات Tailwind CSS
└── package.json          # المتطلبات
```

## المميزات

✅ **تصميم متجاوب (Responsive Design)**
- دعم جميع أحجام الشاشات
- تجربة مستخدم سلسة

✅ **ثنائي اللغة (Bilingual)**
- دعم العربية والإنجليزية
- واجهة RTL/LTR تلقائية

✅ **إدارة الحالة (State Management)**
- Zustand للحالة العامة
- Context API للمصادقة
- React Query للبيانات

✅ **الأمان**
- JWT Authentication
- Protected Routes
- Secure API Calls

✅ **التصميم الحديث**
- Tailwind CSS
- Custom Components
- Lucide Icons
- Recharts للرسوم البيانية

## التثبيت والتشغيل

```bash
cd frontend
npm install
npm run dev
```

## البناء للإنتاج

```bash
npm run build
```

## الملفات والمجلدات الرئيسية

### Components
- `Navbar.jsx` - شريط التنقل
- `Table.jsx` - جدول البيانات
- `StatCard.jsx` - بطاقات الإحصائيات
- `LanguageSwitcher.jsx` - محول اللغة
- `ProtectedRoute.jsx` - مسارات محمية

### Pages
- `LoginPage.jsx` - صفحة تسجيل الدخول
- `DashboardPage.jsx` - لوحة التحكم
- `CustomersPage.jsx` - صفحة العملاء

### Contexts
- `AuthContext.jsx` - إدارة المصادقة

### Stores
- `languageStore.js` - إدارة اللغة

### Lib
- `api.js` - HTTP Client

### Locales
- `translations.js` - الترجمات

## الصفحات المتوفرة

- `/login` - تسجيل الدخول
- `/dashboard` - لوحة التحكم
- `/customers` - إدارة العملاء
- `/appointments` - إدارة الحجوزات
- `/sales` - إدارة المبيعات
- `/employees` - إدارة الموظفين
- `/reports` - التقارير

## آخر تحديث
يونيو 2026
