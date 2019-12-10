<template>
    <div>
        <!--List controls start-->
        <div v-if="controlIsOpen == true" class="d-flex flex-wrap align-content-center justify-content-between">
            <div class="wd-40p d-flex align-items-center">
                <a href="" class="tx-uppercase tx-bold tx-12 filter-btn" :class="{active : filterIsActive}" @click.prevent="toggleFilterMenu">
                    <filter-icon class="wd-16 "></filter-icon>
                    Filter By
                </a>
            </div>
            <div class="wd-60p">
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

            <!--filter Content start-->
            <div class="wd-100p overflow-hidden row" :class="{'d-none': !filterIsActive}">
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
    } from 'vue-feather-icons'
    export default {
        components: {
            SearchIcon,
            FilterIcon,
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
                filterIsActive: false
            }
        },
        computed:{
            
        },
        methods:{
            toggleFilterMenu(){
                this.filterIsActive = !this.filterIsActive 
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
