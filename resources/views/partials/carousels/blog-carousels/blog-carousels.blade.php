<div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        @foreach ($school->blogs as $index => $blog)
            <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src="{{ $blog->thumbnail_path }}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Go Shule, {{ $school->name }} blog post {{ $blog->blog_title }} {{ $blog->thumbnail }}">

                {{--carousel header  --}}
                <section class="fixed z-[inherit] w-full flex-col bottom-0 left-0 pt-4 pb-2 bg-gradient-to-br from-pink-500/40 to-orange-400/40 space-y-2 px-2">
                    <h3 class="w-full inline-flex justify-start mb-1 ml-[4rem]">
                        <span class="text-xl sm:text-sm text-gray-500 dark:text-black my-2">#{{ $index + 1 }}.</span>
                        <span class="text-5xl sm:text-xl text-gray-500 dark:text-black uppercase underline underline-offset-[10px] decoration-black dark:decoration-black mx-2">{{ $blog->blog_title }}</span>
                    </h3>
                    <h3 class="w-full inline-flex justify-start mt-2 px-[4rem]">
                        <span class="inline-flex w-1/2 justify-normal text-2xl sm:text-base text-gray-500 dark:text-black uppercase">
                            Read 
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 my-1 mx-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            : {{ $blog->read }}
                        </span>
                        <a href="/blogs/{{ $blog->id }}" type="button" class="text-black bg-gradient-to-br from-pink-500 to-orange-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md sm:text-sm uppercase px-5 py-2.5 text-center mr-2 mb-2 w-1/2 whitespace-nowrap border-[3px] border-gray-500 dark:border-gray-900">{{ $blog->blog_title }}</a>
                    </h3>
                </section>
            </div>
        @endforeach
    </div>
    <!-- Slider indicators -->
    {{-- <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        @foreach ($school->blogs as $index => $blog)
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="{{ $index }}"></button>
        @endforeach
    </div> --}}
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-white border-2 border-black dark:border-black hover:bg-cyan-200 dark:hover:bg-cyan-600">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-white border-2 border-black dark:border-black hover:bg-cyan-200 dark:hover:bg-cyan-600">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>