@include('partials.alerts.alerts-main')

<h3 class="w-full inline-flex justify-start space-x-2 mb-4">
    <span class="text-gray-800 dark:text-gray-300 uppercase underline text-3xl">All Testimonials</span>
    <span  class="text-gray-500 dark:text-gray-500 text-sm my-2">( {{ $testimonials->count() }} ) Testimonials</span>
</h3>
<section class="row px-2">

    {{-- testimonial cards  --}}
    <div class="col-sm-12 col-md-8 rounded-lg bg-transparent dark:bg-transparent">

        {{-- conditional on Testimonials count  --}}
        @if ($testimonials->count() == 0)
            <h3 class="w-full inline-flex justify-between text-3xl mb-4">
                <span class="text-gray-800 dark:text-gray-300 uppercase underline">View Testimonials.</span>
            </h3>

            <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">

            <h3 class="w-full inline-flex justify-center text-6xl mb-4">
                <span class="text-rose-800 dark:text-rose-500 uppercase underline underline-offset-[10px] decoration-rose-600 dark:decoration-rose-600">(0) Testimonials!</span>
            </h3>

            <hr class="mx-auto flex border-rose-800 dark:border-rose-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">
        @else
            <h3 class="w-full inline-flex justify-between text-3xl mb-4">
                <span class="text-gray-800 dark:text-gray-300 uppercase underline">View Testimonials.</span>
            </h3>

            <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">

            {{-- cards  --}}
            <div class="grid mb-8 md:mb-12 md:grid-cols-2 gap-2">
                @foreach ($testimonials as $testimonial)
                    <figure class="flex flex-col items-center justify-center p-4 text-center bg-white border border-cyan-600 dark:border-cyan-700 rounded-lg dark:bg-gray-800">
                        <blockquote class="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-4 dark:text-gray-400">
                            <h3 class="text-2xl font-normal text-gray-900 dark:text-white inline-flex justify-start space-x-2">
                                <span class="uppercase underline">{{ $testimonial->testimonial_title}}</span>
                                {{-- check mark if approved  --}}
                                @if ($testimonial->approved == true)
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                @endif
                            </h3>
                            <p class="my-4">
                                "{{ $testimonial->testimonial_body }}"
                            </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center space-x-3">
                            <div class="space-y-0.5 font-medium dark:text-white text-left uppercase">
                                <div class="underline">{{ $testimonial->user->name }}</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">
                                    {{ $testimonial->user->role }}
                                </div>
                            </div>
                            <button type="button" class="font-normal text-blue-600 dark:text-blue-500 hover:underline inline-flex space-x-2">
                                <a href="/update/testimonial/{{ $testimonial->id }}">
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 m-2 text-blue-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </a>
                                <a href="/delete/testimonial/{{ $testimonial->id }}">
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 m-2 text-red-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </a>
                                @if ($testimonial->approved == false)
                                    <a href="/approve/testimonial/{{ $testimonial->id }}" data-tooltip-target="popover-default">
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 m-2 text-green-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                        </svg>
                                    </a>
                                @else
                                    <a href="/disapprove/testimonial/{{ $testimonial->id }}" data-tooltip-target="popover-default">
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 m-2 text-orange-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                        </svg>
                                    </a>    
                                @endif
                                <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-base text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                                    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                        <h3 class="font-normal uppercase underline text-gray-900 dark:text-white">Testimonial Approval.</h3>
                                    </div>
                                    <div class="px-3 py-2">
                                        <p>You can approve a testimonial so that it can be viewed on the homepage</p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>
                            </button>
                        </figcaption>    
                    </figure>
                @endforeach
            </div>
            {{-- end cards  --}}
            
            <hr class="mx-auto flex border-cyan-800 dark:border-cyan-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">

        @endif
    </div>
    {{-- end testimonial cards  --}}

    {{-- testimonials form  --}}
    <div class="col-sm-12 col-md-4">
        @include('partials.forms.testimonials.add-testimonials')
    </div>
</section>