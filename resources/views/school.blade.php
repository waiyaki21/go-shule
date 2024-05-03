@extends('layouts.app')

@section('body')
<section class="pt-[3rem] mx-auto font-one">
    
    <section  
        @if($school->bannerPhoto == null) 
            class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]" 
        @else 
            class="bg-white dark:bg-gray-900
            bg-fixed bg-no-repeat bg-center"
            style="background-image: linear-gradient(to bottom, rgba(246, 246, 248, 0), #233876), url('{{ $school->bannerPhoto->banner_path }}'); width: 100%; background-size: cover;"
        @endif>
        <div class="p-2 text-start z-10 relative">
            @include('partials.breadcrumbs.school')
        </div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 z-10 relative">
            {{-- header  --}}
            @include('partials.headers.school-header')
            {{-- end header  --}}

            {{-- main tab  --}}
            @include('partials.tabs.school-tabs.school-tab')
            {{-- end main tab  --}}

        </div>
        {{-- <div style="background-image: linear-gradient(to bottom, rgb(246, 246, 248), #233876), url('{{ $school->bannerPhoto->banner_path }}'); width: 100%; background-size: cover;"></div> --}}
        {{-- <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-[150vh] absolute top-0 left-0 z-0"></div>  --}}
    </section>

</section>
@endsection
