class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

const x = new Rectangle(10, 5);
Rectangle.prototype.area = function() {
  if (this.size) {
    return this.size * this.size;
  }

  return this.h * this.w;
};

console.log(x);
console.log(x.area());

class Square extends Rectangle {
  constructor(size) {
    super();
    this.size = size;
  }
}

const a = new Square(5);

console.log(a);
console.log(a.area());

/**
 * Objective

In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

Task

We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

Add an area method to Rectangle's prototype.
Create a Square class that satisfies the following:
It is a subclass of Rectangle.
It contains a constructor and no other methods.
It can use the Rectangle class' area method to print the area of a Square object.
Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.
 */
