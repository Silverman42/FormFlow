/**
 * @summary An object that contains all the client routes
 * @return {Object}
 */
import Dashboard from './pages/index';

/**
 * Integrations Route Components
 */
import IntLayout from './pages/integrations/layout'
import IntIndex from './pages/integrations/index'

export default [
    {
        path : "/home",
        component: Dashboard
    },
    {
        path : "/forms",
        component: ()=>import(/* webpackChunkName: "client-pages-forms" */ './pages/forms/layout'),
        children:[
            {
                path: "",
                component: ()=>import(/* webpackChunkName: "client-pages-forms" */ './pages/forms/index'),
                name:"form.index",
            },
            {
                path: "/forms/create-form",
                component: ()=>import(/* webpackChunkName: "client-pages-forms" */ './pages/forms/new_form'),
                name: "form.new_form"
            },
            {
                path: "/forms/view/:id",
                component: ()=>import(/* webpackChunkName: "client-pages-forms" */ './pages/forms/view'),
                children:[
                    {
                        path:"",
                        component: ()=>import(/* webpackChunkName: "client-pages-forms" */ './pages/forms/view/submissions'),
                        name: 'form.view.submission'
                    },
                    {
                        path:"/forms/view/:id/messaging",
                        component: ()=>import(/* webpackChunkName: "client-pages-forms" */ './pages/forms/view/messaging'),
                        name: 'form.view.messaging'
                    },
                    {
                        path:"/forms/view/:id/settings",
                        component: ()=>import(/* webpackChunkName: "client-pages-forms" */ './pages/forms/view/setting'),
                        name: 'form.view.setting'
                    },
                    {
                        path:"/forms/view/:id/metrics",
                        component: ()=>import(/* webpackChunkName: "client-pages-forms" */ './pages/forms/view/metrics'),
                        name: 'form.view.metrics'
                    }
                ]
            }
        ]
    },
    {
        path : "/integrations",
        component: IntLayout,
        children:[
            {
                path : "/",
                component: IntIndex
            }
        ]
    },
    {
        path : "/subscriptions",
        component: ()=>import(/* webpackChunkName: "client-pages-balance" */ './pages/subscriptions/layout'),
        children:[
            {
                path: "/",
                component: ()=>import(/* webpackChunkName: "client-pages-balance" */ './pages/subscriptions/index'),
                name: 'balance.index'
            }
        ]
    }
]