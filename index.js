// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const scuberHeadquaters = 42; 
    return Math.abs(someValue- scuberHeadquaters);
}
function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
    const blocks=distanceFromHqInBlocks(someValue);
    return blocks*264

}
function distanceTravelledInFeet(start, destination){
    const blocksTravelled=Math.abs(start-destination)
    return blocksTravelled* 264
}
function calculatesFarePrice(start, destination){
    let distance=distanceTravelledInFeet(start, destination)
    if (distance<=400){
        return 0;
    }
    if (distance>400 && distance< 2000){
        return (distance -400)*0.02;
    }else if(distance >=2000 && distance <=2500){
        return 25;}
        else{return `cannot travel that far`}

}