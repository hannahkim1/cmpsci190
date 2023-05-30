function sayHello() {
    var message = document.createTextNode("Hello World!");
    var out = document.createElement("div");
    out.appendChild(message);
    document.body.appendChild(out);
}

function name() {
    var name = prompt("Welcome! What is your name?", "John Doe");
    var beginningMessage = document.createTextNode("Hello " + name + "! What is your favorite food?");
    
    var result = document.createElement("div");

    result.appendChild(beginningMessage);
    document.body.appendChild(result);
}

function food() {
    var pizza = document.createElement("button");
    var broccoli = document.createElement("button");

    pizza.innerHTML = "Pizza";
    broccoli.innerHTML = "Broccoli";

    pizza.addEventListener("click", function() {
        alert("Wow! Pizza is yummy.");
    })
    broccoli.addEventListener("click", function() {
        alert("Wow! Broccoli is healthy.");    
    })

    document.body.appendChild(pizza);
    document.body.appendChild(broccoli);
}

window.onload = function() {
    name();
    food();
}

