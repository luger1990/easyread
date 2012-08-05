/**
* $.easyread
* @extends jquery.1.7.1
* @fileOverview 提供更便捷的阅读方式
* @author Luger
* @email luger1990@gmail.com
* @site wwww.luger.me
* @version 0.1
* @date 2012-08-05
* Copyright (c) 2012 Luger
* @example
*    $("read").easyread({contentClass:'yourContentClass',titleClass:'yourTitleClass'});
*/
(function($) {
	function removeStyle(item){
        		item.removeAttr("style").removeAttr("class").removeAttr("id");
        		var children = item.children();
        		if(children != null) {
        			children.each(function(){
        				removeStyle($(this));
        			});
        		}
        	}

	$.fn.easyread = function(options) {
		var defaults = {
			contentClass: 'none',
			titleClass: 'none'
		};
		var opts = $.extend(defaults, options);
		var obj = $(this);
		var screenHeight = window.screen.height;
		obj.bind("click", function() {
			$("body").css({
				"overflow": "hidden"
			});
			var loading = '<div id="bg_read" style="position:fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; '
    		+          'width: 100%; height: 100%; border: none; margin: 0px; padding: 0px; overflow: hidden; '
    		+          'z-index: 99998; background-color: black; opacity: 1; ">'
    		+			'<div style="position:absolute; width:32px; height32px; left:50%; top:50%">'
    		+			'<span class="loading_read"></span></div>'
    		+			'</div>';
    		$("body").append(loading);
			var title = $("."+opts.titleClass).text();
			var content = $("."+opts.contentClass).clone();
			var contentChildren = content.children();
			contentChildren.each(function(){
    			removeStyle($(this));
    		});
    		
    		var html = '<div class="title_read" style="margin-top:'+screenHeight+'px"><h1>'
    		+			title
    		+			'</h1></div>'
    		+			'<div class="box_read"><div class="content_read">'
    		+			content.html()
    		+			'<div style="clear: both;"></div>'
    		+			'</div></div>'
    		+			'<span class="close_read"></span>'
     		$("#bg_read").append(html);
     		$(".title_read").animate({
     			marginTop:"5px"
     		},888);
     		$(".loading_read").parent("div").remove();
    		$(".close_read").bind("click",function(){
    			$("#bg_read").fadeOut(888,function(){
    				$(this).remove();
                    $("body").css("overflow","scroll");
    			} );

				return false;
				});
    		return false;
			//click function end
		});

	};
})(jQuery);