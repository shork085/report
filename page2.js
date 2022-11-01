var x;
function cloth(cloth1){
    x=cloth1;
    for(var i=1;i<=3;i++){
        document.getElementById("color"+i).style.backgroundImage="url(c"+x+i+".png)";
    }
}

function color(id){
    let c=x;
    document.getElementById("c"+c).style.backgroundImage="url(c"+c+"color"+id+".png)";
}

function none(){
    let c=x;
    document.getElementById("c"+c).style.backgroundImage="url(c"+c+".png)";
}
