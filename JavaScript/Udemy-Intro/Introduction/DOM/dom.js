console.log(document.URL);
console.log(document.childNodes[1].childNodes[2].childNodes[3]);
console.log(document.getElementsByTagName('p'));

console.log(document.getElementById('hello'));
console.log(document.getElementsByClassName('pClass'));
//console.log(document.gete)

//document.getElementById('hello').innerText = 'New World!';

var pHello = document.getElementById('hello');

pHello.innerText = "new world";

pHello.innerHTML += " oder <span> hello world </span>";

pHello.outerHTML = '<p id= "hello"> new world order <span> hello world </span>';