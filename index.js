function changer(str){
    if(str =="Q"){
        return "Heater 1"
    }else if(str =="W"){
        return "Heater 2"
    }else if(str =="E"){
        return "Heater 3"
    }else if(str =="A"){
        return "Heater 4"
    }else if(str =="S"){
        return "Clap"
    }else if(str =="D"){
        return "Open-hh"
    }else if(str =="Z"){
        return "Kick-n'-Hat"
    }else if(str =="X"){
        return "Kick"
    }else if(str =="C"){
        return "Closed-HH"
    }
    }
function play(str){
    var audio = document.getElementById(str);
    audio.play();
    document.getElementById("display").innerText = changer(str);
}
window.document.onkeyup = function (params) {
if(params.key =="q" || params.key =="Q"){
    play("Q");
}else if(params.key =="w" || params.key =="W"){
    play("W")
}else if(params.key =="e" || params.key =="E"){
    play("E")
}else if(params.key =="a" || params.key =="A"){
    play("A")
}else if(params.key =="s" || params.key =="S"){
    play("S")
}else if(params.key =="d" || params.key =="D"){
    play("D")
}else if(params.key =="z" || params.key =="Z"){
    play("Z")
}else if(params.key =="x" || params.key =="X"){
    play("X")
}else if(params.key =="c" || params.key =="C"){
    play("C")
}
}