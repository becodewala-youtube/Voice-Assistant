// JavaScript code for the voice assistant logic
var button = document.querySelector(".button"); // select the button element
var text = document.querySelector(".text"); // select the text input element
var recognition = new webkitSpeechRecognition(); // create a speech recognition object
recognition.lang = "en-US"; // set the language to English
recognition.continuous = false; // stop listening after one utterance
recognition.interimResults = false; // do not show interim results

// when the button is clicked, start listening
button.addEventListener("click", function() {
  recognition.start();
});

// when the recognition ends, stop listening
recognition.addEventListener("end", function() {
  recognition.stop();
});

// when the recognition returns a result, display it and speak a response
recognition.addEventListener("result", function(event) {
  var query = event.results[0][0].transcript; // get the transcript of the user's speech
  text.value = query; // display the query in the text input
  var response = ""; // initialize the response variable
  // use conditional statements to execute different commands based on the query
  if (query.toLowerCase().includes("hello")) {
    response = "Hello, how are you?";
  } else if (query.toLowerCase().includes("time")) {
    var date = new Date(); // get the current date and time
    var hours = date.getHours(); // get the hours
    var minutes = date.getMinutes(); // get the minutes
    var ampm = hours >= 12 ? "PM" : "AM"; // get the AM or PM
    hours = hours % 12; // convert to 12-hour format
    hours = hours ? hours : 12; // handle 0 case
    minutes = minutes < 10 ? "0" + minutes : minutes; // add leading zero if needed
    response = "The time is " + hours + ":" + minutes + " " + ampm; // format the response
  } else if (query.toLowerCase().includes("date")) {
    var date = new Date(); // get the current date
    var day = date.getDate(); // get the day
    var month = date.getMonth() + 1; // get the month
    var year = date.getFullYear(); // get the year
    response = "The date is " + day + "/" + month + "/" + year; // format the response
  } else if (query.toLowerCase().includes("weather")) {
    response = "The weather is sunny and warm"; // dummy response
  } else if (query.toLowerCase().includes("joke")) {
    response = "What do you call a fish that wears a bowtie? Sofishticated"; // dummy response
  } else {
    response = "Sorry,I am unable to answer this"; // default response
  }
  responsiveVoice.speak(response); // use the Responsive Voice API to speak the response
});