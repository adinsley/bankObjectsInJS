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
  //find account by owner name
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
  //Add a deposit to an account//
    it('can I add a deposit to an account of', function(){
      var rosyth = new Bank('Rosyth Royal')
      var account1 = new Account("Insley", "Student");
      rosyth.add_account(account1);
      account1.deposit(200);

      assert.equal("Insley", account1.name);
      assert.equal(200, account1.cash);
      
  });
    //Take money out of account//
    it('can I add a take money out of an account ', function(){
      var rosyth = new Bank('Rosyth Royal')
      var account1 = new Account("Insley", "Student");
      rosyth.add_account(account1);
      account1.deposit(200);
      account1.withdrawal(50);
      assert.equal("Insley", account1.name);
      assert.equal(150, account1.cash);
        
    });
    //Get it to return largest account//
    it('can I return the account with the largest cash total ', function(){
      var rosyth = new Bank('Rosyth Royal')
      var account1 = new Account("Insley", "Student");
      var account2 = new Account("Carrie", "Personal");
      var account3 = new Account("Cora", "Business");

      rosyth.add_account(account1);
      rosyth.add_account(account2);
      rosyth.add_account(account3);
      
      account1.deposit(34);
      account2.deposit(300);
      account3.deposit(100);
      
      assert.deepEqual(account2, rosyth.findLargest());
    });
//Return the total deposits//
  it('Can I get it to return the total deposits ', function(){
    var rosyth = new Bank('Rosyth Royal')
    var account1 = new Account("Insley", "Student");
    var account2 = new Account("Carrie", "Personal");
    var account3 = new Account("Cora", "Business");

    rosyth.add_account(account1);
    rosyth.add_account(account2);
    rosyth.add_account(account3);
    
    account1.deposit(34);
    account2.deposit(300);
    account3.deposit(100);

   
    
    assert.equal(434, rosyth.totalDeposits());
  });
//Work out an average //
it('Can I get it to return the average deposit ', function(){
  var rosyth = new Bank('Rosyth Royal')
  var account1 = new Account("Insley", "Student");
  var account2 = new Account("Carrie", "Personal");
  var account3 = new Account("Cora", "Business");

  rosyth.add_account(account1);
  rosyth.add_account(account2);
  rosyth.add_account(account3);
  
  account1.deposit(50);
  account2.deposit(100);
  account3.deposit(150);

 
  
  assert.equal(100, rosyth.averageDeposit());
});
//Return the total value for an account type//
it('Can I get it to return the amount for a particular account ', function(){
  var rosyth = new Bank('Rosyth Royal')
  var account1 = new Account("Insley", "Student");
  var account2 = new Account("Carrie", "Personal");
  var account3 = new Account("Cora", "Student");

  rosyth.add_account(account1);
  rosyth.add_account(account2);
  rosyth.add_account(account3);
  
  account1.deposit(50);
  account2.deposit(100);
  account3.deposit(150);

 
  
  assert.equal(100, rosyth.totalOfType("Personal"));
});

})