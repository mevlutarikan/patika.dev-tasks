module.exports.circleArea = (radius) => {
  return (Math.PI * radius ** 2).toFixed(2);
};

module.exports.circleCircumference = (radius) => {
  return (2 * Math.PI * radius).toFixed(2);
};
