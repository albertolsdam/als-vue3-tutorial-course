"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _UserProfile = _interopRequireDefault(require("../views/UserProfile.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/user/:userId',
  name: 'UserProfile',
  component: _UserProfile["default"]
}, {
  path: '/admin',
  name: 'Admin',
  component: 'Admin',
  meta: {
    requiredAdmin: true
  }
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
router.beforeEach(function _callee(to, from, next) {
  var isAdmin, requiredAdmin;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          isAdmin = true;
          requiredAdmin = to.matched.some(function (record) {
            return record.meta.requiredAdmin;
          });
          if (requiredAdmin && !isAdmin) next({
            name: 'Home'
          });else next();

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
var _default = router;
exports["default"] = _default;