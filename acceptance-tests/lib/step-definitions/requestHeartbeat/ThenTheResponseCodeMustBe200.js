'use strict';

require('chai').should();

module.exports = function () {

  this.Then(/^the response code must be 200$/, function (done) {
      const _this = this;

      let requestHeartbeatResponse = _this.getValue('requestHeartbeatResponse');

      requestHeartbeatResponse.statusCode.should.equal(200);

      done();
    });

};
