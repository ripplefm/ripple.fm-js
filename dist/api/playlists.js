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
    deletePlaylist: function deletePlaylist(playlistId) {
      return (0, _wrap.default)(api.delete("/playlists/".concat(playlistId)));
    },
    addTrackToPlaylist: function addTrackToPlaylist(playlistId, url) {
      return (0, _wrap.default)(api.post("/playlists/".concat(playlistId), {
        url: url
      }));
    },
    deleteTrackFromPlaylist: function deleteTrackFromPlaylist(playlistId, trackId) {
      return (0, _wrap.default)(api.delete("/playlists/".concat(playlistId, "/").concat(trackId)));
    },
    followPlaylist: function followPlaylist(playlistId) {
      return (0, _wrap.default)(api.post("/playlists/".concat(playlistId, "/followers")));
    },
    unfollowPlaylist: function unfollowPlaylist(playlistId) {
      return (0, _wrap.default)(api.delete("/playlists/".concat(playlistId, "/followers")));
    }
  };
}