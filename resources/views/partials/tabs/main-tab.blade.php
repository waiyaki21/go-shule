<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-normal uppercase text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg uppercase" id="school-tab" data-tabs-target="#school" type="button" role="tab" aria-controls="school" aria-selected="false">
                Schools
                <span class="bg-cyan-100 text-cyan-800 text-xs font-medium mr-2 px-2.5 py-0.5 dark:bg-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 rounded-full">
                    {{ $schools->count() }}
                </span>
            </button>
        </li>
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase" id="parents-tab" data-tabs-target="#parents" type="button" role="tab" aria-controls="parents" aria-selected="false">
                Parents
                <span class="bg-rose-100 text-rose-800 text-xs font-medium mr-2 px-2.5 py-0.5 dark:bg-rose-900 dark:text-rose-300 border border-rose-300 dark:border-rose-800 rounded-full">
                    {{ $parents->count() }}
                </span>
            </button>
        </li>
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase" id="blog-tab" data-tabs-target="#blog" type="button" role="tab" aria-controls="blog" aria-selected="false">
                Blogs
                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 dark:bg-green-900 dark:text-green-300 border border-green-300 dark:border-green-800 rounded-full">
                    {{ $testimonials->count() }}
                </span>
            </button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase" id="testimonials-tab" data-tabs-target="#testimonials" type="button" role="tab" aria-controls="testimonials" aria-selected="false">
                Testimonials
                <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 dark:bg-red-900 dark:text-red-300 border border-red-300 dark:border-red-800 rounded-full">
                    {{ $testimonials->count() }}
                </span>
            </button>
        </li>
    </ul>
</div>
<div id="myTabContent pb-4">
    <div class="hidden p-2" id="school" role="tabpanel" aria-labelledby="school-tab">
        {{-- @include('partials.tables.schools-main') --}}
        <school-main></school-main>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-cyan-800 dark:border-cyan-600 shadow-sm" id="parents" role="tabpanel" aria-labelledby="parents-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">parents tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-cyan-800 dark:border-cyan-600 shadow-sm" id="blog" role="tabpanel" aria-labelledby="blog-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">blog tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-2" id="testimonials" role="tabpanel" aria-labelledby="testimonials-tab">
        @include('partials.tabs.dashboard-tabs.testimonials-tab')
    </div>
</div>