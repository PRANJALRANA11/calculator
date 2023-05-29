let button=document.querySelectorAll('button')
let screen=document.getElementById('sc')
Array.from(button).forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.innerText!= "="&& button.innerText!= "ac")
            if(screen.innerText!="x"||screen.innerText!="/"||screen.innerText!="+"||screen.innerText!="-")
                {screen.innerText= screen.innerText + button.innerText}
        
        if(button.innerText== "=")  {
            screen.innerText=eval(screen.innerText) 
        }      
        if(button.innerText== "ac")  {
            screen.innerText="" 
        }      
    })
})
