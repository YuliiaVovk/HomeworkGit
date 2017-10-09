//extend(1, 2, 3)               // {}
//extend([1, 2, 3])             // {0: 1, 1: 2, 2: 3}
//extend([1, 2, 3], [4, 5])     // {0: 4, 1: 5, 2: 3}
//extend([1, 2, 3, 6], [4, 5])  // {0: 4, 1: 5, 2: 3, 3: 6}
//extend([1, 2, 3, 6], [true, false, 'third']) // {0: true, 1: false, 2: "third", 3: 6}

function extend() {
    var tool = {};
    for(var i=0; i<arguments.length; i++) {
        if(arguments[i+1] != undefined){
            for (var attrname in arguments[i]) { tool[attrname] = arguments[i][attrname]; }
            for (var attrname in arguments[i+1]) { tool[attrname] = arguments[i+1][attrname]; }
        }
        else {
            for (var attrname in arguments[i]) { tool[attrname] = arguments[i][attrname]; }
        }
    }
    return tool;
}
extend([1, 2, 3], [4, 5]);