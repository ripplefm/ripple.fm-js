"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _oauth2Clients = _interopRequireDefault(require("./oauth2-clients"));

var _users = _interopRequireDefault(require("./users"));

var _stations = _interopRequireDefault(require("./stations"));

var _playlists = _interopRequireDefault(require("./playlists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(api, config) {
  var endpoints = {};
  Object.assign(endpoints, (0, _oauth2Clients.default)(api, config));
  Object.assign(endpoints, (0, _users.default)(api, config));
  Object.assign(endpoints, (0, _stations.default)(api));
  Object.assign(endpoints, (0, _playlists.default)(api));
  return endpoints;
}