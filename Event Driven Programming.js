var timing=0;
var change=50;

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

function runningStop()
{
    clearInterval(timing)
    document.getElementById("taoSpin").src="tao-idle.gif"
}

function runningRestart()
{
    window.location.reload();
}
