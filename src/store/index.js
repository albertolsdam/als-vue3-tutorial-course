import { createStore } from 'vuex'
import { UserModule } from './User' 

export default createStore({
  state: {

  },

  // Mutations are functions that affect the STATE.
  mutations: {

  },

  // Actions are functions that you call throughout your application that call mutations.
  actions: {

  },

  modules: {
    User: UserModule
  }
})
