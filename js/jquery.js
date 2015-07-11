
$(function($){
	$.fn.slidejs = function(){
		var slide_ul = this.children('ul');		
		var left_value = slide_li.width();
		slide_ul.append($('.slide li:first-child').clone());
		slide_ul.prepend($('.slide li:last-child').prev().clone());
		var slide_li= slide_ul.children('li');
		var time = 1000;
		var li_length = slide_li.length;
		alert(li_length);
		slide_ul.css({'width':left_value*6+ 'px'});
		var i = 1;
		var index_a = $('.index .index-item');
		slide_ul.css({'left':-left_value*i + 'px'})
		function slide() {
			clearTimeout(test);
			slide_ul.stop().animate({'left': - (left_value*i) + 'px'},time,function(){
				if(i>=5){i = 1;}else if(i<=0){i = 4;}
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