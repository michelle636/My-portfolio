$(function(){
    var ht = $(window).height()
    $('section').height(ht)

    $('.gnb li').click(function(e){
        e.preventDefault();
        var href=$(this).find('a').attr('href')
        var target=$(href).offset().top

        $('html,body').animate({'scrollTop':target},1000)

        $('.gnb li a').removeClass('on');
        $(this).find('a').addClass('on');
    });

    var pos1=$('section1').offset().top
    var pos2=$('section1').offset().top
    var pos3=$('section1').offset().top
    var pos4=$('section1').offset().top
    var pos5=$('section1').offset().top
	var pos6=$('section1').offset().top

    var start=-500

    $(window).scroll(function(){
		var scrT=$(window).scrollTop()
		$('p').removeClass('on')
		$('div').removeClass('on')
		$('h1').removeClass('on')
		
		if(scrT>=pos1+start && scrT<pos2+start){
			$('.gnb li').find('a').removeClass('on')
			$('.gnb li').eq(0).find('a').addClass('on')
			}
		
		if(scrT>=pos2+start && scrT<pos3+start){
			$('.gnb li').find('a').removeClass('on')
			$('.gnb li').eq(1).find('a').addClass('on')
			$('#section2 h1').addClass('on')
			}
		if(scrT>=pos3+start && scrT<pos4+start){
			$('.gnb li').find('a').removeClass('on')
			$('.gnb li').eq(2).find('a').addClass('on')
			$('#section3 div').addClass('on')
			}
		if(scrT>=pos4+start && scrT<pos5+start){
			$('.gnb li').find('a').removeClass('on')
			$('.gnb li').eq(3).find('a').addClass('on')
			$('#section4 div').addClass('on')
			}
		if(scrT>=pos5+start && scrT<pos6+start){
			$('.gnb li').find('a').removeClass('on')
			$('.gnb li').eq(4).find('a').addClass('on')
			$('#section5 div').addClass('on')
			}
		if(scrT>=pos6+start){
			$('.gnb li').find('a').removeClass('on')
			$('.gnb li').eq(5).find('a').addClass('on')
			$('.sec1').addClass('on')
			$('.sec2').addClass('on')
			}
	});
});

$(window).scroll(function(){
	if($(window).scrollTop() > 900 ){
		$('.line span').attr("style", "animation:animate 1 5s");
	}
});