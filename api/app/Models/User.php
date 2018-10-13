<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';
    protected $fillable = ['username', 'fullname', 'email', 'role'];
    protected $hidden = ['id', 'created_at', 'updated_at'];

    public static function findByUsername($name)
    {
        return User::where('username', $name);
    }

    public function getRouteKeyName()
    {
        return 'username';
    }

    public function isCarrier()
    {
        return ($this->role === "carrier");
    }
}
