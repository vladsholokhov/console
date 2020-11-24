(function testChanges() {
    const someObj = {foo: 'bar', bar: 'baz'};
    console.log(someObj);//Eval 'someObj' WEB-35073, WEB-36532
})();

