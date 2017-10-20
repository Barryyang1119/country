$(function () {
	
	$('#search').focus(function(){
		$('<div class="shadow"></div>').appendTo($('body'));
	})
	$('#search').blur(function(){
		$('.shadow').remove();
	})
    //加载城市事件
    $('.container').show();
	//选择城市 start
    $('body').on('click', '.country-list p', function () {
        alert($(this).attr('data-id'))
    });
    //点击索引查询城市
    $('body').on('click', '.letter a', function () {
        var s = $(this).html();
        $(window).scrollTop($('#' + s + '1').offset().top);
        $("#showLetter span").html(s);
        $("#showLetter").show().delay(500).hide(0);
    });
     //中间的标记显示
     $('body').on('onMouse', '.showLetter span', function () {
        $("#showLetter").show().delay(500).hide(0);
    });
    
    
    $.ajax({
    	url: './json/country.json',
    	type: 'get',
    	data: '',
    	success: function(data){
			for (var i = 0; i < data.country.length; i++) {
				switchCase(data.country[i].title.slice(0,1), data.country[i].id, data.country[i].title)
			}
    		$("#search").bigAutocomplete({
				width:'92%',
				data:data.country,
				callback:function(data){
					alert(data.title);	
				}
			});
    	},
    	error: function(){
    		
    	}
    })
    function switchCase(n,id,name){
    	switch(n){
			case 'A':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'B':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'C':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'B':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'D':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'E':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'F':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'G':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'H':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'I':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'J':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'K':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'L':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'M':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'N':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'O':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'P':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'Q':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'R':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'S':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'T':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'U':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'V':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'W':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'X':{
			console.log($('#'+n+'1').parent())
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'Y':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			case 'Z':{
				$('<p data-id="'+ id +'">'+ name +'</p>').appendTo($('#'+ n +'1').parent())
				break;
			}
			default:
		}
    }
    
    

})