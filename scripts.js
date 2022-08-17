 let user = {
    funds: 2000
}

let slotMachine = ["cherries", "seven", "bell"]
let window1 = document.getElementById("window1")
let window2 = document.getElementById("window2")
let window3 = document.getElementById("window3")

function spin() {
    user.funds -= 150;
    window1.textContent = slotMachine[Math.floor(Math.random() * 3)];
    window2.textContent = slotMachine[Math.floor(Math.random() * 3)];
    window3.textContent = slotMachine[Math.floor(Math.random() * 3)];  
    document.getElementById("user-funds").textContent = user.funds;
    checkForWin()
    console.log(user.funds);
}

function checkForWin() {
    if(
        window1.textContent === window2.textContent && window3.textContent === window1.textContent
    ){
        console.log("You win!");
        user.funds += 350;
        document.getElementById("user-funds").textContent = user.funds;
    } else {
        console.log("Try again!");
    }
}