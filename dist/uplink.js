"use strict";

require("6to5/polyfill");var Promise = (global || window).Promise = require("lodash-next").Promise;var __DEV__ = (process.env.NODE_ENV !== "production");var __PROD__ = !__DEV__;var __BROWSER__ = (typeof window === "object");var __NODE__ = !__BROWSER__;var R = require("react-nexus");
var _ = R._;
var cors = require("cors");
var express = require("express");
var UplinkSimpleServer = require("nexus-uplink-simple-server");
var data = require("./data");

module.exports = function () {
  var uplink = new UplinkSimpleServer({
    pid: _.guid("pid"),
    stores: ["/votes"],
    rooms: [],
    actions: ["/vote"],
    activityTimeout: 2000,
    app: express().use(cors()) });


  var votes = {};
  for (var talkID in data.talks) {
    votes[talkID] = {
      bad: 0,
      neutral: 0,
      good: 0
    };
  }

  function updateAll() {
    uplink.update({ path: "/votes", value: votes });
  }

  uplink.actions.on("/vote", function (_ref) {
    var guid = _ref.guid;
    var talkID = _ref.talkID;
    var quality = _ref.quality;
    votes[talkID].should.be.ok;
    ["bad", "neutral", "good"].should.containEql(quality);
    votes[talkID][quality] += 1;
    updateAll();
  });

  updateAll();

  return uplink;
};