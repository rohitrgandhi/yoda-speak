var button = document.querySelector("#button");
var inputTxt = document.querySelector("#input");
var output = document.querySelector("#output");

var inputURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslateURL(text) {
    return serverURL + "?" + "text=" + text;
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
    .catch(handleError)
    }

    function handleError(error)
    {
        console.log("error occured",error);
        alert("Server down! Please try later...");
    }

    button.addEventListener("click", clickHandler);