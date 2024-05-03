<h3 class="w-full inline-flex justify-start text-3xl mb-4">
    <span class="text-gray-800 dark:text-gray-300 uppercase underline">
        All School Events
    </span>
    <span class="text-gray-600 p-2 text-sm dark:text-gray-400 uppercase underline">
        ( {{ $school->events->count() }} Events )
    </span>
</h3>
<div class="py-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-cyan-800 dark:border-cyan-600 shadow-sm">
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-sm text-gray-900 hover:text-black uppercase dark:text-gray-400 dark:hover:text-white">
                <tr class="header">
                    <td scope="col" class="px-6 py-3">
                        Name
                    </td>
                    <td scope="col" class="px-6 py-3">
                        Date
                    </td>
                    <td scope="col" class="px-6 py-3">
                        In Attendance
                    </td>
                    <td scope="col" class="px-6 py-3">
                        No. of Attendees
                    </td>
                    <td scope="col" class="px-6 py-3">
                        Options
                    </td>
                    <td scope="col" class="px-6 py-3">
                        View
                    </td>
                </tr>
            </thead>
            <tbody>
                @foreach ($school->events as $index => $event)
                    <tr class="bg-white dark:bg-gray-800">
                        <td scope="row" class="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white uppercase underline">
                            {{$index + 1}}. {{ $event->name }}
                        </td>
                        <td class="px-6 py-4">
                            <div class="uppercase underline">
                                <div class="text-lg font-medium">
                                    {{ Carbon\Carbon::parse($event->date)->toFormattedDayDateString() }}
                                </div>
                                <div class="font-normal text-gray-800 dark:text-gray-300">
                                    {{ Carbon\Carbon::parse($event->date)->diffForHumans() }}
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            {{ $event->attendees }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $event->number }} Attendees
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="font-normal text-blue-600 dark:text-blue-500 hover:underline inline-flex space-x-2">
                                <a href="/update/event/{{ $event->id }}">
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mx-1 text-blue-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </a>
                                <a href="/delete/event/{{ $event->id }}">
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mx-1 text-red-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </a>
                            </button>
                        </td>
                        <td class="px-6 py-4">
                            <a href="/event/{{ $event->id }}" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-normal rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase boldened">
                                View
                            </a>
                        </td>
                    </tr>    
                @endforeach
            </tbody>
        </table>
    </div>
</div>