<template>
    <div id="editTestimonial-modal" tabindex="-1" :class="[this.modalBody]">
        <div class="relative w-full max-w-md max-h-full">
            <div :class="[modalInfo.modalClass]">
                <button type="button" :class="[modalInfo.btnClassess]" @click="this.modal.toggle()">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        :class="[modalInfo.closeClass]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div class="py-2 px-2">
                    <!-- modal info  -->
                    <h3 :class="[modalInfo.textClassess]">
                        <span class="text-4xl underline">Edit Testimonial.</span>
                    </h3>

                    <!-- modal form  -->
                    <div class="p-2">
                        <form @submit.prevent="submit">

                            <div class="w-full flex my-1">
                                <!-- Title -->
                                <div class="w-full">
                                    <label for="testimonial_title" v-if="errors.testimonial_title" :class="[formInfo.labelErrorclass]">
                                        Title
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="testimonial_title" v-else :class="[formInfo.labelclass]">
                                        Title
                                        <i v-if="errors.testimonial_title" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <input type="text" id="testimonial_title" name="testimonial_title" v-model="fields.testimonial_title"
                                        :class="[formInfo.inputclass]" required
                                        @keydown.enter="submit">
                                    <p id="helper-text-explanation" v-if="errors.testimonial_title" :class="[formInfo.infoText]">
                                        {{ errors.testimonial_title[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>
                            </div>

                            <div class="w-full flex my-1">
                                <!-- Body -->
                                <div class="w-full">
                                    <label for="testimonial_body" v-if="errors.testimonial_body" :class="[formInfo.labelErrorclass]">
                                        Body
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="testimonial_body" v-else :class="[formInfo.labelclass]">
                                        Body
                                        <i v-if="errors.testimonial_body" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <input type="text" id="testimonial_body" name="testimonial_body" v-model="fields.testimonial_body"
                                        :class="[formInfo.inputclass]" required
                                        @keydown.enter="submit">
                                    <p id="helper-text-explanation" v-if="errors.testimonial_body" :class="[formInfo.infoText]">
                                        {{ errors.testimonial_body[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>
                            </div>

                            <!-- submit  -->
                            <div class="w-full my-2">
                                <button type="button" :class="[formInfo.submitbtnClass]" @click="submit">
                                    {{ formInfo.buttoninfo }}
                                    <i :class="[formInfo.buttoninfoIcon, 'fa-1x m-1']"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- end modal form  -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// modal 
import { Modal } from 'flowbite';

// utilities 
import utilities from '../../../Utilities/utilities.js';
import modalUtilities from '../../../Utilities/modal.js';

export default {
    props: [
        'header',
        'link',
        'id',
        'testimonial'
    ],

    data() {
        return {
            //form datasets 
            formInfo: [],
            fields: {},
            errors: {},
            school: {},

            // message 
            notification: '',

            // modal load 
            modalInfo: [],
            modalBody: 'fixed top-[3rem] left-0 right-0 z-200 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full',
        }
    },

    components: {
    },

    created() {
    },

    mounted() {
        // form stuff 
        this.formInfo = utilities.loaded(this);
        this.modalInfo = modalUtilities.loaded(this);

        // flowbite modal options
        const $targetEl = document.getElementById('editTestimonial-modal');
        // options with default values
        const options = {
            placement: 'center',
            backdrop: 'static',
            backdropClasses: this.modalInfo.backdrop,
            closable: true,
            onHide: () => {
            },
            onShow: () => {
            },
            onToggle: () => {
                this.toggleEditModal();
            }
        };
        this.modal = new Modal($targetEl, options);
    },

    methods: {
        submit() {
            this.errors = {};
            this.loadingToggle();

            // let id = this.fields.subcounty_id;

            axios.put('/update/testimonial/' + id, this.fields)
                .then(response => {
                    this.formInfo = utilities.success(this);
                    this.notification = response.data[2];
                    this.$emit('success', this.notification);
                    this.successToggle();
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.failureToggle();
                        this.errors = error.response.data.errors || {};
                        this.notification = 'Submission Failed, Try Again!'
                        this.$emit('failure', this.notification);
                    }
                });
        },

        toggleAddModal() {
            this.getAllInfo();
            this.normalToggle();
            this.modal.toggle();
        },

        toggleEditModal() {
            // this.getAllInfo();
            this.normalToggle();
            this.modal.toggle();
        },

        getSubs() {
            let id = this.fields.county_id;
            axios.get('/api/subcounty/' + id)
                .then(response => {
                    this.subcounties = response.data
                })
        },


        focusSub(e) {
            const inputs = Array.from(e.target.form.querySelectorAll('select#subcounty_id'));
            const index = inputs.indexOf(e.target);

            if (index < inputs.length) {
                inputs[index + 1].focus();
            }
        },

        focusNext(e) {
            const inputs = Array.from(e.target.form.querySelectorAll('input[type="text"]'));
            const index = inputs.indexOf(e.target);

            if (index < inputs.length) {
                inputs[index + 1].focus();
            }
        },

        successToggle() {
            this.modalInfo = modalUtilities.success(this);
            this.formInfo = utilities.success(this);
            setTimeout(this.normalToggle, 5000)
        },

        loadingToggle() {
            this.modalInfo = modalUtilities.loading(this);
            this.formInfo = utilities.loading(this);
        },

        failureToggle() {
            this.formInfo = utilities.failed(this);
            this.modalInfo = modalUtilities.failed(this);
        },

        normalToggle() {
            this.modalInfo = modalUtilities.loaded(this);
            this.formInfo = utilities.loaded(this);
        },

        deleteToggle() {
            this.modalInfo = modalUtilities.loaded(this);
        },
    }
}
</script>