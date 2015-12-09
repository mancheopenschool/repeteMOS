/**
 * Created by valentin on 09/12/15.
 */
$(document).ready(function(){
   console.log('Page chargée');

    $('#p1').click(function(){
        $(this).toggleClass('colorON');
        $(this).fadeOut('SLOW');
    });

    $('#toggle').click(function(){
        $('#p1').fadeIn('SLOW');
    });

    $('#p1').delay(2000).fadeOut();
});