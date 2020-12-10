"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("./plugins/element.js");

require("./assets/css/global.css");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//导入全局样式表
_axios["default"].defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/';

_axios["default"].interceptors.request.use(function (config) {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
}); // axios.default.baseURL ='http://timemeetyou.com:8889/api/private/v1/'


_vue["default"].prototype.$http = _axios["default"];
new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');