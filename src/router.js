import { createRouter, createWebHistory } from 'vue-router'
import Task1 from './pages/Task1.vue';

const routes = [
    {path:'/', redirect:'/task1'},
    { path:'/task1', component:Task1},
    { path:'/task2', component:()=>import('./pages/Task2.vue') },
    {path: '/task3', component:()=>import('./pages/Task3.vue')},
    {path: '/task4', component:()=>import('./pages/Task4.vue')},
    {path:'/task5', component:()=>import('./pages/Task5.vue')},
    {path:'/:catchAll(.*)', redirect:'/task1'}
];

const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(_, _1, savedPosition){
        if(savedPosition)
            return savedPosition;
            
        return { left:0, top:0 };
    }
});


export default router;
