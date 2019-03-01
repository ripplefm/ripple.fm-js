"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _wrap = _interopRequireDefault(require("../utils/wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(api) {
  return {
    createPlaylist: function createPlaylist(name) {
      var visibility = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
      return (0, _wrap.default)(api.post('/playlists', {
        name: name,
        visibility: visibility
      }));
    },
    deletePlaylist: function deletePlaylist(slug) {
      return (0, _wrap.default)(api.delete("/playlists/".concat(slug)));
    },
    addTrackToPlaylist: function addTrackToPlaylist(slug, url) {
      return (0, _wrap.default)(api.post("/playlists/".concat(slug), {
        url: url
      }));
    },
    deleteTrackFromPlaylist: function deleteTrackFromPlaylist(slug, trackId) {
      return (0, _wrap.default)(api.delete("/playlists/".concat(slug, "/").concat(trackId)));
    },
    followPlaylist: function followPlaylist(slug) {
      return (0, _wrap.default)(api.post("/playlists/".concat(slug, "/followers")));
    },
    unfollowPlaylist: function unfollowPlaylist(slug) {
      return (0, _wrap.default)(api.delete("/playlists/".concat(slug, "/followers")));
    }
  };
}