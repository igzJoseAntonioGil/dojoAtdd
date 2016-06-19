'use strict';

const createCheckout = require('../../../src/checkout/rest/createCheckout'),
    sinon = require('sinon');

require('chai').should();

describe('Create a new checkout', () => {

    it('Should return 201 status code when create a new checkout', done => {
        const request = createRequest(),
            response = createResponse();

        const responseMock = sinon.mock(response);

        responseMock.expects('send').withArgs(201, sinon.match.any);
        createCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });

    function createRequest() {
        return {};
    }

    function createResponse() {
        return {
            send: () => {
            }
        };
    }

});