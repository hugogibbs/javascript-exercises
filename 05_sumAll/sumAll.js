const sumAll = function(x , y) {

let result = 0;


if (x < 0 || y < 0 || isNaN(y) || typeof y == 'string') {
    return 'ERROR';
}

if (x < y) {

    for (i = x ; i <= y ; i++) {
        result += i;   
    }

    return result;
}

if (x > y) {
    for (i = x ; i >= y ; i--) {
        result += i;   
    }

    return result;
}

};

// Do not edit below this line
module.exports = sumAll;