let bestCountry;

if (document.cookie == "") {
    bestCountry = prompt("What is the Best Country?\r\rHint: Try Peru\r\rAdditional Hint: Try USA for something different");
    document.cookie = "bestCountry=" + bestCountry;
    if(bestCountry.toLowerCase() == "peru") {
        confirm("You are wise beyond your years! You may continue!");
    } else if (bestCountry.toLowerCase() == "america" || bestCountry.toLowerCase() == "united states*" || bestCountry.toLowerCase() == "usa") {
        confirm("YEEEEEEEEHAAAAAAAWWWWWW!!! Hold on for the ride of your LIFE!!");
        document.getElementById("murica").style.display = "initial";
    } else {
        confirm("You failed to choose the correct country");
        document.getElementById("poorly").style.display = "initial";
    }
} else {
    bestCountry = document.cookie.substring(12);
    document.getElementById("murica").style.display = "none";
    document.getElementById("poorly").style.display = "none";
}
const countryTag = document.querySelector("header h3");
countryTag.innerHTML = "You beleive the best country is " + bestCountry;



const funkinator = document.querySelector("#funkyMonkey");
funkinator.addEventListener("click", getFunky);
function getFunky() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = "rgb(" + red + ", " + blue + ", " + green + ")";
}

const resetter = document.querySelector("#reset");
resetter.addEventListener("click", reset);
function reset() {
    document.body.style.backgroundColor = "#dfeffa";
    document.getElementById("murica").style.display = "none";
}