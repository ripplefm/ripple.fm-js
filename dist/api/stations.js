"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _wrap = _interopRequireDefault(require("../utils/wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(api) {
  return {
    getStations: function getStations() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return (0, _wrap.default)(api.get('/stations', {
        params: {
          page: page,
          limit: limit
        }
      }));
    },
    getStation: function getStation(slug) {
      return (0, _wrap.default)(api.get("/stations/".concat(slug)));
    },
    createStation: function createStation(name, tags) {
      var playType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'public';
      return (0, _wrap.default)(api.post('/stations', {
        station: {
          name: name,
          play_type: playType,
          tags: tags
        }
      }));
    },
    followStation: function followStation(slug) {
      return (0, _wrap.default)(api.post("/stations/".concat(slug, "/followers")));
    },
    unfollowStation: function unfollowStation(slug) {
      return (0, _wrap.default)(api.delete("/stations/".concat(slug, "/followers")));
    }
  };
}