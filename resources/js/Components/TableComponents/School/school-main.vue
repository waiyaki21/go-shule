<template>
    <!-- flash  -->
    <flash
        ref = "flashComponentRefs"
    ></flash>

    <!-- BODY SECTION  -->
    <section>
        <!-- header  -->
        <h3 class="w-full inline-flex justify-between text-3xl">
            <span class="text-gray-800 dark:text-gray-300 uppercase underline">All Schools</span>
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 uppercase" @click="showModal">
                New School
            </button>
        </h3>
        <!-- table  -->
        <div class="py-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-cyan-800 dark:border-cyan-600 shadow-sm">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-sm text-gray-900 hover:text-black uppercase dark:text-gray-400 dark:hover:text-white">
                        <tr class="header">
                            <td scope="col" class="px-6 py-3">
                                Name
                            </td>
                            <td scope="col" class="px-6 py-3">
                                Location
                            </td>
                            <td scope="col" class="px-6 py-3">
                                Type
                            </td>
                            <td scope="col" class="px-6 py-3">
                                Level
                            </td>
                            <td scope="col" class="px-6 py-3">
                                Contact
                            </td>
                            <td scope="col" class="px-6 py-3">
                                Options
                            </td>
                            <td scope="col" class="px-6 py-3">
                                View
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800" v-for="(school, index) in schools">
                            <td scope="row" class="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white inline-flex">
                                <div class="text-lg font-normal p-2">{{ index + 1 }}.</div>
                                <div class="uppercase underline">
                                    <div class="text-lg font-medium">{{ school.name }}</div>
                                    <div class="font-normal text-gray-800 dark:text-gray-300">{{ school.short_name }}</div>
                                </div>  
                            </td>
                            <td class="px-6 py-4">
                                <div class="uppercase underline">
                                    <div class="text-lg font-medium">{{ school.county.county_name }}</div>
                                    <div class="font-normal text-gray-800 dark:text-gray-300">
                                        {{ school.subcounty.name }}: {{ school.ward.name }}
                                    </div>
                                </div> 
                            </td>
                            <td class="px-6 py-4">
                                <div class="uppercase underline">
                                    <div class="text-lg font-medium">{{ school.type.description }}</div>
                                    <div class="font-normal text-gray-800 dark:text-gray-300">
                                        {{ school.system.description }}
                                    </div>
                                </div> 
                            </td>
                            <td class="px-6 py-4">
                                {{ school.level.description }}
                            </td>
                            <td class="px-6 py-4">
                                {{ school.phone_number }}
                            </td>
                            <td class="px-6 py-4">
                                <button type="button" class="font-normal text-blue-600 dark:text-blue-500 hover:underline inline-flex space-x-2">
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mx-1 text-blue-600" @click="editSchool(school)">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mx-1 text-red-600" @click="deleteSchool(school)">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </td>
                            <td class="px-6 py-4">
                                <a 
                                    :href="'/view_school/' + school.id" 
                                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-normal rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase boldened"
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- MODALS  -->
    <!-- add school modal  -->
    <addSchool
        ref         = "addSchoolRefs"
        @wardadd    = showWardModal
        @success    = toast
        @reload     = getAllInfo
    ></addSchool>

    <!-- add ward modal  -->
    <addWard
        ref         = "addWardRefs"
        @success    = toast
    ></addWard>

    <!-- confirm modal  -->
    <confirmModal
        ref             = "confirmComponentRef"
        :title          = 'this.modalText'
        @close          = closeModal
        @deleteSchool   = schoolDelete
    ></confirmModal>
    <!--end confirm modal  -->

</template>

<script>
    // flash
    import flash        from '../../AlertComponents/toast-simple.vue';
    // MODALS 
    // add school modal 
    import addSchool    from '../../ModalComponents/School/addSchool-modal.vue';
    // add ward modal 
    import addWard      from '../../ModalComponents/Wards/addWard-modal.vue';
    //confirm modal
    import confirmModal from '../../ModalComponents/confirmationModal.vue';

    export default {
        props: [

        ],

        components: {
            addSchool,
            addWard,
            flash,
            confirmModal
        },

        data() {
            return {
                schools: [],

                modalText: '',
                modalID: '',
                modalText: '',
            }
        },

        created() {
            this.getAllInfo();
        },

        methods: {
            getAllInfo() {
                axios.get('/api/getSchools/')
                    .then(response => {
                        this.schools = response.data
                    })
            },

            showModal() {
                this.$refs.addSchoolRefs.toggleAddModal();
            },

            showWardModal() {
                this.$refs.addWardRefs.toggleAddModal();
            },

            toast(x) {
                let message = x;
                let info    = 'success';
                this.$refs.flashComponentRefs.toastOn([message, info]);
            },

            editSchool(school) {
                // console.log('edit');
                // this.$refs.editSchoolsRef.toggleEditModal(school, school.id);
            },

            deleteSchool(school) {
                this.modalID = school.id;
                this.modalText = 'Are You Sure, you want to delete ' + school.name + '?, DO YOU WISH TO PROCEED?'
                this.deleteType = 'deleteSchool';
                this.$refs.confirmComponentRef.toggleModalDelete(this.modalText, this.deleteType);
            },

            // close modal and reset modal data 
            closeModal() {
                this.modalText = '';
                this.modalID = '';
            },

            successEdit(info) {
                this.$emit('success', info);
                this.refresh();
            },

            // delete school submit
            schoolDelete() {
                axios.delete('/delete/school/' + this.modalID)
                    .then(response => {
                        let message = response.data[2];
                        // flash modal 
                        this.$refs.confirmComponentRef.successToggle(message);

                        // reload streams 
                        this.refresh();
                    });
            },
        }
    }
</script>