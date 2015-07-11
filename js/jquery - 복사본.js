/*
$(document).ready(function(){
	var left_value = '400';
	var slide_ul = $('.slide ul');
	slide_ul.append($('.slide li:first-child').clone());
	slide_ul.prepend($('.slide li:last-child').prev().clone());
	var li_length = $('.slide ul li').length;
	slide_ul.width(left_value*li_length);
	var i = 1;
	slide_ul.css({'left':-left_value*i + 'px'})
	function slide() {
		
		slide_ul.stop().animate({'left': - (left_value*i) + 'px'},1000,function(){
			if(i>=li_length-1){i = 1;}else if(i<=0){i = 4;}
			slide_ul.css({'left': - (left_value*i) + 'px'});
		});
		$('.index-item').removeClass('index-item-on').eq(i-1).addClass('index-item-on');
		alert(i);
		
	}
	$('.btn-right').click(function(){
		i++;
		slide();
	});
	$('.btn-left').click(function(){
		i--;
		slide();
	});
	$('.index .index-item').click(function(){
		alert(i);
		if(i !== $('.index .index-item').index(this)+1){
			i = $('.index .index-item').index(this)+1;
			slide();
		}
	});

	var	test= setInterval(function(){
		i++;
		slide();
	},3000);

	$('.btn-play').click(function(){
		var	test= seInterval(function(){
			i++;
			slide();
		},3000);
	});

	$('.btn-pause').click(function(){
		clearInterval(test);
	});

	
});
*/
/*

$(document).ready(function(){
	var left_value = '400';
	var time = '1000';
	var slide_ul = $('.slide ul');
	slide_ul.append($('.slide li:first-child').clone());
	slide_ul.prepend($('.slide li:last-child').prev().clone());
	var li_length = $('.slide ul li').length;
	slide_ul.width(left_value*li_length);
	var i = 1;
	slide_ul.css({'left':-left_value*i + 'px'})
	function slide() {
		clearTimeout(test);
		slide_ul.stop().animate({'left': - (left_value*i) + 'px'},time,function(){
			if(i>=li_length-1){i = 1;}else if(i<=0){i = 4;}
			slide_ul.css({'left': - (left_value*i) + 'px'});
			var	test= setTimeout(function(){
				i++;
				slide();
			},3000);
		});
		$('.index-item').removeClass('index-item-on').eq(i-1).addClass('index-item-on');
		alert(i);
		
	}
	$('.btn-right').click(function(){
		i++;
		slide();
	});
	$('.btn-left').click(function(){
		i--;
		slide();
	});
	$('.index .index-item').click(function(){
		alert(i);
		if(i !== $('.index .index-item').index(this)+1){
			i = $('.index .index-item').index(this)+1;
			slide();
		}
	});

	var	test= setInterval(function(){
		i++;
		slide();
	},3000);

	$('.btn-play').click(function(){
		var	test= setTimeout(function(){
			i++;
			slide();
		},3000);
	});

	$('.btn-pause').click(function(){
		clearTimenout(test);
	});

	
});
*/








$(function($){
	$.fn.slidejs = function(){
		var slide_ul = this.children('ul');
		var slide_li= slide_ul.children('li');
		var left_value = slide_li.width();
		var time = 1000;
		slide_ul.append(slide_li.first().clone());
		slide_ul.prepend(slide_li.first().last().prev().clone());
		var li_length = slide_li.length;
		slide_ul.width(left_value*li_length);
		var i = 1;
		var index_a = $('.index .index-item');
		slide_ul.css({'left':-left_value*i + 'px'})
		function slide() {
			clearTimeout(test);
			slide_ul.stop().animate({'left': - (left_value*i) + 'px'},time,function(){
				if(i>=li_length-1){i = 1;}else if(i<=0){i = 4;}
				slide_ul.css({'left': - (left_value*i) + 'px'});
				test= setTimeout(function(){
					i++;
					slide();
				},3000);
			});
			$('.index-item').removeClass('index-item-on').eq(i-1).addClass('index-item-on');
			
		}
		$('.btn-right').click(function(){
			i++;
			slide();
		});
		$('.btn-left').click(function(){
			i--;
			slide();
		});
		index_a.click(function(){
			alert(i);
			if(i !== index_a.index(this)+1){
				i = index_a.index(this)+1;
				slide();
			}
		});
		test= setTimeout(function(){
				i++;
				slide();
			},3000);
		$('.btn-play').click(function(){
			clearTimeout(test);
			test= setTimeout(function(){
				i++;
				slide();
			},3000);
		});

		$('.btn-pause').click(function(){
			clearTimeout(test);
		});
	}
	$('.slide').slidejs();
});
