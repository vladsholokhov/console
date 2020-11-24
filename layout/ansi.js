console.log('\u001B[32m24 10 2017 14:36:48.713:INFO [karma]: \u001B[39mKarma v1.7.1 server started at http://0.0.0.0:9876/'); //WEB-29409


console.log("\u001b[1;34mbold blue text\u001b[0m\n");
console.log("\u001b[1;34mbold blue text\u001b[0m\n");
console.log("\033[s");
let x = 0;
setInterval(() => {
   console.log('\033[1K\033[uLine' + (++x));

    if (x >= 10) {
        process.exit(0);
    }
}, 500);

/*
* Also:
* WEB-16674 - Dart
*/
