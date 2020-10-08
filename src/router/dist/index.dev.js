"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _store = _interopRequireDefault(require("../store"));

var _Home = _interopRequireDefault(require("../views/Home"));

var _UserProfile = _interopRequireDefault(require("../views/UserProfile"));

var _Admin = _interopRequireDefault(require("../views/Admin"));

var _users = require("../assets/users");

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
  component: _Admin["default"],
  meta: {
    requiredAdmin: true
  }
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
router.beforeEach(function _callee(to, from, next) {
  var user, isAdmin, requiredAdmin;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user = _store["default"].state.User.user;

          if (user) {
            _context.next = 4;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(_store["default"].dispatch('User/setUser', _users.users[0]));

        case 4:
          isAdmin = true;
          requiredAdmin = to.matched.some(function (record) {
            return record.meta.requiredAdmin;
          });
          if (requiredAdmin && !isAdmin) next({
            name: 'Home'
          });else next();

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
var _default = router;
exports["default"] = _default;