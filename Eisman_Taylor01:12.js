// Taylor Eisman
// SDI Project 3
// 01/12

alert("JavaScript works!");

var worker = "Henry";
var manager = "Walter";
var day = "Monday";
var sourCandy = 5;
var sweetCandy = 5;
var candyStocked = function(sourCandy,sweetCandy){
		sourCandy + sweetCandy;
};
		;
var curentInventory = function(candySold){
	candyStocked - candySold;
	
	return;
};

//sold 3 pieces

// JSON Data
var candy = {
    "shelf": {
      "sourCandy": {
          "worms" : {
        	"color": "Orange"
      	}
      },
      "sweetCandy": {
      	"gummyBears": {
        	"color": "Clear"
      	}
      }
    },
    getInventory:function(candyType, candyName){
    	return shelf.candyType.candyName.currentInventory;
    }
};

var checkInventory = function(day){
	if(day = "Monday"){
		needToCheck = true;
	} else {
		needToCheck = false; 
	  }
	  	return needToRestock;
};

var listInvetory = function(currentInvetory){
	for (x in currentInventory){
		console.log(currentInventory[x]);
	}
}

listInventory(candy);

var restockDetails = function(needToRestock){
	if(needToRestock = true){
		console.log( worker + " needs to add more candy.");
	}	else{
			console.log("It looks like the candy is fully stocked!");
	}	
};


var restockCandy = function (candy) {
	for(i=0; i <= candy.shelf.worms.currnetInventory; i++){
	}
		while (currentInventory <= minimumInventory){
		console.log("There is " + currentInventory + " pieces of candy you need more.");
		
		}
	}
	updateInventory(	
};


var workStatus = function (manager,maximumInventory){
	console.log(manager + " will be very upset with " + worker + " if he stocks more than " + maximumInventory + " pieces of each candy.");	
};


var inventoryChart = function (currrentInventory){
	console.log(currentInventory);
};
