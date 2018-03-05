import Vue from 'vue';
import Vuex from 'vuex';

import logger from 'store/plugins/logger.js';

// import db from 'store/modules/db';
// import exam from 'store/modules/exam';
// import payExamine from 'store/modules/payExamine';
// import account from 'store/modules/account';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // db,
    // exam,
    // payExamine,
    // account
  },
  plugins: process.env.NODE_ENV !== 'production' ? [ logger ] : []
});
