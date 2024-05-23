<?php

namespace Database\Seeders;

use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::factory(5)->create();

        $user_id = 'USR-' . date('ymdhis');

        User::create([
            'user_id' => $user_id,
            'name' => 'Mr. Super Admin',
            'email' => 'superadmin@gmail.com',
            'password' => bcrypt('password'),
        ]);

        RoleUser::create([
            'role_id' => '1',
            'user_id' => $user_id,
        ]);
    }
}
