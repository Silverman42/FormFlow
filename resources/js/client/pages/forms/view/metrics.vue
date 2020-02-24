<template>
    <transition-group tag="div" name="zoom" appear>
        <h5 key="header" class="mg-b-20">Metrics</h5>
        <div key="body">
            <stat-card>
                <template slot="icon">
                    <mail-icon class="wd-16 tx-white"></mail-icon>
                </template>
                <template slot="card_description">
                    <h6>Total Submissions </h6>
                    <span class="tx-gray-600">Total submissions made to this form</span>
                </template>
                <template slot="data">
                    3000
                </template>
            </stat-card>

            <chart-card>
                <template slot="icon">
                    <layers-icon class="wd-16 tx-white"></layers-icon>
                </template>
                <template slot="card-description">
                    <h6>Submission Record </h6>
                    <span class="tx-gray-600">Record of unexpired form submissions from <b>12/2/2019</b> to <b>13/3/2019</b></span>
                </template>
                <template slot="form-input">
                    <div class="form-group col-6">
                        <label for="From" class="form-label">From</label>
                        <input type="date" class="form-control" id="from">
                    </div>
                    <div class="form-group col-6">
                        <label for="To" class="form-label">To</label>
                        <input type="date" class="form-control" id="To">
                    </div>
                </template>
                <template slot="numeric_data">
                    <div class="mg-b-20">
                        <span class="tx-40 tx-bold">3000</span><br><span class="tx-gray-400">Submissions</span>
                    </div>
                </template>
                <template slot="chart_data">
                    <line-chart :chartData="dataset"></line-chart>
                </template>
            </chart-card>
        </div>
    </transition-group>
</template>
<script>
    import {
        MailIcon,
        LayersIcon
    } from 'vue-feather-icons'
    export default {
        components:{
            MailIcon,
            LayersIcon,
            ChartCard: ()=>import(/* webpackChunkName: "client-comp-stats" */ '../../../../components/global/stats/chart_card'),
            StatCard: ()=>import(/* webpackChunkName: "client-comp-stats" */ '../../../../components/global/stats/stat_card__horizontal'),
            LineChart:()=>import(/* webpackChunkName: "client-comp-charts" */ '../../../../components/global/charts/line')
        },
        data(){
            return {
                dataset:{
                    labels:[
                        '2016-12-25','2016-12-26','2016-12-27','2016-12-28','2016-12-29','2016-12-30'
                    ],
                    datasets: [
                        {
                        label: '2016-12-25',
                        backgroundColor: 'rgba(1,104,250, 0.3)',
                        data: [{x:'2016-12-25', y:20}],
                        },
                        {
                        label: '2016-12-26',
                        backgroundColor: 'rgba(1,104,250, 0.3)',
                        data: [{x:'2016-12-26', y:10}],
                        },
                        {
                        label: '2016-12-27',
                        backgroundColor: 'rgba(1,104,250, 0.3)',
                        data: [{x:'2016-12-27', y:5}],
                        },
                        {
                        label: '2016-12-28',
                        backgroundColor: 'rgba(1,104,250, 0.3)',
                        data: [{x:'2016-12-28', y:30}],
                        },
                        {
                        label: '2016-12-29',
                        backgroundColor: 'rgba(1,104,250, 0.3)',
                        data: [{x:'2016-12-29', y:12}],
                        },
                        {
                        label: '2016-12-30',
                        backgroundColor: 'rgba(1,104,250, 0.3)',
                        data: [{x:'2016-12-30', y:5}],
                        },
                        {
                        data: [{x:'0', y:0}],
                        }
                    ]
                }
            }
        }
        ,
        beforeMount() {
            this.$Progress.start()
        },
        mounted() {
            this.$Progress.finish()
        }
    }

</script>
