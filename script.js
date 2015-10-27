
(function() {
   var app = new MatchedUpApp();
   app.init();
   document.querySelector(".btn-gray").addEventListener("click", function(){
   	app.next();
   });
   document.querySelector(".btn-green").addEventListener("click", function(){
   	app.match();
   });
})();


/**
 * Constructor function to initialize the MatchedUpApp instance.
 */


function MatchedUpApp () {
  this.candidates = [
		{
			name: 'Zoe',
			age: '28',
			imgLarge: 'http://placehold.it/280x280/ee8',
			imgSmall: 'http://placehold.it/140x140/ee8'
		},
		{
			name: 'Bella',
			age: '25',
			imgLarge: 'http://placehold.it/280x280/8ee',
			imgSmall: 'http://placehold.it/140x140/8ee'
		},
		{
			name: 'Linda',
			age: '27',
			imgLarge: 'http://placehold.it/280x280/e8e',
			imgSmall: 'http://placehold.it/140x140/e8e'
		},
		{
			name: 'Darla',
			age: '32',
			imgLarge: 'http://placehold.it/280x280/88e',
			imgSmall: 'http://placehold.it/140x140/88e'
		},
		{
			name: 'Amanda',
			age: '31',
			imgLarge: 'http://placehold.it/280x280/e88',
			imgSmall: 'http://placehold.it/140x140/e88'
		}
	];
	this.matchData = [];
	this.moveCounter = 0;
	this.init = function () { 
		this.setData(this.moveCounter);
		//this.moveCounter++;
	};

	this.next = function () { 
	  this.moveCounter++;
	  if (this.moveCounter < this.candidates.length) {
	  	this.setData(this.moveCounter);
	  } else {
	  	// disable next button
	  }
	  
	};

	this.match = function() {

		if (this.matchData.indexOf(this.moveCounter )< 0) {
			this.matchData.push(this.moveCounter);
			var counter = this.matchData.length;
		    document.querySelector(".js-match").innerHTML = counter;
			document.querySelector(".js-sm-match").innerHTML =counter;
	        this.setImage(this.candidates[this.moveCounter].imgSmall, ".js-matched-image");
		}
	      
	};

	this.updateData = function(data) {
	  
		document.querySelector(".js-head-name").innerHTML = data.name;
		document.querySelector(".js-name").innerHTML = data.name;
		document.querySelector(".js-move").innerHTML = this.moveCounter+1;
		document.querySelector(".js-sm-move").innerHTML = this.moveCounter+1;
	};

	this.setData = function(index) {
		
	  	var data = this.candidates[index];
		this.setImage(data.imgLarge, ".primary-image");
		this.updateData(data);
		if (index < this.candidates.length-1) {
	  		var nextData = this.candidates[index+1];
	  		this.setImage (nextData.imgSmall, ".js-next-img");
		} else {
			this.setImage ("", ".js-next-img");
		}
		
	};

	this.setImage = function(imgURL,selector) {
	  document.querySelector(selector).style.backgroundImage = "url("+imgURL+")";
	};
  
};



