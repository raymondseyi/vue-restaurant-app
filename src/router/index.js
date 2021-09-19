import { createRouter,createWebHistory } from "vue-router";
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Cart from '../components/Cart'
import Admin from '../components/Admin'
import Home from '../components/Home'
import Menu from '../components/Menu'

const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/signup',
        name:'SignUp',
        component:SignUp
    },
    {
        path:'/signin',
        name:'SignIn',
        component:SignIn
    },
    {
        path:'/Cart',
        name:'Cart',
        component:Cart
    },
    {
        path:'/admin',
        name:'admin',
        component:Admin
    },
    {
        path:'/menu',
        name:'menu',
        component:Menu
    },
]
const router =createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router 