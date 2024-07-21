let count =0;
document.getElementById("rate1").onclick=function(){count=1; };
document.getElementById("rate2").onclick=function(){count=2; };
document.getElementById("rate3").onclick=function(){count=3; };
document.getElementById("rate4").onclick=function(){count=4; };
document.getElementById("rate5").onclick=function(){count=5; };
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("submit-button").onclick=function(){
        document.getElementById("rate-success").innerHTML=count+" ";
document.getElementById("container").style.display="none";                    
 document.getElementById("container-success").style.display="inline";
}
})
