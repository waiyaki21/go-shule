<template>
    <div id="addSchools-modal" tabindex="-1" :class="[this.modalBody]">
        <div class="relative w-full max-w-3xl max-h-full">
            <div :class="[modalInfo.modalClass]">
                <button type="button" :class="[modalInfo.btnClassess]" @click="toggleModal()">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="[modalInfo.closeClass]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div class="py-1 px-2">
                    <!-- modal info  -->
                    <h3 :class="[modalInfo.textClassess]">
                        <span class="text-4xl underline">Add School Information.</span>
                    </h3>

                    <!-- modal form  -->
                    <div class="p-2">
                        <form @submit.prevent="submit">
                            <!-- school names  -->
                            <div class="w-full inline-flex justify-between space-x-2">
                                <!-- Name -->
                                <div class="w-1/2">
                                    <label for="name" v-if="errors.name" :class="[formInfo.labelErrorclass]">
                                        School Name
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="name" v-else :class="[formInfo.labelclass]">
                                        School Name
                                        <i v-if="errors.name" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <input type="text" id="name" name="name" v-model="fields.name"
                                        :class="[formInfo.inputclass]" placeholder="Enter School name" required
                                        @keydown.enter="focusNext" @keyup="editName">
                                    <p id="helper-text-explanation" v-if="errors.name" :class="[formInfo.infoText]">{{
                                        errors.name[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- School Short Name -->
                                <div class="w-1/2">
                                    <label for="short_name" v-if="errors.short_name"
                                        :class="[formInfo.labelErrorclass]">School Short Name
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="short_name" v-else :class="[formInfo.labelclass]">
                                        School Short Name
                                        <i v-if="errors.short_name" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <input type="text" id="short_name" name="short_name" v-model="fields.short_name"
                                        :class="[formInfo.inputclass]" placeholder="Edit School Short Name eg" required
                                        @keydown.enter="focusNext" @keyup="editName">
                                    <p id="helper-text-explanation" v-if="errors.short_name" :class="[formInfo.infoText]">{{
                                        errors.short_name[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>
                            </div>

                            <!-- school type  -->
                            <div class="w-full inline-flex justify-between space-x-2">
                                <!-- school type -->
                                <div class="w-1/3">
                                    <label for="type" v-if="errors.type_id" :class="[formInfo.labelErrorclass]">
                                        School Type
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="type" v-else :class="[formInfo.labelclass]">
                                        School Type
                                        <i v-if="errors.type_id" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="type_id" name="type_id" v-model="fields.type_id"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School Type</option>
                                            <option v-for="schtype in schtypes" :value="schtype.id">{{ schtype.description }}</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.type_id"
                                        :class="[formInfo.infoText]">{{ errors.type_id[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- school education system -->
                                <div class="w-1/3">
                                    <label for="system_id" v-if="errors.system_id" :class="[formInfo.labelErrorclass]">
                                        Education System.
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="system_id" v-else :class="[formInfo.labelclass]">
                                        Education System.
                                        <i v-if="errors.system_id" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="type" name="type" v-model="fields.system_id"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School Education System</option>
                                        <option v-for="system in systems" :value="system.id">{{ system.description }}</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.system_id"
                                        :class="[formInfo.infoText]">{{ errors.system_id[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- school level -->
                                <div class="w-1/3">
                                    <label for="level_id" v-if="errors.level_id" :class="[formInfo.labelErrorclass]">
                                        School Level
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="level_id" v-else :class="[formInfo.labelclass]">
                                        School Level
                                        <i v-if="errors.level_id" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="type" name="type" v-model="fields.level_id"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School Level</option>
                                        <option v-for="level in levels" :value="level.id">{{ level.description }}</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.level_id"
                                        :class="[formInfo.infoText]">{{ errors.level_id[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>
                            </div>

                            <!-- school location  -->
                            <div class="w-full inline-flex justify-between space-x-2">
                                <!-- school county -->
                                <div class="w-1/3">
                                    <label for="county_id" v-if="errors.county_id" :class="[formInfo.labelErrorclass]">
                                        School County
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="county_id" v-else :class="[formInfo.labelclass]">
                                        School County
                                        <i v-if="errors.county_id" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="county_id" name="county_id" v-model="fields.county_id"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School County</option>
                                        <option v-for="county in counties" :value="county.id" @click="getSubs">{{ county.county_name }}</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.county_id"
                                        :class="[formInfo.infoText]">{{ errors.county_id[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- school sub counties -->
                                <div class="w-1/3">
                                    <label for="subcounty_id" v-if="errors.subcounty_id" :class="[formInfo.labelErrorclass]">
                                        School Sub-County
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="subcounty_id" v-else :class="[formInfo.labelclass]">
                                        School Sub-County
                                        <i v-if="errors.subcounty_id" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="subcounty_id" name="subcounty_id" v-model="fields.subcounty_id"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School Sub-County</option>
                                        <option v-for="subcounty in subcounties" :value="subcounty.id" @click="getWards">{{ subcounty.name }}</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.subcounty_id"
                                        :class="[formInfo.infoText]">{{ errors.subcounty_id[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- school wards -->
                                <div class="w-1/3">
                                    <label for="type" v-if="errors.ward_id" :class="[formInfo.labelErrorclass]">
                                        School Ward
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="type" v-else :class="[formInfo.labelclass]">
                                        School Ward
                                        <i v-if="errors.ward_id" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="ward_id" name="ward_id" v-model="fields.ward_id"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School Ward</option>
                                        <option v-for="ward in wards" :value="ward.id">{{ ward.name }}</option>
                                        <option @click="addWard">ADD YOUR WARD</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.ward_id"
                                        :class="[formInfo.infoText]">{{ errors.ward_id[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>
                            </div>

                            <!-- school contact  -->
                            <div class="w-full inline-flex justify-between space-x-2">
                                <!-- School Phonenumber -->
                                <div class="w-1/3">
                                    <label for="phone_number" v-if="errors.phone_number"
                                        :class="[formInfo.labelErrorclass]">
                                        School Phonenumber
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="phone_number" v-else :class="[formInfo.labelclass]">
                                        School Phonenumber
                                        <i v-if="errors.phone_number" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <input type="text" id="phone_number" name="phone_number" v-model="fields.phone_number"
                                        :class="[formInfo.inputclass]" placeholder="School Phone No" required
                                        @keydown.enter="submit">
                                    <p id="helper-text-explanation" v-if="errors.phone_number" :class="[formInfo.infoText]">
                                        {{ errors.phone_number[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- School Email -->
                                <div class="w-1/3">
                                    <label for="email" v-if="errors.email"
                                        :class="[formInfo.labelErrorclass]">
                                        School Email
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="email" v-else :class="[formInfo.labelclass]">
                                        School Email
                                        <i v-if="errors.email" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <input type="email" id="email" name="email" v-model="fields.email"
                                        :class="[formInfo.inputclass]" placeholder="School Email" required
                                        @keydown.enter="submit">
                                    <p id="helper-text-explanation" v-if="errors.email" :class="[formInfo.infoText]">
                                        {{ errors.email[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- School website -->
                                <div class="w-1/3">
                                    <label for="website" v-if="errors.website"
                                        :class="[formInfo.labelErrorclass]">
                                        School Website
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="website" v-else :class="[formInfo.labelclass]">
                                        School Website
                                        <i v-if="errors.website" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <input type="text" id="website" name="website" v-model="fields.website"
                                        :class="[formInfo.inputclass]" placeholder="School Website" required
                                        @keydown.enter="submit">
                                    <p id="helper-text-explanation" v-if="errors.website" :class="[formInfo.infoText]">
                                        {{ errors.website[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>
                            </div>

                            <!-- school optionals  -->
                            <div class="w-full inline-flex justify-between space-x-2">
                                <!-- school transport -->
                                <div class="w-1/3">
                                    <label for="transport" v-if="errors.transport" :class="[formInfo.labelErrorclass]">
                                        School Transport
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="transport" v-else :class="[formInfo.labelclass]">
                                        School Transport
                                        <i v-if="errors.transport" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="transport" name="transport" v-model="fields.transport"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School Transport</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.transport"
                                        :class="[formInfo.infoText]">{{ errors.transport[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- school lunch -->
                                <div class="w-1/3">
                                    <label for="lunch" v-if="errors.lunch" :class="[formInfo.labelErrorclass]">
                                        School lunch
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="lunch" v-else :class="[formInfo.labelclass]">
                                        School lunch
                                        <i v-if="errors.lunch" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="lunch" name="lunch" v-model="fields.lunch"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School lunch</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.lunch"
                                        :class="[formInfo.infoText]">{{ errors.lunch[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- school trips -->
                                <div class="w-1/3">
                                    <label for="trips" v-if="errors.trips" :class="[formInfo.labelErrorclass]">
                                        School trips
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="trips" v-else :class="[formInfo.labelclass]">
                                        School trips
                                        <i v-if="errors.trips" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="trips" name="trips" v-model="fields.trips"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School trips</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.trips"
                                        :class="[formInfo.infoText]">{{ errors.trips[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>
                            </div>

                            <div class="w-full inline-flex justify-between space-x-2">
                                <!-- school computer -->
                                <div class="w-1/3">
                                    <label for="computer" v-if="errors.computer" :class="[formInfo.labelErrorclass]">
                                        Computer Classes
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="computer" v-else :class="[formInfo.labelclass]">
                                        Computer Classes
                                        <i v-if="errors.computer" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="computer" name="computer" v-model="fields.computer"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School computer classes</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.computer"
                                        :class="[formInfo.infoText]">{{ errors.computer[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- school swimming -->
                                <div class="w-1/3">
                                    <label for="swimming" v-if="errors.swimming" :class="[formInfo.labelErrorclass]">
                                        Swimming lessons
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="swimming" v-else :class="[formInfo.labelclass]">
                                        Swimming lessons
                                        <i v-if="errors.swimming" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="swimming" name="swimming" v-model="fields.swimming"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>Select School swimming lessons</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.swimming"
                                        :class="[formInfo.infoText]">{{ errors.swimming[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>

                                <!-- school foreign -->
                                <div class="w-1/3">
                                    <label for="foreign" v-if="errors.foreign" :class="[formInfo.labelErrorclass]">
                                        Foreign Languages
                                        <i :class="[formInfo.iconreloadclass]"></i>
                                    </label>
                                    <label for="foreign" v-else :class="[formInfo.labelclass]">
                                        Foreign Languages
                                        <i v-if="errors.foreign" :class="[formInfo.iconreloadclass]"></i>
                                        <i v-else :class="[formInfo.iconerrorSuccess]"></i>
                                    </label>
                                    <select id="foreign" name="foreign" v-model="fields.foreign"
                                        :class="[formInfo.inputclass, 'option-font']" required @keydown.enter="focusNext">
                                        <option selected>School foreign languages</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p id="helper-text-explanation" v-if="errors && errors.foreign"
                                        :class="[formInfo.infoText]">{{ errors.foreign[0] }}</p>
                                    <p id="helper-text-explanation" v-show="formInfo.formsuccess"
                                        :class="[formInfo.infoText, 'text-green-500']">Success</p>
                                </div>
                            </div>

                            <!-- submit  -->
                            <div class="w-full my-1">
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
    ],

    data() {
        return {
            //form datasets 
            formInfo: [],
            fields: {},
            errors: {},
            school: {},

            // form info 
            schtypes:       [],
            systems:        [],
            levels:         [],
            counties:       [],
            subcounties:    [],
            wards:          [],

            // modal load 
            modalInfo: [],
            modalBody: 'fixed top-0 left-0 right-0 z-200 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full',
        }
    },

    components: {
        
    },

    created() {
        // this.formFields();
    },

    mounted() {
        // form stuff 
        this.formInfo = utilities.loaded(this);
        this.modalInfo = modalUtilities.loaded(this);

        // flowbite modal options
        const $targetEl = document.getElementById('addSchools-modal');
        // options with default values
        const options = {
            placement: 'center',
            backdrop: 'dynamic',
            backdropClasses: this.modalInfo.backdrop,
            closable: true,
            onHide: () => {
                // console.log('modal is hidden');
                // this.$emit('close');
            },
            onShow: () => {
                // console.log('modal is shown');
            },
            onToggle: () => {
                // console.log('modal has been toggled');
            }
        };
        this.modal = new Modal($targetEl, options);
    },

    methods: {
        submit() {
            this.errors = {};
            this.loadingToggle();

            axios.post('/school', this.fields)
                .then(response => {
                    this.formInfo = utilities.success(this);
                    this.notification = response.data[2];
                    this.$emit('success', this.notification);
                    this.successToggle();
                    this.$emit('reload');
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

        getAllInfo() {
            axios.get('/api/forminfo/')
                .then(response => {
                    this.schtypes    = response.data[0]
                    this.levels      = response.data[1]
                    this.systems     = response.data[2]
                    this.counties    = response.data[3]
                    this.subcounties = response.data[4]
                    this.wards       = response.data[5]
                })
        },

        getSubs() {
            let id = this.fields.county_id;
            axios.get('/api/subcounty/' + id)
                .then(response => {
                    this.subcounties = response.data
                })
        },

        getWards() {
            let id = this.fields.subcounty_id
            axios.get('/api/wards/' + id)
                .then(response => {
                    this.wards = response.data
                })
        },

        addWard() {
            this.$emit('wardadd');
            this.modal.toggle();
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