"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var arr = [];
var cricketCoach = new CricketCoach_1.CricketCoach();
var golfCoach = new GolfCoach_1.GolfCoach();
arr.push(cricketCoach);
arr.push(golfCoach);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var itr = arr_1[_i];
    console.log(itr.getDailyWorkout());
}
