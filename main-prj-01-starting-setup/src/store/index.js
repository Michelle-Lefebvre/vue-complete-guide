import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index';
import requestModule from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModule,
  },
  state() {
    return {
      userId: 'c3', // TODO remove hardcoded
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
