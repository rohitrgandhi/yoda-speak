var button=document.querySelector("#button")
var input=document.querySelector("#input")
var output=document.querySelector("#output")

var inputURL="	https://api.funtranslations.com/translate/yoda.json"

function finalURL(input){
    return inputURL+"?text="+input;
}
fetch 
.then (response=> response.json())   
.then (json=> 
    {
        var inputText=input.value;


    } 
    )  