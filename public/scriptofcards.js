console.log("BAA BAA")

/*
███████╗██╗  ██╗██████╗ ███████╗███╗   ██╗███████╗███████╗███████╗
██╔════╝╚██╗██╔╝██╔══██╗██╔════╝████╗  ██║██╔════╝██╔════╝██╔════╝
█████╗   ╚███╔╝ ██████╔╝█████╗  ██╔██╗ ██║███████╗█████╗  ███████╗
██╔══╝   ██╔██╗ ██╔═══╝ ██╔══╝  ██║╚██╗██║╚════██║██╔══╝  ╚════██║
███████╗██╔╝ ██╗██║     ███████╗██║ ╚████║███████║███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═══╝╚══════╝╚══════╝╚══════╝
 */

let paymentMethod = document.getElementById('paymentMethod');
let showAllCards = document.getElementById('showAllCards');

paymentMethod.addEventListener('change', optionClicked);

function optionClicked() {

    let cardOrCash = paymentMethod.value;
    console.log(cardOrCash, "selected");
    let cookieObj = str_obj(document.cookie)
    console.log(cookieObj)
    let userId = cookieObj.loggedIn;
    console.log("userId", userId)

    // make a new request
    var request = new XMLHttpRequest();

    // cannot use arrow function because it binds 'this'
    var responseHandlerForCardPage = function () {
        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
        var responseObject = JSON.parse(this.responseText);
        console.log("response object is ", responseObject);
        responseArr = responseObject.result;

        addCardOptions();
    }

    // listen for the request response
    request.addEventListener("load", responseHandlerForCardPage);

    // ready the system by calling open, and specifying the url
    var url = `http://127.0.0.1:3000/mydata/expenses/${userId}`;
    request.open("GET", url);

    // send the request
    request.send();
};


// what to do when we receive the request
function addCardOptions() {

    while (showAllCards.firstChild) {
        showAllCards.removeChild(showAllCards.firstChild)
    }
    var selectShowOption = document.createElement('option');
    selectShowOption.innerText = `Select a card...`;
    showAllCards.appendChild(selectShowOption);
    console.log("gONNA START ADDING cards nOW ")

    for (var i = 0; i < responseArr.length; i++) {

        var cardName = responseArr[i].name;
        var cardId = responseArr[i].id;
        var option = document.createElement('option');
        option.innerText = cardName;
        option.value = cardId;
        showAllCards.appendChild(option);
    }
};


function str_obj(str) {
    str = str.split('; ');
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }
    return result;
}

document.getElementById('datePicker').valueAsDate = new Date()
