"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function objectIterator(object) {
    var keys = Object.keys(object);
    var index = 0;
    return {
        next: function next() {
            if (index < keys.length) {
                return {
                    done: false,
                    value: object[keys[index++]]
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
}

exports.default = objectIterator;