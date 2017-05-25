/****************************************************************
 * rfduino
 */

if (!window.plugins) {
    window.plugins = {};
}

var rfduino = {};

rfduino.write = function(data, successCallback, failureCallback){

    var returnString = '4,0020,L,R,103,1024,v10/0';
    return returnString;
}

rfduino.discover = function (seconds, successCallback, failureCallback) {

    var devices = [{name:"simblee", uuid:"BD922605-1B07-4D55-8D09-B66653E51BBA"}, {name:"TV", uuid:"BD922605-1B07-4D55-8P09-B66653E51BBA"}];
    return devices;
};

rfduino.connect = function (success, failure, mockValue) {
    
    if (mockValue) {
        success();
    }
    else {
        failure();
    }
}
    

rfduino.isEnabled = function (success, failure, mockValue) {
    
    if (mockValue) {
        success();
    }
    else {
        failure();
    }
}

rfduino.isConnected = function (success, failure, mockValue) {
    if (mockValue) {
        success();
    }
    else {
        failure();
    }
};

rfduino.checkBattery = function (result) {
    return (Math.random(1, 100)*100).toFixed(0);
};

rfduino.onData = function () {
    var resArr = [
        true,
        false,
        12,
        "f3",
        "pz",
        +new Date(),
        +new Date(),
        Math.random(0,10)*10,
        Math.random(0,10)*10
    ];

    var res = resArr.join(',');

    var promise = new Promise(function(resolve) {
        resolve(res);

    });

    return promise;
};

window.plugins['rfduino'] = rfduino;

window.rfduino = rfduino;
