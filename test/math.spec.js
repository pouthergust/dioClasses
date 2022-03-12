const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function() {
    // hooks before, beforeEach, after, afterEach
    beforeEach(function() {
        value = 0;
    });
    // it.skip permite pular a execução desse teste
    it('Sum two numbers', function() {
        const math = new Math();

        /* try {
        assert.equal(math.sum(5, 5), 10);
        } catch (err) {
            console.log(err);
        } */
        expect(math.sum(value, 5)).to.equal(5);
    });
    // it.only permite executar apenas esse teste
    it('Multiply two numbers', function(done) {
        const math = new Math();
        const obj = {
            name: 'Gabriel'
        };
        this.timeout(3000);

        math.multiply(5, 5, value => {
            expect(value).to.equal(25);
            // assert.equal(value, 25);
            done();
        });
        expect(obj).to.have.property('name').equal('Gabriel')
    });

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = { 
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);
        
        // expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][1]).to.equal(10);
    })
});