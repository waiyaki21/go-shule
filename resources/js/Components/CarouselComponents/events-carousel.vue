<template>
    <div
      id="carouselExampleCaptions"
      class="relative"
      data-te-carousel-init
      data-te-ride="carousel"
      style="min-height: 407px;">
      <!--Carousel indicators-->
      <div
        class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="0"
          data-te-carousel-active
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="1"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"></button>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="2"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"></button>
      </div>

      <!--Carousel items-->
      <div
        class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-lg">
        <!--First item-->
        <div
          class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-active
          data-te-carousel-item
          style="backface-visibility: hidden">
          <img
            :src = "events[0].thumbnail_path" :alt=" events[0].name + ' image for go shule' "
            class="block w-full" />
          <div
            class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 class="text-2xl uppercase underline">{{ events[0].name }}</h5>
            <p class="w-full inline-flex justify-between">
                <span class="underline text-lg uppercase">{{ events[0].date }}</span>
                <span class="underline text-lg uppercase">{{ events[0].attendees }}</span>
                <span class="underline text-lg uppercase">{{ events[0].number }}</span>
            </p>
          </div>
        </div>
        <!--Second item-->
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style="backface-visibility: hidden">
          <img
            :src = "events[1].thumbnail_path" :alt="events[1].name + ' image for go shule'"
            class="block w-full" />
          <div
            class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 class="text-2xl uppercase underline">{{ events[0].name }}</h5>
            <p class="w-full inline-flex justify-between">
                <span class="underline text-lg uppercase">{{ events[0].date }}</span>
                <span class="underline text-lg uppercase">{{ events[0].attendees }}</span>
                <span class="underline text-lg uppercase">{{ events[0].number }}</span>
            </p>
          </div>
        </div>
        <!--Third item-->
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style="backface-visibility: hidden">
          <img
            :src = "events[2].thumbnail_path" :alt="events[2].name + ' image for go shule'"
            class="block w-full" />
          <div
            class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 class="text-2xl uppercase underline">{{ events[0].name }}</h5>
            <p class="w-full inline-flex justify-between">
                <span class="underline text-lg uppercase">{{ events[0].date }}</span>
                <span class="underline text-lg uppercase">{{ events[0].attendees }}</span>
                <span class="underline text-lg uppercase">{{ events[0].number }}</span>
            </p>
          </div>
        </div>
      </div>

      <!--Carousel controls - prev item-->
      <button
        class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev">
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Previous</span
        >
      </button>
      <!--Carousel controls - next item-->
      <button
        class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next">
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next</span
        >
      </button>
    </div>
</template>

<script>
    import {
        Carousel,
        initTE,
    } from "tw-elements";

    export default {
        props: [
            'events'
        ],

        data() {
            return {

            }
        },

        mounted() {
            initTE({ Carousel });
        }
    }
</script>