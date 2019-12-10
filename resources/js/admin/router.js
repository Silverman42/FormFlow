/**
 * @summary An object that contains all the client routes
 * @return {Object}
 */
import Dashboard from './pages/index';

/**
 * Forms Route components
 */
import FormLayout from './pages/forms/index'
import FormIndex from './pages/forms/index'

/**
 * Integrations Route Components
 */
import IntLayout from './pages/integrations/layout'
import IntIndex from './pages/integrations/index'

/**
 * Balance Route Components
 */
import BalLayout from './pages/balance/layout'
import BalIndex from './pages/balance/index'
export default [
    {
        path : "/home",
        component: Dashboard
    },
    {
        path : "/forms",
        component: FormLayout,
        children:[
            {
                path: "/",
                component: FormIndex
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
        path : "/balance",
        component: BalLayout,
        children:[
            {
                path: "/",
                component: BalIndex
            }
        ]
    }
]