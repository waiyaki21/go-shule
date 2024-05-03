<div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        @foreach ($school->events as $index => $event)
            <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src="{{ $event->thumbnail_path }}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Go Shule, {{ $school->name }} event post {{ $event->name }} {{ $event->thumbnail }}">

                {{--carousel header  --}}
                <section class="fixed z-[inherit] w-full flex-col bottom-0 left-0 pt-4 pb-2 bg-gradient-to-br from-cyan-400/40 to-blue-600/40 space-y-2 px-2">
                    <h3 class="w-full inline-flex justify-start mb-1 ml-[4rem]">
                        <span class="text-xl sm:text-xs text-gray-500 dark:text-black my-2">#{{ $index + 1 }}.</span>
                        <span class="text-5xl sm:text-xl text-gray-500 dark:text-black uppercase underline underline-offset-[10px] decoration-black dark:decoration-black mx-2">{{ $event->name }}</span>
                    </h3>
                    <h3 class="w-full inline-flex justify-start mt-2 px-[4rem]">
                        <span class="inline-flex w-1/2 justify-normal text-2xl sm:text-base text-gray-500 dark:text-black uppercase">
                            Date 
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-2 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            : {{ Carbon\Carbon::parse($event->date)->toFormattedDayDateString() }}
                        </span>
                        <a href="/event/{{ $event->id }}" type="button" class="text-black bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-md font-medium text-md sm:text-sm uppercase px-5 py-2.5 text-center mr-2 mb-2 w-1/2 whitespace-nowrap border-[3px] border-gray-500 dark:border-gray-900">{{ $event->name }}</a>
                    </h3>
                </section>
            </div>
        @endforeach
    </div>
    <!-- Slider indicators -->
    {{-- <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        @foreach ($school->blogs as $index => $event)
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