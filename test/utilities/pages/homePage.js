'use strict';
var HomePage= function(){

};
HomePage.prototype= Object.create({},{
    //Create Boards
    boardsButton: {get: function(){return element(by.xpath('//*[@id="header"]/div[1]/a'));}},    
    createBoard: {get: function(){return element(by.css('[class="quiet-button js-add-board"]'));}},
    boardTitle: {get: function(){return element(by.id('boardNewTitle'));}},
    changePrivacy: {get: function(){return element(by.css('[class="js-change-vis"]'));}},
    privatePrivacy: {get: function(){return element.all(by.css('[class="js-select light-hover"]')).get(0);}},
    publicPrivacy: {get: function(){return element.all(by.css('[class="js-select light-hover"]')).get(1);}},
    createButton: {get: function(){return element(by.css('[value="Create"]'));}},

    //Add lists
    addListName: {get: function(){return element(by.css('[class="list-name-input"]'));}},
    saveButton: {get: function(){return element(by.css('[value="Save"]'));}},
    editListName:{get: function(){return element(by.css('[aria-label="My List"]'));}},

    //Add cards    
    addCard: {get: function(){return element(by.css('[class="open-card-composer js-open-card-composer"]'));}},
    addCardName: {get: function(){return element(by.css('[class="list-card-composer-textarea js-card-title"]'));}},
    addButton: {get: function(){return element(by.css('[value="Add"]'));}},       
    editCard: {get: function(){return element(by.css('[class="list-card-details"]'));}},
    moveCardButton: {get: function(){return element(by.css('[class="button-link js-move-card"]'));}},
    selectList:{value: function (type) { return element(by.css('[class="js-select-list"]')).$$('option').get(type);}},
    moveButton: {get: function(){return element(by.css('[value="Move"]'));}},
    closeWindow: {get: function(){return element(by.css('[class="icon-lg icon-close dialog-close-button js-close-window"]'));}},    

    //Favourite Borad    
    starIcon: {get: function(){return element(by.css('[class="icon-sm icon-star board-header-btn-icon"]'));}},
    starBoard:{get: function(){return element(by.css('[aria-label="Star or Unstar Board"]'));}},    

    //Change the background    
    changeBackground: {get: function(){return element(by.css('[class="board-menu-navigation-item-link js-change-background"]'));}},
    colors:{get: function(){return element(by.xpath('//*[@id="content"]/div/div[2]/div/div/div[2]/div/div[1]/div[1]'));}},
    selectColor:{get: function(){return element(by.xpath('//*[@id="content"]/div/div[2]/div/div/div[2]/div/div/div[4]/div'));}},
    backButton:{get: function(){return element(by.css('[title="Go back."]'));}},

    //Adding Members    
    inviteMember: {get: function(){return element(by.css('[class="button-link mod-full js-simple-add-members js-open-manage-board-members"]'));}},
    enterMember: {get: function(){return element(by.css('[class="js-search-input js-autofocus"]'));}},
    selectMember:{get: function(){return element(by.css('[title="Srishti Aggarwal (srishti1610)"]'));}},
    closeInvite:{get: function(){return element(by.css('[class="pop-over-header-close-btn icon-sm icon-close"]'));}},

    //Activity update    
    activityChange: {get: function(){return element.all(by.css('[class="phenom mod-attachment-type"]')).get(0);}},


});
module.exports= HomePage;
