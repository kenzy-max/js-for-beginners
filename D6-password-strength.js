// D6: PASSWORD STRENGTH

// Question:
// Write strength(password) that returns "Strong"
// when it has at least 8 characters,
// one digit and one capital letter.
// Otherwise return "Weak".

// Answer:

function strength(password) {
    let hasDigit = false;
    let hasCapital = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= "0" && char <= "9") {
            hasDigit = true;
        }

        if (char >= "A" && char <= "Z") {
            hasCapital = true;
        }
    }

    if (password.length >= 8 && hasDigit && hasCapital) {
        return "Strong";
    } else {
        return "Weak";
    }
}

// Testing
console.log(strength("Kigali2026"));
console.log(strength("kigali2026"));
console.log(strength("Kig2"));
console.log(strength("KIGALIRWANDA"));
