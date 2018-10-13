<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	User::create([
        'name' => 'Kartikey Pandey',
        'email' => 'kp@gmail.com',
        'password' => Hash::make('password'),
        'remember_token' => 'str_random(10)',
         ]);
    }
}
