<template>
    <div class="bd bd-2 bd-gray-100 rounded-5 stat-card" :style="{'min-width': `${cardOuterWidth}px`}">
        <div class="d-block mg-t-15 mg-b-15 mg-l-auto mg-r-auto d-flex flex-column justify-content-center" :style="{width: `${cardInnerWidth}px`}">
            <div class="pd-b-10 d-flex">
                <div class="avatar d-sm-block">
                    <span class="avatar-initial rounded-circle op-6" :class="[iconColorClass]">
                        <slot></slot>
                    </span>
                </div>
                <div class="mg-l-10">
                    <h5>{{cardHeader}}</h5>
                    <p class="tx-gray-600">{{cardText}}</p>
                </div>
            </div>
            <div class="pd-b-10">
                <p class="tx-center tx-40 tx-bold">{{dataCount}}</p>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * Stat Card
 * @summary Used to show the statistic data count of individual entities in an application
 */
export default {
    props:{
        iconColorClass:{
            type: String,
            default: "bg-success"
        },
        dataCount:{
            type: Number,
            default: 3000
        },
        cardHeader:{
            type: String,
            default: "Header"
        },
        cardText:{
            type:String,
            default: "This is a header text"
        },
        cardInnerWidth:{
            type: Number,
            default: 200
        },
        cardOuterWidth:{
            type: Number,
            default: 250
        }
    }
}
</script>

<style lang="css" scoped>
    .stat-card{
        margin-right: 10px
    }
    .stat-card:last-child{
        margin-right: 0px
    }
</style>