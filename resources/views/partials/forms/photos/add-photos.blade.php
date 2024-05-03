<section class="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-cyan-800 dark:border-cyan-600 shadow-sm">
    <h3 class="w-full inline-flex justify-between text-3xl mb-4">
        <span class="text-gray-800 dark:text-gray-300 uppercase underline">Add School Banner.</span>
    </h3>

    <div class="w-full p-1 bg-transparent dark:bg-transparent">
        <form class="space-y-2" action="/photo/{{ $school->id }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div>
                <label class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white" for="banner">Banner Photo</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="banner" name="banner" type="file">
            </div>
            <div>
                <label for="banner_name" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">Banner Name</label>
                <input type="name" name="banner_name" id="banner_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Banner Name" required>
            </div>
            <div> 
                <label for="description" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">Banner Description</label>
                <textarea id="description" name="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What's happening in this photo"></textarea>
            </div>
            
            <div>
                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" name="main_banner" id="main_banner" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Main Banner</span>
                </label>
            </div>

            <div>
                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" name="carousel_banners" id="carousel_banners" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Banner</span>
                </label>
            </div>
            
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 uppercase underline font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
</section>

<hr class="mx-auto flex border-rose-800 dark:border-rose-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">