alert("JavaScript works!");

var json = {
    "pets": {
      "bird": {
        "name": "Charley",
        "color": "Orange",
        "age": 4
      },
      "dog": {
        "name": "Bevo",
        "color": "Black",
        "age": 2
      },
      "snake": {
        "name": "Willy",
        "color": "Green",
        "age": 6
      },
      "cat": {
        "name": "Sin",
        "color": "Grey",
        "age": 1
      }
    } 
};

var handleData = function (json) {
    for (var i = 0; i < json.pets.length; i++){
        var pet = json.pets[i];
        console.log(" " + pet.animal + " " + pet.name + " ");
    };
};
handleData(jsonNew);