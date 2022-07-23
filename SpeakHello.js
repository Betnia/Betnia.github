(function(window) {
  var speakWord = "Hello";
  var helloSeaker = function (name) {
    console.log(speakWord + " " + name);
     }
  
  window.helloSpeaker = helloSpeaker;
  
})(window);
