import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/homeview.vue';
import JobViews from '@/components/JobViews.vue';
import notfoundviews from '@/components/notfoundviews.vue';

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/',component:HomeView,name:'home'},
        {path:'/jobs',component:JobViews,name:'jobs'},
        {path:'/:catchAll(.*)',component:notfoundviews,name:'not-found'}
    ]
})

export default router;
