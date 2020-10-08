"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModule = void 0;
var UserModule = {
  namespaced: true,
  state: {
    user: null
  },
  // Mutations are functions that affect the STATE.
  mutations: {
    SET_USER: function SET_USER(state, user) {
      state.user = user;
    }
  },
  // Actions are functions that you call throughout your application that call mutations.
  actions: {
    setUser: function setUser(_ref, user) {
      var commit = _ref.commit;
      commit('SET_USER', user);
    }
  },
  modules: {}
};
exports.UserModule = UserModule;