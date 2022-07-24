(function(window) {
  var speakWord = "Good bye";
  var byeSeaker = function (name) {
    console.log(speakWord + " " + name);
     }
  
  window.byeSpeaker = byeSpeaker;
  
})(window);

