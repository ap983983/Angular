"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Circle(1, 2, 45);
var rect = new Rectangle_1.Rectangle(20, 30, 40, 40);
var arr = [];
arr.push(circle);
arr.push(rect);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var itr = arr_1[_i];
    console.log(itr.getInfo());
}
