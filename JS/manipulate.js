function section_change(id, statuse) {
    let sectionChange = document.getElementById(id).style.display = statuse;
    return sectionChange;
}

function number(id) {
    let numbers = document.getElementById(id).value;
    let convetNumber = parseFloat(numbers);
    return convetNumber;
}
function text(id) {
    let numbe = document.getElementById(id).innerText;
    let convetNumbe = parseFloat(numbe);
    return convetNumbe;
}

function calculation(id, newItem) {
    document.getElementById(id).innerText = newItem;
   
}
