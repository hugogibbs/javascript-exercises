const ftoc = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5/9)
  
  if (celsius == 0){
  return celsius;
  }
  else {
    celsius = parseFloat(celsius.toFixed(1));
    return celsius;
  }

};

const ctof = function(celsius) {
  fahrenheit = (celsius * (9/5)) + 32

  if (fahrenheit == 0){
    return fahrenheit
  }
  else {
    fahrenheit = parseFloat(fahrenheit.toFixed(1));
    return fahrenheit;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
