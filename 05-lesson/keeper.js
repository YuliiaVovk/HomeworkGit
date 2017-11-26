function keeper() {
    'use strict';
    var storageArr = [];
    return {
        put: function(key, value) {
            for (var i=0; i<storageArr.length; i++){
                if (storageArr[i][0] === key){
                    //если есть - сохраним туда значение
                    storageArr[i][1] = value;
                    return storageArr[i][1];
                }
            }
            storageArr.push([key, value]);
            return null;
        },
        get: function(key) {
            for (var i=0; i<storageArr.length; i++){
                if (storageArr[i][0] === key){
                    return storageArr[i][1];
                }
            }
            return null;
        }
    };
}
var keeper = createKeeper();
var key1 = {};
var key2 = {};
keeper.put(1, 2);
keeper.get(1) // 2
keeper.put('test', 5)
keeper.get('test') // 5