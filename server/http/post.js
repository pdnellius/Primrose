﻿var request = require("./request");
module.exports = function (type, url, options) {
  return request("POST", type, url, options);
};