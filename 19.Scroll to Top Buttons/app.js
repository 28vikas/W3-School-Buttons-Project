
    btn = document.getElementById("btn")





    function scrollFunction(){
        if(document.body.scroll > 20 || document.documentElement.scrollTop > 20){
         btn.style.display  = "block"
        }else{
            btn.style.display = "none"
        }
    }


function xyz(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  
}



window.onscroll = function() {
        
    scrollFunction()
};