var hour = 13;
var suffix = hour >= 12 ? "pm":"am";
var hours = ((hour + 11) % 12 + 1) + suffix;
console.log(hours);