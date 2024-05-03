<section class="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-cyan-800 dark:border-cyan-600 shadow-sm">
    <h3 class="w-full inline-flex justify-between text-3xl mb-4">
        <span class="text-gray-800 dark:text-gray-300 uppercase underline">Offered Languages.</span>
    </h3>

    @if ($school->foreign == 0)
        <h3 class="w-full inline-flex justify-between text-2xl mb-4">
            <span class="text-gray-800 dark:text-gray-300 uppercase underline">Select if Foreign Languages are offered.</span>
        </h3>
        <div class="w-full p-1 bg-transparent dark:bg-transparent">
            <form class="space-y-2" action="/update/school/{{ $school->id }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PATCH')
                <section class="row">
                    <div class="col">
                        <label for="foreign" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">Foreign Languages</label>
                        <select id="foreign" name="foreign" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="{{ $school->foreign }}">
                                @if ($school->foreign == 1)
                                    Yes
                                @else
                                    No
                                @endif
                            </option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>    
                        </select>
                    </div>
                </section>
                {{-- end optionals  --}}
                
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 uppercase underline font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form> 
        </div>   
    @else
        <section class="row mx-auto">
            <div class="col p-1 bg-transparent dark:bg-transparent">
                <h3 class="w-full inline-flex justify-between text-3xl mb-4">
                    <span class="text-gray-800 dark:text-gray-300 uppercase underline">Foreign Languages.</span>
                </h3>
                <form class="space-y-2" action="/add/language/{{ $school->id }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <section class="row">
                        <div class="col">
                            <label for="language_id" class="w-full mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">Foreign Languages Offered</label>
                            <select id="language_id" name="language_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                @foreach ($languages as $language)
                                    <option value="{{ $language->id }}">{{ $language->name }}</option>    
                                @endforeach
                            </select>
                        </div>
                    </section>
                
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 uppercase underline font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
            <div class="col p-1 bg-transparent dark:bg-transparent">
                <h3 class="w-full inline-flex justify-between text-3xl mb-4">
                    <span class="text-gray-800 dark:text-gray-300 uppercase underline">Foreign Languages List.</span>
                </h3>
                <ul>
                    {{-- @foreach ($school->languages as $language) --}}
                        {{-- <li class="text-gray-300 uppercase font-medium">{{$language->name}}</li>    --}}
                        <li class="text-gray-300 uppercase font-medium">French</li>   
                    {{-- @endforeach --}}
                </ul>
            </div>
        </section>
    @endif   
</section>

<hr class="mx-auto flex border-rose-800 dark:border-rose-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">