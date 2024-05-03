<section class="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-cyan-800 dark:border-cyan-600 shadow-sm">
    <h3 class="w-full inline-flex justify-between text-3xl mb-4">
        <span class="text-gray-800 dark:text-gray-300 uppercase underline">Edit Information.</span>
    </h3>

    <div class="w-full p-1 bg-transparent dark:bg-transparent">
        <form class="space-y-2" action="/update/school/{{ $school->id }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <section class="row">
                <div class="col">
                    <label for="name" class="w-full mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">School Name</label>
                    <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="{{ $school->name }}" required>
                </div>
                <div class="col">
                    <label for="short_name" class="w-full mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">School Short Name</label>
                    <input type="name" name="short_name" id="short_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="{{ $school->short_name }}" required>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <label for="type_id" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">School Type</label>
                    <select id="type_id" name="type_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->type_id }}">{{ $school->type->description }}</option>
                        @foreach ($types as $type)
                            <option value="{{ $type->id }}">{{ $type->description }}</option>    
                        @endforeach
                    </select>
                </div>
                <div class="col">
                    <label for="system_id" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">Education System</label>
                    <select id="system_id" name="system_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->system_id }}">{{ $school->type->description }}</option>
                        @foreach ($systems as $system)
                            <option value="{{ $system->id }}">{{ $system->description }}</option>    
                        @endforeach
                    </select>
                </div>
                <div class="col">
                    <label for="level_id" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">School Level</label>
                    <select id="level_id" name="level_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->level_id }}">{{ $school->level->description }}</option>
                        @foreach ($levels as $level)
                            <option value="{{ $level->id }}">{{ $level->description }}</option>    
                        @endforeach
                    </select>
                </div>
            </section>
            {{-- location  --}}
            <section class="row">
                <div class="col">
                    <label for="county_id" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">School County</label>
                    <select id="county_id" name="county_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->county_id }}">{{ $school->county->county_name }}</option>
                        @foreach ($counties as $county)
                            <option value="{{ $county->id }}">{{ $county->description }}</option>    
                        @endforeach
                    </select>
                </div>
                <div class="col">
                    <label for="subcounty_id" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">School Sub-County</label>
                    <select id="subcounty_id" name="subcounty_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->subcounty_id }}">{{ $school->subcounty->name }}</option>
                        @foreach ($subcounties as $subcounty)
                            <option value="{{ $subcounty->id }}">{{ $subcounty->description }}</option>    
                        @endforeach
                    </select>
                </div>
                <div class="col">
                    <label for="ward_id" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">School Ward</label>
                    <select id="ward_id" name="ward_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->ward_id }}">{{ $school->ward->name }}</option>
                        @foreach ($wards as $ward)
                            <option value="{{ $ward->id }}">{{ $ward->name }}</option>    
                        @endforeach
                    </select>
                </div>
            </section>
            {{-- contact  --}}
            <section class="row">
                <div class="col">
                    <label for="phone_number" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">School Phonenumber</label>
                    <input type="phone_number" name="phone_number" id="phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="{{ $school->phone_number }}" required>
                </div>
                <div class="col">
                    <label for="email" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">School Email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="{{ $school->email }}" required>
                </div>
                <div class="col">
                    <label for="website" class="block mb-2 text-sm uppercase underline font-normal text-gray-900 dark:text-white">School Website</label>
                    <input type="name" name="website" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="{{ $school->website }}" required>
                </div>
            </section>
            {{-- optionals  --}}
            <section class="row">
                <div class="col">
                    <label for="transport" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">School Transport</label>
                    <select id="transport" name="transport" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->transport }}">
                            @if ($school->transport == 1)
                                Yes
                            @else
                                No
                            @endif
                        </option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                <div class="col">
                    <label for="lunch" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">School Lunch</label>
                    <select id="lunch" name="lunch" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->lunch }}">
                            @if ($school->lunch == 1)
                                Yes
                            @else
                                No
                            @endif
                        </option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                <div class="col">
                    <label for="trips" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">School Trips</label>
                    <select id="trips" name="trips" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->trips }}">
                            @if ($school->trips == 1)
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
            <section class="row">
                <div class="col">
                    <label for="computer" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">Computer Classes</label>
                    <select id="computer" name="computer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->computer }}">
                            @if ($school->computer == 1)
                                Yes
                            @else
                                No
                            @endif
                        </option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                <div class="col">
                    <label for="swimming" class="block mb-2 text-sm font-normal uppercase underline text-gray-900 dark:text-white">Swimming Lessons</label>
                    <select id="swimming" name="swimming" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="{{ $school->swimming }}">
                            @if ($school->swimming == 1)
                                Yes
                            @else
                                No
                            @endif
                        </option>
                        <option value="1">Yes</option>
                        <option value="0">No</option> 
                    </select>
                </div>
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
</section>

<hr class="mx-auto flex border-rose-800 dark:border-rose-300 w-[75%] text-center my-4 border-b-[3px] rounded-md">