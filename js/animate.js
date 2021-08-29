//flag to check whether it is animating or not
var isAnimating=false;
var timeoutId;
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
   timeoutId=setInterval(animate,250);
       

   
    
    
    
}
function stopAnimating()
{
    if( isAnimating )
    {
     //if it is  animating then set it to false and continue animating else return because it is not animating.
     isAnimating=false;
     console.log("Animation Stopped");
     clearTimeout(timeoutId);
    }
    else
    {
        console.log("Animation already stopped");
        return;
    }
    
}

function animate()
{
    var boxId='box'+(Math.floor( Math.random() * 5 ) );
    //console.log(boxId);
    var height=(Math.floor( Math.random() * 11 ) + 1)+"em";
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