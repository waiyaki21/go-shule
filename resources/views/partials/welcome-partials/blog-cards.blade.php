<section class="block relative z-1 bg-transparent py-4">
    <div class="mx-4">
        <div class="md:justify-center md:text-center xs:justify-start xs:text-start flex flex-wrap mt-4">
            <div class="w-full md:w-6/12 px-12 md:px-4">
                <h2 class="font-normal text-4xl uppercase underline decoration-cyan-800 text-cyan-800">
                    View Blogs
                </h2>
                <p class="text-sm leading-relaxed mt-2 mb-4 text-cyan-700">
                    <a href="/schools" class="uppercase hover:text-cyan-400 hover:underline">
                        View all blogs
                    </a>
                </p>
            </div>
        </div>
        
        <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center mt-4 mb-10 border-b-[3px] rounded-md">

        <div class="justify-center flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4 mt-8">
                <div class="flex flex-wrap">
                    @foreach ($blogs as $blog)
                        <a href="/blog/{{ $blog->id }}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-1">
                            <img class="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src="{{ asset($blog->thumbnail_path) }}" alt="{{ $blog->blog_title }} blog on goshule.com">
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-3xl font-normal uppercase underline tracking-tight text-gray-900 dark:text-white">
                                    {{ $blog->blog_title }}
                                </h5>
                                <h5 class="mb-2 text-base font-normal tracking-tight text-gray-700 dark:text-white inline-flex justify-start">
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    {{ $blog->user->name }}
                                </h5>
                                <h5 class="mb-2 text-base font-normal tracking-tight text-gray-700 dark:text-white inline-flex justify-start">
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {{ $blog->views }} Views
                                </h5>
                                <p class="mb-3 mt-1 font-normal text-gray-700 dark:text-gray-400">
                                    {{ Str::limit($blog->blog_body, 150) }}...
                                </p>
                            </div>
                        </a>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>