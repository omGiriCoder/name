h1 = document.querySelector("h1")
a = 0
h1.addEventListener("click", function(){
    if (a==0) {
        h1.innerHTML ="TheCoder"
        a=1
    }

    else if (a==1) {
        h1.innerHTML = "OmGiri"
        a=0
    } 
        
   
    
    

    // a.style.color = "black"
    // a.style.backgroundColor = "red"
})