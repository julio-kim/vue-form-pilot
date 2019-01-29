import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import BasicForm from '../components/BasicForm.vue'
import BasicSubForm from '../components/BasicSubForm.vue'
import DynamicRowForm from '../components/DynamicRowForm.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/basic-form', component: BasicForm, children: [
            { path: 'sub/:status', component: BasicSubForm }
        ]},
        { path: '/dynamic-row-form', component: DynamicRowForm },
        { path: '*', component: NotFound }
    ]
})

export default router