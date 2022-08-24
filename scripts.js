 let user = {
    funds: 2000
}

let userFunds = document.getElementById("user-funds");
let loss = document.getElementById("loss");
let win = document.getElementById("win");
let addCredits = document.getElementById("add-credits");
let spinButton = document.getElementById("spin-button");
let window1 = document.getElementById("window1");
let window2 = document.getElementById("window2");
let window3 = document.getElementById("window3");

let slotMachine = ["assets/bell.png", "assets/cherries.png", "assets/seven.png"];

function spin() {
    user.funds -= 100;
    win.style = "display:none"
    window1.src = slotMachine[Math.floor(Math.random() * 3)]; 
    window2.src = slotMachine[Math.floor(Math.random() * 3)];
    window3.src = slotMachine[Math.floor(Math.random() * 3)];  
    userFunds.textContent = user.funds;
    checkForWin();
    console.log(user.funds);
    lowFunds();
}

function checkForWin() {
    if(
        window1.src === window2.src && window3.src === window1.src
    ){
        win.style = "display:flex";
        console.log("You win!");
        rollingNumber(user.funds + 200);
    } else if (user.funds <= 0 ){
        loss.style = "display:flex";
        spinButton.disabled = true;
        console.log("Try again!");
        addCredits.style.display = "inline-block";
    }
}

function lowFunds() {
    if(
        user.funds <= 500
    ){
        userFunds.style.color = "red";
    }
}

function addMoreCredits() {
    // userFunds.textContent = user.funds;
    addCredits.style.display = "none";
    spinButton.disabled = false;
    loss.style.display = "none";
    userFunds.style.color = "white";
    rollingNumber(2000)
}

function rollingNumber(end, direction) {
    spinButton.disabled = true;
    let numberRoll = setInterval(
        function() {
            if (
                userFunds.textContent == end
                ) {
                    clearInterval(numberRoll)
                    spinButton.disabled = false;
                } else {
                    user.funds += 5
                    userFunds.textContent = user.funds
                    console.log(userFunds.textContent)
                }
        }, 10
    )
}