# نظام إدارة صالون كوافير وتجميل متكامل

## Salon Management System - Integrated Beauty & Barbershop Management Platform

### 🎯 نظرة عامة عن المشروع

نظام ERP متكامل متعدد الفروع لإدارة صالونات الكوافير والتجميل في السوق السعودي والخليجي، يتضمن:

✅ **نظام إدارة الصالون (ERP)**
- إدارة العملاء والحجوزات
- إدارة الموظفين والجداول الزمنية
- نقاط البيع والمبيعات
- إدارة المخزون
- التقارير ولوحات التحكم

✅ **الموقع الإلكتروني (Website)**
- عرض الخدمات والعروض
- نظام الحجز الإلكتروني
- المتجر الإلكتروني للمنتجات
- معرض الأعمال

✅ **تطبيق العميل (Mobile App)**
- تطبيق iOS و Android بـ Flutter
- الحجز والدفع الإلكتروني
- متابعة نقاط الولاء

✅ **تطبيق الموظفين (Staff App)**
- إدارة الجداول الزمنية
- تسجيل الحضور والانصراف
- متابعة الأداء والعمولات

---

## 🏗️ البنية التحتية والتقنيات

### Backend
- **Framework**: Laravel 12 API
- **Database**: PostgreSQL
- **Authentication**: JWT / Sanctum
- **Cloud Storage**: AWS S3
- **Queue**: Redis
- **API Version**: RESTful v1

### Frontend
- **Framework**: React 18+
- **SSR**: Inertia.js
- **Styling**: Tailwind CSS
- **State Management**: React Query / Zustand
- **Build Tool**: Vite

### Mobile Apps
- **Framework**: Flutter 3.x
- **State Management**: Riverpod / Provider
- **Local Storage**: Hive / Drift

### DevOps
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Monitoring**: ELK Stack
- **Cloud Hosting**: AWS / DigitalOcean

---

## 📁 هيكل المشروع

```
salon-management-system/
├── backend/                    # Laravel 12 API
│   ├── app/
│   ├── config/
│   ├── database/
│   ├── routes/
│   └── ...
├── frontend/                   # React + Inertia.js
│   ├── resources/
│   ├── public/
│   ├── src/
│   └── ...
├── mobile/                     # Flutter Apps
│   ├── lib/
│   ├── android/
│   ├── ios/
│   └── ...
├── database/                   # Database Schemas & Migrations
│   ├── schema/
│   ├── migrations/
│   └── seeds/
├── design/                     # UI/UX Designs
│   ├── figma/
│   └── wireframes/
├── docs/                       # Documentation
│   ├── api/
│   ├── database/
│   ├── setup/
│   └── features/
├── docker-compose.yml          # Development Environment
└── .github/                    # GitHub Actions & Workflows
```

---

## 🚀 البدء السريع

### المتطلبات
- Docker & Docker Compose
- Node.js 18+
- PHP 8.3+
- Flutter 3.x

### خطوات الإعداد

#### 1. استنساخ المستودع
```bash
git clone https://github.com/mohmuneer/salon-management-system.git
cd salon-management-system
```

#### 2. تشغيل بيئة التطوير
```bash
docker-compose up -d
```

#### 3. إعداد Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

#### 4. إعداد Frontend
```bash
cd frontend
npm install
npm run dev
```

#### 5. إعداد Mobile
```bash
cd mobile
flutter pub get
flutter run
```

---

## 📋 المتطلبات الرئيسية

### 1. نظام إدارة الصالون (ERP)
- [ ] إدارة العملاء (CRM)
- [ ] إدارة الحجوزات والمواعيد
- [ ] إدارة الموظفين
- [ ] إدارة الخدمات
- [ ] نقاط البيع (POS)
- [ ] إدارة المخزون
- [ ] التقارير ولوحات التحكم

### 2. الموقع الإلكتروني
- [ ] الصفحة الرئيسية
- [ ] صفحة الخدمات
- [ ] المتجر الإلكتروني
- [ ] نظام الحجز
- [ ] معرض الأعمال
- [ ] المدونة
- [ ] صفحة التواصل

### 3. التكاملات
- [ ] ZATCA - الفاتورة الإلكترونية
- [ ] بوابات الدفع (مدى، Apple Pay، STC Pay)
- [ ] WhatsApp Business API
- [ ] SMS Gateway
- [ ] Google Calendar
- [ ] Google Maps

---

## 🔑 المميزات الرئيسية

### 🎯 للعملاء
- تطبيق سهل الاستخدام
- حجز مباشر من التطبيق
- نظام نقاط الولاء
- إشعارات وتذكيرات
- متتبع المحفظة الرقمية

### 👔 للموظفين
- جداول عمل مرنة
- متابعة العمولات
- تقييم الأداء
- إدارة الحجوزات

### 📊 للمالك
- لوحة تحكم شاملة
- تقارير مفصلة
- إدارة متعددة الفروع
- تحليل البيانات
- أتمتة العمليات

---

## 🌍 دعم اللغات والعملات

- ✅ اللغة العربية والإنجليزية
- ✅ العملات: الريال السعودي، الدرهم الإماراتي، الدينار الكويتي
- ✅ ضريبة القيمة المضافة (VAT)
- ✅ الفاتورة الإلكترونية ZATCA

---

## 📞 التواصل والدعم

- **البريد الإلكتروني**: support@salonsystem.com
- **WhatsApp**: [رقم الدعم]
- **الموقع**: [رابط الموقع]

---

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License

---

## 👨‍💻 المطورون

- **المشرف**: Mohmuneer
- **فريق التطوير**: [قائمة الفريق]

---

**آخر تحديث**: يونيو 2026
