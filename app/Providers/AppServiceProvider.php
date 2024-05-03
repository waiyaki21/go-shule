<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //pass through the routeName
        view()->composer(
            ['layouts.app','partials.breadcrumbs.title'],
            function ($view) {
                $view->with('routeName', Route::current()->getName());
            }
        );
    }
}
