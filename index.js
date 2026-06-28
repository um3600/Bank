console.log("Welcome To UBR Bank");

var User = ["abc", "def", "hij"];
var Password = ["123", "567", "789"];
var Balance = [100, 200, 300];
var Statement = [
    [],
    [],
    []
];

var app = true;

while (app) {

    var currentUserIndex = -1;

    var info = prompt(`
1. Login
2. Signup
3. Exit
`);

    if (info === "1") {

        var email = prompt("Enter Email:");
        var pass = prompt("Enter Password:");

        var index = User.indexOf(email);

        if (index !== -1 && Password[index] === pass) {

            currentUserIndex = index;
            console.log("Login Successful");

        } else {

            alert("Invalid Email or Password");
            continue;

        }

    } else if (info === "2") {

        var newUser = prompt("Enter New Email:");

        if (newUser === "") {

            console.log("Email Cannot Be Empty");
            continue;

        } else if (!isNaN(newUser)) {

            console.log("Email Cannot Be Only Numbers");
            continue;
        }


        var newPass = prompt("Enter New Password:");

        if (newPass === "") {

            console.log("Password Cannot Be Empty");
            continue;

        }

        if (User.includes(newUser)) {

            console.log("User Already Exists");
            continue;

        }

        User.push(newUser);
        Password.push(newPass);
        Balance.push(0);
        Statement.push([]);

        currentUserIndex = User.length - 1;

        console.log("Signup Successful");
    } else if (info === "3") {

        console.log("Thank You For Using UBR Bank");
        app = false;

    } else {

        console.log("Invalid Option");
        continue;

    }

    while (currentUserIndex !== -1) {

        var choice = prompt(`
1. Withdraw
2. Deposit
3. Check Balance
4. Transfer Money
5. Bank Statement
6. Logout
`);

        if (choice === "1") {

            var amount = Number(prompt("Enter Amount:"));

            if (amount > 0 && amount <= Balance[currentUserIndex]) {

                Balance[currentUserIndex] -= amount;

                Statement[currentUserIndex].push("Withdraw: " + amount);
                console.log("Withdraw Successful");
                console.log("Remaining Balance: " + Balance[currentUserIndex]);

            } else {

                alert("Insufficient Balance");

            }

        } else if (choice === "2") {

            var amount = Number(prompt("Enter Amount:"));

            if (amount > 0) {

                Balance[currentUserIndex] += amount;

                Statement[currentUserIndex].push("Deposited: " + amount);

                console.log("Deposit Successful");
                console.log("Current Balance: " + Balance[currentUserIndex]);

            } else {

                alert("Invalid Amount");

            }

        } else if (choice === "3") {

            console.log("Current Balance: " + Balance[currentUserIndex]);

        } else if (choice === "6") {

            console.log("Logged Out Successfully");
            currentUserIndex = -1;
        }
        else if (choice === "5") {

            console.log("===== UBR BANK STATEMENT =====");

            if (Statement[currentUserIndex].length === 0) {

                console.log("No Transaction History");

            } else {

                for (var i = 0; i < Statement[currentUserIndex].length; i++) {

                    console.log((i + 1) + ". " + Statement[currentUserIndex][i]);

                }

            }

        }
        else if (choice === "4") {

            var receiver = prompt("Enter Receiver Email:");

            var receiverIndex = User.indexOf(receiver);

            if (receiverIndex === -1) {

                alert("Receiver Not Found");

            } else if (receiverIndex === currentUserIndex) {

                alert("You Cannot Transfer Money To Yourself");

            } else {

                var amount = Number(prompt("Enter Amount To Transfer:"));

                if (amount > 0 && amount <= Balance[currentUserIndex]) {

                    Balance[currentUserIndex] -= amount;
                    Balance[receiverIndex] += amount;

                    Statement[currentUserIndex].push(
                        "Transferred " + amount + " To " + User[receiverIndex]
                    );

                    Statement[receiverIndex].push(
                        "Received " + amount + " From " + User[currentUserIndex]
                    );

                    console.log("Transferred To: " + User[receiverIndex]);
                    console.log("Current Balance: " + Balance[currentUserIndex]);
                } else {

                    alert("Insufficient Balance");

                }

            }

        } else {

            alert("Invalid Choice");

        }
    }
}
