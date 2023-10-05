//Variables
var timing=0;
var change=50;
//Function for start button
function runningStart()
{
    document.getElementById("taoSpin").src="tao-running.gif"
    var i=0
    var image=document.getElementById("taoSpin");
    timing=setInterval(function() 
    {
        image.style.left=change+"px";
        image.style.top=change+"px";
        document.getElementById("msg").innerHTML="Running for "+i/250+" second(s)."
        i++;
        change+=0.5;
    },1)
    
}
//Function for stop button
function runningStop()
{
    clearInterval(timing)
    document.getElementById("taoSpin").src="tao-idle.gif"
}
//Function for reset button
function runningRestart()
{
    window.location.reload();
}
