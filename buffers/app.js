const buffer = new Buffer(20);

console.log(buffer);

buffer.write("Hello, world!");

console.log(buffer);

const getString = buffer.toString("utf-8", 0, 10);
const getString2 = buffer.toString("utf-8", 10, 20);

console.log(getString);
console.log(getString2);