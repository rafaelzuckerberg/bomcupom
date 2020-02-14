<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Hash;

use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      =>      'Rafael Moura',
            'email'     =>      'Rafael Moura',
            'password'  =>      Hash::make('password'),
            'status'    =>      2,
            'profile'   =>      1 
        ]);
    }
}
