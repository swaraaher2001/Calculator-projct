let screen=document.getElementById("screen");
let screenvalue="";
buttons= document.querySelectorAll("button");
for(items of buttons){
    items.addEventListener('click',(e)=>{
        buttonText= e.target.innerText;
        console.log("button selected", buttonText);

        if(buttonText=="X"){
            buttonText= "*";
            screenvalue += buttonText
            screen.value = screenvalue;

        }

        else if(buttonText=="Delete"){
            
            screenvalue=screenvalue.slice(0,-1);
            screen.value=screenvalue;
        }

        else if(buttonText=="C"){
            screenvalue=" ";
            screen.value= screenvalue;
            
        }
        else if(buttonText=="="){
            screen.value =eval(screenvalue);
        }

        else{
            screenvalue += buttonText
            screen.value = screenvalue;
        }
    })
}