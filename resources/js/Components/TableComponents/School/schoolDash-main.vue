<template>
    <!-- flash  -->
    <flash ref="flashComponentRefs"></flash>

    <!-- BODY SECTION  -->
    <section>
        <!-- header  -->
        <h3 class="w-full inline-flex justify-between text-3xl">
            <span class="text-gray-800 dark:text-gray-300 uppercase underline">All Schools</span>
            <button type="button"
                class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 uppercase"
                @click="showModal">
                New School
            </button>
        </h3>
    </section>

    <!-- MODALS  -->
    <!-- add school modal  -->
    <addSchool ref="addSchoolRefs" @wardadd=showWardModal @success=toast @reload=getAllInfo></addSchool>

    <!-- add ward modal  -->
    <addWard ref="addWardRefs" @success=toast></addWard>

    <!-- confirm modal  -->
    <confirmModal ref="confirmComponentRef" :title='this.modalText' @close=closeModal @deleteSchool=schoolDelete>
    </confirmModal>
    <!--end confirm modal  -->
</template>

<script>
    // flash
    import flash from '../../AlertComponents/toast-simple.vue';
    // MODALS 
    // add school modal 
    import addSchool from '../../ModalComponents/School/addSchool-modal.vue';
    // add ward modal 
    import addWard from '../../ModalComponents/Wards/addWard-modal.vue';
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
                let info = 'success';
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