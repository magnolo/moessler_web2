<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
use App\UserRoles;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('users')->delete();
        DB::table('user_roles')->delete();

        User::reguard();

        $users_data = [
            [
                'name'      => 'Manfred Walder',
                'email'     => 'office@manfredwalder.at',
                'password'  => bcrypt('vald1234'),
                'image'     => 'minion3.jpg',
                'role'      => 4
            ]


        ];

        foreach($users_data as $data)
        {
            $user = User::create($data);
            $user->UserRoles()->save(new UserRoles($data));
        }

        User::unguard();

    }
}
