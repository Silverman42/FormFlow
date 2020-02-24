<template>
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
            <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">Generate Report</button>
        </div>
    </div>
</template>
<script>
export default {
    beforeMount(){
        this.$Progress.start()
    },
    mounted(){
        this.$Progress.finish()
    }
}
</script>