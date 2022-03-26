let bestCountry;
let bestCountryIndex;
let photoCount;
if (document.cookie == "") {
    bestCountry = getBestCountry(false);
    photoCount = getPhotoCount("How corresponding photos would you like to see at the bottom of the page");
    document.cookie = "bestCountry=" + bestCountry;
    document.cookie = "photoCount=" + photoCount;
    document.cookie = "bestCountryIndex=" + bestCountryIndex;
} else {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    bestCountry = cookieArray[0].substring(12);
    photoCount = cookieArray[1].substring(12);
    bestCountryIndex = cookieArray[2].substring(18);
    document.getElementById("murica").style.display = "none";
    document.getElementById("poorly").style.display = "none";
}
console.log(bestCountry + " " + photoCount + " " + bestCountryIndex);
document.getElementById("bestCountry").innerHTML = "You beleive the best country is " + bestCountry;
if(photoCount != 0) {
    console.log("here I am");
    let div = document.getElementById("favoriteCountry");
    div.style.display = "block";
    let h3 = document.createElement("h3");
    div.append(bestCountry, h3);
    for(let i = 0; i < photoCount; i++) {
        console.log("I'm in the loop");
        if(bestCountryIndex == 0) {
            div.insertAdjacentHTML("beforeend", '<div class="portraits"> <h4>' + bestCountry + ' ' + (i + 1) + '</h4> <img src="images/PeruvianFlag.png" alt="Peruvian Flag"></a></div>');
        } else if(bestCountryIndex == 1) {
            div.insertAdjacentHTML("beforeend", '<div class="portraits"> <h4>Party Time!' + ' ' + (i + 1) + '</h4> <img src="images/\'Murica.gif" alt="The Great American Experience"></a></div>');
        } else {
            div.insertAdjacentHTML("beforeend", '<div class="portraits"> <h4>' + bestCountry + ' is WRONG!' + ' ' + (i + 1) + '</h4> <img src="images/poorly.gif" alt="' + bestCountry + ' is WRONG!"></a></div>');
        }
    }
}

function getBestCountry(alreadyAnswered) {
    let answer = prompt("What is the Best Country?\r\rHint: Try Peru\r\rAdditional Hint: Try USA for something different");
    if(answer.toLowerCase() == "peru") {
        confirm("You are wise beyond your years! You may continue!");
        bestCountryIndex = 0;
    } else if (answer.toLowerCase() == "america" || answer.toLowerCase() == "united states*" || answer.toLowerCase() == "usa") {
        confirm("YEEEEEEEEHAAAAAAAWWWWWW!!! Hold on for the ride of your LIFE!!");
        document.getElementById("murica").style.display = "initial";
        bestCountryIndex = 1;
    } else {
        if (!alreadyAnswered) {
            alert("Are you sure? I'll give you one more chance to guess right");
            getBestCountry(true);
        } else {
            confirm("You failed to choose the correct country");
            document.getElementById("poorly").style.display = "initial";
            bestCountryIndex = 2;
        }
    }
    return answer;
}

function getPhotoCount(Message) {
    let answer = prompt(Message);
    answer = parseInt(answer);
    if(Number.isInteger(answer) && answer >= 0 && answer <= 3) {
        return answer;
    } else {
        getPhotoCount("You answer must be a number between 0 and 3\r\rHow corresponding photos would you like to see at the bottom of the page"); 
    }

}

const funkinator = document.querySelector("#funkyMonkey");
funkinator.addEventListener("click", getFunky);
function getFunky() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = "rgb(" + red + ", " + blue + ", " + green + ")";
    //document.querySelectorAll(".container").style.backgroundColor = "rgb(" + green + ", " + red + ", " + blue + ")"; still working this feature
}

const resetter = document.querySelector("#reset");
resetter.addEventListener("click", reset);
function reset() {
    document.body.style.backgroundColor = "#dfeffa";
    //document.querySelectorAll(".container").style.backgroundColor = "rgba(12, 144, 240, 94)"; still working this feature
    document.getElementById("murica").style.display = "none";
    document.getElementById("poorly").style.display = "none";
}