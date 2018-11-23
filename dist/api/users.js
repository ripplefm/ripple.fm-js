"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _axios = _interopRequireDefault(require("axios"));

var _wrap = _interopRequireDefault(require("../utils/wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(api, _ref) {
  var authURL = _ref.authURL;
  return {
    getCurrentUser: function getCurrentUser() {
      return (0, _wrap.default)(api.get("".concat(authURL, "/api/users/me")));
    }
  };
}