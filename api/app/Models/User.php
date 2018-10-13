<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable
{
    protected $table = 'users';
    protected $fillable = ['name', 'email','password'];
    protected $hidden = ['id', 'created_at', 'updated_at'];

    // public static function findByUsername($name)
    // {
    //     return User::where('username', $name);
    // }

    // public function getRouteKeyName()
    // {
    //     return 'username';
    // }

    // public function isCarrier()
    // {
    //     return ($this->role === "carrier");
    // }
}
