'use strict';

const requestPromise = require('request-promise');

module.exports = function () {

  this.When(/^I request the heartbeat$/, function (code, done) {
      const _this = this;
      const options = {
        method: 'GET',
        uri: 'http://localhost:3000/api/heartbeat',
        resolveWithFullResponse: true,
      };

      requestPromise(options)
        .then(function (response) {
            _this.publishValue('requestHeartbeatResponse', response);
            done();
          })
          .catch(function (err) {
            done(err);
          });
    });
};
