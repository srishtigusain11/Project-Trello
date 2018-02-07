'use strict';
var loginPageObject= require('./pages/loginPage.js');
var homePageObject= require('./pages/homePage.js');

var Application= function() {
  var app= this;
  var loginPage= new loginPageObject();
  var homePage= new homePageObject();

  // Launch the URL
  app.launchUrl= function(){
    browser.ignoreSynchronization= true;
    browser.get('https://trello.com');
    browser.driver.manage().window().maximize(); 
    browser.sleep(2000);
  };

  //Login to the application
  app.login= function(){
    loginPage.loginButton.click();    
    loginPage.userName.click().sendKeys('srishti110294@gmail.com');
    loginPage.password.click().sendKeys('123456789');
    loginPage.login.click();
    browser.sleep(6000);
  }; 

  //Create a new Board with Public Visiblity
  app.createBoard= function(boardName){   
    homePage.boardsButton.click();
    homePage.createBoard.click();
    homePage.boardTitle.click().sendKeys(boardName);
    homePage.changePrivacy.click();
    homePage.publicPrivacy.click(); //change privacy to public
    homePage.createButton.click();
    browser.sleep(4000);
  };

  //Create and edit a list
  app.addListDetails= function(listName){   
    homePage.addListName.click().sendKeys(listName);    
    homePage.saveButton.click();      
  };

  //Add card to the list
  app.addCard= function(){
    homePage.addCard.click();    
  };

  app.addCardDetails= function(cardName){
    homePage.addCardName.sendKeys(cardName);    
    homePage.addButton.click();   
    browser.sleep(5000);
  };

  app.editCard= function() {
    homePage.editCard.click();
  };

  //Move a card from one list to other
  app.moveCard= function() {
    homePage.moveCardButton.click();
    homePage.selectList(1).click();
    homePage.moveButton.click();
  };

  //Close Edit Board
  app.closeWindow= function() {
    homePage.closeWindow.click();
  };  

  //Makes a board favourite and checks for the star.
  app.favouriteBoard= function() {
    homePage.starIcon.click();
    expect(homePage.starBoard.getAttribute('class')).toContain('board-header-btn-enabled');
  };

  //Change and verify Background
  app.changeBackground= function() {
    homePage.changeBackground.click();
    homePage.colors.click();
    browser.sleep(4000);
    homePage.selectColor.click();    
    homePage.backButton.click();
    homePage.backButton.click();
  };

  //Add a member to the board
  app.addMember= function() {
    homePage.inviteMember.click();
    homePage.enterMember.click().sendKeys('Srishti');
    browser.sleep(3000);
    homePage.selectMember.click();   
    homePage.closeInvite.click(); 
  };

  //Verify Activity update after background change
  app.verifyAcitivity= function() {
    homePage.activityChange.getText().then(function(text){
      expect(text).toContain("moved My Card from My List to My New List");
    });    
  };
  

   
};
module.exports= function(){
  return new Application();
}