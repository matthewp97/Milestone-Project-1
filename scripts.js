 let user = {
    funds: 2000
}

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
    document.getElementById("user-funds").textContent = "Credits: " + user.funds;
    checkForWin()
    console.log(user.funds);
    lowFunds();
}

function checkForWin() {
    if(
        window1.src === window2.src && window3.src === window1.src
    ){
        win.style = "display:flex"
        console.log("You win!");
        user.funds += 200;
        document.getElementById("user-funds").textContent = "Credits: " + user.funds;
    } else if (user.funds <= 0 ){
        loss.style = "display:flex"
        spinButton.disabled = true
        console.log("Try again!");
        addCredits.style.display = "inline-block";
    }
}

function lowFunds() {
    if(
        user.funds <= 500
    ){
        document.getElementById("user-funds").style.color = "red";
    }
}

function addMoreCredits() {
    user.funds = 2000
    document.getElementById("user-funds").textContent = "Credits: " + user.funds;
    addCredits.style.display = "none";
    spinButton.disabled = false;
    loss.style.display = "none";
    document.getElementById("user-funds").style.color = "white";
}