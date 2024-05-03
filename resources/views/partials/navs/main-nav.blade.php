
<nav class="fixed top-0 z-120 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 font-one">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start">
        <a href="/" class="flex ml-2 md:mr-24">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Go Shule Logo" />
          <span class="self-center text-4xl font-medium sm:text-4xl whitespace-nowrap dark:text-cyan-400 text-cyan-800 font-fancy underline">
            {{ env('APP_NAME') }}
          </span>
        </a>
      </div>
      <div class="flex items-center md:order-2 space-x-2">
          <div class="flex items-center ml-3">
            <button data-te-sidenav-toggle-ref data-te-target="#main-sidebar" aria-controls="#main-sidebar" aria-haspopup="true" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mx-4">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <div>
              <button type="button" class="flex text-sm bg-gray-800" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="text-base text-gray-900 dark:text-white uppercase hover:text-cyan-600 dark:hover:text-cyan-600 hover:underline">{{ Auth::user()->name }}</span>
              </button>
            </div>
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  {{ Auth::user()->name }}
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  {{ Auth::user()->email }}
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="{{ route('profile.edit') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Profile</a>
                </li>
                <li>
                  {{-- <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a> --}}
                  <!-- Authentication -->
                  <form method="POST" action="{{ route('logout') }}">
                     @csrf

                     <x-responsive-nav-link 
                        class="text-sm"
                        :href="route('logout')"
                        onclick="event.preventDefault();
                        this.closest('form').submit();">
                           {{ __('Log Out') }}
                     </x-responsive-nav-link>
                  </form>
                </li>
              </ul>
            </div>
          </div>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
         <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700 uppercase">
            <li>
               <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 dark:hover:underline">About Us</a>
            </li>
            <li>
               <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 dark:hover:underline">Services</a>
            </li>
            <li>
               <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 dark:hover:underline">Pricing</a>
            </li>
            <li>
               <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 dark:hover:underline">Contact Us</a>
            </li>
         </ul>
      </div>
    </div>
  </div>
</nav>

<!-- Sidenav -->
<side-nav></side-nav>
<!--End Sidenav -->  