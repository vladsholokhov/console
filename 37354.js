var x = [
    {"name":"a", "id": 1},
    {"name":"b", "id": 2},
    {"name":"c", "id": 3}
];

var obj = {};
for(var i = 0; i < x.length; i++) {
    var item = x[i];
    obj[item.id] = item;
}
