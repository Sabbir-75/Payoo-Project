console.log("asgdhuduhd")

document.getElementById("btn_lgn3").addEventListener("click", function(event){
    event.preventDefault();
    let transfernumber = document.getElementById("number_id3").value;
    let convertnumber = number("amount_id3");
    let convetNumberr = text("main_balace");
    if(transfernumber.length === 11 && parseInt(transfernumber[0]) === 2 && parseInt(transfernumber[1]) === 3 && parseInt(transfernumber[2]) === 4){
       if(number("pin_id3") === 4291){
      
        let sum = convetNumberr - convertnumber;
        calculation("main_balace",sum);
        transection3("tablebody", "tr", transfernumber, convertnumber);
        return;
       }

       alert("Your number is ok but pin number is invalid")
    }
    else{
        alert("Please input 11 digut and valid number")
    }
})