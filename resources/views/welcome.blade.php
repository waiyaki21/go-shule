<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="shortcut icon" href="./assets/img/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="./assets/img/apple-icon.png"
    />
    <link
      rel="stylesheet"
      href="./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />
    <link rel="stylesheet" href="./assets/styles/tailwind.css" />
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <title>{{ Route::current()->getName() }} - {{ env('APP_NAME') }}</title>
  </head>
  <body class="bg-dots-darker bg-center bg-gray-100 font-one">
    {{-- main nav  --}}
    @include('partials.navs.welcome-nav')
    {{-- end main nav  --}}

    {{-- welcome header  --}}
    <section class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div class="p-2 mt-20 text-start z-10 relative">
            @include('partials.breadcrumbs.dashboard')
        </div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 z-10 relative">
            {{-- header  --}}
            @include('partials.welcome-partials.welcome-header')
            {{-- end header  --}}

            {{-- schools cards  --}}
            @include('partials.welcome-partials.school-cards')

            {{-- event cards  --}}
            @include('partials.welcome-partials.event-cards')

            {{-- blog cards  --}}
            @include('partials.welcome-partials.blog-cards')

            {{-- testimonial cards  --}}
            @include('partials.welcome-partials.testimonial-cards')
        </div>
        <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>

    
    @include('partials.welcome-partials.welcome-footer')
  </body>

  @include('partials.scripts.welcome')
</html>
