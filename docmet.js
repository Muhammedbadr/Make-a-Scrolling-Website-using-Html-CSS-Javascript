let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains = document.getElementById("mountains")
let mountains4 = document.getElementById("mountains4")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let zozo = document.querySelector(".zozo")




window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value+"px";
    moon.style.top = value*4+"px";
    mountains.style.top = value*2+"px";
    mountains4.style.top = value*1.5+"px";
    river.style.top = value +"px";
    boat.style.top = value +"px";
    boat.style.left = value*30+"px";
    zozo.style.fontSize = value + "px"
    if(scrollY >= 67){
        zozo.style.fontSize = 67 + "px"
        zozo.style.position = "fixed";
        if(scrollY >= 470){
        zozo.style.display = "none";
        }
        else{
            zozo.style.display = "block"}
        if(scrollY >= 125){
            document.querySelector(".main").style.background= "linear-gradient(#376281,#10001f)" 
        }else{
            document.querySelector(".main").style.background= "linear-gradient(black,black)"
        }
    }

}