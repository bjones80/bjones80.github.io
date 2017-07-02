
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}

function fetchShips() {
    var url = "//swapi.co/api/starships/";
    getJSON(url).then(function (data) {
        //console.log(data);
        var results = data.results;

        var shipListElement = document.getElementById('shiplist');

        shipListElement.innerHTML = "";

        results.forEach(function(ship){
            // console.log(ship);

        //create elements for list...li and a

        var listItem = document.createElement('li');
        var link = document.createElement('a');

        //set herf attribute to the URL of the ship

        link.setAttribute('href', ship.url);
        link.addEventListener('click', function(event){
            event.preventDefault();
            getShipDetails(ship.url);
        })

        //set the contents of the link element to the name of the ship

        link.innerHTML = ship.name;

        // add the link to the list item

        listItem.appendChild(link);

        //and the list item to the list

        shipListElement.appendChild(listItem);
    });
        //PART 2
        //get all of our new list items hint: querySelectorAll

        //loop through each of them

            //attach a click event listener

                //when clicked the default link behavior should be stopped, and the ship details
               // function should be called...passing the value of the href attribute in


        //Part 3
        //set prev and next links
    });
}

function getShipDetails(url) {
    //call getJSON functions for the provieded url
    getJSON(url).then(function(data) {
        console.log(data);
    //with the results populate the elements in the #detailsbox
    });
}

fetchShips();

// Lynnette, Cory, Casey
