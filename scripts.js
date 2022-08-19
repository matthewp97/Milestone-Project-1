 let user = {
    funds: 2000
}

let loss = document.getElementById("loss");
let win = document.getElementById("win");
let button = document.getElementById("button");
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
        button.disabled = true
        console.log("Try again!");
    }
}