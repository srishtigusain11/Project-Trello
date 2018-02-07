'use strict';
var LoginPage= function(){

};
LoginPage.prototype= Object.create({},{
    loginButton: {get: function(){ return element(by.xpath('/html/body/div[1]/div[2]/a[1]'));}},
    userName: {get: function(){ return element(by.id('user'));}},
    password: {get: function(){ return element(by.id('password'));}},
    login: {get: function(){ return element(by.id('login'));}},

});
module.exports= LoginPage;
