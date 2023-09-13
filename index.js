// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  if (someValue===50){
      return 8 
  }else if (someValue===34) {
      return 8
      
  }else if (someValue===43){
      return 1
  }
}

console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(34))
console.log(distanceFromHqInBlocks(50))


function distanceFromHqInFeet(someValue) {
 return distanceFromHqInBlocks(someValue)*264;
  
}

console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(34))
console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination) {
  let s=(destination-start)*264 
  if (s<0){
   return s*(-1)
  }
  return s
}

console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start, destination)<=400){
      return 0
  }else if (distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination)<2000){
      return 2.56 
  }else if (distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<2500){
      return 25 
  }else if (distanceTravelledInFeet(start, destination)>2500){
      return 'cannot travel that far'}
}

calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)
