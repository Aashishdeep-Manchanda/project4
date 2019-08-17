// JavaScript Document
//set up variables and store reference to the form, the email input and the span with class of error 
var form = document.querySelector('form'); 
var email = document.getElementById('mail'); 
var error = document.querySelector('.errorMail');

email.addEventListener("input", function (event) {
 
  if(email.validity.valid) {
    //in case there is an error message visible, we remove the error message 
    error.innerHTML = ""; //reset the content of the message
    error.className = "error"; //reset the visual state of the message
  }  
}, false);

form.addEventListener("submit", function(event) {
  //each time the user tries to send the date, we are going to check if the email field is valid 
  if(!email.validity.valid) {
    //if the field is not valid, we display a custom error message 
    error.innerHTML = "Yo, you gotta put a valid email!"; 
    error.className = "error active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }
}, false);


// CONSTRAINTS FOR AGE
var age = document.getElementById('span');
var errorAge = document.querySelector('.errorAge');
age.addEventListener("input", function (event) {
  if(age.validity.valid) {
    //in case there is an error message visible, we remove the error message 
    errorAge.innerHTML = ""; //reset the content of the message
    errorAge.className = "error"; //reset the visual state of the message
  }
  if(isNAN(age)){
    errorAge.innerHTML = ""; //reset the content of the message
    errorAge.className = "error"; //reset the visual state of the message
  }
  if(age.length!=2){
     errorAge.innerHTML = ""; //reset the content of the message
    errorAge.className = "error"; //reset the visual state of the message
  }
}, false);


form.addEventListener("submit", function(event) {
  //each time the user tries to send the date, we are going to check if the email field is valid 
  if(!age.validity.valid) {
    //if the field is not valid, we display a custom error message 
    errorAge.innerHTML = "Please put your Age!"; 
    errorAge.className = "error active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }
}, false);
//CONSTRAINTS FOR NAME
var fName = document.getElementById('name');
var errorIn = document.querySelector('.errorName');
fName.addEventListener("input", function (event) {
  if(fName.validity.valid) {
    //in case there is an error message visible, we remove the error message 
    errorIn.innerHTML = ""; //reset the content of the message
    errorIn.className = "error"; //reset the visual state of the message
  }  
}, false);

form.addEventListener("submit", function(event) {
  //each time the user tries to send the date, we are going to check if the email field is valid 
  if(!fName.validity.valid) {
    //if the field is not valid, we display a custom error message 
    errorIn.innerHTML = "Please put a valid name"; 
    errorIn.className = "error active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }
}, false);
//constraints for location
var city = document.getElementById('location'); 
var errorCity = document.querySelector('.errorLocation');
city.addEventListener("input", function (event) {
  if(city.validity.valid) {
    //in case there is an error message visible, we remove the error message 
    errorCity.innerHTML = ""; //reset the content of the message
    errorCity.className = "error"; //reset the visual state of the message
  }  
}, false);

form.addEventListener("submit", function(event) {
  //each time the user tries to send the date, we are going to check if the email field is valid 
  if(!city.validity.valid) {
    //if the field is not valid, we display a custom error message 
    errorCity.innerHTML = "Please type in your city!"; 
    errorCity.className = "error active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }
}, false);

//accesing JSON
var header = document.querySelector('header');
    var section = document.querySelector('section');
    //  Store the URL of a JSON file in a variable 
    var requestURL = 'https:github.com/Aashishdeep-Manchanda/project4.git';
    //  Create a new XHR object 
    var request = new XMLHttpRequest();
    //  Open a new request using the request() method 
    request.open('GET', requestURL);
    //  Set JavaScript to accept JSON from the server 
    request.responseType = 'json';
    // Send the request with the send() method 
    request.send();
    request.onload = function() {
      var weirdDeals = request.response;
      console.log(weirdDeals);
      threeDeals(weirdDeals);
    }
    function threeDeals(jsonObj){
      var headerH1 = document.createElement('h1');
      headerH1.textContent = jsonObj['Name'];
      header.appendChild(headerH1);
      var headerPara = document.createElement('p');
      headerPara.textContent = 'Price: ' + jsonObj['Price'] + ', Feature: ' + jsonObj['Feature'] + ', Description:' + jsonObj['Description'];
      header.appendChild(headerPara);
    }
 
   