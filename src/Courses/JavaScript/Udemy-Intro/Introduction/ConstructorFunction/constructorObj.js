function Person( id, name, age, birthday) {
  this.id  = id;
  this.name = name;
  this.age = age;
  this.birthday = birthday;
};

Person.prototype = {
  foo : function() { return this.name; },
  bar : function() { return "bar"; }
};

var personObjList = [];

var person1 = new Person( 1, "Jhon Snow", 31, "10/07/1986");
personObjList.push(person1);
console.log("1 ",personObjList);

var person2 = new Person( 2, "Igrit", 30, "24/10/1987");
personObjList.push(person2);
console.log("2 ",personObjList);