// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

    var select = document.getElementById("planets");

  for (var i = 0; i < planets.length; i++) {
      var option = document.createElement('option');
      var planetName = document.createTextNode(planets[i][0])
        option.appendChild(planetName)
        option.setAttribute('value', planets[i][0])
        select.appendChild(option)
  }

    function calculateWeight() {

       var earthWeight = document.getElementById("user-weight").value;
       var planetName = document.getElementById("planets").value;
       var calculateWeight = 0;

        planets.forEach(function(planet) {
            if (planet[0] === planetName) {
                calculateWeight = earthWeight * planet[1];
           }
       })

       var output = document.getElementById('output');

       output.innerText = 'If you were on ' + planetName + ', you would weigh ' + calculateWeight + 'lbs!';
       return 0;
  }
//create a function that responds when the user clicks on the button.
document.getElementById('calculate-button').addEventListener('click', calculateWeight);
