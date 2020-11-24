process.execArgv = [];

const proc = require('child_process').fork('./child_async.js', [], {execArgv: ['--inspect-brk=5860']});
proc.send({say: 'hello 1'});

setTimeout(function () {
    proc.send({say: 'hello 2'});
}, 3000);