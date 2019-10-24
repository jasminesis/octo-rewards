console.log("Working!")

let bankSelector = document.getElementById('showBanks')

let cardSelector = document.getElementById('showCardsByBank')

bankSelector.addEventListener('change', optionClicked);

function optionClicked() {
    let bankName = bankSelector.value;
    console.log("SOMETHING IS CHOSEN", bankName);

};


// what to do when we recieve the request
// const addCardOptions = function () {
//     console.log("response text", this.responseText);
//     console.log("status text", this.statusText);
//     console.log("status code", this.status);

//     while (cardSelector.firstChild) {
//         cardSelector.removeChild(cardSelector.firstChild)
//     }
//     var selectShowOption = document.createElement('option');
//     selectShowOption.innerText = `"Select a card..."`;
//     cardSelector.appendChild(selectShowOption);

//     var responseObject = JSON.parse(this.responseText);
//     console.log(responseObject)

//     for (var i = 0; i < responseObject.length; i++) {
//         // var showName = responseObject[i].show.name;
//         var option = document.createElement('option');
//         option.innerHTML = responseObject[i].show.name;
//         option.setAttribute('class', [i])
//         cardSelector.appendChild(option);
//     }
// };

// // make a new request
// var request = new XMLHttpRequest();

// // listen for the request response
// request.addEventListener("load", addCardOptions);

// // ready the system by calling open, and specifying the url
// var url = "http://127.0.0.1:3000/mydata";
// request.open("GET", url);

// // send the request
// request.send();