import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  // register routes. Name the urls based on where the user is.
  routes: [
    { path: '/', redirect: '/teams' }, // NOTE: redirect changes the url while alias does not.
    // { path: '/teams', component: TeamsList, alias: '/' },
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    // { path: '/teams/new/' },
    // { path: '/teams/:teamId' }, // order matters
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    { path: '/:notFound(.*)', component: NotFound }, // this should be the last past so it doesn't override any other path
  ],
  linkActiveClass: 'active',
});
const app = createApp(App);

app.use(router);

app.mount('#app');
