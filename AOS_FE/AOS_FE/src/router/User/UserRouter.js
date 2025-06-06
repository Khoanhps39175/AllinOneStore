
import HomeView from '../../components/User/HomeView.vue'
export default [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/products',
        name: 'products',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../../components/User/ProductsView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../../components/Module/Login.vue'),
    }
]
