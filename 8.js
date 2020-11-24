function Animal() {
    this.alive = true;
}
function Duck() {}
Duck.prototype = new Animal();
Duck.prototype.speak = function() {
    if (this.alive) {
        console.log('Quack!');
    }
};

var d = new Duck();  //breakpoint here Evaluate 'd'
d.speak();
