@extends('layouts.auth')

@section('body')

    {{-- title intro  --}}
    @if (Route::current()->getName() == 'register super user')
        <h1 class="text-center text-4xl text-gray-800 uppercase underline dark:text-gray-300 font-one">
            Admin Registration.
        </h1>
    @elseif (Route::current()->getName() == 'register school')
        <h1 class="text-center text-4xl text-gray-800 uppercase underline dark:text-gray-300 font-one">
            School Registration.
        </h1>
    @elseif (Route::current()->getName() == 'register parent')
        <h1 class="text-center text-4xl text-gray-800 uppercase underline dark:text-gray-300 font-one">
            Parent Registration.
        </h1>
    @endif
    {{-- end title intro  --}}

    <hr class="mx-auto w-[75%] text-center border-b border-gray-500 my-2">
        
    <section class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-cyan-300 py-4 px-2 rounded-md shadow md:w-[25rem]">
        @if (Route::current()->getName() == 'register super user')
            <form method="POST" action="{{ route('registerAdmin') }}">
        @elseif (Route::current()->getName() == 'register school')
            <form method="POST" action="{{ route('registerSchool') }}">
        @elseif (Route::current()->getName() == 'register parent')
            <form method="POST" action="{{ route('registerParent') }}">   
        @endif
            @csrf
            <!-- Name -->
            <div>
                <x-input-label for="name" :value="__('Name')" />
                <x-text-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
                <x-input-error :messages="$errors->get('name')" class="mt-2" />
            </div>

            <!-- Email Address -->
            <div class="mt-4">
                <x-input-label for="email" :value="__('Email')" />
                <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autocomplete="username" />
                <x-input-error :messages="$errors->get('email')" class="mt-2" />
            </div>

            <!-- Password -->
            <div class="mt-4">
                <x-input-label for="password" :value="__('Password')" />

                <x-text-input id="password" class="block mt-1 w-full"
                                type="password"
                                name="password"
                                required autocomplete="new-password" />

                <x-input-error :messages="$errors->get('password')" class="mt-2" />
            </div>

            <!-- user role --> 
            @if (Route::current()->getName() == 'register super user')
                <x-text-input id="role" class="hidden" type="name" name="role" value="admin" />
            @elseif (Route::current()->getName() == 'register school')
                <x-text-input id="role" class="hidden" type="name" name="role" value="school" />
            @elseif (Route::current()->getName() == 'register parent')
                <x-text-input id="role" class="hidden" type="name" name="role" value="parent" />
            @endif

            <!-- Confirm Password -->
            <div class="mt-4">
                <x-input-label for="password_confirmation" :value="__('Confirm Password')" />

                <x-text-input id="password_confirmation" class="block mt-1 w-full"
                                type="password"
                                name="password_confirmation" required autocomplete="new-password" />

                <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('login') }}">
                    {{ __('Already registered?') }}
                </a>

                <x-primary-button class="ml-4">
                    {{ __('Register') }}
                </x-primary-button>
            </div>
        </form>
    </section>
@endsection
