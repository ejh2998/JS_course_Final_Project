for (let i = 0; i < 10; i++) {
    document.write(`This is loop ${i + 1}`);
    document.write("<br>");
}

let i = 0;

do {
    document.write(`This is loop ${i + 1}`);
    document.write("<br>");
    i++;
} while (i < 10);

i = 0;

while (i < 10) {
    document.write(`This is loop ${i + 1}`);
    document.write("<br>");
    i++;
}


const askForInput = () => {
    let res = prompt("Enter a number between 1-5:");
    return res;
}

//uses a switch to do form validation. function calls itself if incorrect input.

let option = askForInput();

switch (option) {
    case "1":
        alert("You typed the number 1");
        break;
    case "2":
        alert("You typed the number 2");
        break;
    case "3":
        alert("You typed the number 3");
        break;
    case "4":
        alert("You typed the number 4");
        break;
    case "5":
        alert("You typed the number 5");
        break;
    default:
        askForInput();
}