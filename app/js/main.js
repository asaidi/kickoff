var $output = $('#output');

function Car(model, year, miles) {

  this.model = model;
  this.year = year;
  this.miles = miles;

  Car.prototype.toString = function() {
    return this.model + " has done " + this.miles + " miles";
  };
}

// Usage:

// We can create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

// and then open our browser console to view the
// output of the toString() method being called on
// these objects
$output.text(civic);

console.log(civic.toString());
console.log(mondeo.toString());


var myNamespace = (function() {

  var myPrivateVar, myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  myPrivateMethod = function(foo) {
    console.log(foo);
  };

  return {

    // A public variable
    myPublicVar: "foo",

    // A public function utilizing privates
    myPublicFunction: function(bar) {

      // Increment our private counter
      myPrivateVar++;

      // Call our private method using bar
      myPrivateMethod(bar);

    }
  };

})();