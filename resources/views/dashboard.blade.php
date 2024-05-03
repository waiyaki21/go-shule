@extends('layouts.app')

@section('body')
<section class="py-[3rem] mx-auto font-one">
    
    <section class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div class="p-2 text-start z-10 relative">
            @include('partials.breadcrumbs.dashboard')
        </div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 z-10 relative">
            {{-- header  --}}
            @include('partials.headers.main-header')
            {{-- end header  --}}

            {{-- main tab  --}}
            @include('partials.tabs.main-tab')
            {{-- end main tab  --}}

        </div>
        <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>

</section>
@endsection
