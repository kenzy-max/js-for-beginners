// D5: MURAHO KIGALI

// Question:
// Print numbers 1 to 15.
// Multiples of 3 print "Muraho".
// Multiples of 5 print "Kigali".
// Multiples of both print "Muraho Kigali".

// Answer:

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Muraho Kigali");
    } else if (i % 3 === 0) {
        console.log("Muraho");
    } else if (i % 5 === 0) {
        console.log("Kigali");
    } else {
        console.log(i);
    }
}
