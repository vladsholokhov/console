function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countDown(cnt) {
    for (var i = cnt; i >= 0; i--) {
        await sleep(1000);
        console.log(i);
    }
    demo();
}
class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
var nyanCat = new Cat("nyan", 999, "rainbow");

function listProperties(o) {
    console.group("Groups can be nested");
    for (let p in o) {
        console.log(p, ": ", nyanCat[p]);
    }
    console.error("Something goes wrong");
    console.warn("Or not");
    console.warn("Not sure");
    console.groupEnd();
}

function groupDemo() {
    console.group("Groups");
    console.groupCollapsed("Collapse huge output");
    for (var i = 0; i < 500; i++) {
        console.log(i);
    }
    console.groupEnd();
    listProperties(nyanCat);
    console.groupEnd();
}

function stackTraces() {
    let x = 1;
    function f() {
        let x = 2;
        function g() {
            let x = 3;
            console.warn("Beware! StackTraces are collapsed by default.");
            console.trace("Links are aligned to the trace");
        }
        g();
    }
    f();
}



function filtering() {
    for (var i = 0; i < 20; i++) {
        console.debug(i);
    }
    console.debug("Debug is hidden by default");
    console.info("Filtering");
}

function demo() {
    console.log("%cNew%c stylish console %c                           ",
        "font-weight: bold; font-size: 25px;",
        "font-style: italic; font-size: 25px;",
        "color: yellow; height: 60px; " +
        "font-size: 40px; font-style: italic; padding: 2px; " +
        "background-size: 60px 60px; background-image: url('http://www.pngall.com/wp-content/uploads/2016/06/Nyan-Cat-PNG-Image.png');");
    console.log("What's been done?");

    console.info("Objects tree-view ");
    console.log("Objects can be displayed within text\n" +
        "Lorem ipsum dolor sit %o, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
        "", nyanCat);
    console.log("You can display several objects in a row:\n %o and %o !", nyanCat, nyanCat);
    console.error("Ouch! look what he did ->", nyanCat, "!!!!!");
    stackTraces();

    console.info("Some layout changes");
    console.log("Links at the right are less contrast   ---------------------->");
    console.log(undefined, " result of evaluation is dimmed");
    console.info("Icons for prompt");
    console.log("Multiline \noutput\n.");
    groupDemo();

    console.log("String %s and %ccss styling", "substitutions", "font-style: italic")
    filtering();

    console.group("What remains to be done?");
    console.log("console.dirxml");
    console.log("console.table");
    console.log("console.table");
    console.log("optional message merging");
    console.log("Eager evaluation");
    console.groupEnd();
}


countDown(0);