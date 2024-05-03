<section class="text-center">
    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
        <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Click to view Notifications.</span> 
        <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
    </a>
    <h1 class="mb-4 tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span class="font-fancy text-6xl font-normal mr-1 text-teal-300">Welcome, </span>
        <span class="underline uppercase text-4xl font-bold font-one">{{ Auth::user()->name }}!</span>
    </h1>
    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200 uppercase">Welcome <u>{{ Auth::user()->name }}</u>, to the {{ env('APP_NAME') }} - Admin panel , from here you can monitor all information from schools details, parents info, submitted blog posts & testimonials and many more</p>
</section>