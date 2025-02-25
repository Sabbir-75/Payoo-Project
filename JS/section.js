

document.getElementById("add_Money").style.display = "block";
document.getElementById("cash_Out").style.display = "none";
document.getElementById("transfer_Money").style.display = "none";
document.getElementById("get_Bonus").style.display = "none";
document.getElementById("pay_Bill").style.display = "none";

document.getElementById("money_id").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("add_Money").style.display = "block";
document.getElementById("cash_Out").style.display = "none";
document.getElementById("transfer_Money").style.display = "none";
document.getElementById("get_Bonus").style.display = "none";
document.getElementById("pay_Bill").style.display = "none";
})

document.getElementById("cashOut_id").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("add_Money").style.display = "none";
    document.getElementById("cash_Out").style.display = "block";
    document.getElementById("transfer_Money").style.display = "none";
    document.getElementById("get_Bonus").style.display = "none";
    document.getElementById("pay_Bill").style.display = "none";
})

document.getElementById("transfer_id").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("add_Money").style.display = "none";
    document.getElementById("cash_Out").style.display = "none";
    document.getElementById("transfer_Money").style.display = "block";
    document.getElementById("get_Bonus").style.display = "none";
    document.getElementById("pay_Bill").style.display = "none";
})

document.getElementById("bonus_id").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("add_Money").style.display = "none";
    document.getElementById("cash_Out").style.display = "none";
    document.getElementById("transfer_Money").style.display = "none";
    document.getElementById("get_Bonus").style.display = "block";
    document.getElementById("pay_Bill").style.display = "none";
})

document.getElementById("pay_id").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("add_Money").style.display = "none";
    document.getElementById("cash_Out").style.display = "none";
    document.getElementById("transfer_Money").style.display = "none";
    document.getElementById("get_Bonus").style.display = "none";
    document.getElementById("pay_Bill").style.display = "block";
})