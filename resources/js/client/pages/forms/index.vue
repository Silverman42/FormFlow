<template>
    <transition-group tag="div" name="slide" appear>
        <div key="header" class="d-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <li class="breadcrumb-item">
                            <router-link :to="{path:'/forms'}">Forms</router-link>
                        </li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">Created Forms</h4>
            </div>
            <div>
                <router-link :to="{name: 'form.new_form'}" class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">
                    <plus-icon class="wd-10 mg-r-5"></plus-icon>
                    Create New Form
                </router-link>
            </div>
        </div>
        <div key="list">
            <list-container :controlIsOpen="true" :paginateIsOpen="true">
                <list-item v-for="(list,index) in 12" :key="index" path="/forms/view/20">  
                    <div class="wd-80p d-flex">
                        <div class="avatar d-sm-block">
                            <span class="avatar-initial rounded-circle op-6 bg-warning">
                                <file-icon class="wd-16 tx-white"></file-icon>
                            </span>
                        </div>
                        <div class="pd-l-15">
                            <h6>Form 1</h6>
                            <span class="tx-gray-600">snkeze9@gmail.com</span>
                        </div>
                    </div>
                    <div class="wd-30p tx-right">
                        <mail-icon class="wd-15 tx-gray-600"></mail-icon> 14
                    </div>
                </list-item>
            </list-container>
        </div>
    </transition-group>
</template>
<script>
    import {
        PlusIcon,
        FileIcon,
        MailIcon
    } from 'vue-feather-icons'
    export default {
        components: {
            FileIcon,
            MailIcon,
            PlusIcon,
            ListContainer: ()=>import(/* webpackChunkName: "client-comp-list" */ '../../../components/global/list/container'),
            ListItem: ()=>import(/* webpackChunkName: "client-comp-list" */ '../../../components/global/list/list_item')
        },
        beforeMount() {
            this.$Progress.start()
        },
        mounted() {
            this.$Progress.finish()
        }
    }

</script>
