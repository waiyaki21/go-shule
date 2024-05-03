<section class="block relative z-1 bg-transparent py-4">
    <div class="mx-4">
        <div class="md:justify-center md:text-center xs:justify-start xs:text-start flex flex-wrap mt-4">
            <div class="w-full md:w-6/12 px-12 md:px-4">
                <h2 class="font-normal text-4xl uppercase underline decoration-cyan-800 text-cyan-800">
                    View School Events
                </h2>
                <p class="text-sm leading-relaxed mt-2 mb-4 text-cyan-700">
                    <a href="/schools" class="uppercase hover:text-cyan-400 hover:underline">
                        View all school events
                    </a>
                </p>
            </div>
        </div>
        
        <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center mt-4 mb-10 border-b-[3px] rounded-md">

        <div class="justify-center flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4 mt-8">
                <div class="flex flex-wrap">
                    @foreach ($events as $event)
                        <div class="w-full lg:w-3/12 md:w-4/12 sm:w-1/2 px-2">
                            <a href="/event/{{ $event->id }}" class="hover:underline  text-start uppercase font-normal pb-1 mb-4">
                                <h3 class="text-xl pb-1 text-gray-900">
                                    {{ $event->name }}
                                </h3>
                                <h4 class="text-sm pb-1 text-gray-700">
                                    {{ $event->school->name }}
                                </h4>
                                <h4 class="text-sm pb-1 text-gray-500">
                                    {{ Carbon\Carbon::parse($event->date)->toFormattedDayDateString() }}
                                </h4>
                            </a>

                            <a href="/event/{{ $event->id }}" class="mt-4">
                                <div class="hover:-mt-2 relative flex flex-col min-w-0 break-words bg-cyan-800 w-full mb-4 shadow-lg rounded-md ease-linear transition-all duration-150 hover:border-[3px] hover:border-cyan-800 hover:shadow-lg">
                                    <img class="align-middle border-none max-w-full h-[14rem] rounded-md" src="{{ asset($event->thumbnail_path) }}" alt="{{ $event->name }} by {{ $event->school->name }} on goshule.com"/>
                                </div>
                            </a>
                        </div>
                    @endforeach
                    @foreach ($events as $event)
                        <div class="w-full lg:w-3/12 md:w-4/12 sm:w-1/2 px-2">
                            <a href="/event/{{ $event->id }}" class="hover:underline  text-start uppercase font-normal pb-1 mb-4">
                                <h3 class="text-xl pb-1 text-gray-900">
                                    {{ $event->name }}
                                </h3>
                                <h4 class="text-sm pb-1 text-gray-700">
                                    {{ $event->school->name }}
                                </h4>
                                <h4 class="text-sm pb-1 text-gray-500">
                                    {{ Carbon\Carbon::parse($event->date)->toFormattedDayDateString() }}
                                </h4>
                            </a>

                            <a href="/event/{{ $event->id }}" class="mt-4">
                                <div class="hover:-mt-2 relative flex flex-col min-w-0 break-words bg-cyan-800 w-full mb-4 shadow-lg rounded-md ease-linear transition-all duration-150 hover:border-[3px] hover:border-cyan-800 hover:shadow-lg">
                                    <img class="align-middle border-none max-w-full h-[14rem] rounded-md" src="{{ asset($event->thumbnail_path) }}" alt="{{ $event->name }} by {{ $event->school->name }} on goshule.com"/>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>