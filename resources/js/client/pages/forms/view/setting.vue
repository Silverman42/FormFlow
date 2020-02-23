<template>
    <transition-group tag="div" name="zoom" appear>
        <h5 key="header" class="mg-b-20">Settings</h5>
        <div key="body">
            <form action="">
                <div class="form-group row">
                    <label for="form_name" class="col-sm-4 col-form-label">Form Name <span
                            class="tx-12 tx-gray-400">(Required)</span></label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="form_name" placeholder="e.g Contact Form">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-sm-4 col-form-label">Email <span
                            class="tx-12 tx-gray-400">(Required)</span></label>
                    <div class="col-sm-8">
                        <input type="email" class="form-control" id="email" placeholder="Example@gmail.com">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="domain_name" class="col-sm-4 col-form-label">Domain Name <br><span
                            class="tx-12 tx-gray-400">
                            Adding a domain name ensures the form is used only on a particular domain
                            </span>
                    </label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="domain_name" placeholder="http://example.com">
                    </div>
                </div>
                <div class="form-group row justify-content-end">
                    <div class="col-sm-8 col-12">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="customSwitch1">
                            <label class="custom-control-label" for="customSwitch1">Deactivate form <br> <span
                                    class="tx-12 tx-gray-400">Stop this form from recieving submissions</span></label>
                        </div>
                    </div>
                </div>
                <div class="form-group tx-right">
                    <button class="btn btn-uppercase btn-sm btn-primary"
                        type="submit">Update Form Details</button>
                </div>
            </form>

            <hr class="mg-y-25">
            <form action="" method="get">
                <div>
                    Delete Form <br>
                    <span class="tx-12 tx-gray-400">This action is irreversible. Please be cautious before excuting this 
action</span>
                </div>
                <div class="tx-right">
                    <button class="btn btn-outline-danger btn-sm btn-uppercase">confirm delete</button>
                </div>
            </form>
        </div>
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
