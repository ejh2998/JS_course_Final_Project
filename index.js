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


const timeAndDateDiv = document.getElementById("time-and-date");

function updateTimeAndDate() {
    let currentTime = new Date();

    // Format the time and date as a string
    let timeAndDateString = currentTime.toLocaleString();

    // Use Bootstrap to format the time and date string as a panel
    let timeAndDateHtml = '<div class="panel panel-default">' +
        '  <div class="panel-body">' +
        '    <p>' + timeAndDateString + '</p>' +
        '  </div>' +
        '</div>';
    timeAndDateDiv.innerHTML = timeAndDateHtml;
}

// Call the updateTimeAndDate function every 1 second (1000 milliseconds)
setInterval(updateTimeAndDate, 1000);








