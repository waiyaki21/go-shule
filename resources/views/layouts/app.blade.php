<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ Route::current()->getName() }} - {{ env('APP_NAME') }}</title>

        <!-- Scripts -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body class="font-sans antialiased bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900" id="app">
        <div class="min-h-screen">
            {{-- navigation bars  --}}
            @include('partials.navs.main-nav')
            {{-- end navigation bars  --}}


            <!-- Page Content -->
            <div id="slim-content" class="flex !pl-[77px] sm:m-0 md:m-0">
                <div class="pt-4 w-full">
                    @yield('body')
                </div>
            </div>
        </div>
    </body>

    {{-- dark mode settings  --}}
    @include('partials.plugins.theme')

    {{-- scripts  --}}
    @include('partials.scripts.main')
    <script>
        document
        .getElementById("slim-toggler")
        .addEventListener("click", () => {
            const instance = te.Sidenav.getInstance(
            document.getElementById("sidenav-4")
            );
            instance.toggleSlim();
        });
    </script>
    {{-- <script src=" https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js "></script> --}}
    <script>
        // var fixmeTop = $('.fixme').offset().top;
        //     $(window).scroll(function() {
        //         var currentScroll = $(window).scrollTop();
        //         if (currentScroll >= fixmeTop) {
        //             $('.fixme').css({
        //                 position: 'fixed'
        //             }).addClass('w-full fixed top-[65px] left-[20px] bg-white dark:bg-gray-800 z-[inherit]');
        //         } else {
        //             $('.fixme').css({
        //                 position: 'static'
        //             }).removeClass('w-full fixed top-[65px] left-[20px] bg-white dark:bg-gray-800 z-[inherit]');
        //         }
        //     });
        // var fixmeTop = $('.stickyDiv').offset().top;
        //     $(window).scroll(function() {
        //         var currentScroll = $(window).scrollTop();
        //         if (currentScroll >= fixmeTop) {
        //             $('.stickyDiv').css({
        //                 position: 'fixed'
        //             }).addClass('top-[75px]');
        //         } else {
        //             $('.stickyDiv').css({
        //                 position: 'static'
        //             }).removeClass('top-[75px]');
        //         }
        //     });
    </script>
</html>
