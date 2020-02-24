<template>
    <transition-group tag="div" name="zoom" appear>
        <h5 key="header">Submission</h5>
        <div key="body">
            <list-container :controlIsOpen="true" :paginateIsOpen="true">
                <list-item v-for="(list,index) in 12" :key="index" path="/forms/view/20">
                    <div class="wd-80p d-flex">
                        <div class="avatar d-sm-block">
                            <span class="avatar-initial rounded-circle op-6 bg-success">
                                <mail-icon class="wd-16 tx-white"></mail-icon>
                            </span>
                        </div>
                        <div class="pd-l-15 wd-80p">
                            <h6 style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">Name : James
                                Oklahoma, Class: 2084, Email: snkeze@gmail.com </h6>
                            <span class="tx-gray-600">snkeze9@gmail.com</span>
                        </div>
                    </div>
                    <div class="wd-30p tx-right">
                        <check-icon class="wd-15 tx-gray-600"></check-icon>
                    </div>
                </list-item>
            </list-container>
        </div>
    </transition-group>
</template>
<script>
    import {
        MailIcon,
        CheckIcon
    } from 'vue-feather-icons'
    export default {
        components: {
            MailIcon,
            CheckIcon,
            ListContainer: () => import( /* webpackChunkName: "client-comp-list" */
                '../../../../components/global/list/container'),
            ListItem: () => import( /* webpackChunkName: "client-comp-list" */
                '../../../../components/global/list/list_item')
        },
        beforeMount() {
            this.$Progress.start()
        },
        mounted() {
            this.$Progress.finish()
        }
    }

</script>
