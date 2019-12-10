<template>
    <router-link :to='{path:path}' class="d-flex wd-100p justify-content-between rounded-5 pd-10 mg-t-10 mg-b-10 list-item">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    props:['path']
}
</script>
<style scoped>
    .list-item{
        color: black;
        border: 0px;
        background: rgb(247, 247, 247);
    }
    .list-item:hover{
        background: rgb(233, 233, 233);
    }
</style>