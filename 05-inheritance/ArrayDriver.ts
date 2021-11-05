import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let circle = new Circle(1,2,45);
let rect = new Rectangle(20,30,40,40);

let arr: Shape[] = [];
arr.push(circle);
arr.push(rect);

for (const itr of arr) {    
    console.log(itr.getInfo());
}