<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class RequestPackage extends Model
{
    protected $table = 'request';
    protected $fillable = ['carrier_id', 'product', 'eth_id', 'state','route_id'];
    protected $hidden = ['id'];

    public static function find($src, $dest)
    {
        return User::where('src', $src)->where('dest', $dest);
    }
}
