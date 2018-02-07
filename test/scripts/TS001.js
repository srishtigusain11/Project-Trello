//This test script covers login, create a new board with public visiblity, create a list, add cards to the list, move a card from one list to other, change background, add to favourite, add members, verify activity log.
'use strict';
var Application = require ('../utilities/function.js')
describe('TS001', function() {
	
	var application= new Application();
	it('Should Launch URL',function() {
		application.launchUrl();
	});

	it('Login to the application', function() {
		application.login();
	});

	it('Create a board with public visiblity', function() {
		application.createBoard('My New Board');
	});

	it('Create a list', function() {
		application.addListDetails('My List');		
	});

	it('Add a card', function() {
		application.addCard();
		application.addCardDetails('My Card');
		application.addCardDetails('Number2 Card');
		application.addCardDetails('Number3 Card');		
	});

	it('Create a New list', function() {
		application.addListDetails('My New List');		
	});

	it('Move the card from old list to new list', function() {
		application.editCard();
		application.moveCard();		
		application.closeWindow();
	});

	it('Makes the board favourite', function() {
		application.favouriteBoard();		
	});	

	it('Change the board color', function() {
		application.changeBackground();		
	});	

	it('Verify change in status', function() {
		application.verifyAcitivity();		
	});		

	it('Add member to the board', function() {
		application.addMember();		
	});		

});