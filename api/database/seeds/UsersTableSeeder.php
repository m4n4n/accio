<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
        'name' => 'Kartikey Pandey',
        'email' => 'kp@gmail.com',
        'password' => Hash::make('password'),
        'remember_token' => 'str_random(10)',
         ]);
    }
}
