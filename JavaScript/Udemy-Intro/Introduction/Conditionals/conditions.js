var greenMan = "yes";

if ( greenMan == "yes") {
  console.log("True");
};

var myArray = ["position0", "position1", "position2"];

console.log(myArray.length);

for(var i = 0; i < myArray.length; i++ ) {
  console.log(myArray[i]);
};

for (var index in myArray) {
  console.log("TEST",index);
}

myArray.forEach(function(current_value) {
  console.log("Example",current_value);
});