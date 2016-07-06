'use strict';

const requestPromise = require('request-promise');

module.exports = function() {

    this.When(/^a supermarket clerk adds "([^"]*)" to the checkout$/, function(product, done) {
        const world = this;

        const options = {
            method: 'POST',
            uri: 'http://localhost:3000/api/checkouts/',
            json: {
                code: code
            },
            resolveWithFullResponse: true
        };
        
        let checkoutCreationResponse = world.getValue('checkoutCreationResponse').body;

        requestPromise(options)
            .then(function(response) {
                world.publishValue('checkoutCreationResponse', response);
                world.publishValue('code', code);
                done();
            })
            .catch(function(err) {
                done(err);
            });
    });
};
