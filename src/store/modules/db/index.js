import Vue from 'vue';
import _ from 'loadash';
import moment from 'moment';

import { db } from 'store/mutation-type.js';
import getters from 'store/modules/db/getters.js';
import { bundleConf } from 'config/index.js';
import {
  select
} from 'api/db.js';

const orderById = item => item.id ? -item.id  : 0;
const groupByKeyChain = keys => item => keys.map(key => (item[key] || '-')).join('$$$');
const newJob = (data, isEditingWholeItem) => ({
  project_name: data.project_name || 'jupiter',
  job_type: data.job_type || 'ranking',
  model_type: data.model_type || 'RandomForest',
  source_name: data.source_name || 'tutuanna',
  modified_time: data.modified_time || moment().format("YYYY-MM-DD"),
  create_time: data.create_time || moment().format("YYYY-MM-DD"),
  modified_by: data.modified_by || 'apollo',
  created_by: data.created_by || 'apollo',
  params: [],
  isEditingWholeItem
});

const state = {
  bundle: bundleConf.bundle,
  currentTables: {},
  data: {}
};

const actions = {
  [db.getTableInfo]: ({ commit }, bundleName) => new Promise(f => {
    commit(db.getTableInfo, bundleName);
    f();
  }),
  [db.fetchTableData]: ({ commit }, name) => {
    select(null, `/${name}`).then(data => {
      commit(db.fetchTableData, { name, data });
    })
  },
  [db.resetJobConf]: ({ commit }, params) => new Promise(f => {
    commit(db.resetJobConf, params);
    f();
  }),
}
const mutations = {
  [db.getTableInfo]: (state, bundleName) => {
    state.currentTables = state.bundle.find(item => item.name === bundleName);
  },
  [db.fetchTableData]: (state, { name, data }) => {
    let list = _.sortBy(data, orderById);

    // job_conf table need to Group By
    if('job_configuration' === name) {
      const { keys2groupBy, keys2combine } = bundleConf.job_conf;

      const groups = _.groupBy(list, groupByKeyChain(keys2groupBy));
      list = Object.keys(groups).map(combineKey => {
        const group = groups[combineKey];
        const item = group[0];
        const combineItem = {};

        [].concat(keys2groupBy).concat(keys2combine).forEach(key => {
          combineItem[key] = item[key];
        });
        combineItem.params = group;
        return combineItem;
      });
    }
    
    Vue.set(state.data, name, list);
  },
  [db.resetJobConf]: (state, { type, data = {}, index }) => {
    console.log('type', type);
    if('new_job' === type) {
      // if isNotEditingWholeItem
      if(state.data.job_configuration[0].isEditingWholeItem !== true ) {
        state.data.job_configuration = [ newJob(data, true) ].concat(state.data.job_configuration);
        console.log('job_conf', state.data.job_configuration)
      }
    } else if('new_param' === type) {
      const new_item = newJob(data, false);
      delete new_item.params
      data.params = data.params.concat(new_item);
    } else if('delete_param' === type) {
      data.params.splice(index, 1);
    } else if('set_param' === type) {
      state.data.job_configuration[0].params = data;
      console.log('new', state.data.job_configuration)
    }
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};