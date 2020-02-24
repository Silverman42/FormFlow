<template>
    <transition-group tag="div" name="zoom" appear>
        <h5 key="header" class="mg-b-20">Messaging</h5>
        <form key="body" action="" method="get">
            <div class="form-group row">
                <label for="redirect_link" class="col-sm-4 col-form-label">
                    Redirect link
                    <span class="tx-12 tx-gray-400">(Required)</span>
                    <br>
                    <span class="tx-12 tx-gray-400">
                        Return a resonse email to your client after receiving a submission from him
                    </span>
                </label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="redirect_link" placeholder="http://example.com">
                </div>
            </div>
            <div class="form-group row justify-content-end">
                <div class="col-sm-8 col-12">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                        <label class="custom-control-label" for="customSwitch1">Auto-response <br> <span
                                class="tx-12 tx-gray-400">Return a resonse email to your client after receiving a submission from him</span></label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="auto_response_message" class="col-sm-4 col-form-label">
                    Auto-response message
                    <span class="tx-12 tx-gray-400">(Required)</span>
                    <br>
                </label>
                <div class="col-sm-8">
                    <textarea name="auto_response_message" class="form-control" id="auto_response_message" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="form-group tx-right">
                <button class="btn btn-uppercase btn-sm btn-primary"
                    type="submit">Update Messaging options</button>
            </div>
        </form>
    </transition-group>
</template>
<script>
    export default {
        beforeMount() {
            this.$Progress.start()
        },
        mounted() {
            this.$Progress.finish()
        }
    }
</script>
