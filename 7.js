function sleep (time) {
    return new Promise(resolve => setTimeout(() => resolve(time), time))
}

async function test () {
    console.log('one');
    await sleep(4000);
    console.log('two');

    debugger;

    await sleep(3000);
    console.log('three');
}

test(); //Evaluate 'await sleep(100)' (WEB-25793)
