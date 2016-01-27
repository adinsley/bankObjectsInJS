// Create a tested OO version for our Bank

// Bank should be able to:

var _ = require('lodash')




// Find the total value for an account type.
var Bank = function(name) {
  this.name = name;
  this.accounts = []
  
}

Bank.prototype ={
  add_account: function(account){
    this.accounts.push(account);
  },
  findAccount: function(accountName){
    var requiredAccount = _.find(this.accounts, function(account) { return account.name === accountName;})
    return requiredAccount
  },
  findLargest: function(){
    var largest = 0;
    var account = [];
  for(account of this.accounts){
    if(account.cash > largest){
      largest = account.cash;
      largestAccount = account;
    }
   }
    return largestAccount;
  },
  totalDeposits:function(){
    var deposits = 0;
    for(account of this.accounts){
      deposits += account.cash;
    }
      return deposits
  },

  averageDeposit:function(){
    var length = this.accounts.length;
    var deposits = this.totalDeposits();
    var average = (deposits/length);
    return average
  },

  totalOfType:function(type){
    var deposits = 0;
    for(account of this.accounts){
      if(account.type === type){
        deposits += account.cash;
      }
    }
      return deposits;
  },
}



 var Account = function(name, type){
  this.name = name;
  this.type = type;
  this.cash = 0
 }

 Account.prototype= {
  deposit:function(amount){
    this.cash += amount;
  },
  withdrawal:function(amount){
    this.cash -= amount;
  }
 }
 



module.exports = {
  bank:Bank,
  account:Account
}