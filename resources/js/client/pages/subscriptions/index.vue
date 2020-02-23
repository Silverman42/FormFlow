<template>
    <transition-group tag="div" name="slide" appear>
        <div key="header" class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <li class="breadcrumb-item"><a href="#">Subscription</a></li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">Subscription Stats</h4>
            </div>
        </div>
        <!--Subscriptions Stats begin-->
        <section key="stats" class="mg-t-50 mg-b-50">
            <stat-container>
                <stat-action-card>
                    <a href="" class="pd-b-10 pd-t-10 d-flex flex-column align-items-center justify-content-center ht-100p">
                        <p class="mg-b-10 tx-bolder">New Subscription</p>
                        <plus-circle-icon size="3x"></plus-circle-icon>
                    </a>
                </stat-action-card>
                <stat-card cardHeader="Tier 1" cardText="Current plan" iconColorClass="bg-danger">
                    <dollar-sign-icon class="wd-16 tx-white"></dollar-sign-icon>
                    <template slot="dataCount">₦ 3000</template>
                </stat-card>
                <stat-card cardHeader="Storage" cardText="File storage left" iconColorClass="bg-danger">
                    <dollar-sign-icon class="wd-16 tx-white"></dollar-sign-icon>
                    <template slot="dataCount">3000</template>
                </stat-card>
                <stat-card cardHeader="Submission" cardText="Submission remaining" iconColorClass="bg-danger">
                    <dollar-sign-icon class="wd-16 tx-white"></dollar-sign-icon>
                    <template slot="dataCount">3000</template>
                </stat-card>
            </stat-container>
        </section>
        <!--Subscription Stats end-->

        <!--List of payed subscriptions start-->
        <section key="list" class="mg-t-50 mg-b-50">
            <div class="d-flex justify-content-between align-items-center">
                <div class="wd-50p">
                    <h5>Subscription List</h5>
                    <p class=" tx-gray-600">List of recently made subscriptions</p>
                </div>
                <router-link :to="{name:'form.index'}" class="btn btn-uppercase btn-sm btn-outline-primary">New subscriptions</router-link>
            </div>
            <list-container :controlIsOpen="true">
                <list-item v-for="(list,index) in 6" :key="index" path="/home">  
                    <div class="col-10 col-md-4 d-flex">
                        <div class="avatar d-sm-block">
                            <span class="avatar-initial rounded-circle op-6 bg-danger">
                                <dollar-sign-icon class="wd-16 tx-white"></dollar-sign-icon>
                            </span>
                        </div>
                        <div class="pd-l-15">
                            <h6>Tier 1</h6>
                            <span class="tx-gray-600">ends 23/2/2019 at 9:00pm</span>
                        </div>
                    </div>
                    <div class="d-none d-md-block col-md-4 tx-center">
                        <span class="tx-16 tx-bolder">₦ 10000</span> <br>
                        <small>Per Month</small>
                    </div>
                    <div class="col-2 col-md-4 tx-right">
                        <small class="tx-success">Active</small>
                    </div>
                </list-item>
            </list-container>
        </section>
        <!--List of payed subscriptions end-->
    </transition-group>
</template>
<script>
    import {
        DollarSignIcon,
        PlusCircleIcon
    } from 'vue-feather-icons'

    export default {
        components: {
            DollarSignIcon,
            PlusCircleIcon,
            StatContainer: () => import( /* webpackChunkName: "client-comp-stat" */
                '../../../components/global/stats/stat_container'),
            StatActionCard: () => import( /* webpackChunkName: "client-comp-stat" */
                '../../../components/global/stats/stat_action_card'),
            StatCard: () => import( /* webpackChunkName: "client-comp-stat" */
                '../../../components/global/stats/stat_card'),
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
