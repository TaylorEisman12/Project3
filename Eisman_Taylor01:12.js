// Taylor Eisman
// SDI Project 3
// 01/12

alert("JavaScript works!");

var worker = "Henry";
var manager = "Walter";
var day = "Monday";
var minimumInventory = 2;
var maximumInventory = 5;

// JSON Data
var candy = {
    "shelf": {
      "sourCandy": {
          "worms" : {
        	"currentInventory": 4,
        	"color": "Orange"
      	}
      },
      "sweetCandy": {
      	"gummyBears": {
       		"currentInventory": 6,
        	"color": "Clear"
      	}
      }
    }
};

var openStore = function(day){
	if(day = "Monday"){
		console.log( worker + " needs to check the candy stock." );
	} else {
		console.log( worker + " does not need to restock the candy." );
	}
};

function updateInventory(property,inventory){
	
}

function getInventory(property){
	
}

function listInvetory(currentInvetory){
	for (x in currentInventory){
		console.log(currentInventory[x]);
	}
}

listInventory(candy);

var needToRestock = function(currentInventory,minimumInventory){
	if(currentInventory < minimumInventory){
		console.log( worker + " needs to add more candy.");
	}	
};


var restockCandy = function (currtentInventory) {
	
};


var workStatus = function (manager,maximumInventory){
	console.log(manager + " will be very upset with " + worker + " if he stocks more than " + maximumInventory + " pieces of each candy.");	
};


var inventoryChart = function (currrentInventory){
	console.log(currentInventory);
};
