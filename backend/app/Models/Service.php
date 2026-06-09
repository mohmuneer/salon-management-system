<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'branch_id',
        'category_id',
        'name',
        'description',
        'price',
        'duration_minutes',
        'image_url',
        'is_active',
        'display_order',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'price' => 'decimal:2',
    ];

    /**
     * Relationships
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function category()
    {
        return $this->belongsTo(ServiceCategory::class);
    }

    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_specializations');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}
