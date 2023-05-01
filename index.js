// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let blocks;
    blocks = someValue - 42;
    return Math.abs(blocks);
  }
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let blocks = distanceFromHqInBlocks(someValue);
    let feet = blocks * 264;
    return feet;
  }
function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(start - destination);
    return distance * 264;
  }
function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination);
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;}
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination) - 400)*.02;
        }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
        return 25;
    }
    else if (distanceTravelledInFeet(start, destination) > 2500){
        return 'cannot travel that far';
    }
    }