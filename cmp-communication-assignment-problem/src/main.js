import { createApp } from 'vue';

import App from './App.vue';
import UserData from './components/UserData.vue';
import ActiveUser from './components/ActiveUser.vue';

const app = createApp(App);
app.component('active-user', ActiveUser);
app.component('user-data', UserData);

app.mount('#app');
