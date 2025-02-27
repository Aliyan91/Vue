import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/homeview.vue';
import JobViews from '@/components/JobViews.vue';
import notfoundviews from '@/components/notfoundviews.vue';
import Singlejob from '@/views/singlejob.vue';
import Addjob from '@/views/addjob.vue';
import Editjob from '@/views/Editjob.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: HomeView, name: 'home' },
        { path: '/jobs/add', name: 'add-job', component: Addjob },
        { path: '/jobs/:id', name: 'single-job', component: Singlejob },
        { path: '/jobs', component: JobViews, name: 'jobs' },
        { path:'/jobs/edit/:id', name:"edit Job" ,component:Editjob},
        { path: '/:catchAll(.*)', component: notfoundviews, name: 'not-found' }
    ]
})

export default router;
