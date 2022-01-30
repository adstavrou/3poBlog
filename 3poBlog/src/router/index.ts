import {createRouter, createWebHistory} from 'vue-router';

import Home from '@/views/home/Home.vue'
import Category from '@/views/category/Category.vue'

const routes:Array<any> = [
    {path: '/', name: 'Home', component: Home},
    {path: '/category/:categoryName',
        name: 'Category',
        component: Category,
        children: [
            {path: '', component: Category}
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
