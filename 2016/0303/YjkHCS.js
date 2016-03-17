
/*!
 * author：YJK 
 * date:2015年10月27日11:08:02
 * charset：UTF-8
 * version：1.0
 * 依赖：jquery.js
 * 示例：	
 */
/*头文件，不明觉厉*/
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["jquery"], function ($) {
      return (root.returnExportsGlobal = factory($));
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
  
}(this, function ($) {
	
	
	
	enc=function(htmlS){
			 return htmlS.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',' ':'&nbsp;'}[c];});
	}

	dec=function(htmlS){
			return htmlS.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return {'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}[t];});
	}
		
/******************************************************************************************/		
		
//普通字符转换成转意符
$.fn.HCS = function(options) {
	options=  $.extend({}, $.fn.HCS["default"], options);
	var htmlS=$(this).html(); 
	
	if(options.securityScript){
				htmlS=	htmlS.replace(/script\S*\/script/g,'<span class="atwho-inserted" style="color:red">此处已屏蔽 不服你咬我？</span>'); //屏蔽掉<script></script>
	}
  return enc(htmlS);
	
};
	
	
//转意符转换成普通字符
$.fn.SCH = function(options) {
   options=  $.extend({}, $.fn.HCS["default"], options);
	var htmlS=options.html; 
	
	$(this).html(dec(htmlS))
	
	return dec(htmlS);

	
};	
	
/* 匹配 INPUT 并且提取Name 和值 组装成JSON */
$.fn.elParam = function(){
	var cycle=$(this);
	
        var result = {};
        $(cycle).each(function(){//循环input标签
					  if($(this).attr("disabled")) return; //过滤只读
			
            var type= $(this).attr("type");
            if(type&&(type.toLocaleLowerCase()=="radio"||type.toLocaleLowerCase() == "checkbox")&&!($(this).attr("checked")))return;
					
					
            var name = $(this).attr("name");
            var value = $(this).val();
            if(name&&value){
							if("undefined"==typeof(result[name])){ 
								result[name] =  value;
							}else{
							 result[name] =result[name]+","+  value; //如果多个值 则
							}
							
            }
        });
        return result;
    }
	
	
	
	
	
//默认
$.fn.HCS["default"] = {
	securityScript:false,html:""
};
	
	
}));