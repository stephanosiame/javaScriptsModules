const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

// Export functions using CommonJS
module.exports = {
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes
};
console.log("the time " + remainingMinutesInOven(30));  
console.log(preparationTimeInMinutes(3));
console.log(totalTimeInMinutes(3, 30));