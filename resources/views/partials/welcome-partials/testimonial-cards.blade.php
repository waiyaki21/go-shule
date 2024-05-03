<section class="block relative z-1 bg-transparent py-4 mb-8">
    <div class="mx-4">
        <div class="md:justify-center md:text-center xs:justify-start xs:text-start flex flex-wrap mt-4">
            <div class="w-full md:w-6/12 px-12 md:px-4">
                <h2 class="font-normal text-4xl uppercase underline decoration-cyan-800 text-cyan-800">
                    View Testimonials
                </h2>
            </div>
        </div>
        
        <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center mt-4 mb-10 border-b-[3px] rounded-md">

        <div class="justify-center flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4 mt-8">
                <div class="flex flex-wrap">
                    @foreach ($testimonials as $testimonial)

                        <figure class="max-w-md mx-auto text-center">
                            <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                            </svg>
                            <blockquote>
                                <p class="text-2xl italic font-normal text-gray-900 dark:text-white">"{{ Str::limit($testimonial->testimonial_body, 150) }}..."</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                {{-- <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> --}}
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <cite class="pr-3 font-normal text-gray-900 dark:text-white">
                                        {{ $testimonial->user->name }}
                                    </cite>
                                    <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">
                                        {{ $testimonial->user->role }}
                                    </cite>
                                </div>
                            </figcaption>
                        </figure>

                        {{-- <a href="/testimonial/{{ $testimonial->id }}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-1">
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <p class="text-start font-bold font-fancy text-black dark:text-gray-400 text-8xl">
                                    "
                                </p>
                                <p class="my-1 font-normal text-gray-700 dark:text-gray-400">
                                    {{ Str::limit($testimonial->testimonial_body, 150) }}...
                                </p>
                                <p class="text-end font-bold font-fancy text-black dark:text-gray-400 text-8xl">
                                    "
                                </p>
                                <h5 class="mb-2 text-3xl font-normal uppercase underline tracking-tight text-gray-900 dark:text-white">
                                    {{ $testimonial->testimonial_title }}
                                </h5>
                                <h5 class="mb-2 text-base font-normal tracking-tight text-gray-700 dark:text-white inline-flex justify-start space-x-2">
                                    <section class="p-2 bg-cyan-500 rounded-full border border-black">
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-black">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </section>
                                    <span class ="font-fancy text-2xl">{{ $testimonial->user->name }}</span>  
                                    <span class ="font-one m-2 uppercase">
                                        <u>{{ $testimonial->user->role }}</u>
                                    </span> 
                                </h5>
                            </div>
                        </a> --}}
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>