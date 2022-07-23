(function(window) {
  var speakWord = "Hello";
  var helloSeaker = function (name) {
    console.log(speakWord + " " + name);
     }
  
  window.hellospeaker = helloSpeaker;
  
})(window);
