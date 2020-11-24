'use strict';
function TestObject() {}
TestObject.prototype.func = function() {
    console.log(this.constructor.name); //TestObject
};
TestObject.prototype.arrow = () => {
    var self = this;
    console.log(this.constructor.name); //Object
    debugger; //Evaluate 'this' WEB-20925
};

var t = new TestObject();
t.func();
t.arrow();
