$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});



var current_item = 0;
var section_hide_time = 1300;
var section_show_time = 1300;


jQuery(document).ready(function($) {


	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});		
});



$(document).ready(function(){
$("#setCookie").click(function () {
$.cookie("popup", "24house", {expires: 0} );
$("#bg_popup").hide();
});
 
if ( $.cookie("popup") == null )
{
setTimeout(function(){
$("#bg_popup").show();
}, 4000)
}
else { $("#bg_popup").hide();
}
});





$('.filter a').click(function(e) {
  e.preventDefault();
  var a = $(this).attr('href');
  a = a.substr(1);
  $('.sets a').each(function() {
    if (!$(this).hasClass(a) && a != 'all')
      $(this).addClass('hide');
    else
      $(this).removeClass('hide');
  });

});

$('.sets a').click(function(e) {
  e.preventDefault();
  var $i = $(this);
  $('.sets a').not($i).toggleClass('pophide');
  $i.toggleClass('pop');
});