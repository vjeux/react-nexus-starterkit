const R = require('react-nexus');
const _ = R._;
const cors = require('cors');
const express = require('express');
const UplinkSimpleServer = require('nexus-uplink-simple-server');
const data = require('./data');

module.exports = () => {
  const uplink = new UplinkSimpleServer({
    pid: _.guid('pid'),
    stores: ['/votes'],
    rooms: [],
    actions: ['/vote'],
    activityTimeout: 2000,
    app: express().use(cors()),
  });


  let votes = {};
  for (let talkID in data.talks) {
    votes[talkID] = {
      bad: 0,
      neutral: 0,
      good: 0
    };
  }

  function updateAll() {
    uplink.update({ path: '/votes', value: votes });
  }

  uplink.actions.on('/vote', function({ guid, talkID, quality }) {
    votes[talkID].should.be.ok;
    ['bad', 'neutral', 'good'].should.containEql(quality);
    votes[talkID][quality] += 1;
    updateAll();
  });

  updateAll();

  return uplink;
};
