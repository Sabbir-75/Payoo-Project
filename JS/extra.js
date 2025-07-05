console.log("extra");
let b = document.querySelectorAll(".btn")
    for(i = 0; i<b.length; i++){
        b[i].addEventListener("click", function(e){


            for(j = 0; j<b.length; j++){
                b[j].classList.remove("btn2")
                console.log(b[j], "__ j",j)
                
            }


            
            e.target.classList.add("btn2")
        })
    }