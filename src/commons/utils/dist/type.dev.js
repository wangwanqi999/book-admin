"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToString = void 0;

var getToString = function getToString(param) {
  console.log(param);
  return param ? param.toString() : '';
};

exports.getToString = getToString;