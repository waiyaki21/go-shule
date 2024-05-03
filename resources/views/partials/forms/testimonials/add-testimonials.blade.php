<section class="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-cyan-800 dark:border-cyan-600 shadow-sm">
    <h3 class="w-full inline-flex justify-between text-3xl mb-2">
        <span class="text-gray-800 dark:text-gray-300 uppercase underline">Add a testimonial.</span>
    </h3>
    <h3 class="w-full inline-flex justify-between text-sm mb-1">
        <span class="text-gray-800 dark:text-gray-300 uppercase underline">
            Testimonials are viewed by all users and visitors on the homepage.
        </span>
    </h3>

    <div class="w-full p-1 bg-transparent dark:bg-transparent">
        <form class="space-y-2" action="/testimonial/{{ Auth::user()->id }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div>
                <label for="testimonial_title" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">Testimonial Title</label>
                <input type="name" name="testimonial_title" id="testimonial_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Testimonial Title" required>
            </div>
            <div> 
                <label for="testimonial_body" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">Testimonial Body</label>
                <textarea id="testimonial_body" name="testimonial_body" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write  the Testimonial here"></textarea>
            </div>
            
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 uppercase underline font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
</section>

<hr class="mx-auto flex border-rose-800 dark:border-rose-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">