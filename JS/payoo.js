
document.getElementById("btn_lgn").addEventListener("click", function(event){
    event.preventDefault();
    let numberIdd = document.getElementById("number_id");
    let numberId = numberIdd.value;
    let pinId = document.getElementById("pin_id").value;

    if(numberId.length === 11 && parseInt(numberId[0]) === 0 && parseInt(numberId[1]) === 1 && parseInt(numberId[2]) === 9 && parseInt(numberId[10]) === 2){
        if(pinId.length === 4 && pinId === "9200"){
           window.location.href = "../html 2/index.html";
        }
        else{
            alert("Required Pin Number")
        }
    }
    else{
        alert("Required Number")
    }
})