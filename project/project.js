function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myTemple() {
    document.getElementById("myDropT").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.droptm')) {

        var dropdowns = document.getElementsByClassName("dropdown-temple");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myThings() {
    document.getElementById("myDropTh").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropth')) {

        var dropdowns = document.getElementsByClassName("dropdown-things");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myAmusement() {
    document.getElementById("myDropA").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropam')) {

        var dropdowns = document.getElementsByClassName("dropdown-amusement");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function myNational() {
    document.getElementById("myDropN").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropna')) {

        var dropdowns = document.getElementsByClassName("dropdown-national");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myInternational() {
    document.getElementById("myDropI").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropin')) {

        var dropdowns = document.getElementsByClassName("dropdown-international");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}





function gallery(){
 getJSON("bucket_list.json").then(function( data ) {
        console.log('test');
        console.log(data);
    var items = [];
    var galleryElement = document.getElementById("amusement");

    data.amusement.forEach( function(val){
        console.log(val);
        //create li
        var listItem = document.createElement('li');
        //creaate img
        var img = document.createElement('img');
        //create description
        var name = document.createElement('p');
        //set src
        img.setAttribute('src', val.img);
        //append
        name.innerHTML = val.name;
        listItem.appendChild(img);
        listItem.appendChild(name);
        //list item to the list
        galleryElement.appendChild(listItem);
    });

     data.national.forEach( function(val){
         console.log(val);
         //create li
         var listItem = document.createElement('li');
         //creaate img
         var img = document.createElement('img');
         //create description
         var name = document.createElement('p');
         //set src
         img.setAttribute('src', val.img);
         //append
         name.innerHTML = val.name;
         listItem.appendChild(img);
         listItem.appendChild(name);
         //list item to the list
         galleryElement.appendChild(listItem);
     });

     data.international.forEach( function(val){
         console.log(val);
         //create li
         var listItem = document.createElement('li');
         //creaate img
         var img = document.createElement('img');
         //create description
         var name = document.createElement('p');
         //set src
         img.setAttribute('src', val.img);
         //append
         name.innerHTML = val.name;
         listItem.appendChild(img);
         listItem.appendChild(name);
         //list item to the list
         galleryElement.appendChild(listItem);
     });

     data.temples.forEach( function(val){
         console.log(val);
         //create li
         var listItem = document.createElement('li');
         //creaate img
         var img = document.createElement('img');
         //create description
         var name = document.createElement('p');
         //set src
         img.setAttribute('src', val.img);
         //append
         name.innerHTML = val.name;
         listItem.appendChild(img);
         listItem.appendChild(name);
         //list item to the list
         galleryElement.appendChild(listItem);
     });

     data.things.forEach( function(val){
         console.log(val);
         //create li
         var listItem = document.createElement('li');
         //creaate img
         var img = document.createElement('img');
         //create description
         var name = document.createElement('p');
         //set src
         img.setAttribute('src', val.img);
         //append
         name.innerHTML = val.name;
         listItem.appendChild(img);
         listItem.appendChild(name);
         //list item to the list
         galleryElement.appendChild(listItem);
     });



});
};

function travels(){
    getJSON("bucket_list.json").then(function( data ) {
        console.log('test');
        console.log(data);
        var items = [];
        var travelsElement = document.getElementById("amusement");
        var CompleteA=data.amusement.filter( function(val){
            return val.date != "";
        });
        var CompleteNa=data.national.filter( function(val){
            return val.date != "";
        });
        var CompleteTe=data.temples.filter( function(val){
            return val.date != "";
        });
        var CompleteTh=data.things.filter( function(val){
            return val.date != "";
        });
        CompleteA.forEach( function(val){

            console.log(val);
            //create li
            var listItem = document.createElement('li');
            //creaate img
            //create description
            var name = document.createElement('h2');
            var location = document.createElement('p');
            var hours = document.createElement('p');
            var cost_per_day = document.createElement('p');
            var date = document.createElement('p');
            var description = document.createElement('p');
            //set src
            //append
            name.innerHTML = val.name;
            location.innerHTML = "Location: "+val.location;
            hours.innerHTML = "Hours From Home: "+val.hours;
            cost_per_day.innerHTML = "Cost: "+val.cost_per_day;
            date.innerHTML = "Date: "+val.date;
            description.innerHTML = "Info: "+val.description;
            listItem.appendChild(name);
            listItem.appendChild(location);
            listItem.appendChild(hours);
            listItem.appendChild(cost_per_day);
            listItem.appendChild(date);
            listItem.appendChild(description);
            //list item to the list
            travelsElement.appendChild(listItem);
        });

        CompleteNa.forEach( function(val){
            console.log(val);
            //create li
            var listItem = document.createElement('li');
            //creaate img
            //create description
            var name = document.createElement('h2');
            var location = document.createElement('p');
            var hours = document.createElement('p');
            var cost = document.createElement('p');
            var date = document.createElement('p');
            var description = document.createElement('p');
            //set src
            //append
            name.innerHTML = val.name;
            location.innerHTML = "Location: "+val.location;
            hours.innerHTML = "Hours From Home: "+val.hours;
            cost.innerHTML = "Cost: "+val.cost;
            date.innerHTML = "Date: "+val.date;
            description.innerHTML = "Info: "+val.description;
            listItem.appendChild(name);
            listItem.appendChild(location);
            listItem.appendChild(hours);
            listItem.appendChild(cost);
            listItem.appendChild(date);
            listItem.appendChild(description);
            //list item to the list
            travelsElement.appendChild(listItem);
        });

        CompleteTe.forEach( function(val){
            console.log(val);
            //create li
            var listItem = document.createElement('li');
            //creaate img
            //create description
            var name = document.createElement('h2');
            var location = document.createElement('p');
            var hours = document.createElement('p');
            var date = document.createElement('p');
            var description = document.createElement('p');
            //set src
            //append
            name.innerHTML = val.name;
            location.innerHTML = "Location: "+val.location;
            hours.innerHTML = "Hours From Home: "+val.hours;
            date.innerHTML = "Date: "+val.date;
            description.innerHTML = "Info: "+val.description;
            listItem.appendChild(name);
            listItem.appendChild(location);
            listItem.appendChild(hours);
            listItem.appendChild(date);
            listItem.appendChild(description);
            //list item to the list
            travelsElement.appendChild(listItem);
        });

        CompleteTh.forEach( function(val){
            console.log(val);
            //create li
            var listItem = document.createElement('li');
            //creaate img
            //create description
            var name = document.createElement('h2');
            var date = document.createElement('p');
            var description = document.createElement('p');
            //set src
            //append
            name.innerHTML = val.name;
            date.innerHTML = "Date: "+val.date;
            description.innerHTML = "Info: "+val.description;
            listItem.appendChild(name);
            listItem.appendChild(date);
            listItem.appendChild(description);
            //list item to the list
            travelsElement.appendChild(listItem);
        });



    });
};

function planning(){
    getJSON("bucket_list.json").then(function( data ) {
        console.log('test');
        console.log(data);
        var items = [];
        var planningElement = document.getElementById("amusement");
        var notCompleteA=data.amusement.filter( function(val){
            return val.date == "";
        });
        var notCompleteNa=data.national.filter( function(val){
            return val.date == "";
        });
        var notCompleteIn=data.international.filter( function(val){
            return val.date == "";
        });
        var notCompleteTe=data.temples.filter( function(val){
            return val.date == "";
        });
        var notCompleteTh=data.things.filter( function(val){
            return val.date == "";
        });
        notCompleteA.forEach( function(val){
            console.log(val);
            //create li
            var listItem = document.createElement('li');
            //creaate img
            //create description
            var name = document.createElement('h2');
            var location = document.createElement('p');
            var hours = document.createElement('p');
            var cost_per_day = document.createElement('p');
            var description = document.createElement('p');
            //set src
            //append
            name.innerHTML = val.name;
            location.innerHTML = "Location: "+val.location;
            hours.innerHTML = "Hours From Home: "+val.hours;
            cost_per_day.innerHTML = "Cost: "+val.cost_per_day;
            description.innerHTML = "Info: "+val.description;
            listItem.appendChild(name);
            listItem.appendChild(location);
            listItem.appendChild(hours);
            listItem.appendChild(cost_per_day);
            listItem.appendChild(description);
            //list item to the list
            planningElement.appendChild(listItem);
        });

        notCompleteNa.forEach( function(val){
            console.log(val);
            //create li
            var listItem = document.createElement('li');
            //create img
            //create description
            var name = document.createElement('h2');
            var location = document.createElement('p');
            var hours = document.createElement('p');
            var cost = document.createElement('p');
            var description = document.createElement('p');
            //set src
            //append
            name.innerHTML = val.name;
            location.innerHTML = "Location: "+val.location;
            hours.innerHTML = "Hours From Home: "+val.hours;
            cost.innerHTML = "Cost: "+val.cost;
            description.innerHTML = "Info: "+val.description;
            listItem.appendChild(name);
            listItem.appendChild(location);
            listItem.appendChild(hours);
            listItem.appendChild(cost);
            listItem.appendChild(description);
            //list item to the list
            planningElement.appendChild(listItem);
        });

        notCompleteIn.forEach( function(val){
            console.log(val);
            //create li
            var listItem = document.createElement('li');
            //creaate img
            //create description
            var name = document.createElement('h2');
            var location = document.createElement('p');
            var description = document.createElement('p');
            //set src
            //append
            name.innerHTML = val.name;
            location.innerHTML = "Location: "+val.location;
            description.innerHTML = "Info: "+val.description;
            listItem.appendChild(name);
            listItem.appendChild(location);
            listItem.appendChild(description);
            //list item to the list
            planningElement.appendChild(listItem);
        });

        notCompleteTe.forEach( function(val){
            console.log(val);
            //create li
            var listItem = document.createElement('li');
            //creaate img
            //create description
            var name = document.createElement('h2');
            var location = document.createElement('p');
            var hours = document.createElement('p');
            var description = document.createElement('p');
            //set src
            //append
            name.innerHTML = val.name;
            location.innerHTML = "Location: "+val.location;
            hours.innerHTML = "Hours From Home: "+val.hours;
            description.innerHTML = "Info: "+val.description;
            listItem.appendChild(name);
            listItem.appendChild(location);
            listItem.appendChild(hours);
            listItem.appendChild(description);
            //list item to the list
            planningElement.appendChild(listItem);
        });

        notCompleteTh.forEach( function(val){
            console.log(val);
            //create li
            var listItem = document.createElement('li');
            //creaate img
            //create description
            var name = document.createElement('h2');
            var description = document.createElement('p');
            //set src
            //append
            name.innerHTML = val.name;
            description.innerHTML = "Info: "+val.description;
            listItem.appendChild(name);
            listItem.appendChild(description);
            //list item to the list
            planningElement.appendChild(listItem);
        });



    });
};
