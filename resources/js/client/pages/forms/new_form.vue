<template>
    <transition-group tag="div" name="slide" appear>
        <div key="header" class="d-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'form.index'}">Forms</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <span>Create New form</span>
                        </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center">
                    <router-link class=" mg-0 mg-r-10" :to="{name:'form.index'}">
                        <chevron-left-icon class="wd-25"></chevron-left-icon>
                    </router-link>
                    <h4 class="mg-b-0 tx-spacing--1">Create New Forms</h4>
                </div>
            </div>
        </div>
        <div key="form">
            <transition name="fade" mode="out-in" tag="div">
                <div class="mg-t-30" v-if="formIsViewable">
                <form action="" @submit.prevent="viewSuccessAlert">
                    <div class="form-group row">
                        <label for="form_name" class="col-sm-4 col-form-label">Form Name <br><span
                                class="tx-12 tx-gray-400"> A form name will be created for you if you skip this
                                field</span></label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="form_name" placeholder="Enter form name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-sm-4 col-form-label">Email <span
                                class="tx-12 tx-gray-400">(Required)</span></label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="email" placeholder="Example@gmail.com">
                        </div>
                    </div>
                    <div class="form-group tx-right">
                        <button class="btn btn-uppercase btn-sm btn-primary"
                            type="submit">Create form</button>
                    </div>
                </form>
            </div>
            <!--success alert start-->
            <div key="successAlert" class="mg-t-30 row justify-content-center" v-if="isSuccessfull">
                <div class="col-sm-5 col-12">
                    <div class="wd-200 mg-l-auto mg-r-auto mg-b-20">
                        <img src="/img/svg/form_success.svg" alt="" class="wd-100p ht-auto">
                    </div>
                    <div class="mg-b-20">
                        <h3 class="tx-center tx-bolder">Awwwesome !!</h3>
                        <p class="tx-center">Your form was successfully created and a confirmation has been sent to your
                            email.
                            Please, enter the link in the confirmation mail to activate your form</p>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <button class="btn btn-outline-primary btn-uppercase btn-sm btn-block" @click.prevent="viewForm">Create form</button>
                        </div>
                        <div class="col-6">
                            <router-link :to="{name:'form.view.submission', params:{id:20}}" class="btn btn-primary btn-uppercase btn-sm btn-block">
                                View New Form
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!--success alert ends-->
            </transition>   
        </div>
    </transition-group>
</template>
<script>
    /**
     * New form
     * @description New forms are created using their emails and name. After a form is created,
     * a unique UUID is created for that form which is then used to identify that particular form.
     * A confirmation email containing the confirmation is sent to the email of the newly created form
     * The confirmation link is used to activate the form
     * @access This feature only applies to Premium membbers.
     */
    import {
        ChevronLeftIcon,
    } from 'vue-feather-icons'
    export default {
        components: {
            ChevronLeftIcon
        },
        data() {
            return {
                isSuccessfull: false,
                formIsViewable: true
            }
        },
        methods: {
            viewForm() {
                this.isSuccessfull = false
                this.formIsViewable = true
            },
            viewSuccessAlert() {
                this.isSuccessfull = true
                this.formIsViewable = false
            }
        },
        beforeMount() {
            this.$Progress.start()
        },
        mounted() {
            this.$Progress.finish()
        }
    }

</script>
