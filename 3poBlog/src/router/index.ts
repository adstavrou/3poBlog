import {createRouter, createWebHistory} from 'vue-router';

import Home from '@/views/home/Home.vue'

const routes:Array<any> = [
    {path: '/', name: 'Home', component: Home},
    {path: '/category/:categoryName',
        name: 'Category',
        component: () => import('@/views/category/Category.vue'),
        children: [{
            path: '',
            component: () => import('@/views/category/Category.vue')
        }]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
