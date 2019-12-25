'use strict'

var STARTER = 'PASTINHA AngularJs';

module.exports = Service;

Service.$inject = [];
function Service() {
    return {
        get: get
    };


    function get() {
        return STARTER;
    }
}