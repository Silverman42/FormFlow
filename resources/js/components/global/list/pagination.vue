<template>
    <nav class="mg-t-10 mg-b-10">
        <ul class="pagination pagination-space justify-content-end mg-b-0">
            <li class="page-item" :class="{disabled: disablePrevious}">
                <a class="page-link page-link-icon" href="#" @click.prevent="previousPage">
                    <chevron-left-icon></chevron-left-icon>
                </a>
            </li>
            <li v-for="(link, index) in paginateLinks" :key="index" class="page-item" :class="{active: link.current}">
                <a class="page-link" @click.prevent="changeCurrentPage(link.num)" href="#">{{link.num}}</a>
            </li>
            <li class="page-item" :class="{disabled: disableNext}">
                <a class="page-link page-link-icon" href="#" @click.prevent="nextPage">
                    <chevron-right-icon></chevron-right-icon>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
    /**
     * List Contaner
     * @summary Contains all the events emited by search list (pagination, serachbar, filter)
     */
    import {
        ChevronLeftIcon,
        ChevronRightIcon,
    } from 'vue-feather-icons'
    export default {
        components: {
            ChevronLeftIcon,
            ChevronRightIcon,
        },
        props:{
            currentPage:{
                type: Number,
                default: 0
            },
            lastPage:{
                type: Number,
                default: 0
            },
            firstPage:{
                type: Number,
                default: 0
            }
        },
        watch:{
            currentPage(newData, oldData){
                this.current = newData
            },
            lastPage(newData, oldData){
                this.last = newData
            },
            firstPage(newData, oldData){
                this.first = newData
            }
        },
        data() {
            return {
                last: 0,
                current: 0,
                first: 0
            }
        },
        computed: {
            /**
             * Generate Pagination buttons
             * @description algorithms to create button list
             */
            paginateLinks() {
                let last = this.last
                let current = this.current
                let first = this.first
                let range = 5
                const list = []
                //The first range of paginations start from 1 and ends with 
                //a specific a range in a successive manner. If the last page numbebr is 
                //equal to the range, then it becomes the new range
                if (last <= range) {
                    range = last
                }
                
                //when the current page is below the last number of the given successive range,
                //create an array of the pages with their respective metadata
                if (current < range) {
                    for (let count = 1; count <= range; count++) {
                        list.push({
                            num: count,
                            link: "/?page=" + count,
                            current: count == current ? true : false
                        })
                        continue;
                    }
                    return list
                }
                //When the current page is eqaul to the last number of the given successive range 
                //and also equal to the first page number, create a single array with tha page number's
                //metadata. An instance of this condition is when the current page number is 1 and the total page number is 1
                if ((current == range) && (current == first)) {
                    list.push({
                        num: current,
                        link: "/?page=" + current,
                        current: true
                    })
                    return list
                }
                //When the current page is greater than the last number of the given successive range,
                //create an array that contains the metadata of the first page number, the previous number,
                //the current page number and the next page number. 
                if (current >= range) {
                    let newRange = [first, '...', current - 1, current]
                    current < last ? newRange.push(current + 1) : newRange
                    for (const item of newRange) {
                        list.push({
                            num: item,
                            link: "/?page=" + item,
                            current: item == current ? true : false
                        })
                    }
                    return list
                }
                return list
            },
            disablePrevious() {
                return (this.current == this.first ? true : false)
            },
            disableNext() {
                return (this.current == this.last ? true : false)
            }
        },
        methods: {
            changeCurrentPage(page) {
                if (typeof page == 'number') {
                    this.current = page
                    this.$emit('changeCurrentPage',page)
                }
            },
            nextPage() {
                if(this.current <= this.last) {
                    this.current++
                    this.$emit('enterNextPage',this.current)
                }
                return
            },
            previousPage() {
                if(this.current > 1) {
                    this.current--
                    this.$emit('enterPreviousPage',this.current)
                }
                return
            }
        },
        mounted(){
            this.current = this.currentPage
            this.last = this.lastPage
            this.first = this.firstPage
        }
    }

</script>
