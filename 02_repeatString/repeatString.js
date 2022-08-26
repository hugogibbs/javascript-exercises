const repeatString = function(origin, num) {

    let string = origin;
    
    if ( num == 0) return '';
    if ( num < 0) return 'ERROR';
    for (let i = 1 ; i < num ; i++){
        
        string = origin + string
    }

    return string;

};

// Do not edit below this line
module.exports = repeatString;
