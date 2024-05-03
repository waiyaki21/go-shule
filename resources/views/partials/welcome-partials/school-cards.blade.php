<section class="block relative z-1 bg-transparent py-4">
    <div class="mx-4">
        <div class="md:justify-center md:text-center xs:justify-start xs:text-start flex flex-wrap mt-4">
            <div class="w-full md:w-6/12 px-12 md:px-4">
                <h2 class="font-normal text-4xl uppercase underline decoration-cyan-800 text-cyan-800">
                    View Schools
                </h2>
                <p class="text-sm leading-relaxed mt-2 mb-4 text-cyan-700">
                    <a href="/schools" class="uppercase hover:text-cyan-400 hover:underline">
                        View all schools
                    </a>
                </p>
            </div>
        </div>
        
        <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center mt-4 mb-10 border-b-[3px] rounded-md">

        <div class="justify-center flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4 mt-8">
                <div class="flex flex-wrap">
                    @foreach ($schools as $school)
                        <div class="w-full lg:w-3/12 md:w-4/12 sm:w-1/2 px-2">
                            <a href="/view_school/{{ $school->id }}" class="">
                                <h3 class="text-xl font-normal pb-1 text-start uppercase hover:underline">
                                    {{ $school->name }}
                                </h3>
                                <h4 class="text-sm font-normal pb-1 text-start uppercase hover:underline">
                                    {{ $school->short_name }}
                                </h4>
                            </a>

                            @include('partials.welcome-partials.school-location')

                            <a href="/view_school/{{ $school->id }}" class="mt-4">
                                <div class="hover:-mt-3 relative flex flex-col min-w-0 break-words bg-cyan-800 w-full mb-4 shadow-lg rounded-md ease-linear transition-all duration-150 hover:border-[3px] hover:border-cyan-800 hover:shadow-lg">
                                    @if ($school->bannerPhoto == null)
                                        <img alt="{{ $school->name }} Go Shule" class="align-middle border-none max-w-full h-[14rem] rounded-md" src="./assets/No-Image-Placeholder.png"/>
                                    @else
                                        <img class="align-middle border-none max-w-full h-[14rem] rounded-md" src="{{ asset($school->bannerPhoto->banner_path) }}" alt="{{ $school->bannerPhoto->banner_name }} by {{ $school->name }} on goshule.com"/>
                                    @endif
                                </div>
                            </a>
                        </div>
                        <div class="w-full lg:w-3/12 md:w-4/12 sm:w-1/2 px-2">
                            <a href="/view_school/{{ $school->id }}" class="">
                                <h3 class="text-xl font-normal pb-1 text-start uppercase hover:underline">
                                    {{ $school->name }}
                                </h3>
                                <h4 class="text-sm font-normal pb-1 text-start uppercase hover:underline">
                                    {{ $school->short_name }}
                                </h4>
                            </a>

                            @include('partials.welcome-partials.school-location')

                            <a href="/view_school/{{ $school->id }}" class="mt-4">
                                <div class="hover:-mt-3 relative flex flex-col min-w-0 break-words bg-cyan-800 w-full mb-4 shadow-lg rounded-md ease-linear transition-all duration-150 hover:border-[3px] hover:border-cyan-800 hover:shadow-lg">
                                    @if ($school->bannerPhoto == null)
                                        <img alt="{{ $school->name }} Go Shule" class="align-middle border-none max-w-full h-[14rem] rounded-md" src="./assets/No-Image-Placeholder.png"/>
                                    @else
                                        <img class="align-middle border-none max-w-full h-[14rem] rounded-md" src="{{ asset($school->bannerPhoto->banner_path) }}" alt="{{ $school->bannerPhoto->banner_name }} by {{ $school->name }} on goshule.com"/>
                                    @endif
                                </div>
                            </a>
                        </div>
                        <div class="w-full lg:w-3/12 md:w-4/12 sm:w-1/2 px-2">
                            <a href="/view_school/{{ $school->id }}" class="">
                                <h3 class="text-xl font-normal pb-1 text-start uppercase hover:underline">
                                    {{ $school->name }}
                                </h3>
                                <h4 class="text-sm font-normal pb-1 text-start uppercase hover:underline">
                                    {{ $school->short_name }}
                                </h4>
                            </a>

                            @include('partials.welcome-partials.school-location')

                            <a href="/view_school/{{ $school->id }}" class="mt-4">
                                <div class="hover:-mt-3 relative flex flex-col min-w-0 break-words bg-cyan-800 w-full mb-4 shadow-lg rounded-md ease-linear transition-all duration-150 hover:border-[3px] hover:border-cyan-800 hover:shadow-lg">
                                    @if ($school->bannerPhoto == null)
                                        <img alt="{{ $school->name }} Go Shule" class="align-middle border-none max-w-full h-[14rem] rounded-md" src="./assets/No-Image-Placeholder.png"/>
                                    @else
                                        <img class="align-middle border-none max-w-full h-[14rem] rounded-md" src="{{ asset($school->bannerPhoto->banner_path) }}" alt="{{ $school->bannerPhoto->banner_name }} by {{ $school->name }} on goshule.com"/>
                                    @endif
                                </div>
                            </a>
                        </div>
                        <div class="w-full lg:w-3/12 md:w-4/12 sm:w-1/2 px-2">
                            <a href="/view_school/{{ $school->id }}" class="">
                                <h3 class="text-xl font-normal pb-1 text-start uppercase hover:underline">
                                    {{ $school->name }}
                                </h3>
                                <h4 class="text-sm font-normal pb-1 text-start uppercase hover:underline">
                                    {{ $school->short_name }}
                                </h4>
                            </a>

                            @include('partials.welcome-partials.school-location')

                            <a href="/view_school/{{ $school->id }}" class="mt-4">
                                <div class="hover:-mt-3 relative flex flex-col min-w-0 break-words bg-cyan-800 w-full mb-4 shadow-lg rounded-md ease-linear transition-all duration-150 hover:border-[3px] hover:border-cyan-800 hover:shadow-lg">
                                    @if ($school->bannerPhoto == null)
                                        <img alt="{{ $school->name }} Go Shule" class="align-middle border-none max-w-full h-[14rem] rounded-md" src="./assets/No-Image-Placeholder.png"/>
                                    @else
                                        <img class="align-middle border-none max-w-full h-[14rem] rounded-md" src="{{ asset($school->bannerPhoto->banner_path) }}" alt="{{ $school->bannerPhoto->banner_name }} by {{ $school->name }} on goshule.com"/>
                                    @endif
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>