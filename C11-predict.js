// C11: PREDICT

// Question:
// What do these print, and how many times
// does the second loop run?

// Answer:

let s = "";

for (let i = 0; i < 3; i++) {
    s += i;
}

console.log(s);

for (let i = 1; i <= 10; i += 3) {
    console.log(i);
}
