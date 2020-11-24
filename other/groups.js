function name(obj) {
    console.group('name');
    console.log('first: ', obj.first);
    console.log('middle: ', obj.middle);
    console.log('last: ', obj.last);
    console.groupEnd();
}

name({"first":"Wile","middle":"E","last":"Coyote"});

function f768() {
    console.groupCollapsed('status');
    console.log("peekaboo, you can't see me");
    console.groupEnd();
}

f768();
/**
 foo
 **/
