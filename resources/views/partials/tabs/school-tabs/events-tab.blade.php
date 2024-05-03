@include('partials.alerts.alerts-main')

<h3 class="w-full inline-flex justify-between text-3xl mb-4">
    <span class="text-gray-800 dark:text-gray-300 uppercase underline">{{ $school->name }} Events</span>
</h3>
<section class="row px-2">

    {{-- event cards  --}}
    <div class="col-sm-12 col-md-8 rounded-lg bg-transparent dark:bg-transparent">
        <h3 class="w-full inline-flex justify-between text-3xl mb-4">
            <span class="text-white dark:text-gray-300 uppercase underline">View Events.</span>
        </h3>

        {{-- conditional on events count  --}}
        @if ($school->events->count() == 0)
            <h3 class="w-full inline-flex justify-center text-6xl mb-4">
                <span class="text-rose-800 dark:text-rose-500 uppercase underline underline-offset-[10px] decoration-rose-600 dark:decoration-rose-600">(0) Events!</span>
            </h3>

            <hr class="mx-auto flex border-rose-800 dark:border-rose-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">
        @else
            {{-- carousel  --}}
            @include('partials.carousels.event-carousels.event-carousels')
            {{-- end carousel  --}}
            
            <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">
        @endif

        {{-- school events tables  --}}
        @include('partials.tables.events-tables.events-tables')
        {{-- end school events tables  --}}

        <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">

        <h3 class="w-full inline-flex justify-between text-3xl my-2">
            <span class="text-gray-800 dark:text-gray-300 uppercase underline">Recent Events.</span>
        </h3>

        {{-- cards  --}}
        <section class="my-4 w-full grid grid-cols-3 space-x-2 space-y-2">
            @foreach ($school->latestEvents as $event)
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/events/{{ $event->id }}">
                        <img class="rounded-t-lg" src="{{ asset($event->thumbnail_path) }}" alt="{{ $event->name }} by {{ $school->name }} on goshule.com" />
                    </a>
                    <div class="p-2">
                        <a href="/events/{{ $event->id }}">
                            <h5 class="mb-2 text-2xl font-normal font-one uppercase underline tracking-tight text-gray-900 dark:text-white">
                                {{ $event->name }}
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {{ $event->date }} by {{ $event->attendees }}
                        </p>
                        <a href="/events/{{ $event->id }}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View Event
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            @endforeach 
        </section>
        {{-- end cards  --}}

        <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">
    </div>
    {{-- end event cards  --}}

    {{-- events form  --}}
    <div class="col-sm-12 col-md-4">
        @include('partials.forms.events.add-events')
    </div>
</section>