/*******************Question 1***********************************/
$('.red').addClass('redB');   /*red background*/
$("#myElement").addClass('blueB');   /*blue background*/
$('#myElement').on('click',function(){   /*on-click alert*/
    alert("myElement was clicked")
});
$('div:first-child').addClass('greenBwhite');  /*green and white*/
$('div:last-child').addClass('orangeBpink');  /*orange and pink*/

//**********Question 2******************!/
/*/!*Write the JavaScript needed hide, then unhide the middle image every 2 seconds (Hint: Interval)
*!/*/


var blink=false;  /*Kevin's flag to blink through*/

var blinkTimer=window.setInterval(blinker,2000);    /*interval*/

function blinker()
{

    if(blink)
    {
        console.log('true');
        $('#gallery li:nth-child(2)').hide();   /*function to hide element*/
        blink=false;
    }

    else
    {
        console.log('false');
        $('#gallery li:nth-child(2)').show();   /*function to show element*/
        blink=true;
    }
}



