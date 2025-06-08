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
import LandingLevelTwo from '@/components/LandingLevelTwo.vue';
import LevelTwoIntro from '@/components/LevelTwoIntro.vue';
import BeforeQuestionTwo from '@/components/BeforeQuestionTwo.vue';
import QuestionLevelTwo from '@/components/QuestionLevelTwo.vue';
import LandingLevelThree from '@/components/LandingLevelThree.vue';
import LevelThreeIntro from '@/components/LevelThreeIntro.vue';
import BeforeQuestionThree from '@/components/BeforeQuestionThree.vue';
import QuestionLevelThree from '@/components/QuestionLevelThree.vue';
import ResultPage from '@/components/ResultPage.vue';

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
    { path: '/landing-level-two', component: LandingLevelTwo },
    { path: '/level-two-intro', component: LevelTwoIntro },
    { path: '/before-question-two', component: BeforeQuestionTwo },
    { path: '/question-level-two/:questionNumber', component: QuestionLevelTwo },
    { path: '/landing-level-three', component: LandingLevelThree },
    { path: '/level-three-intro', component: LevelThreeIntro },
    { path: '/before-question-three', component: BeforeQuestionThree },
    { path: '/question-level-three/:questionNumber', component: QuestionLevelThree },
    { path: '/result', component: ResultPage },
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