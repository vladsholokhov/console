function runTest() {
    var aa = 1;  //breakpoint is reached
    setTimeout(() => {
        var a = 1;
        var b = a + 3; //breakpoint is ignored with 'Async' (but fine without)
        alert(b);
    }, 1000);
}

runTest();