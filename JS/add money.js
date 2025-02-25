
document.getElementById("btn_lgn1").addEventListener("click", function(event){
    event.preventDefault();
    let mainBalace1 = document.getElementById("main_balace");
    let mainbalance = mainBalace1.innerText;
    let amountId = document.getElementById("amount_id")
    let amountId1 = amountId.value;
    let numberId = document.getElementById("number_id1")
    let numberId1 = numberId.value;
    let pinId = document.getElementById("pin_id")
    let pinId1 = pinId.value;
    if(numberId1.length === 11 && parseInt(numberId1[0]) === 2 && parseInt(numberId1[1]) === 0 && parseInt(numberId1[2]) === 0 && parseInt(numberId1[3]) === 0){
        if(pinId1.length === 4 && pinId1 === "4291"){
          let mainBalace11 = parseFloat(mainbalance) + parseFloat(amountId1);
          mainBalace1.innerText = mainBalace11;


          numberId.value = "";
          amountId.value = "";
          pinId.value = "";
          
        }
        else{
            alert("Required Pin Number")
        }
    }
    else{
        alert("Required Number")
    }
})
