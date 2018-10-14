<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Contract extends Model // intially centralized contracts
{
    protected $table = 'contract';
    protected $fillable = ['carrier_id', 'sender_id', 'load', 'collateral_amount', 'accepted'];
    protected $hidden = ['id', 'created_at', 'updated_at'];
}
