# نموذج قاعدة البيانات - نظام إدارة الصالون

## الجداول الرئيسية

### 1. جداول الإعدادات العامة

#### users (المستخدمون)
```sql
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    branch_id BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'manager', 'staff', 'customer') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    last_login_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (branch_id) REFERENCES branches(id)
);
```

#### branches (الفروع)
```sql
CREATE TABLE branches (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(255),
    address TEXT,
    city VARCHAR(100),
    region VARCHAR(100),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    opening_time TIME,
    closing_time TIME,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 2. جداول إدارة العملاء (CRM)

#### customers (العملاء)
```sql
CREATE TABLE customers (
    id BIGSERIAL PRIMARY KEY,
    branch_id BIGINT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20) NOT NULL,
    gender ENUM('male', 'female', 'other'),
    date_of_birth DATE,
    address TEXT,
    city VARCHAR(100),
    region VARCHAR(100),
    notes TEXT,
    loyalty_points INT DEFAULT 0,
    total_spent DECIMAL(10, 2) DEFAULT 0,
    visit_count INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    last_visit_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (branch_id) REFERENCES branches(id)
);
```

#### customer_interactions (تفاعلات العملاء)
```sql
CREATE TABLE customer_interactions (
    id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL,
    type ENUM('call', 'message', 'visit', 'email', 'whatsapp') NOT NULL,
    notes TEXT,
    interaction_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);
```

#### customer_preferences (تفضيلات العملاء)
```sql
CREATE TABLE customer_preferences (
    id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL,
    preferred_staff_id BIGINT,
    preferred_time TIME,
    preferred_day VARCHAR(20),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
    FOREIGN KEY (preferred_staff_id) REFERENCES employees(id)
);
```

---

### 3. جداول إدارة الموظفين

#### employees (الموظفون)
```sql
CREATE TABLE employees (
    id BIGSERIAL PRIMARY KEY,
    branch_id BIGINT NOT NULL,
    user_id BIGINT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    position VARCHAR(100),
    hire_date DATE,
    salary_base DECIMAL(10, 2),
    commission_rate DECIMAL(5, 2) DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (branch_id) REFERENCES branches(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

#### employee_schedules (جداول الموظفين)
```sql
CREATE TABLE employee_schedules (
    id BIGSERIAL PRIMARY KEY,
    employee_id BIGINT NOT NULL,
    day_of_week INT, -- 0-6
    start_time TIME,
    end_time TIME,
    is_off_day BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);
```

#### attendance_records (سجل الحضور)
```sql
CREATE TABLE attendance_records (
    id BIGSERIAL PRIMARY KEY,
    employee_id BIGINT NOT NULL,
    attendance_date DATE,
    check_in_time TIMESTAMP,
    check_out_time TIMESTAMP,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);
```

#### employee_specializations (تخصصات الموظفين)
```sql
CREATE TABLE employee_specializations (
    id BIGSERIAL PRIMARY KEY,
    employee_id BIGINT NOT NULL,
    service_id BIGINT NOT NULL,
    proficiency_level ENUM('beginner', 'intermediate', 'expert') DEFAULT 'intermediate',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE,
    UNIQUE(employee_id, service_id)
);
```

---

### 4. جداول إدارة الخدمات

#### services (الخدمات)
```sql
CREATE TABLE services (
    id BIGSERIAL PRIMARY KEY,
    branch_id BIGINT,
    category_id BIGINT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    duration_minutes INT,
    image_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    display_order INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (branch_id) REFERENCES branches(id),
    FOREIGN KEY (category_id) REFERENCES service_categories(id)
);
```

#### service_categories (فئات الخدمات)
```sql
CREATE TABLE service_categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon_url VARCHAR(255),
    display_order INT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### service_packages (باقات الخدمات)
```sql
CREATE TABLE service_packages (
    id BIGSERIAL PRIMARY KEY,
    branch_id BIGINT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    discount_percentage DECIMAL(5, 2) DEFAULT 0,
    valid_from DATE,
    valid_to DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (branch_id) REFERENCES branches(id)
);
```

#### package_services (الخدمات في الباقات)
```sql
CREATE TABLE package_services (
    id BIGSERIAL PRIMARY KEY,
    package_id BIGINT NOT NULL,
    service_id BIGINT NOT NULL,
    quantity INT DEFAULT 1,
    FOREIGN KEY (package_id) REFERENCES service_packages(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
);
```

---

### 5. جداول الحجوزات

#### appointments (الحجوزات)
```sql
CREATE TABLE appointments (
    id BIGSERIAL PRIMARY KEY,
    branch_id BIGINT NOT NULL,
    customer_id BIGINT NOT NULL,
    employee_id BIGINT,
    service_id BIGINT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    end_time TIME,
    status ENUM('pending', 'confirmed', 'completed', 'cancelled', 'no_show') DEFAULT 'pending',
    notes TEXT,
    reminder_sent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (branch_id) REFERENCES branches(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (service_id) REFERENCES services(id)
);
```

#### appointment_slots (الفترات الزمنية المتاحة)
```sql
CREATE TABLE appointment_slots (
    id BIGSERIAL PRIMARY KEY,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    employee_id BIGINT,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);
```

#### waiting_lists (قوائم الانتظار)
```sql
CREATE TABLE waiting_lists (
    id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL,
    service_id BIGINT NOT NULL,
    branch_id BIGINT NOT NULL,
    preferred_date DATE,
    position INT,
    status ENUM('waiting', 'offered', 'accepted', 'cancelled') DEFAULT 'waiting',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (branch_id) REFERENCES branches(id)
);
```

---

### 6. جداول المبيعات (POS)

#### sales (المبيعات)
```sql
CREATE TABLE sales (
    id BIGSERIAL PRIMARY KEY,
    branch_id BIGINT NOT NULL,
    employee_id BIGINT,
    customer_id BIGINT,
    appointment_id BIGINT,
    subtotal DECIMAL(10, 2),
    discount_amount DECIMAL(10, 2) DEFAULT 0,
    tax_amount DECIMAL(10, 2) DEFAULT 0,
    total_amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50),
    status ENUM('pending', 'completed', 'refunded') DEFAULT 'completed',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (branch_id) REFERENCES branches(id),
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (appointment_id) REFERENCES appointments(id)
);
```

#### sale_items (عناصر المبيعات)
```sql
CREATE TABLE sale_items (
    id BIGSERIAL PRIMARY KEY,
    sale_id BIGINT NOT NULL,
    service_id BIGINT,
    product_id BIGINT,
    quantity INT DEFAULT 1,
    unit_price DECIMAL(10, 2),
    total_price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

#### invoices (الفواتير)
```sql
CREATE TABLE invoices (
    id BIGSERIAL PRIMARY KEY,
    sale_id BIGINT NOT NULL,
    invoice_number VARCHAR(50) UNIQUE,
    invoice_date DATE,
    due_date DATE,
    notes TEXT,
    is_paid BOOLEAN DEFAULT FALSE,
    paid_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sale_id) REFERENCES sales(id)
);
```

#### payments (المدفوعات)
```sql
CREATE TABLE payments (
    id BIGSERIAL PRIMARY KEY,
    sale_id BIGINT NOT NULL,
    payment_method ENUM('cash', 'card', 'transfer', 'wallet') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP,
    transaction_id VARCHAR(255),
    status ENUM('pending', 'completed', 'failed') DEFAULT 'completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE
);
```

---

### 7. جداول المخزون

#### products (المنتجات)
```sql
CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    branch_id BIGINT,
    category_id BIGINT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    sku VARCHAR(100) UNIQUE,
    purchase_price DECIMAL(10, 2),
    selling_price DECIMAL(10, 2) NOT NULL,
    quantity INT DEFAULT 0,
    reorder_level INT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (branch_id) REFERENCES branches(id),
    FOREIGN KEY (category_id) REFERENCES product_categories(id)
);
```

#### product_categories (فئات المنتجات)
```sql
CREATE TABLE product_categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### inventory_movements (حركات المخزون)
```sql
CREATE TABLE inventory_movements (
    id BIGSERIAL PRIMARY KEY,
    product_id BIGINT NOT NULL,
    movement_type ENUM('in', 'out', 'adjustment') NOT NULL,
    quantity INT NOT NULL,
    reason VARCHAR(255),
    reference_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
```

---

### 8. جداول الموردين والمشتريات

#### suppliers (الموردون)
```sql
CREATE TABLE suppliers (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255),
    address TEXT,
    city VARCHAR(100),
    payment_terms VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### purchase_orders (طلبات الشراء)
```sql
CREATE TABLE purchase_orders (
    id BIGSERIAL PRIMARY KEY,
    supplier_id BIGINT NOT NULL,
    branch_id BIGINT,
    po_number VARCHAR(50) UNIQUE,
    order_date DATE,
    expected_delivery_date DATE,
    received_date DATE,
    total_amount DECIMAL(10, 2),
    status ENUM('pending', 'ordered', 'received', 'cancelled') DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id),
    FOREIGN KEY (branch_id) REFERENCES branches(id)
);
```

---

### 9. جداول التقارير والعمولات

#### commissions (العمولات)
```sql
CREATE TABLE commissions (
    id BIGSERIAL PRIMARY KEY,
    employee_id BIGINT NOT NULL,
    month DATE,
    total_sales DECIMAL(10, 2),
    commission_rate DECIMAL(5, 2),
    commission_amount DECIMAL(10, 2),
    is_paid BOOLEAN DEFAULT FALSE,
    paid_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);
```

#### performance_reviews (تقييمات الأداء)
```sql
CREATE TABLE performance_reviews (
    id BIGSERIAL PRIMARY KEY,
    employee_id BIGINT NOT NULL,
    review_date DATE,
    reviewed_by BIGINT,
    rating INT, -- 1-5
    comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewed_by) REFERENCES users(id)
);
```

---

### 10. جداول الولاء والمكافآت

#### loyalty_points (نقاط الولاء)
```sql
CREATE TABLE loyalty_points (
    id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL,
    points INT,
    reason VARCHAR(100),
    expiry_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);
```

#### loyalty_redemptions (استرجاع النقاط)
```sql
CREATE TABLE loyalty_redemptions (
    id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL,
    points INT,
    reward_id BIGINT,
    redemption_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);
```

---

**آخر تحديث**: يونيو 2026
