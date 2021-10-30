import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let arr: Coach[] = [];
let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();
arr.push(cricketCoach);
arr.push(golfCoach);

for (const itr of arr) {
    console.log(itr.getDailyWorkout());
}

