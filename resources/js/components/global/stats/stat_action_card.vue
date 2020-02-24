<template>
    <div class="bd bd-2 mg-r-10 bd-gray-100 rounded-5" :style="{minWidth: `${cardOuterWidth}px`}">
        <div class="d-block mg-t-15 mg-b-15 mg-l-auto mg-r-auto d-flex flex-column justify-content-center" :style="{width: `${cardInnerWidth}px`}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
/**
 * Stat Action Card
 * @summary Action cards contain button that serve as links to important
 * functions in the application 
 */
export default {
    props:{
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