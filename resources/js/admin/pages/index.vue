<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
            </div>
            <div class="d-none d-md-block">
                <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">
                    <dollar-sign-icon class="wd-10 mg-r-5"></dollar-sign-icon> view all subscriptions
                </button>
            </div>
        </div>
        <section class="mg-t-50 mg-b-50">
            <stat-container>
                <stat-card :dataCount="3000" cardHeader="Clients" cardText="Total registered Clients"
                    iconColorClass="bg-primary">
                    <users-icon class="wd-16 tx-white"></users-icon>
                </stat-card>
                <stat-card :dataCount="3000" cardHeader="Submissions" cardText="Total form submissions">
                    <mail-icon class="wd-16 tx-white"></mail-icon>
                </stat-card>
                <stat-card :dataCount="3000" cardHeader="Form" cardText="Total forms created"
                    iconColorClass="bg-warning">
                    <file-icon class="wd-16 tx-white"></file-icon>
                </stat-card>
                <stat-card :dataCount="3000" cardHeader="Subscriptions" cardText="Total paid subscriptions"
                    iconColorClass="bg-danger">
                    <dollar-sign-icon class="wd-16 tx-white"></dollar-sign-icon>
                </stat-card>
            </stat-container>
        </section>
        <!--Form list start-->
        <section class="mg-t-50 mg-b-50 row">
            <div class="col-12 col-md-6 mg-b-35">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="wd-50p">
                        <h5>Form history</h5>
                        <p class=" tx-gray-600">List of recently created forms</p>
                    </div>
                    <button class="btn btn-uppercase btn-sm btn-primary">View All Forms</button>
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
                        <div class="wd-30p tx-right" title="Gold Member">
                            <mail-icon class="wd-15 tx-gray-600"></mail-icon> 14
                        </div>
                    </list-item>
                </list-container>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="wd-50p">
                        <h5>Registered Clients</h5>
                        <p class=" tx-gray-600">Summary of recently registered clients</p>
                    </div>
                    <button class="btn btn-uppercase btn-sm btn-primary">View All Clients</button>
                </div>
                <list-container>
                    <list-item v-for="(list,index) in 6" :key="index" path="/home">
                        <div class="wd-80p d-flex">
                            <div class="avatar d-sm-block">
                                <span class="avatar-initial rounded-circle op-6 bg-primary">
                                    <file-icon class="wd-16 tx-white"></file-icon>
                                </span>
                            </div>
                            <div class="pd-l-15">
                                <h6 class="text-capitalize">nkeze sylvester</h6>
                                <span class="tx-gray-600">snkeze9@gmail.com</span>
                            </div>
                        </div>
                        <div class="wd-30p tx-right">
                            <star-icon class="wd-15 tx-warning"></star-icon>
                        </div>
                    </list-item>
                </list-container>
            </div>
        </section>
        <!--Form List End-->
    </div>
</template>
<script>
    //Import Feather icons from vue feather icons
    import {
        FileIcon,
        MailIcon,
        DollarSignIcon,
        UsersIcon,
        StarIcon
    } from 'vue-feather-icons'
    export default {
        components: {
            FileIcon,
            MailIcon,
            DollarSignIcon,
            UsersIcon,
            StarIcon,
            StatContainer: () => import( /* webpackChunkName: "admin-comp-stat" */
                '../../components/global/stats/stat_container'),
            StatActionCard: () => import( /* webpackChunkName: "admin-comp-stat" */
                '../../components/global/stats/stat_action_card'),
            StatCard: () => import( /* webpackChunkName: "admin-comp-stat" */
                '../../components/global/stats/stat_card'),
            ListContainer: () => import( /* webpackChunkName: "admin-comp-list" */
                '../../components/global/list/container'),
            ListItem: () => import( /* webpackChunkName: "admin-comp-list" */ '../../components/global/list/list_item'),
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
