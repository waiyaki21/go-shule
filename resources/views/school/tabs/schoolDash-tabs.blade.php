<div class="mb-4 border-b border-gray-200 dark:border-gray-700 fixme">
    <ul class="flex flex-wrap -mb-px text-sm font-normal uppercase text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        @if ($school != null)
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg uppercase" id="events-tab" data-tabs-target="#events" type="button" role="tab" aria-controls="events" aria-selected="false">Events</button>
            </li>
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:text-white dark:hover:text-gray-300 uppercase" id="blogs-tab" data-tabs-target="#blogs" type="button" role="tab" aria-controls="blogs" aria-selected="false">Blogs</button>
            </li>
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:text-white dark:hover:text-gray-300 uppercase" id="pictures-tab" data-tabs-target="#pictures" type="button" role="tab" aria-controls="pictures" aria-selected="false">Pictures</button>
            </li>
            <li role="presentation">
                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:text-white dark:hover:text-gray-300 uppercase" id="testimonials-tab" data-tabs-target="#testimonials" type="button" role="tab" aria-controls="testimonials" aria-selected="false">Testimonials</button>
            </li>
            <li role="presentation">
                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:text-white dark:hover:text-gray-300 uppercase" id="moreInfo-tab" data-tabs-target="#moreInfo" type="button" role="tab" aria-controls="moreInfo" aria-selected="false">Add More Info</button>
            </li>
            <li role="presentation">
                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:text-white dark:hover:text-gray-300 uppercase" id="update-tab" data-tabs-target="#update" type="button" role="tab" aria-controls="update" aria-selected="false">Update</button>
            </li>
            <li role="presentation">
                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:text-white dark:hover:text-gray-300 uppercase" id="delete-tab" data-tabs-target="#delete" type="button" role="tab" aria-controls="delete" aria-selected="false">Delete</button>
            </li>
        @else
            <button class="inline-block p-4 border-b-2 rounded-t-lg uppercase" id="school-tab" data-tabs-target="#school" type="button" role="tab" aria-controls="school" aria-selected="false">
                Enter School Details
                {{-- <span class="bg-cyan-100 text-cyan-800 text-xs font-medium mr-2 px-2.5 py-0.5 dark:bg-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 rounded-full">
                    {{ $schools->count() }}
                </span> --}}
            </button>
        @endif
    </ul>
</div>
<div id="myTabContent pb-4">
    @if ($school != null)
        <div class="hidden p-2" id="events" role="tabpanel" aria-labelledby="events-tab">
            @include('partials.tabs.school-tabs.events-tab')
        </div>
        <div class="hidden p-2" id="blogs" role="tabpanel" aria-labelledby="blogs-tab">
            @include('partials.tabs.school-tabs.blogs-tab')
        </div>
        <div class="hidden p-2" id="pictures" role="tabpanel" aria-labelledby="pictures-tab">
            @include('partials.tabs.school-tabs.pictures-tab')
        </div>
        <div class="hidden p-2" id="testimonials" role="tabpanel" aria-labelledby="testimonials-tab">
            @include('partials.tabs.school-tabs.testimonials-tab')
        </div>
        <div class="hidden p-2" id="moreInfo" role="tabpanel" aria-labelledby="moreInfo-tab">
            @include('partials.tabs.school-tabs.moreInfo-tab')
        </div>
        <div class="hidden p-2" id="update" role="tabpanel" aria-labelledby="update-tab">
            @include('partials.tabs.school-tabs.update-tab')
        </div>
        <div class="hidden p-4 rounded-lg bg-red-50 dark:bg-red-800 border border-red-800 dark:border-red-600 shadow-sm" id="delete" role="tabpanel" aria-labelledby="delete-tab">
            @include('partials.tabs.school-tabs.delete-tab')
        </div>
    @else
        <div class="hidden p-2" id="school" role="tabpanel" aria-labelledby="school-tab">
            <dash-main></dash-main>
        </div>
    @endif
</div>