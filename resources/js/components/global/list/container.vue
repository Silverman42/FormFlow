<template>
    <div>
        <!--List controls start-->
        <div v-if="controlIsOpen == true" class="row align-content-center justify-content-between bg-white pd-t-5 pd-b-5 t-0" style="position: sticky; z-index: 10">
            <div class="col-6 col-md-7">
                <div class="input-group input-group-lg">
                    <input type="text" class="form-control bd-r-0" placeholder="Search" aria-label="Search"
                        aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <span class="input-group-text bg-white" id="basic-addon2">
                            <search-icon class="wd-16"></search-icon>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-5 d-flex align-items-center justify-content-end">
                <a href="" class="tx-uppercase mg-l-5 tx-bold tx-12 filter-btn d-flex justify-content-between align-items-center" :class="{active : filterIsActive}" @click.prevent="toggleFilterMenu">
                    <filter-icon class="wd-16 mg-r-5"></filter-icon> <span class="d-none d-sm-block">Filter By</span>
                </a>
                <a href="" class="tx-uppercase mg-l-5 tx-bold tx-12 filter-btn d-flex justify-content-between align-items-center" :class="{active : sizeIsActive}" @click.prevent="toggleSizeMenu">
                    <list-icon class="wd-16 mg-r-5"></list-icon> <span class="d-none d-sm-block">Size</span>
                </a>
                <a href="" class="tx-uppercase mg-l-5  tx-bold tx-12 filter-btn d-flex justify-content-between align-items-center">
                    <refresh-ccw-icon class="wd-16 mg-r-5"></refresh-ccw-icon> <span class="d-none d-sm-block">refresh</span>
                </a>
            </div>

            <!--filter Content start-->
            <div class="wd-100p overflow-hidden row pd-l-15 pd-r-15" :class="{'d-none': !filterIsActive}">
                <div class="form-group col-6 col-md-4 col-lg-3 mg-t-10 mg-b-10">
                    <label for="" class="d-block tx-gray-600">Firstname</label>
                    <input type="text" class="form-control" placeholder="">
                </div>

                <div class="form-group col-6 col-md-4 col-lg-3 mg-t-10 mg-b-10">
                    <label for="" class="d-block tx-gray-600">From</label>
                    <select type="text" class="form-control">
                        <option value=""></option>
                    </select>
                </div>
                <div class="form-group col-6 col-md-4 col-lg-3 mg-t-10 mg-b-10">
                    <label for="" class="d-block tx-gray-600">Firstname</label>
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>
            <!--filter content end-->

            <!--Page item count start-->
            <div class="wd-100p overflow-hidden row pd-l-15 pd-r-15" :class="{'d-none': !sizeIsActive}">
                <div class="form-group col-6 col-md-4 col-lg-3 mg-t-10 mg-b-10">
                    <label for="" class="d-block tx-gray-600">Items per page</label>
                    <input type="number" class="form-control" placeholder="">
                </div>
            </div>
            <!--Page item count end-->
        </div>
        <!--List Controls end-->
        <!--List body start-->
        <div class="pd-t-20 pd-b-20">
            <slot></slot>
        </div>
        <!--list body end-->
        <!--list pagination start-->
        <div v-if="paginateIsOpen == true">
            <pagination :currentPage="1" :lastPage="13" :firstPage="1"></pagination>
        </div>
        <!--List pagination end-->
    </div>
</template>
<script>
    /**
     * List Contaner
     * @summary Contains all the events emited by search list (pagination, serachbar, filter)
     */
    import {
        SearchIcon,
        FilterIcon,
        RefreshCcwIcon,
        ListIcon
    } from 'vue-feather-icons'
    export default {
        components: {
            SearchIcon,
            FilterIcon,
            RefreshCcwIcon,
             ListIcon,
            Pagination: ()=> import( /* webpackChunkName: "client-comp-list" */
                './pagination')
        },
        props:{
            controlIsOpen:{
                type: Boolean,
                default: false,
            },
            paginateIsOpen:{
                type: Boolean,
                default: false,
            }
        },
        data(){
            return {
                filterIsActive: false,
                sizeIsActive: false
            }
        },
        computed:{
            
        },
        methods:{
            toggleFilterMenu(){
                this.filterIsActive = !this.filterIsActive 
                this.sizeIsActive = false
            },
            toggleSizeMenu(){
                this.sizeIsActive = !this.sizeIsActive 
                this.filterIsActive = false
            }
        }
    }

</script>

<style scoped>
    .filter-btn{
        background: transparent;
        border-radius: 6px;
        padding: 10px;
    }
    .filter-btn.active{
        background: rgba(1, 104, 250, 0.2);
    }
</style>
