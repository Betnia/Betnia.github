//Arrays
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
console.log(names);
  
for (var i = 0; i < names.length; i++) {
  console.log("Goodbye " + names[i]);
}

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}
(function () {
console.log();
  var GoodbyeSpeaker = {};
  GoodbyeSpeaker.name ="Goodbye";
  GoodbyeSpeaker.sayGoodbye= function() {
    console.log("Goodbye" + GoodbyeSpeaker.name);
  }
  Window.GoodbyeSpeaker = helloSpeaker;
})(Window);
  
  (function () {
console.log();
  var Hellospeaker = {};
  Hellospeaker.name ="Hello";
  Hellospeaker.sayHello = function() {
    console.log("Hello" + Hellospeaker.name);
  }
    Window.helloSpeaker = helloSpeaker;
})(Window);

 var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter ==='j') {
    GoodbyeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }


