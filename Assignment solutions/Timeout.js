
printMessage=function(){
    setInterval(function(){
        console.log("Am I in loop? Press control+C to stop me.");
    }, 1000);
}
printMessage();