@include('partials.alerts.alerts-main')

<h3 class="w-full inline-flex justify-between text-3xl mb-4">
    <span class="text-gray-800 dark:text-gray-300 uppercase underline">Add More Information</span>
</h3>
<section class="row px-2">
    {{-- events form  --}}
    <div class="col-sm-12 col-md-12">
        @include('partials.forms.school.more-info.add-languages')
    </div>
</section>