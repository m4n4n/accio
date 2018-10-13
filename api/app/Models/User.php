<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable
{
    protected $table = 'users';
    protected $fillable = ['name', 'email', 'password'];
    protected $hidden = ['id', 'password', 'created_at', 'updated_at'];

    public static function findByName($name)
    {
        return User::where('name', $name);
    }

    public function getRouteKeyName()
    {
        return 'email';
    }

    // public function isCarrier()
    // {
        // return ($this->role === "carrier");
    // }
}
