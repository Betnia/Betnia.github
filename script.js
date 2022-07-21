//Arrays
var names = ["Jane", "John", "Joe", "James"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Goodbye" + names[i]);
}

var names2 = ["Emily", "Michael", "Betty"];

for (var i = 0; i < names2.length; i++) {
  console.log("Hello " + names2[i]);
};

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

names2.greeting = "Goodbye!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

