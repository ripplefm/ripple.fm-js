"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _refreshRetry = _interopRequireDefault(require("./middleware/refresh-retry"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = function create() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    access: undefined,
    baseURL: 'https://api.ripple.fm/',
    authURL: 'https://accounts.ripple.fm',
    onAccessTokenExpire: undefined
  };
  var access = args.access,
      baseURL = args.baseURL,
      authURL = args.authURL,
      onAccessTokenExpire = args.onAccessTokenExpire;
  var headers = {};

  if (access) {
    headers.Authorization = "Bearer ".concat(access);
  }

  var api = _axios.default.create({
    baseURL: baseURL,
    headers: headers
  });

  api.interceptors.response.use(function (res) {
    return res;
  }, (0, _refreshRetry.default)(onAccessTokenExpire, api));
  return (0, _api.default)(api, {
    authURL: authURL
  });
};

var _default = {
  create: create
};
exports.default = _default;