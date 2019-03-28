"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.promise");

var wrap = function wrap(promise) {
  return new Promise(function (resolve, reject) {
    promise.then(function (res) {
      return resolve(res.data);
    }).catch(function (err) {
      if (err && err.response && err.response.data) {
        reject({
          error: err.response.data.error,
          status: err.response.status
        });
      } else {
        reject({
          error: err
        });
      }
    });
  });
};

var _default = wrap;
exports.default = _default;