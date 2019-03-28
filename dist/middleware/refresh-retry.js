"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("core-js/modules/es6.promise");

// Run when a request fails with a 401
// will attempt to refresh the users access token
// if failed to refresh, original error will be thrown
function _default(onExpire, api) {
  return function (err) {
    return new Promise(function (resolve, reject) {
      var response = err.response;
      var headers = response.config.headers;

      if (response.status === 401 && headers.Authorization) {
        var newToken = await onExpire();
        response.config.headers.Authorization = "Bearer ".concat(newToken);
        api.defaults.headers.Authorization = "Bearer ".concat(newToken);
        api.request(response.config).then(function (res) {
          return resolve(res);
        }).catch(function (_) {
          return reject(err);
        });
      }
    });
  };
}