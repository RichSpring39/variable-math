let x1 = 3;
let y1 = 7;
let x2 = 9;
let y2 = 8;

console.log(`x2 subtracted by x1 is ${x2 - x1}`);
console.log(`y2 subtracted by y1 is ${y2 - y1}`);

let X = x2 - x1;
let Y = y2 - y1;

console.log(`multiply x by itself comes out to ${X * X}`)
console.log(`multiply y by itself comes out to ${Y * Y}`)

let XaX = X * X;
let YaY = Y * Y;

console.log(`add y and x together makes ${YaY + XaX}`);

let YaX = XaX + YaY;

console.log(`the square root of x and y added together comes out to ${Math.sqrt(YaX)}`);

let distance = Math.sqrt(YaX);

console.log(distance);

//dist = Math.sqrt(((x2-x1)**2)((y2-y1)**2));