import { createStore } from 'vuex'

import permission from './modules/permission'
import app from './modules/app'
import user from './modules/user'

import getters from './getters'

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {
  },
  modules: {
    permission,
    app,
    user
  },
  getters
})
