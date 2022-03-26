const bestCountry = prompt("What is the Best Country?\r\rHint: Try Peru\r\rAdditional Hint: Try USA for something different\r\rFinal Hint: Popup blocker is discouraged");
const funkinator = document.querySelector("#funkyMonkey");
const resetter = document.querySelector("#reset");

if(bestCountry.toLowerCase() == "peru") {
    confirm("You are wise beyond your years! You may continue!");
} else if (bestCountry.toLowerCase() == "america" || bestCountry.toLowerCase() == "united states*" || bestCountry.toLowerCase() == "usa") {
    confirm("YEEEEEEEEHAAAAAAAWWWWWW!!! Hold on for the ride of your LIFE!!");
    window.open("https://tenor.com/view/happy4th-of-july-merica-usa-america-gif-12105505", '_blank');
} else {
    confirm("You failed to follow instructions");
    window.open("https://tenor.com/view/himym-ted-you-chose-poorly-you-have-choosen-poorly-elegir-gif-13625278", '_blank');
}

funkinator.addEventListener("click", getFunky);
function getFunky() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = "rgb(" + red + ", " + blue + ", " + green + ")";
}

resetter.addEventListener("click", reset);
function reset() {
    document.body.style.backgroundColor = "#dfeffa";
}