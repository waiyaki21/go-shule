<section class="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-cyan-800 dark:border-cyan-600 shadow-sm">
    <h3 class="w-full inline-flex justify-between text-3xl mb-4">
        <span class="text-gray-800 dark:text-gray-300 uppercase underline">Add an Event.</span>
    </h3>

    <div class="w-full p-1 bg-transparent dark:bg-transparent">
        <form class="space-y-2" action="/event/{{ $school->id }}" method="POST" enctype="multipart/form-data">
            @csrf
            <section class="space-x-2 space-y-2 grid grid-cols-2">
                <div>
                    <label for="name" class="block w-1/2 mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">Event Name</label>
                    <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Event name" required>
                </div>
                <div>
                    <label for="date" class="block w-1/2 mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">Event Date</label>
                    <input type="date" name="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Event date" required>
                </div>
                <div>
                    <label for="attendees" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">Event Attendees</label>
                    <input type="name" name="attendees" id="attendees" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="eg Grade 4 - 6" required>
                </div>
                <div>
                    <label for="number" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">No of Attendees</label>
                    <input type="number" name="number" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Number of Attendees" required>
                </div>
            </section>
            <div>
                <label class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white" for="thumbnail">Event Thumbnail</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="thumbnail" name="thumbnail" type="file">
            </div>
            <div>   
                <label class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white" for="photos">Event Photos</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="photos" name="photos[]" type="file" multiple>
            </div>
            <div> 
                <label for="description" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">Event Description</label>
                <textarea id="description" name="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write a description of the event here"></textarea>
            </div>
            
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 uppercase underline font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
</section>

<hr class="mx-auto flex border-rose-800 dark:border-rose-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">