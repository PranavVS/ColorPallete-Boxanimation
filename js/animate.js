//Author: Pranav
//Created on : 29 August 2021
//flag to check whether it is animating or not
var isAnimating=false;
//id for Time Interval function to reset on stop
var timeoutId;
//function to start animation on start button click
function startAnimating()
{
    if( !isAnimating )
    {
     //if it is not animating then set it to true and continue animating else return because already animating.
     isAnimating=true;
     console.log("Animation Started");
    }
    else
    {
        console.log("Animation already Started");
        return;
    }
    //call the animate function every 250 milliseconds. This can be varied according to requirement
   timeoutId=setInterval(animate,150);  
}
//function to stop animation on stop button click
function stopAnimating()
{
    if( isAnimating )
    {
     //if it is  animating then set it to false and continue animating else return because it is not animating.
     isAnimating=false;
     console.log("Animation Stopped");
     //clear the timeout that will stop calling the animate function
     clearTimeout(timeoutId);
    }
    else
    {
        console.log("Animation already stopped");
        return;
    }
    
}
//animates the color palletes
function animate()
{
    //generate a random box id
    var boxId='box'+(Math.floor( Math.random() * 5 ) );
    //generate random height as per requirement
    var height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    //set the height to the box
    document.getElementById(boxId).style.height=height;
    boxId='box'+(Math.floor( Math.random() * 5 ) );
    //console.log(boxId);
    height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    document.getElementById(boxId).style.height=height;
    boxId='box'+(Math.floor( Math.random() * 5 ) );
    //console.log(boxId);
    height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    document.getElementById(boxId).style.height=height;
    boxId='box'+(Math.floor( Math.random() * 5 ) );
    //console.log(boxId);
    height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    document.getElementById(boxId).style.height=height;
    boxId='box'+(Math.floor( Math.random() * 5 ) );
    //console.log(boxId);
    height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    document.getElementById(boxId).style.height=height;
    //generate a random box id
    var boxId='box'+(Math.floor( Math.random() * 5 ) );
    //generate random height as per requirement
    var height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    //set the height to the box
    document.getElementById(boxId).style.height=height;
    boxId='box'+(Math.floor( Math.random() * 5 ) );
    //console.log(boxId);
    height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    document.getElementById(boxId).style.height=height;
    boxId='box'+(Math.floor( Math.random() * 5 ) );
    //console.log(boxId);
    height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    document.getElementById(boxId).style.height=height;
    boxId='box'+(Math.floor( Math.random() * 5 ) );
    //console.log(boxId);
    height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    document.getElementById(boxId).style.height=height;
    boxId='box'+(Math.floor( Math.random() * 5 ) );
    //console.log(boxId);
    height=(Math.floor( Math.random() * 11 ) + 1)+"em";
    document.getElementById(boxId).style.height=height;
}