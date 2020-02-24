<template>
    <transition-group tag="div" name="slide" appear class="row">
        <div key="header" class="col-12 d-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <li class="breadcrumb-item">
                            <router-link :to="{path:'/forms'}">Forms</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            Form 2173748
                        </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center">
                    <router-link class=" mg-0 mg-r-10" :to="{name:'form.index'}">
                        <chevron-left-icon class="wd-25"></chevron-left-icon>
                    </router-link>
                    <h4 class="mg-b-0 tx-spacing--1">Form 2173748</h4>
                </div>
            </div>
        </div>
        <div key="navigation" class="col-md-3 col-lg-2 col-12">
            <aside class="side-navigation">
                <h6 class="tx-gray-400 tx-uppercase tx-12 tx-spacing-2 mg-b-10 d-none d-sm-block">Options</h6>
                <ul>
                    <li>
                        <router-link :to="{name: 'form.view.submission', params:{id:20}}" active-class="active" exact>Submissions</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'form.view.messaging', params:{id:20}}" active-class="active">Messaging</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'form.view.setting', params:{id:20}}" active-class="active">Settings</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'form.view.metrics', params:{id:20}}" active-class="active" exact>Metrics</router-link>
                    </li>
                </ul>
            </aside>
        </div>
        <div key="body" class="col-md-9 col-lg-10 col-12">
            <router-view></router-view>
        </div>
    </transition-group>
</template>

<script>
    import {
        ChevronLeftIcon,
    } from 'vue-feather-icons'
    export default {
        components: {
            ChevronLeftIcon
        }
    }

</script>

<style scoped>
.side-navigation{
    
}
.side-navigation ul{
    display: flex;
    min-width: 100%;
    overflow-x: auto;
    margin: 0px;
    padding: 0px;
    list-style: none;
    align-items: center;
    margin-bottom: 15px;
}

.side-navigation ul li{
    display: block;
    margin: 5px 10px;
}
.side-navigation ul li:first-child{
    margin-left: 0px;
}
.side-navigation ul li a{
    color: rgb(117, 122, 131);
}
.side-navigation ul li a.active{
    display: inline-block;
    padding: 5px 10px;
    border-radius: 3px;
    background: rgb(204,225,254);
    color: rgb(1, 104, 248);
}

@media(min-width: 768px){
    .side-navigation ul{
        flex-direction: column;
        overflow-x: hidden;
        justify-content: start;
        align-items: start;
    }
    .side-navigation ul li{
        min-width: 50px;
        margin: 5px 0px;
    }
}
</style>