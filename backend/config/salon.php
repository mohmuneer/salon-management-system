<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Salon Configuration
    |--------------------------------------------------------------------------
    |
    | Configuration for the Salon Management System
    |
    */

    'name' => env('APP_NAME', 'Salon Management System'),

    'default_branch' => env('DEFAULT_BRANCH_ID', 1),

    'multi_tenant' => true,

    'pagination' => [
        'per_page' => env('PAGINATION_PER_PAGE', 15),
    ],

    'features' => [
        'loyalty_program' => true,
        'multi_branch' => true,
        'staff_commission' => true,
        'inventory_management' => true,
        'invoice_generation' => true,
    ],

    'payment_methods' => [
        'cash' => 'Cash',
        'card' => 'Credit/Debit Card',
        'transfer' => 'Bank Transfer',
        'wallet' => 'Digital Wallet',
    ],

    'appointment_statuses' => [
        'pending' => 'Pending',
        'confirmed' => 'Confirmed',
        'completed' => 'Completed',
        'cancelled' => 'Cancelled',
        'no_show' => 'No Show',
    ],

    'user_roles' => [
        'admin' => 'Administrator',
        'manager' => 'Branch Manager',
        'staff' => 'Staff Member',
        'customer' => 'Customer',
    ],

    'currency' => env('APP_CURRENCY', 'SAR'),

    'tax_rate' => 0.15, // 15% VAT for Saudi Arabia

];
