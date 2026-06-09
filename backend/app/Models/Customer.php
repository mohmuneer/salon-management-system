<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'branch_id',
        'first_name',
        'last_name',
        'email',
        'phone',
        'gender',
        'date_of_birth',
        'address',
        'city',
        'region',
        'notes',
        'loyalty_points',
        'total_spent',
        'visit_count',
        'is_active',
        'last_visit_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'date_of_birth' => 'date',
        'last_visit_at' => 'datetime',
    ];

    /**
     * Accessors
     */
    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /**
     * Relationships
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }

    public function interactions()
    {
        return $this->hasMany(CustomerInteraction::class);
    }

    public function preferences()
    {
        return $this->hasOne(CustomerPreference::class);
    }

    public function loyaltyPoints()
    {
        return $this->hasMany(LoyaltyPoint::class);
    }
}
