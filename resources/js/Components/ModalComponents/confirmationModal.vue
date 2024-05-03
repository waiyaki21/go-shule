<template>
    <div id="popup-modal" tabindex="-1" :class="[this.modalBody]">
        <div class="relative w-full max-w-md max-h-full">
            <div :class="[modalInfo.modalClass]">
                <button type="button" :class="[modalInfo.btnClassess]" @click="toggleModal()">
                    <times-icon :class="[modalInfo.closeClass]"></times-icon>
                </button>
                <div class="p-6 text-center">
                    <!-- modal info  -->
                    <warning-icon       :class="[modalInfo.iconClassess]" v-if = "modalInfo.infoShow">
                    </warning-icon>
                    <h3 :class="[modalInfo.textClassess]" v-if = "modalInfo.infoShow">
                        {{ this.info }}
                    </h3>

                    <!-- modal loading  -->
                    <loading-icon       :class="[modalInfo.iconClassess]" v-if = "modalInfo.loadingShow">
                    </loading-icon>
                    <h3 :class="[modalInfo.textClassess]" v-if = "modalInfo.loadingShow">
                        {{ this.info }}
                    </h3>

                    <!-- modal success  -->
                    <checkCircle-icon   :class="[modalInfo.iconClassess]" v-if = "modalInfo.successShow">
                    </checkCircle-icon>
                    <h3 :class="[modalInfo.textClassess]" v-if = "modalInfo.successShow">
                        {{ this.info }}
                    </h3>

                    <!-- modal failure  -->
                    <timesCircle-icon   :class="[modalInfo.iconClassess]" v-if = "modalInfo.failureShow">
                    </timesCircle-icon>
                    <h3 :class="[modalInfo.textClassess]" v-if = "modalInfo.failureShow">
                        {{ this.info }}
                    </h3>

                    <!-- modal delete  -->
                    <delete-icon        :class="[modalInfo.iconClassess]" v-if = "modalInfo.deleteShow">
                    </delete-icon>
                    <h3 :class="[modalInfo.textClassess]" v-if = "modalInfo.deleteShow">
                        {{ this.info }}
                    </h3>

                    <!-- submit buttons  -->
                    <button :class="[modalInfo.submitClass]" @click="submitCombine(this.deletetype)" v-if = "modalInfo.infoShow && this.combine">
                        Combine Streams
                    </button>
                    <button type="submit" :class="[modalInfo.submitClass]" @click="submit" v-else-if = "modalInfo.infoShow || modalInfo.loadingShow">
                        {{ modalInfo.submitInfo }}
                    </button>
                    <!-- delete -->
                    <button :class="[modalInfo.submitClass]" @click="submitDelete(this.deletetype)" v-else-if = "modalInfo.deleteShow">
                        {{ modalInfo.submitInfo }}
                    </button>
                    <button @click="toggleModal()" :class="[modalInfo.cancelBtn]" v-if = "modalInfo.infoShow || modalInfo.deleteShow">
                        No, cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Modal }              from 'flowbite';

    import modalUtilities         from '../../Utilities/modal.js';

    export default {
        props: [
            'title'
        ],

        data() {
            return {
                // load 
                info: '',

                // delete styles
                deletetype: '',

                // modal load 
                modalInfo       : [],
                modalBody       : 'fixed top-0 left-0 right-0 z-120 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full',

                combine         : false,
            }
        },

        beforeMount() {

        },

        mounted() {
            this.modalInfo      = modalUtilities.delete(this);

            // flowbite modal options
            const $targetEl = document.getElementById('popup-modal');
            // options with default values
            const options = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: this.modalInfo.backdrop,
                closable: true,
                onHide: () => {
                    this.$emit('close');
                },
                onShow: () => {},
                onToggle: () => {}
            };
            this.modal = new Modal($targetEl, options);
        },

        methods: {
            submit() {
                this.$emit('submit');
                this.loadingToggle();
            },

            submitDelete(info) {
                this.$emit(info);
                this.loadingToggle();
            },

            submitCombine(info) {
                this.$emit(info);
                this.loadingToggle();
            },

            toggleModal() {
                this.modal.toggle();
            },

            toggleModalParent(text) {
                this.normalToggle();
                this.info = text;
                this.modal.toggle();
            },

            toggleModalDelete(text, type) {
                this.deleteToggle();
                this.info           = text;
                this.deletetype     = type;
                this.modal.toggle();
            },

            toggleModalDeleteTerm(text) {
                this.deleteToggle();
                this.info           = text;
                this.deleteTerm     = true;
                this.modal.toggle();
            },

            toggleModalCombine(text, type) {
                this.normalToggle();
                this.info           = text;
                this.deletetype     = type;
                this.combine        = true;
                this.modal.toggle();
            },

            toggleModalSuccess(text) {
                this.successToggle();
                this.info           = text;
                this.modal.toggle();
            },

            successToggle(text) {
                this.info           = text;
                this.modalInfo      = modalUtilities.success(this);
            },

            loadingToggle() {
                this.info           = 'LOADING...PLEASE WAIT!!';
                this.modalInfo      = modalUtilities.loading(this);
            },

            failureToggle(text) {
                this.info           = text;
                this.modalInfo      = modalUtilities.failed(this);
                setTimeout(this.toggleModal, 10000);
            },

            normalToggle() {
                this.modalInfo      = modalUtilities.loaded(this);
            },

            deleteToggle() {
                this.modalInfo      = modalUtilities.delete(this);
            },
        }
    }
</script>