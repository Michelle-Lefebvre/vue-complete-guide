import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  // register routes. name the urls based on where the user is
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    // { path: '/teams/new/' },
    // { path: '/teams/:teamId' }, // order matters
    { path: '/teams/:teamId', component: TeamMembers },
  ],
  linkActiveClass: 'active',
});
const app = createApp(App);

app.use(router);

app.mount('#app');
