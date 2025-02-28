

section_change("add_Money", "block");
section_change("cash_Out", "none");
section_change("transfer_Money", "none");
section_change("get_Bonus", "none");
section_change("pay_Bill", "none");
section_change("transactions", "none");

document.getElementById("money_id").addEventListener("click", function (event) {
    event.preventDefault();
    section_change("add_Money", "block");
    section_change("cash_Out", "none");
    section_change("transfer_Money", "none");
    section_change("get_Bonus", "none");
    section_change("pay_Bill", "none");
    section_change("transactions", "none");
})
document.getElementById("cashOut_id").addEventListener("click", function (event) {
    event.preventDefault();
    section_change("add_Money", "none");
    section_change("cash_Out", "block");
    section_change("transfer_Money", "none");
    section_change("get_Bonus", "none");
    section_change("pay_Bill", "none");
    section_change("transactions", "none");
})
document.getElementById("transfer_id").addEventListener("click", function (event) {
    event.preventDefault();
    section_change("add_Money", "none");
    section_change("cash_Out", "none");
    section_change("transfer_Money", "block");
    section_change("get_Bonus", "none");
    section_change("pay_Bill", "none");
    section_change("transactions", "none");
})
document.getElementById("bonus_id").addEventListener("click", function (event) {
    event.preventDefault();
    section_change("add_Money", "none");
    section_change("cash_Out", "none");
    section_change("transfer_Money", "none");
    section_change("get_Bonus", "block");
    section_change("pay_Bill", "none");
    section_change("transactions", "none");
})
document.getElementById("pay_id").addEventListener("click", function (event) {
    event.preventDefault();
    section_change("add_Money", "none");
    section_change("cash_Out", "none");
    section_change("transfer_Money", "none");
    section_change("get_Bonus", "none");
    section_change("pay_Bill", "block");
    section_change("transactions", "none");
})
document.getElementById("transactions_id").addEventListener("click", function (event) {
    event.preventDefault();
    section_change("add_Money", "none");
    section_change("cash_Out", "none");
    section_change("transfer_Money", "none");
    section_change("get_Bonus", "none");
    section_change("pay_Bill", "none");
    section_change("transactions", "block");
})




// document.getElementById("add_Money").style.display = "block";
// document.getElementById("cash_Out").style.display = "none";
// document.getElementById("transfer_Money").style.display = "none";
// document.getElementById("get_Bonus").style.display = "none";
// document.getElementById("pay_Bill").style.display = "none";

// document.getElementById("money_id").addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("add_Money").style.display = "block";
// document.getElementById("cash_Out").style.display = "none";
// document.getElementById("transfer_Money").style.display = "none";
// document.getElementById("get_Bonus").style.display = "none";
// document.getElementById("pay_Bill").style.display = "none";
// })

// document.getElementById("cashOut_id").addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("add_Money").style.display = "none";
//     document.getElementById("cash_Out").style.display = "block";
//     document.getElementById("transfer_Money").style.display = "none";
//     document.getElementById("get_Bonus").style.display = "none";
//     document.getElementById("pay_Bill").style.display = "none";
// })

// document.getElementById("transfer_id").addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("add_Money").style.display = "none";
//     document.getElementById("cash_Out").style.display = "none";
//     document.getElementById("transfer_Money").style.display = "block";
//     document.getElementById("get_Bonus").style.display = "none";
//     document.getElementById("pay_Bill").style.display = "none";
// })

// document.getElementById("bonus_id").addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("add_Money").style.display = "none";
//     document.getElementById("cash_Out").style.display = "none";
//     document.getElementById("transfer_Money").style.display = "none";
//     document.getElementById("get_Bonus").style.display = "block";
//     document.getElementById("pay_Bill").style.display = "none";
// })

// document.getElementById("pay_id").addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("add_Money").style.display = "none";
//     document.getElementById("cash_Out").style.display = "none";
//     document.getElementById("transfer_Money").style.display = "none";
//     document.getElementById("get_Bonus").style.display = "none";
//     document.getElementById("pay_Bill").style.display = "block";
// })
