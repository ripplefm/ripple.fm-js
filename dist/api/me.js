"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _wrap = _interopRequireDefault(require("../utils/wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(api) {
  return {
    getCreatedStations: function getCreatedStations() {
      return (0, _wrap.default)(api.get('/me/stations'));
    },
    getFollowedStations: function getFollowedStations() {
      return (0, _wrap.default)(api.get('/me/stations/following'));
    },
    getCreatedPlaylists: function getCreatedPlaylists() {
      return (0, _wrap.default)(api.get('/me/playlists'));
    },
    getFollowedPlaylists: function getFollowedPlaylists() {
      return (0, _wrap.default)(api.get('/me/playlists/following'));
    },
    isFollowingStation: function isFollowingStation(slug) {
      return (0, _wrap.default)(api.get("/me/stations/".concat(slug, "/following")));
    }
  };
}