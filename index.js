// console.log("Wellcome To The UBR Bank");

// var User = ["abc@def.com", "abc@deg.com", "abc@deh.com"];

// var Password = ["1234", "5678", "4321"];

// var Balance = [10000.43, 5000, 8000];

// var info = prompt(`What Do You Want To Do?

// 1. Login
// 2. Signup
// 3. Exit`);

// if (info === "1") {

//     var UsernameInput = prompt("Enter Username:");
//     var UserPasswordInput = prompt("Enter Password:");

//     var index = User.indexOf(UsernameInput);

//     if (index !== -1 && Password[index] === UserPasswordInput) {

//         var choice = prompt(`
// Choose an option:

// 1. Withdraw
// 2. Deposit
// 3. Check Balance
// `);

//         if (choice === "1") {

//             var amount = Number(prompt("Enter amount to withdraw:"));

//             if (amount > 0 && amount <= Balance[index]) {
//                 Balance[index] -= amount;
//                 console.log("Withdraw Successful");
//                 console.log("Remaining Balance: " + Balance[index]);
//             } else {
//                 console.log("Insufficient Balance");
//             }

//         } else if (choice === "2") {

//             var amount = Number(prompt("Enter amount to deposit:"));

//             if (amount > 0) {
//                 Balance[index] += amount;
//                 console.log("Deposit Successful");
//                 console.log("New Balance: " + Balance[index]);
//             } else {
//                 console.log("Invalid Amount");
//             }

//         } else if (choice === "3") {

//             console.log("Current Balance: " + Balance[index]);

//         } else {
//             console.log("Invalid Choice");
//         }

//     } else {
//         console.log("Invalid Gmail or Password");
//     }

// }else if (info === "2") {

//     var newUser = prompt("Enter New Username:");

//     if (User.includes(newUser)) {
//         console.log("Error: User already exists!");
//     } else {

//         var newPass = prompt("Enter New Password:");

//         User.push(newUser);
//         Password.push(newPass);
//         Balance.push(0);

//         console.log("Signup Successful!");
//     }
// }

//  else if (info === "3") {

//     console.log("Thank you for using the system.");

// } else {

//     console.log("Invalid Option");

// }

console.log("Welcome To UBR Bank");

var User = ["umar@riaz.com", "ubr.com", "Umar.com"];
var Password = ["1234", "5678", "4321"];
var Balance = [10000.43, 5000.21, 8000.04];

var currentUserIndex = -1;

var info = prompt(`
1. Login
2. Signup
3. Exit
`);

if (info === "1") {

    var email = prompt("Enter Username:");
    var pass = prompt("Enter Password:");

    var index = User.indexOf(email);

    if (index !== -1 && Password[index] === pass) {
        currentUserIndex = index;
        console.log("Login Successful");
    } else {
        console.log("Invalid Username or Password");
    }

} else if (info === "2") {

    var newUser = prompt("Enter New Username:");

    if (User.includes(newUser)) {
        console.log("User Already Exists");
    } else {

        var newPass = prompt("Enter New Password");

        User.push(newUser);
        Password.push(newPass);
        Balance.push(0);

        currentUserIndex = User.length - 1; // Auto Login

        console.log("Signup Successful");
        console.log("Logged In Successfully");
    }

} else if (info === "3") {

    console.log("Thank You For Using UBR Bank");

} else {

    console.log("Invalid Option");

}

if (currentUserIndex !== -1) {

    var running = true;

    while (running) {

        var choice = prompt(`
1. Withdraw
2. Deposit
3. Check Balance
4. Logout
`);

        if (choice === "1") {

            var amount = Number(prompt("Enter Amount"));

            if (amount > 0 && amount <= Balance[currentUserIndex]) {

                Balance[currentUserIndex] -= amount;

                console.log("Withdraw Successful");
                console.log("Remaining Balance: " + Balance[currentUserIndex]);

            } else {

                console.log("Insufficient Balance");

            }

        } else if (choice === "2") {

            var amount = Number(prompt("Enter Amount"));

            if (amount > 0) {

                Balance[currentUserIndex] += amount;

                console.log("Deposit Successful");
                console.log("Current Balance: " + Balance[currentUserIndex]);

            } else {

                console.log("Invalid Amount");

            }

        } else if (choice === "3") {

            console.log("Current Balance: " + Balance[currentUserIndex]);

        } else if (choice === "4") {

            console.log("Logged Out");
            running = false;

        } else {

            console.log("Invalid Choice");

        }
    }
}
