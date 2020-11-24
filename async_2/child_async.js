function sleep (time) {
  return new Promise(resolve => setTimeout(() => resolve(time), time))
}

async function test (msg) {
  console.log('one: ' + msg);
  await sleep(4000);
  console.log('two: ' + msg);

  await sleep(3000);
  console.log('three: ' + msg);
}

/*process.on('message', async function (msg) {
   await test(msg.say);
});*/

setTimeout(async function() {
  await test("foo");
}, 3000);
