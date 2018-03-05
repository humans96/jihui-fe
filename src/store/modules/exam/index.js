import Vue from 'vue';
import _ from 'loadash';
import moment from 'moment';

import { exam } from 'store/mutation-type.js';
import getters from 'store/modules/exam/getters.js';
import { examineConf } from 'config/index.js';
import {
  select
} from 'api/db.js';

const orderById = item => item.id ? -item.id  : 0;
const groupByKeyChain = keys => item => keys.map(key => (item[key] || '-')).join('$$$');

const state = {
  examine: examineConf.examine,
  statusdata:examineConf.statusdata,
  displayKeys:examineConf.displayKeys,
  currentTables: null,
  data: {}
};

const actions = {
  [exam.getStatusInfo]: ({commit}) => new Promise(f => {
    setTimeout(() => {
      commit(exam.getStatusInfo);
      f();
    }, 100)
  }),
}
const mutations = {
  [exam.getStatusInfo]:(state) => {
    state.currentTables = state.statusdata;
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
