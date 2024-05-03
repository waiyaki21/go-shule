<template> 
    <div id="toast-notification" :class="[this.alertCLass, this.classType, 'dark:text-white']" v-show="show" role="alert" @click="hide">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="['w-6 h-6', this.bodyClass]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
        </svg>
        <div :class="['pl-4 text-base font-normal underline boldened', this.bodyClass]">
            {{ this.body }}
        </div>       
    </div>
</template>
       
<script>
    export default {
        props: [
            'message'
        ],

        data() {
            return {
                show        : false,
                body        : 'Test Sent successfully.',
                // classType   : 'bg-gray-800 dark:bg-gray-800',
                classType   : '',
                alertCLass  : 'fixed flex items-center w-full max-w-sm p-4 space-x-2 text-white divide-x divide-gray-900 rounded-lg shadow-lg shadow-gray-500 dark:shadow-sm right-5 top-[5rem] dark:text-gray-400 dark:divide-gray-700 space-x z-200 cursor-pointer',
                bodyClass   : ''
            }
        },

        created() {

        },

        methods: {
            toast(message) {
                this.body       = message[0]
                this.bodyClass  = message[1]
                this.classType  = message[2]
                this.show       = true

                setTimeout(() => {
                    this.hide()
                },10000)
            },

            toastOn(message) {
                this.setClass(message[1])
                this.body       = message[0]
                this.show       = true

                setTimeout(() => {
                    this.hide()
                }, 10000)
            },

            hide() {
                this.show = false;
            },

            setClass(info) {
                if (info == 'success') {
                    this.classType = 'bg-green-100 dark:bg-green-400 border border-green-400 dark:border-green-900';
                } 
                if (info == 'failure') {
                    this.classType = 'bg-red-100 dark:bg-red-400 border border-red-400 dark:border-red-900';
                } 
                if (info == 'loading') {
                    this.classType = 'bg-orange-100 dark:bg-orange-400 border border-orange-900 dark:border-orange-600';
                }
            }
        }
    }
</script>