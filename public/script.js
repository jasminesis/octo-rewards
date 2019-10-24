console.log("Working!")

let bankSelector = document.getElementById('showBanks')

let cardSelector = document.getElementById('showCardsByBank')

bankSelector.addEventListener('change', optionClicked);

function optionClicked() {
    let bankName = bankSelector.value;
    console.log(bankName, "selected");

    // make a new request
    var request = new XMLHttpRequest();

    var responseHandler = function () {
        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
        var responseObject = JSON.parse(this.responseText);
        console.log("response object is ", responseObject);
        responseArr = responseObject.result;

        addCardOptions();
    }

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    var url = `http://127.0.0.1:3000/mydata/${bankName}`;
    request.open("GET", url);

    // send the request
    request.send();

};


// what to do when we receive the request
function addCardOptions() {

    while (cardSelector.firstChild) {
        cardSelector.removeChild(cardSelector.firstChild)
    }
    var selectShowOption = document.createElement('option');
    selectShowOption.innerText = `Select a card...`;
    cardSelector.appendChild(selectShowOption);
    console.log("gONNA START ADDING cards nOW ")

    for (var i = 0; i < responseArr.length; i++) {

        var cardName = responseArr[i].name;
        var cardId = responseArr[i].id;
        var option = document.createElement('option');
        option.innerText = cardName;
        option.value = cardId;
        cardSelector.appendChild(option);
    }
};