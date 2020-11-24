class a {
    get b() {
        return Symbol('test');
    }

    static get c() {
        return Symbol('test');
    }
}

let aa = new a();

console.log(a.prototype.b);
console.log(a.c);
console.log(aa.b);  //WEB-23819
