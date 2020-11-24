

function greaterThan(a,b) {
    console.assert(a > b, {"message":"a is not greater than b","a":a,"b":b});
}
//greaterThan(5,6);

console.count(); // default: 1
console.count(); // default: 2
console.count('cat'); // cat: 1
console.count(); // default: 3
console.count('cat'); // cat: 2

console.count('cat'); // cat: 1
console.count('cat'); // cat: 2
//console.countReset('cat');
console.count('cat'); // cat: 1

//console.dir(document.body);

//console.dirxml(document);

console.error('error: name is undefined');


function f777() {
    console.time();
    var arr = new Array(10000);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Object();
    }
    console.timeEnd();
// default: 3.696044921875ms
}

f777();


function f888() {
    console.time('total');
    console.time('init arr');
    var arr = new Array(10000);
    console.timeEnd('init arr');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Object();
    }
    console.timeEnd('total');
// init arr: 0.0546875ms
// total: 2.5419921875ms
}

f888();

console.warn('user limit reached!');
