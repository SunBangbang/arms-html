Date.prototype.format=function(fmt){var o={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S":this.getMilliseconds()};if(/(y+)/.test(fmt)){fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))}for(var k in o){if(new RegExp("("+k+")").test(fmt)){fmt=fmt.replace(RegExp.$1,(RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)))}}return fmt};function getCTFType(){$.ajax({type:"post",url:"ajax.php?m=getCTFType",data:{"token":token},dataType:"json",success:function(data){debugLog(data);if(errorCheck(data)){return false}data=data[1];if(data[0]=="1"){$(".countdown").hide()}else{startTime=data[1];endTime=data[2];nowTime=(new Date().getTime()+"").substring(0,10);if(nowTime<startTime){$(".countdown").show();$("#headline").html("距离比赛开始还剩余");$(".countdown").downCount({date:new Date(startTime*1000).format("M/d/yyyy hh:mm:ss"),offset:+8})}else{if(nowTime>=startTime&&nowTime<=endTime){$(".countdown").downCount({date:new Date(endTime*1000).format("M/d/yyyy hh:mm:ss"),offset:+8},function(){debugLog("比赛已经结束")});$(".countdown").show();$("#headline").html("比赛正进行中")}else{$(".countdown").hide();$("#headline").html("比赛已经结束")}}}},error:function(data){debugLog(data)}});return false}function countSeconds(){getCTFType();setTimeout("countSeconds()",1000)}$(document).ready(function(){getCTFType();countSeconds();$.fn.downCount=function(options,callback){var settings=$.extend({date:null,offset:null},options);if(!settings.date||!Date.parse(settings.date)){$.error("Date not found or Incorrect date format")}var container=this;var currentDate=function(){var date=new Date();var utc=date.getTime()+(date.getTimezoneOffset()*60000);var new_date=new Date(utc+(3600000*settings.offset));return new_date};function countdown(){var target_date=new Date(settings.date),current_date=currentDate();var difference=target_date-current_date;if(difference<0){clearInterval(interval);if(callback&&typeof callback==="function"){callback()}return}var _second=1000,_minute=_second*60,_hour=_minute*60,_day=_hour*24;var days=Math.floor(difference/_day),hours=Math.floor((difference%_day)/_hour),minutes=Math.floor((difference%_hour)/_minute),seconds=Math.floor((difference%_minute)/_second);days=(String(days).length>=2)?days:"0"+days;hours=(String(hours).length>=2)?hours:"0"+hours;minutes=(String(minutes).length>=2)?minutes:"0"+minutes;seconds=(String(seconds).length>=2)?seconds:"0"+seconds;var ref_days=(days===1)?"day":"days",ref_hours=(hours===1)?"hour":"hours",ref_minutes=(minutes===1)?"minute":"minutes",ref_seconds=(seconds===1)?"second":"seconds";container.find(".days").text(days+" 天");container.find(".hours").text(hours+" :");container.find(".minutes").text(minutes+" :");container.find(".seconds").text(seconds);container.find(".days_ref").text(ref_days);container.find(".hours_ref").text(ref_hours);container.find(".minutes_ref").text(ref_minutes);container.find(".seconds_ref").text(ref_seconds)}var interval=setInterval(countdown,1000)};DEBUG?null:console.clear();window.console&&window.console.log("%c\u0054\u0069\u0030\u0073\u0043\u0054\u0046\u7ade\u6280\u5e73\u53f0%c Version: Bate 1.0 Copyright \u00a9 2018-%s","color:#52BAF5; text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em","font-size:12px;color:#5db8f8;",(new Date).getFullYear());console.log("%c \u6e29\u99a8\u63d0\u793a\uff1a\u53d1\u73b0Bug\u8bf7\u53ca\u65f6\u8ddf\u6211\u53cd\u9988(\u30fb\u03c9\u30fb)","font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;color:#F87D53;");console.log("%c \u8fd9\u91cc\u6709\u6211\u7684\u8054\u7cfb\u65b9\u5f0f(o^.^o) Mail：idlab@ahcssec.com.cn","color:#00cc00")});