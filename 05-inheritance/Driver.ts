import {Shape} from "./Shape";
import {Circle} from "./Circle";
import { Rectangle } from "./Rectangle";

let shape = new Shape(10,20);
console.log(shape.getInfo());

let circle = new Circle(5,10,20);
console.log(circle.getInfo());

let rect = new Rectangle(10,20,30,40);
console.log(rect.getInfo());