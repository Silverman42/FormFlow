<template>
    <div class="rounded-10 bd bd-2 bd-gray-100 pd-10 mg-x-1 row align-items-center">
        <div class="col-12 col-md-8 d-flex mg-b-10 align-items-center">
            <div class="avatar d-sm-block">
                <span class="avatar-initial rounded-circle op-6 bg-success">
                    <slot name="icon"></slot>
                </span>
            </div>
            <div class="wd-90p pd-l-15">
                <slot name="card-description"></slot>
            </div>
        </div>
        <div class="col-12 col-md-4 row mg-b-10">
            <slot name="form-input"></slot>
        </div>
        <div class="col-12 tx-center">
            <slot name="numeric_data"></slot>
        </div>
        <div class="col-12 overflow-y-auto">
            <slot name="chart_data"></slot>
        </div>
    </div>
</template>
