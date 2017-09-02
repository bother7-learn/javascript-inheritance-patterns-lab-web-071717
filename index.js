class Point {
  constructor (x, y){
    this.x = x
    this.y = y
  }
  toString() {
    return `${this.x}, ${this.y}`
  }
}

class Side {
  constructor (length){
    this.length = length
  }
}

class Shape {
  addToPlane(x, y) {
    let point = new Point(x,y)
    this.position = point
  }
  move (x, y){
    let point = new Point(x,y)
    this.position = point
  }

}

class Circle {
  constructor (radius) {
    this.radius = radius

  }
  area() {
    return Math.PI * (radius ** 2)
  }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function() {
  return this.radius * 2
}
Circle.prototype.circumference = function() {
  return this.radius * 2 * Math.PI
}
Circle.prototype.area = function() {
  return this.radius ** 2 * Math.PI
}

class Polygon {
  constructor (sideArr) {
    this.sides = sideArr
  }
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function() {
 let sum = 0
 this.sides.forEach(side => sum += side.length)
 return sum
}
Polygon.prototype.numberOfSides = function() {
 let num = 0
 this.sides.forEach(side => num ++)
 return num
}


class Quadrilateral {
  constructor (sideA, sideB, sideC, sideD){
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
    this.sideD = sideD
  }
}
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral
Quadrilateral.prototype.perimeter = function() {
 return this.sideA + this.sideB + this.sideC + this.sideD
}
Quadrilateral.prototype.numberOfSides = function() {
 return 4
}
class Rectangle {
  constructor (width, height){
    this.width = width
    this.height = height
  }
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.perimeter = function() {
 return 2 * (this.width + this.height)
}
Rectangle.prototype.area = function() {
 return (this.width * this.height)
}

class Square {
  constructor (width){
    this.width = width
    this.height = width
  }
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square
Square.prototype.listProperties = function () {
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      console.log("Square" + prop + " = " + this[prop]);
    }
  }
}

class Triangle {
  constructor (sideA, sideB, sideC){
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle
Triangle.prototype.perimeter = function (){
  return this.sideA + this.sideB + this.sideC
}
Triangle.prototype.numberOfSides = function () {
  return 3
}
