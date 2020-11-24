var a = {Baz: 2};

a[0] = "Foo";
a["Foo"] = 0;
a["Bar"] = {"ttt": 123};

console.log(a[0]); //Eval 'a.Foo' WEB-15420
console.log(a.Foo);
