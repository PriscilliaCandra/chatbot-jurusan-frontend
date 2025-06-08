import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import HomePage from '../components/HomePage.vue';
import IntroPageOne from '../components/IntroPageOne.vue';
import IntroPageTwo from '../components/IntroPageTwo.vue';
import LandingLevelOne from '@/components/LandingLevelOne.vue';
import LevelOneIntro from '@/components/LevelOneIntro.vue';
import BeforeQuestionOne from '@/components/BeforeQuestionOne.vue';
import QuestionLevelOne from '@/components/QuestionLevelOne.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/home', component: HomePage },
    { path: '/intro-page-one', component: IntroPageOne },
    { path: '/intro-page-two', component: IntroPageTwo },
    { path: '/landing-level-one', component: LandingLevelOne },
    { path: '/level-one-intro', component: LevelOneIntro },
    { path: '/before-question-one', component: BeforeQuestionOne },
    { path: '/question-level-one/:questionNumber', component: QuestionLevelOne },
    { path: '*', redirect: '/' },
];

const router = new VueRouter({
    mode: 'hash',
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/');
    }

    next();
});

export default router;