/*
THIS keyword in javascript

The first common temptation is to assume this refers to the function itself.

*/

var a = 5;

function test() {
  console.log(a)
  var a = 10;
}

test();


-----

var name = "window";

var obj = {
  name: 'object'
}

var printFunc = function() {
  console.log(this.name);
}

printFunc.apply(obj);

-----

function Animal() {
	this.name = 'Animal';
	this.printName = function() {
	  console.log(this.name);
	}
  }
  
  var animal = new Animal();
  animal.printName(); // this prints Animal
  
  function Cat() {
	this.name = 'Cat';
  }
  
  //add change here
  Cat.prototype = new Animal();
  var cat = new Cat();
  
  cat.printName();  // this throws exception

  -----

  function printNumber() {
	for (let i = 0; i < 10; i++) {
	  setTimeout((function() {
		console.log(i);
	  })(i), 10);
	}
  }
  
  printNumber(); // this prints out all 10