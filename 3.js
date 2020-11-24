var x = [
    {"name":"a", "id": 1},
    {"name":"c", "id": 3},
    {"name":"b", "id": 2}
];

var obj = {};
for(var i = 0; i < x.length; i++) {
    var item = x[i];
    obj[item.id] = item;
}

console.log("full object:");
console.log(obj);
console.log("element with id 1");
console.log(obj[1]); // Evaluate 'obj' (WEB-13930)



