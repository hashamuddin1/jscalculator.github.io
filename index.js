let screen=document.getElementById("screen");
buttons=document.querySelectorAll(".btn");
let scrvalue="";
for(i of buttons){
    i.addEventListener("click",(e)=>{
        tar=e.target.innerText;
        console.log(tar);
        if(tar=="AC"){
            scrvalue="";
            screen.value=scrvalue;

        }
        else if(tar=="="){
            try {
                screen.value=eval(scrvalue)
              }
              catch(err) {
                alert("Invalid Input")
              }
            // screen.value=eval(scrvalue); //EVAL JS KA FUNCTION HAY JO EVALUATE KRYGA
        }
        else {
            scrvalue+=tar;
            screen.value=scrvalue;
        }

    })
}