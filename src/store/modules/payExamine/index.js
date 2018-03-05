import Vue from 'vue';
import _ from 'loadash';
import moment from 'moment';

import { payExamine } from 'store/mutation-type.js';
import getters from 'store/modules/payExamine/getters.js';
import { payExamineConf } from 'config/index.js';
import {
  getApplyList,
  auditing,
  getApplyListByStatus
} from 'api/payExamine.js';

const orderById = item => item.id ? -item.id  : 0;
const groupByKeyChain = keys => item => keys.map(key => (item[key] || '-')).join('$$$');
const param = ( data,examine) => ({
  userId:data.userId || '',
  accountId:data.accountId || '',
  orderId:data.orderId || 'Oid',
  processor:data.processor || 'abb',
  id:data.id || 'id',
  applyStatus: examine
})


const state = {
  tabName: payExamineConf.tabName,
  displayKey:payExamineConf.displayKeys,
  colkeys:payExamineConf.colkeys,
  currentTable: null,
  auditing:null,
  data:{}
};

const actions = {
  [payExamine.getApplyList]: ({commit}) => new Promise(f => {
      getApplyList().then(res =>{  
          let list = _.sortBy(res.data, orderById);;
          commit(payExamine.getApplyList, list);  
          f();
        });
  }),
  [payExamine.getApplyListByStatus]: ({commit}, status) => new Promise(f => {
      getApplyListByStatus(null, `/${status}`).then(res =>{  
          let list = _.sortBy(res.data, orderById);;
          console.log('auditing',res.data);
          commit(payExamine.getApplyListByStatus, list);  
          f();
        });
  }),
  [payExamine.examine]: ({commit}, params) => new Promise(f => {
    commit(payExamine.examine, params);
    f();
  }),
}
const mutations = {
  [payExamine.getApplyList]:(state, data) => {
    state.currentTable = data;
  },
  [payExamine.getApplyListByStatus]:(state, data) => {
    state.auditing = data;
  },
  [payExamine.examine]: (state, {data, option}) => {
    state.data = [param(data, option)];
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
