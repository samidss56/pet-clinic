<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $primaryKey = 'user_id';
    public $incrementing = false;
    // protected $fillable = [
    //     'user_id',
    //     'name',
    //     'email',
    //     'role',
    //     'password',
    // ];
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function roles() {
        return $this->belongsToMany(Role::class, 'role_user', 'user_id', 'role_id');
    }
    
    public function hasRole(...$roles)
    {
        return $this->roles()->whereIn('name', $roles)->exists();
    }

    public function hasRoles()
    {
        return $this->roles()->count() >= 1 ? true : false;
    }

    public function hasAnyRoles(...$roles)
    {
        foreach ($roles as $role) {
            if (str($this->roles->pluck('name'))->containsAll($role)) {
                return true;
            }
        }

        return false;
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'user_id','user_id');
    }

    // public function owner()
    // {
    //     return $this->hasOne(Owner::class, 'owner_id', 'id');
    // }

    // public function doctor()
    // {
    //     return $this->hasOne(Doctor::class, 'doctor_id', 'id');
    // }
}
