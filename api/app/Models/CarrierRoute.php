<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class CarrierRoute extends Model
{
    protected $table = 'carrier_route';
    protected $fillable = ['carrier_id', 'src', 'dest', 'max_load'];
    protected $hidden = ['id', 'created_at', 'updated_at'];

    public static function find($src, $dest)
    {
        return User::where('src', $src)->where('dest', $dest);
    }
}
