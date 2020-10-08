"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _User = require("./User");

var _default = (0, _vuex.createStore)({
  state: {},
  // Mutations are functions that affect the STATE.
  mutations: {},
  // Actions are functions that you call throughout your application that call mutations.
  actions: {},
  modules: {
    User: _User.UserModule
  }
});

exports["default"] = _default;