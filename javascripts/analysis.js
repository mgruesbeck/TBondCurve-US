var data = [
    { "city": "seattle", "state": "WA", "population": 652405, "land_area": 83.9 },
    { "city": "new york", "state": "NY", "population": 8405837, "land_area": 302.6 },
    { "city": "boston", "state": "MA", "population": 645966, "land_area": 48.3 },
    { "city": "kansas city", "state": "MO", "population": 467007, "land_area": 315 }
];

var weirdString = data.reduce(function (str, d, i) {
    var ending = (i % 2 === 0) ? " is cool." : " sucks.";
    return str + " " + d.city + ending;
}, "");

console.log(weirdString);