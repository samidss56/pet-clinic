<?php

namespace Database\Seeders;

use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::factory(5)->create();

        $specificUsers = [
            [
                'name' => 'Mr. Super Admin',
                'email' => 'superadmin@gmail.com',
                'password' => bcrypt('password'),
                'role_id' => '1',
            ],
            [
                'name' => 'Mr. Admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('password'),
                'role_id' => '2',
            ],
            [
                'name' => 'Mr. Owner',
                'email' => 'owner@gmail.com',
                'password' => bcrypt('password'),
                'role_id' => '3',
            ]
        ];

        // Create each specific user and assign a role
        foreach ($specificUsers as $userData) {
            $user_id = 'USR-' . date('ymdhis') . '-' . Str::random(5);

            User::create([
                'user_id' => $user_id,
                'name' => $userData['name'],
                'email' => $userData['email'],
                'password' => $userData['password'],
            ]);

            RoleUser::create([
                'role_id' => $userData['role_id'],
                'user_id' => $user_id,
            ]);
        }
    }
}
