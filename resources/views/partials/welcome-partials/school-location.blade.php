<nav class="flex sm:mb-2 md:mb-4" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1">
        <li class="inline-flex items-center">
            <a href="/county/{{ $school->county_id }}" class="inline-flex items-center text-xs font-normal text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {{ $school->county->county_name }}
            </a>
        </li>
        <li>
            <div class="flex items-center">
                <svg class="w-2 h-2 text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a href="/sub_county/{{ $school->subcounty_id }}" class="ml-1 text-xs font-normal text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                    {{ $school->subcounty->name }}
                </a>
            </div>
        </li>
        <li>
            <div class="flex items-center">
                <svg class="w-2 h-2 text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a href="/ward/{{ $school->ward_id }}" class="ml-1 text-xs font-normal text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                    {{ $school->ward->name }}
                </a>
            </div>
        </li>
    </ol>
</nav>