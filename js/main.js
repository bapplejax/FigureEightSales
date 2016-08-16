function scrolltoDiv(id, animate, offset) {

	var target = id;

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, animate);
    }

}



$('a[href^="#"]').on('click', function(event) {

	var url = $( $(this).attr('href') );

	scrolltoDiv(url,1000,50)

});

var a = $("#my_navbar").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('#my_navbar').css({"background":"#4e4e4e"});
    } else {
       $('#my_navbar').css({"background":"transparent"});
    }
});