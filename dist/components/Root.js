"use strict";

require("6to5/polyfill");var Promise = (global || window).Promise = require("lodash-next").Promise;var __DEV__ = (process.env.NODE_ENV !== "production");var __PROD__ = !__DEV__;var __BROWSER__ = (typeof window === "object");var __NODE__ = !__BROWSER__;var R = require("react-nexus");
var React = R.React;
var styles = require("../styles");
var data = require("../data");

var Vote = React.createClass({ displayName: "Vote",
  mixins: [R.Component.Mixin],

  onVote: function () {
    this.dispatch("uplink://vote", {
      talkID: this.props.talkID,
      quality: this.props.quality });
  },

  render: function () {
    return (React.createElement("button", { onClick: this.onVote }, this.props.quality));
  }
});

var Root = React.createClass({ displayName: "Root",
  mixins: [R.Root.Mixin],

  getFluxStoreSubscriptions: function () {
    return {
      votes: "uplink://votes" };
  },

  render: function () {
    var _this = this;
    return (React.createElement("div", { className: "Root" }, Object.keys(data.talks).map(function (talkID) {
      return (_this.state.votes[talkID] && React.createElement("div", null, React.createElement(Vote, { quality: "bad", talkID: talkID }), " (", _this.state.votes[talkID].bad, ") /", " ", React.createElement(Vote, { quality: "neutral", talkID: talkID }), " (", _this.state.votes[talkID].neutral, ") /", " ", React.createElement(Vote, { quality: "good", talkID: talkID }), " (", _this.state.votes[talkID].good, "):", " ", data.talks[talkID].title));
    })));
  },

  statics: {
    styles: {
      "html, body": {
        color: styles.colors.Text,
        fontFamily: styles.fonts.Roboto },

      "a, a:hover, a:visited, a:active": {
        textDecoration: "none" },

      a: {
        color: styles.colors.Link },

      "a:hover": {
        color: styles.colors.LinkHover },

      "a:active": {
        color: styles.colors.LinkActive } } } });

module.exports = Root;