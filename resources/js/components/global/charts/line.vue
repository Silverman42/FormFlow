<script>
    import {
        Bar
    } from "vue-chartjs"
    export default {
        extends: Bar,
        props: ['chartData'],
        data() {
            return {
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                                display: false
                            }
                        }]
                    }
                }
            }
        },
        mounted() {
            this.renderChart(this.chartData, this.options)
        }
    }

</script>
