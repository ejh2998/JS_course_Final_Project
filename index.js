const jumbo = document.querySelector("#codepen-btn");
const jumbo2 = document.querySelector("#codepen-btn2");
const sign = document.querySelector("#sign-btn");
const container = document.querySelector("#emails");


jumbo.addEventListener("click", function () {
    document.location.href = "examples.html";
});

jumbo2.addEventListener("click", function () {
    document.location.href = "rps.html";
});

sign.addEventListener("click", appendElement);


let count = 1;

function appendElement() {
    let newBox = document.createElement("div");
    let newText = getEmail();
    let newContent = document.createTextNode(newText);
    newBox.setAttribute("class", "h3-sign");
    newBox.appendChild(newContent);
    container.appendChild(newBox);
    count++;
}

function getEmail() {
    let user = document.getElementById("username-field").value;
    return user;
}

function removeChildFromBottom() {
    let parent = container;
    let child = parent.lastChild;
    if (child) {
        parent.removeChild(child);
        count--;
    }
}


const pElement = document.querySelector('footer#footer1 p');
const currentYear = new Date().getFullYear();

pElement.innerHTML = `© Copyright Evan Hope - ${currentYear}`;




