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

// main page 
import mainPage from './Pages/MainPage.vue';

// app page 
// import appPage from './Pages/AppPage.vue';

// loading page 
// import loading from './Pages/LoadingBody.vue';
// import loadingTable from './Pages/LoadingTable.vue';

// breadcrumbs
// import crumbs           from './Components/CrumbsComponents/mainCrumbs.vue';

// import icons 
// import { Bars3Icon, PhoneIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, UserCircleIcon, ClockIcon, ChevronUpIcon, UsersIcon, CalendarDaysIcon, ClipboardDocumentListIcon, RocketLaunchIcon, CheckIcon, XMarkIcon, TrashIcon, ExclamationTriangleIcon, ArrowPathIcon, PaperAirplaneIcon, DocumentDuplicateIcon, EnvelopeIcon, BellIcon, BellAlertIcon, BellSnoozeIcon, SparklesIcon, FingerPrintIcon, HomeIcon, ArrowRightOnRectangleIcon, Cog8ToothIcon, ArrowLeftOnRectangleIcon, PencilIcon, ChartBarIcon, CurrencyDollarIcon, PlusIcon, PrinterIcon, ArrowLongRightIcon, AcademicCapIcon, ArrowsUpDownIcon, ArrowLongUpIcon, ArrowLongDownIcon, ArrowLongLeftIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline';


// Vue.config.productionTip = false

const app = createApp({})
app
    .component('main-page', mainPage)
    // .component('app-page', appPage)
    // .component('loading-body', loading)
    // .component('loading-table', loadingTable)
    // .component('main-crumbs',       crumbs)

    // icon components 
    // .component('clock-icon', ClockIcon)
    // .component('plus-icon', PlusIcon)
    // .component('down-icon', ChevronDownIcon)
    // .component('left-icon', ChevronLeftIcon)
    // .component('right-icon', ChevronRightIcon)
    // .component('up-icon', ChevronUpIcon)
    // .component('user-icon', UserCircleIcon)
    // .component('users-icon', UsersIcon)
    // .component('mail-icon', EnvelopeIcon)
    // .component('bars-icon', Bars3Icon)
    // .component('phone-icon', PhoneIcon)
    // .component('money-icon', CurrencyDollarIcon)
    // .component('calendar-icon', CalendarDaysIcon)
    // .component('clipboard-icon', ClipboardDocumentListIcon)
    // .component('rocket-icon', RocketLaunchIcon)
    // .component('times-icon', XMarkIcon)
    // .component('check-icon', CheckIcon)
    // .component('loading-icon', ArrowPathIcon)
    // .component('edit-icon', PencilIcon)
    // .component('delete-icon', TrashIcon)
    // .component('warning-icon', ExclamationTriangleIcon)
    // .component('plane-icon', PaperAirplaneIcon)
    // .component('copy-icon', DocumentDuplicateIcon)
    // .component('bell-icon', BellIcon)
    // .component('bellring-icon', BellAlertIcon)
    // .component('snooze-icon', BellSnoozeIcon)
    // .component('star-icon', SparklesIcon)
    // .component('mail-icon', EnvelopeIcon)
    // .component('fingerprint-icon', FingerPrintIcon)
    // .component('home-icon', HomeIcon)
    // .component('cog-icon', Cog8ToothIcon)
    // .component('login-icon', ArrowRightOnRectangleIcon)
    // .component('logout-icon', ArrowLeftOnRectangleIcon)
    // .component('graph-icon', ChartBarIcon)
    // .component('print-icon', PrinterIcon)
    // .component('up-arrow', ArrowLongUpIcon)
    // .component('down-arrow', ArrowLongDownIcon)
    // .component('right-arrow', ArrowLongRightIcon)
    // .component('left-arrow', ArrowLongLeftIcon)
    // .component('cap-icon', AcademicCapIcon)
    // .component('updown-icon', ArrowsUpDownIcon)
    // .component('download-icon', ArrowDownTrayIcon)
    // end icon components

    // mounting dependencies
    // .component('Datepicker', Datepicker)
    // .component('font-awesome-icon', FontAwesomeIcon)
    // .use(moment)
    // .use(Paperizer)
    // .use(router)
    .mount('#app');


