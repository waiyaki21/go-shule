<template>

    <div id="toast-interactive" :class="[this.alertCLass, this.classType]" v-show="show" role="alert" @click="hide">
        <div class="flex">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-transparent rounded-lg dark:text-blue-300 dark:bg-transparent">
                <bellring-icon :class="['w-6 h-6', this.bodyClass]"></bellring-icon>
            </div>
            <div class="ml-3 font-normal">
                <span :class="['mb-1 text-xl font-semibold underline uppercase boldened', this.bodyClass]">
                    {{ this.header }}
                </span>
                <div :class="['mb-2 font-normal py-2 text-md uppercase boldened', this.bodyClass]">{{ this.body }}</div> 
                <div class="w-full inline-flex justify-start">
                    <div class="w-1/2 mx-1">
                        <router-link :to="{ name: 'Homepage'}" class="inline-flex justify-center w-full px-2 py-1.5 text-sm font-normal text-center text-white bg-cyan-600 rounded-md hover:bg-cyan-700 focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800 uppercase boldened">
                            {{ this.linkName }}
                        </router-link>
                    </div>
                    <div class="w-1/2">
                        <a @click="hide" class="inline-flex justify-center w-full px-2 py-1.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:ring-w focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 uppercase boldened">
                            Not now
                        </a> 
                    </div>
                </div>    
            </div>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-transparent text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                <times-icon :class="['w-6 h-6', this.bodyClass]" @click="hide"></times-icon>
            </button>
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
                classType   : '',
                alertCLass  : 'fixed flex items-center max-w-sm p-4 space-x-2 text-white divide-x divide-gray-900 rounded-lg shadow-lg shadow-gray-500 top-notification2 right-5 dark:text-gray-400 dark:divide-gray-700 space-x z-120 cursor-pointer bg-gray-800',
                bodyClass   : '',
                header      : '',
                link        : '',
                linkName    : ''
            }
        },

        created() {

        },

        methods: {
            toast(message) {
                this.body       = message[0]
                this.header     = message[1]
                this.bodyClass  = message[2]
                this.classType  = message[3]
                this.link       = message[4]
                this.linkName   = message[5]
                this.show       = true

                setTimeout(() => {
                    this.hide()
                },30000)
            },

            toastOn(message) {
                this.setClass(message[1])
                this.body       = message[0]
                this.show       = true
            },

            hide() {
                this.show = false;
            },

            setClass(info) {
                switch (true) {
                    case (info = 'success'):
						this.classType  = 'bg-green-100 dark:bg-green-500'; 
                        break;
                    case (info = 'failure'):
                        this.classType  = 'bg-red-100  dark:bg-red-500'; 
                        break;
                    case (info = 'loading'):
                        this.classType  = 'bg-blue-100 dark:bg-blue-500'; 
                        break;
                }
            }
        }
    }
</script>