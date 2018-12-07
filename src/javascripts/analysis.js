const inversions = [];

d3.tsv('../data/DailyYield1990-2018-2yr-5yr.tsv', function(data) {
    data.forEach(function(d) {
        d.Date = d.Date;
        d['2 yr'] = +d['2 yr'];
        d['5 yr'] = +d['5 yr'];
        if(d['2 yr'] > d['5 yr']) {
            inversions.push(d);
        }
    });
});

console.log(inversions);