@include('partials.alerts.alerts-main')

<h3 class="w-full inline-flex justify-between text-3xl mb-4">
    <span class="text-gray-800 dark:text-gray-300 uppercase underline">{{ $school->name }} Gallery</span>
</h3>
<section class="row px-2">

    {{-- photo cards  --}}
    <div class="col-sm-12 col-md-8 rounded-lg bg-transparent dark:bg-transparent">
        {{-- conditional on photos count  --}}
        @if ($school->photos->count() == 0)
            <h3 class="w-full inline-flex justify-center text-6xl mb-4">
                <span class="text-rose-800 dark:text-rose-500 uppercase underline underline-offset-[10px] decoration-rose-600 dark:decoration-rose-600">(0) photos!</span>
            </h3>

            <hr class="mx-auto flex border-rose-800 dark:border-rose-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">
        @else

            <h3 class="w-full inline-flex justify-between text-3xl my-2">
                <span class="text-gray-800 dark:text-gray-300 uppercase underline">Main Banner.</span>
            </h3>

            <h3 class="w-full inline-flex justify-between text-sm ">
                <span class="text-gray-800 dark:text-gray-300 p-2 uppercase underline text-center">
                    The main banner is the main photo that a visitor sees when visiting your page.
                </span>
            </h3>

            {{-- banner  --}}
            <section class="my-4 w-full grid grid-cols-1 space-x-2 space-y-2">
                <div class="w-full bg-white border-2 border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-cyan-700 relative dark:hover:border-cyan-800 hover:border-teal-800 hover:shadow-md m-2">
                    <a href="/photos/{{ $school->bannerPhoto->id }}">
                        <img class="rounded-lg h-full" src="{{ asset($school->bannerPhoto->banner_path) }}" alt="{{ $school->bannerPhoto->banner_name }} by {{ $school->name }} on goshule.com" />
                    </a>
                    <div class="absolute p-2 w-full bottom-0 bg-gradient-to-br from-teal-600/70 to-pink-600/90">
                        <a href="/photos/{{ $school->bannerPhoto->id }}" class="w-full inline-flex justify-between">
                            <h5 class="mb-1 text-3xl font-normal font-one uppercase underline tracking-tight text-gray-900 dark:text-white">
                                {{ $school->bannerPhoto->banner_name }}
                            </h5>
                            @if ($school->bannerPhoto->main_banner)
                                <p class="mb-2 sm:mb-1 font-normal text-teal-900 dark:text-teal-200 text-xl uppercase underline inline-flex justify-start">
                                    Main Banner
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </p>
                            @endif
                        </a>
                        <section class="row px-4 py-2 space-x-4">
                            <a href="/update/photo/{{ $school->bannerPhoto->id }}" class="col px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex justify-between uppercase border-2 border-blue-900 dark:border-blue-900">
                                Edit Banner
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mx-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </a>
                            <a href="/delete/photo/{{ $school->bannerPhoto->id }}" class="col px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 inline-flex justify-between uppercase border-2 border-red-900 dark:border-red-900">
                                Delete Banner
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mx-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </a>
                            @if ($school->bannerPhoto->main_banner)
                                <a href="/remove_banner/photo/{{ $school->bannerPhoto->id }}" class="col px-3 py-2 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 inline-flex justify-between uppercase border-2 border-rose-900 dark:border-rose-900">
                                    Remove Banner
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </a>
                            @else
                                <a href="/make_banner/photo/{{ $school->bannerPhoto->id }}" class="col p-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 inline-flex justify-between uppercase border-2 border-cyan-900 dark:border-cyan-900">
                                    Set Banner
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </a>
                            @endif
                        </section>
                    </div>
                </div>
            </section>
            {{-- end banner  --}}

            <hr class="mx-auto flex border-rose-800 dark:border-rose-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">

            {{-- cards  --}}
            <h3 class="w-full inline-flex justify-between text-3xl mb-4">
                <span class="text-gray-800 dark:text-gray-300 uppercase underline">View Photos.</span>
            </h3>

            <section class="my-4 w-full grid grid-cols-2 gap-4">
                @foreach ($school->photos as $photo)
                    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative dark:hover:border-cyan-300 hover:border-cyan-600 hover:shadow-md m-2 h-full">
                        <a href="/photos/{{ $photo->id }}">
                            <img class="rounded-lg h-full" src="{{ asset($photo->banner_path) }}" alt="{{ $photo->banner_name }} by {{ $school->name }} on goshule.com" />
                        </a>
                        <div class="absolute p-2 w-full bottom-0 bg-gradient-to-br from-gray-400/70 to-black/70">
                            <a href="/photos/{{ $photo->id }}" class="inline-flex w-full justify-between">
                                <h5 class="mb-1 text-2xl font-normal font-one uppercase underline tracking-tight text-gray-900 dark:text-white">
                                    {{ $photo->banner_name }}
                                </h5>
                                @if ($photo->main_banner)
                                    <p class="mb-2 sm:mb-1 font-normal text-gray-700 dark:text-gray-400 uppercase underline inline-flex justify-start text-base">
                                        Main Banner
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 m-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </p>
                                @endif
                            </a>
                            <section class="row p-2 space-x-4">
                                <button type="button" class="font-normal text-blue-600 dark:text-blue-500 hover:underline inline-flex space-x-2">
                                    <a href="/update/photo/{{ $photo->id }}">
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 m-2 text-blue-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </a>
                                    <a href="/delete/photo/{{ $photo->id }}">
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 m-2 text-red-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </a>
                                </button>
                                @if ($photo->main_banner)
                                    <a href="/remove_banner/photo/{{ $photo->id }}" class="col-sm-8 px-3 py-2 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 inline-flex justify-between uppercase border-2 border-rose-900 dark:border-rose-900">
                                        Remove Banner
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </a>
                                @else
                                    <a href="/make_banner/photo/{{ $photo->id }}" class="col-sm-8 px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 inline-flex justify-between uppercase border-2 border-teal-900 dark:border-teal-900">
                                        Set Banner
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </a>
                                @endif
                            </section>
                        </div>
                    </div>
                @endforeach 
            </section>
            {{-- end cards  --}}

            <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">
        @endif

        {{-- school photos tables  --}}
        {{-- @include('partials.tables.photos-tables.photos-tables') --}}
        {{-- end school photos tables  --}}

        {{-- <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center my-4 border-b-[3px] rounded-md"> --}}
    </div>
    {{-- end photo cards  --}}

    {{-- photos form  --}}
    <div class="col-sm-12 col-md-4">
        @include('partials.forms.photos.add-photos')
    </div>
</section>