const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { expect } = require('code');

lab.test('retorno da soma de 1 + 1 deve ser 2', (done) => {
    expect(soma(1,1)).to.equal(2);
    done();
});
