<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Carrier extends Model
{
    protected $table = 'carrier';
    protected $fillable = ['date', 'origin', 'dest', 'eth_id'];
    protected $hidden = ['id'];

    public function user()
    {
    	return $this->belongsTo('App\Models\User');
    }
    public static function find($origin, $dest)
    {
        return User::where('origin', $origin)->where('dest', $dest);
    }
}