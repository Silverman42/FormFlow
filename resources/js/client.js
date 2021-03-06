import VueRouter from "vue-router";
import routes from "./client/router";
/**
 * Import Vue progress bar to detect changes in the route
 */
import VueProgress from "vue-progressbar";
import "../sass/blank.scss"

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueProgress, 
    {
        color: '#0168fa',
        failedColor: 'red',
        height: '2px'
    }
)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Create a vue router instance and assign the routes from the route file
 * in the client folder
 */
Vue.use(VueRouter);
const router = new VueRouter({
    base: '/client/dashboard',
    mode: 'history',
    fallback: true,
    routes
})

/**
 * Add navigation guards that will serve as middleware for every component route both 
 * before each route is entered and before they are resolved
 */

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router
}).$mount('#client');
