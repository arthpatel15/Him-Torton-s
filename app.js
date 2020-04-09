var numberofItemButtons = document.querySelectorAll(".btn").length;

for (let i = 0; i < numberofItemButtons; i++) {

    document.querySelectorAll(".btn")[i].addEventListener('click', function () {

        var buttonInnerHTML = document.querySelectorAll("h4")[i].innerHTML;
        var listNode = document.getElementById("list");
        var liNode = document.createElement("LI");
        var txtNode = document.createTextNode(buttonInnerHTML);

        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);

    })
};

function coffee() {
    var sugar = prompt("How many sugar you would like?");
    var cream = prompt("How many Cream you would like?");

    var coffeeNote = document.getElementById("coffeeNote");

    coffeeNote.innerHTML = "Please Note: Coffee should have " + sugar + " sugar and " + cream + " Cream.";
}