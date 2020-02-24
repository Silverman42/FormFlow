<template>
    <transition-group tag="div" name="slide" appear>
        <div key="header" class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
            </div>
            <div class="d-none d-md-block">
                <router-link :to="{name:'balance.index'}" class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">
                    <dollar-sign-icon class="wd-10 mg-r-5"></dollar-sign-icon> Purchase Plan
                </router-link>
            </div>
        </div>
        <section key="stats" class="mg-t-50 mg-b-50">
            <stat-container>
                <stat-action-card>
                    <div class="pd-b-10">
                        <img class="wd-30p d-block mg-l-auto mg-r-auto" src="/img/svg/home-card-1.svg" alt="">
                    </div>
                    <div class="pd-b-10">
                        <h5 class=" tx-center">New Forms</h5>
                        <p class="tx-center tx-gray-600">A form is identified by the form’s URL and Email</p>
                    </div>
                    <div class="pd-b-10">
                        <router-link :to="{name:'form.new_form'}" class="btn btn-block btn-uppercase btn-sm btn-outline-primary">Create New form</router-link>
                    </div>
                </stat-action-card>
                <stat-card cardHeader="Submissions" cardText="Total form submissions">
                    <mail-icon class="wd-16 tx-white"></mail-icon>
                    <template slot="dataCount">3000</template>
                </stat-card>
                <stat-card cardHeader="Form" cardText="Total forms created"
                    iconColorClass="bg-warning">
                    <file-icon class="wd-16 tx-white"></file-icon>
                    <template slot="dataCount">₦ 3000</template>
                </stat-card>
                <stat-card cardHeader="Subscriptions" cardText="Total paid subscriptions"
                    iconColorClass="bg-danger">
                    <dollar-sign-icon class="wd-16 tx-white"></dollar-sign-icon>
                    <template slot="dataCount">₦ 3000</template>
                </stat-card>
            </stat-container>
        </section>
        <!--Form list start-->
        <section key="list" class="mg-t-50 mg-b-50">
            <div class="d-flex justify-content-between align-items-center">
                <div class="wd-50p">
                    <h5>Form history</h5>
                    <p class=" tx-gray-600">List of recently created forms</p>
                </div>
                <router-link :to="{name:'form.index'}" class="btn btn-uppercase btn-sm btn-outline-primary">View All Forms</router-link>
            </div>
            <list-container>
                <list-item v-for="(list,index) in 6" :key="index" path="/home">  
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
        </section>
        <!--Form List End-->
    </transition-group>
</template>
<script>
    //Import Feather icons from vue feather icons
    import {
        FileIcon,
        MailIcon,
        DollarSignIcon
    } from 'vue-feather-icons'
    export default {
        components: {
            FileIcon,
            MailIcon,
            DollarSignIcon,
            StatContainer: ()=>import(/* webpackChunkName: "client-comp-stat" */ '../../components/global/stats/stat_container'),
            StatActionCard: ()=>import(/* webpackChunkName: "client-comp-stat" */ '../../components/global/stats/stat_action_card'),
            StatCard: ()=>import(/* webpackChunkName: "client-comp-stat" */ '../../components/global/stats/stat_card'),
            ListContainer: ()=>import(/* webpackChunkName: "client-comp-list" */ '../../components/global/list/container'),
            ListItem: ()=>import(/* webpackChunkName: "client-comp-list" */ '../../components/global/list/list_item'),
        },
        beforeMount() {
            this.$Progress.start()
        },
        mounted() {
            this.$Progress.finish()
        }
    }

</script>

<style lang="css">
</style>
