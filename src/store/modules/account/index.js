import Vue from 'vue';
import _ from 'loadash';
import moment from 'moment';

import { account } from 'store/mutation-type.js';
import getters from 'store/modules/account/getters.js';
import { accountConf } from 'config/index.js';
import {
  getResourceInfo,
  getResourceNum,
  getApplyInfoById,
  getUser,
  getUserInfoById,
  getGrouplist,
  getGroupInfo,
  getdataSource,
  getincome
} from 'api/account.js';

const orderById = item => item.id ? -item.id  : 0;
const orderByUserid = item => item.user_id ? -item.user_id  : 0;
const groupByKeyChain = keys => item => keys.map(key => (item[key] || '-')).join('$$$');

const state = {
  Key:accountConf.displayKeys,
  colkeys:accountConf.colkeys,
  applyInfo:null,
  infoTable: null,
  numTable: null,
  userInfo:null,
  userInfoById:{},
  grouplist:null,
  gInfoLine:null,
  dataSouerceTable:null,
  income:null,
  data:{}
};

const actions = {
  [account.getResourceNum]: ({commit}) => new Promise(f => {
    getResourceNum().then(res =>{  
      let list = _.sortBy(res.data, orderById);
      commit( account.getResourceNum, list ); 
      f(); 
    });
  }),
  [account.getResourceInfo]: ({commit}) => new Promise(f => {
    getResourceInfo().then(res =>{  
      let list = _.sortBy(res.data, orderById);
      commit( account.getResourceInfo, list );  
      f();
    });
  }),
  [account.getUser]: ({commit}) => new Promise(f => {
    getUser().then(res =>{  
      let list = _.sortBy(res.data, orderById);
      commit( account.getUser, list );  
      f();
    });
  }),
  [account.getUserInfoById]: ({commit}, uid) => new Promise(f => {
    getUserInfoById(null, `/${uid}`).then(res =>{  
      commit(account.getUserInfoById, res.data);  
      f();
    });
  }),
  [account.getGroupInfo]: ({commit}, gId) => new Promise(f => {
    getGroupInfo(null, `/${gId}`).then(res =>{  
      let list = _.sortBy(res.data, orderById);
      commit(account.getGroupInfo, list);  
      f();
    });
  }),
  [account.getGrouplist]: ({commit}) => new Promise(f => {
    getGrouplist().then(res =>{  
      let list = _.sortBy(res.data, orderById);
      commit(account.getGrouplist, list);  
      f();
    });
  }),
  [account.getdataSourceInfo]: ({commit}) => new Promise(f => {
    getdataSource().then(res =>{  
      let list = _.sortBy(res.data, orderByUserid);
      commit(account.getdataSourceInfo, list); 
      f();
    });
  }),
  [account.getIncomeInfo]: ({commit}) => new Promise(f => {
    getincome().then(res =>{  
      let list = _.sortBy(res.data, orderById);
      commit(account.getIncomeInfo, list);  
      f();
    });
  }),
}
const mutations = {
  [account.getResourceNum]:(state, data) => {
    state.numTable = data;
  },
  [account.getResourceInfo]:(state, data) => {
    state.infoTable = data;
  },
  [account.getUser]:(state, data) => {
    state.userInfo = data;
  },
  [account.getUserInfoById]:(state, data) => {
    state.userInfoById = data;
  },
  [account.getGrouplist]:(state, data) => {
    state.grouplist = data;
  },
  [account.getGroupInfo]:(state, gId) => {
    state.gInfoLine = gId;
  },
  [account.getdataSourceInfo]:(state, data) => {
    state.dataSouerceTable = data;
  },
  [account.getIncomeInfo]:(state, data) => {
    state.income = data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
