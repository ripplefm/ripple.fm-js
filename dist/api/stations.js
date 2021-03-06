"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.regexp.replace");

var _wrap = _interopRequireDefault(require("../utils/wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Socket;

if (typeof window === 'undefined') {
  Socket = require('phoenix-channels').Socket;
} else {
  Socket = require('phoenix').Socket;
}

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
      var visibility = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'public';
      return (0, _wrap.default)(api.post('/stations', {
        station: {
          name: name,
          visibility: visibility,
          tags: tags
        }
      }));
    },
    followStation: function followStation(slug) {
      return (0, _wrap.default)(api.post("/stations/".concat(slug, "/followers")));
    },
    unfollowStation: function unfollowStation(slug) {
      return (0, _wrap.default)(api.delete("/stations/".concat(slug, "/followers")));
    },
    joinStation: function joinStation(slug) {
      var _api$defaults = api.defaults,
          baseURL = _api$defaults.baseURL,
          headers = _api$defaults.headers;
      var socket;

      if (headers.Authorization) {
        socket = new Socket(baseURL.replace('http', 'ws') + '/socket', {
          params: {
            token: headers.Authorization.substring('Bearer '.length)
          }
        });
      } else {
        socket = new Socket(baseURL.replace('http', 'ws') + '/socket');
      }

      socket.connect();
      var channel = socket.channel("stations:".concat(slug));
      return new Promise(function (resolve, reject) {
        channel.join().receive('ok', function () {
          return resolve({
            on: channel.on.bind(channel),
            push: channel.push.bind(channel),
            off: channel.off.bind(channel),
            leave: channel.leave.bind(channel),
            channel: channel,
            socket: socket
          });
        }).receive('error', function (_ref) {
          var reason = _ref.reason;
          return reject(reason);
        });
      });
    }
  };
}