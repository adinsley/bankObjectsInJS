var imported = require('./bank');
var Bank = imported.bank;
var Account = imported.account;

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('assert', function(){
  //Bank creating correctly//
  it('is bank name Rosyth Royal', function(){
    var rosyth = new Bank('Rosyth Royal')
    assert.equal('Rosyth Royal', rosyth.name);
    assert.deepEqual([], rosyth.accounts);
  });
//Can add account to bank//
  it('can I add an account to bank and does account have name', function(){
    var rosyth = new Bank('Rosyth Royal')
    var account1 = new Account("Insley", "Student");
    rosyth.add_account(account1);
    assert.equal("Insley", account1.name);
    assert.equal(0, account1.cash);
    assert.deepEqual([account1], rosyth.accounts);
  });
  it('can I get it to return the correct account', function(){
    var rosyth = new Bank('Rosyth Royal')
    var account1 = new Account("Insley", "Student");
    var account2 = new Account("Bobbins", "Business")
    rosyth.add_account(account1);
    rosyth.add_account(account2);
    assert.equal("Insley", account1.name);
    assert.equal("Bobbins", account2.name);
    assert.deepEqual(account1, rosyth.findAccount("Insley"));
  });
  })