// Create a tested OO version for our Bank

// Bank should be able to:

var _ = require('lodash')
// Find account by name owner name.
// Find the largest account.
// Find the total account value.
// Find the average value.
// Find the total value for an account type.
var Bank = function(name) {
  this.name = name;
  this.deposits = 0;
  this.accounts = []
  
}

Bank.prototype ={
  add_account: function(account){
    this.accounts.push(account);
  },
  findAccount: function(accountName){
    var requiredAccount = _.find(this.accounts, function(account) { return account.name === accountName;})
    return requiredAccount
  }
}
 var Account = function(name, type){
  this.name = name;
  this.type = type;
  this.cash = 0
 }






module.exports = {
  bank:Bank,
  account:Account
}