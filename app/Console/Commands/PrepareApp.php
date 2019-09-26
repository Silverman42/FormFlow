<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Artisan;
use Spatie\Permission\Models\Permission;

class PrepareApp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:init';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "This command runs the migrations, roles and permissions are been setup";

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        //Run fresh migrations
        $this->info('New migrations are been fired up, relax while you get served...');

        //generate new cipher keys
        Artisan::call('generate:key');

        //Run fresh migrations
        Artisan::call('migrate:refresh');
        $this->CreateClient();
        $this->CreateSuperAdmin();
        $this->info('Your app is prepared and ready fly. Awesome !!');
    }

    /**
     * Create User model and assign Role admin
     * 
     * @return mixed
     */
    public function CreateSuperAdmin(){
        $admin = new User;
        $admin->email = 'admin@test.com';
        $admin->passowrd = Hash::make('secret');
        $admin->remember_token = Str::random(10);
        $admin->email_verified_at = now();
        $admin->first_name = 'Super';
        $admin->last_name = 'Admin';
        $admin->save();

        //create role
        $role = Role::where('name','super-admin')->firstorCreate(['name'=>'super-admin']);

        //assign role
        $admin->assignRole('super-admin');
        return $this->info('New user created and assigned the role of admin');
    }

    /**
     * Create User model and assign Role client
     * 
     * @return mixed
     */
    public function CreateClient(){
        $client = new User;
        $client->email = 'client@test.com';
        $client->passowrd = Hash::make('secret');
        $client->remember_token = Str::random(10);
        $client->email_verified_at = now();
        $client->first_name = 'Great';
        $client->last_name = 'Client';
        $client->save();

        //create role
        $role = Role::where('name','client')->firstorCreate(['name'=>'client']);
        $client->assignRole('client');
        return $this->info('New user created and assigned the role of client');
    }
}
