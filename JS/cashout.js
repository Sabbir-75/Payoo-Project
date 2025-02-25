console.log("Cashout");

document.getElementById("btn_lgn2").addEventListener("click", function (event) {

    event.preventDefault();
    let mainBalace1 = document.getElementById("main_balace");
    let mainbalance = mainBalace1.innerText;
    let pinId = document.getElementById("pin_id2")
    let pinId2 = pinId.value;
    let ammountId = document.getElementById("ammount_id2")
    let ammountId2 = ammountId.value;
    let numberId = document.getElementById("number_id2")
    let numberId2 = numberId.value;
    if (numberId2.length === 11 && parseInt(numberId2[0]) === 2 && parseInt(numberId2[1]) === 0 && parseInt(numberId2[2]) === 0 && parseInt(numberId2[3]) === 0) {
        if (pinId2.length === 4 && pinId2 === "4291") {
            let atLastAmount = parseFloat(mainbalance) - parseFloat(ammountId2);
            mainBalace1.innerText = atLastAmount;


           
            numberId.value = "";
            ammountId.value = "";
            pinId.value = "";

        }
        else {
            alert("Required Pin Number")
        }
    }
    else {
        alert("Agent Number")
    }
})