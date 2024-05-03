import './bootstrap.js';

import 'flowbite';

// moment
// import moment from 'moment';


import { createApp } from 'vue';

// router 
// import router from './routes.js';

// elements 
import {
    Sidenav,
    initTE,
} from "tw-elements";

initTE({ Sidenav });

// side nav 
import sideNav      from './Navs/sideNav.vue';

// flash notifications
// import flashNotify  from './Components/AlertComponents/toast-simple.vue';

// tables 
import schoolTable  from './Components/TableComponents/School/school-main.vue';
import schoolDashTable from './Components/TableComponents/School/schoolDash-main.vue';

// events 
import eventsCarousel from './Components/CarouselComponents/events-carousel.vue';

// modals 
import schoolModal      from './Components/ModalComponents/School/addSchool-modal.vue';
import testimonialModal from './Components/ModalComponents/Testimonial/editTestimonial-modal.vue';

// import icons 
// import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline';


const app = createApp({})
app
    .component('side-nav', sideNav)
    .component('school-main', schoolTable)
    .component('events-carousel', eventsCarousel)
    .component('edit-testimonial', testimonialModal)
    .component('dash-main', schoolDashTable)

    // mounting dependencies
    // .component('Datepicker', Datepicker)
    // .component('font-awesome-icon', FontAwesomeIcon)
    // .use(moment)
    // .use(Paperizer)
    // .use(router)
    .mount('#app');


