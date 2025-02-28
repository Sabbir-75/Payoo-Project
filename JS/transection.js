console.log("yess")

function transection(id, elmnt, number, amount){
    
    let tbdy = document.getElementById(id);
          let newtbody = document.createElement(elmnt)
          newtbody.innerHTML = `
                  <td class="text-base font-normal text-black">Add money</td>
                  <td class="text-base font-normal text-black">${number}</td>
                  <td class="text-base font-normal text-black">${amount}$</td>
          `
          tbdy.appendChild(newtbody);
}
function transection2(id, elmnt, number, amount){
    
    let tbdy = document.getElementById(id);
          let newtbody = document.createElement(elmnt)
          newtbody.innerHTML = `
                  <td class="text-base font-normal text-black">Cashout</td>
                  <td class="text-base font-normal text-black">${number}</td>
                  <td class="text-base font-normal text-black">${amount}$</td>
          `
          tbdy.appendChild(newtbody);
}
function transection3(id, elmnt, number, amount){
    
    let tbdy = document.getElementById(id);
          let newtbody = document.createElement(elmnt)
          newtbody.innerHTML = `
                  <td class="text-base font-normal text-black">Transfer Money</td>
                  <td class="text-base font-normal text-black">${number}</td>
                  <td class="text-base font-normal text-black">${amount}$</td>
          `
          tbdy.appendChild(newtbody);
}

