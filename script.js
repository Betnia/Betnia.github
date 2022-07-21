//Arrays
(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
console.log(names);
  

for (var i = 0; i < names.length; i++) {
  console.log("Goodbye " + names[i]);
}

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    GoodbyeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
})();


