<section class="text-start">
    <h1 class="mb-1 tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span class="font-one font-normal mr-1 text-teal-300 uppercase underline">{{ $school->name }}</span>
    </h1>
    <h1 class="mb-1 tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white">
        <span class="underline uppercase text-4xl font-bold font-one">{{ $school->short_name }}</span>
    </h1>
    <p class="mb-8 text-base font-normal text-gray-500 lg:text-xl dark:text-gray-200 uppercase">
        Welcome <u>{{ Auth::user()->name }}</u>, to the {{ env('APP_NAME') }} - School Admin Dashboard , from here you can monitor all information from concerning your schools details, create and update events to showcase your school, submit blog posts & write us a testimonials and many more.
    </p>
</section>