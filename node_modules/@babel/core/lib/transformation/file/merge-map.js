"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeSourceMap;

function _remapping() {
  const data = require("@ampproject/remapping");

  _remapping = function () {
    return data;
  };

  return data;
}

function mergeSourceMap(inputMap, map, source) {
  let found = false;

  const result = _remapping()(rootless(map), (s, ctx) => {
    if (s === source && !found) {
      found = true;
      ctx.source = "";
      return rootless(inputMap);
    }

    return null;
  });

  if (typeof inputMap.sourceRoot === "string") {
    result.sourceRoot = inputMap.sourceRoot;
  }

  return result;
}

function rootless(map) {
  return Object.assign({}, map, {
    sourceRoot: null
  });
}