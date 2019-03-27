"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// To run when a request fails with a 401
// will attempt to refresh the users access token
// if failed to refresh, original error will be thrown
function _default(onExpire, api) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(err) {
        var response, _response$config, url, headers, newToken;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                response = err.response;
                _response$config = response.config, url = _response$config.url, headers = _response$config.headers;

                if (!(response.status === 401 && headers.Authorization)) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return onExpire();

              case 6:
                newToken = _context.sent;
                response.config.headers.Authorization = "Bearer ".concat(newToken);
                api.defaults.headers.Authorization = "Bearer ".concat(newToken);
                _context.next = 11;
                return api.request(response.config);

              case 11:
                return _context.abrupt("return", _context.sent);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                throw err;

              case 17:
                throw err;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 14]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}