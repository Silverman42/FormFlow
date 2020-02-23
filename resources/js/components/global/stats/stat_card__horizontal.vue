<template>
    <div class="rounded-10 bd bd-2 bd-gray-100 pd-10 mg-x-1 row justify-content-between align-items-center mg-b-20">
        <div class="col-md-6 d-flex align-items-center mg-b-10">
            <div class="avatar d-sm-block">
                <span class="avatar-initial rounded-circle op-6 bg-success">
                    <slot name="icon"></slot>
                </span>
            </div>
            <div class="pd-l-15">
                <slot name="card_description"></slot>
            </div>
        </div>
        <div class="d-flex align-items-center tx-40 tx-center tx-bold pd-l-15">
            <slot name="data"></slot>
        </div>
    </div>
</template>