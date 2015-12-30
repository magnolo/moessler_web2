<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use File;

class AngularModule extends Command
{
    protected $signature = 'ng:module {name}';
    protected $description = 'Create a new feature for Angular Backend';
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
        parent::__construct();
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        //
        $name = $this->argument('name');
        $studly_name = studly_case($name);

        $controller = file_get_contents(__DIR__.'/Stubs/AngularModule/module.controller.js.stub');
        $modules = file_get_contents(__DIR__.'/Stubs/AngularModule/module.modules.js.stub');
        $route = file_get_contents(__DIR__.'/Stubs/AngularModule/module.route.js.stub');
        $service = file_get_contents(__DIR__.'/Stubs/AngularModule/module.service.js.stub');

        $controller = str_replace(['{{StudlyName}}', '{{name}}'],[$studly_name, $name], $controller);
        $modules = str_replace(['{{StudlyName}}', '{{name}}'],[$studly_name, $name], $modules);
        $route = str_replace(['{{StudlyName}}', '{{name}}'],[$studly_name, $name], $route);
        $service = str_replace(['{{StudlyName}}', '{{name}}'],[$studly_name, $name], $service);

        $folder = __DIR__.'/../../../resources/assets/js/admin/app/'.$name;
        if (is_dir($folder)) {
            $this->info('Folder already exists');
            return false;
        }

        File::makeDirectory($folder, 0775, true);

        File::put($folder.'/'.$name.'.controller.js', $controller);
         //create controller (.js)
        File::put($folder.'/'.$name.'.modules.js', $modules);
         //create less file (.less)
        File::put($folder.'/'.$name.'.route.js', $route);

        $folder = __DIR__.'/../../../resources/assets/js/admin/app/services';
        File::put($folder.'/sliders.service.js', $service);

        $folder = __DIR__.'/../../../resources/views/admin/'.$name;
        if (is_dir($folder)) {
            $this->info('Folder already exists');
            return false;
        }
        File::makeDirectory($folder, 0775, true);
        File::put($folder.'/index.blade.php', "");
        File::put($folder.'/create.blade.php', "");
        File::put($folder.'/edit.blade.php', "");

        $this->info('Angular module created successfully.');

    }
}
