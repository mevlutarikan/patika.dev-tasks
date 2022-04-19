const { circleArea, circleCircumference } = require('./circle');
let r = 5;
console.log(
  `Area and circumference of a circle with diameter ${r}
AREA: ${circleArea(r)}  Circumference: ${circleCircumference(r)}`
);
