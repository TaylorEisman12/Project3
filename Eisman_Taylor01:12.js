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

for (var key in json.pets) {
    var pet = json.pets[key];
    pet.age
};

var json2 = {
    "pets": [
        {
            "animal": "Bird",
            "name": "Charley",
            "color": "Orange",
            "age": 4
        },
           {
            "animal": "Dog",
            "name": "Bevo",
            "color": "Black",
            "age": 2
        },
           {
            "animal": "Snake",
            "name": "Willey",
            "color": "Green",
            "age": 6
        },
           {
            "animal": "Cat",
            "name": "Sin",
            "color": "Grey",
            "age": 1
        }
    ]
};