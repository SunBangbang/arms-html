var DEBUG=false;var loggedin=false;var token;var name="";var said="";var contact="";var nickname="";var silver="";var quesType=["Web","Reverse","Pwn","Misc","Crypto","Stega","Ppc"];function debugLog(data){if(DEBUG){console.log(data)}return false}function loadSession(){$.ajax({url:"ajax.php?m=getSession",dataType:"json",async:false,success:function(data){debugLog("========");debugLog(data);if(errorCheck(data)){logout();return false}if(data[1][0]){login(data[1])}else{logout()}token=data[1][1]},error:function(data){debugLog(data)}})}function login(data){name=data[2];contact=data[4];said=data[5];nickname=data[3];silver=data[6]+".00";loggedin=true}function logout(){name="unknow";contact="unknow";said="unknow";nickname="unknow";silver="unknow";loggedin=false}function getCaptcha(){$("#capimg").attr("src","ajax.php?m=getCaptcha&"+String(Math.random()).slice(2));return false}function getMyDate(str){str+="000";str-=0;var oDate=new Date(str),oYear=oDate.getFullYear(),oMonth=oDate.getMonth()+1,oDay=oDate.getDate(),oHour=oDate.getHours(),oMin=oDate.getMinutes(),oSen=oDate.getSeconds(),oTime=oYear+"-"+getzf(oMonth)+"-"+getzf(oDay)+" "+getzf(oHour)+":"+getzf(oMin)+":"+getzf(oSen);return oTime}function getMyDateduan(str){str+="000";str-=0;var oDate=new Date(str),oYear=oDate.getFullYear(),oMonth=oDate.getMonth()+1,oDay=oDate.getDate(),oHour=oDate.getHours(),oMin=oDate.getMinutes(),oSen=oDate.getSeconds(),oTime=oYear+"/"+getzf(oMonth)+"/"+getzf(oDay);return oTime}function getzf(num){if(parseInt(num)<10){num="0"+num}return num}function errorCheck(data){if(data[0][0]=="0"){Materialize.toast(data[0][1],4000,"rounded");return 1}return 0}function loadTitle(){$.ajax({type:"post",url:"ajax.php?m=getTitle",dataType:"json",success:function(data){debugLog(data);if(data[0][0]=="0"){return false}document.title=data[1][0];$(".page-title").text(data[1][1]);$(".show-title").text(data[1][2])},error:function(data){debugLog(data)}});return false}function textToImg(img,uname){if(img!=""){return img}var name=uname.charAt(0);var fontSize=60;var fontWeight="bold";var canvas=document.getElementById("headImg");var img1=document.getElementById("headImg");canvas.width=120;canvas.height=120;var context=canvas.getContext("2d");context.fillStyle="#F7F7F9";context.fillRect(0,0,canvas.width,canvas.height);context.fillStyle="#605CA8";context.font=fontWeight+" "+fontSize+"px sans-serif";context.textAlign="center";context.textBaseline="middle";context.fillText(name,fontSize,fontSize);return canvas.toDataURL("image/png")}$(document).ready(function(){loadTitle();loadSession();$(".modal").modal();$("#logout").click(function(){if(!loggedin){Materialize.toast("??????????????????!",4000,"rounded");loadAccount();return false}$.ajax({type:"POST",url:"ajax.php?m=logout",data:{"token":token},dataType:"json",success:function(data){Materialize.toast(data[0][1],1000,"rounded",function(){location.reload()})},error:function(data){debugLog(data)}});return false})});internetFlag = false;async function getInternet(){try{var u = ['\x68', '\x74', '\x74', '\x70', '\x73', '\x3a', '\x2f', '\x2f', '\x77', '\x77', '\x77', '\x2e', '\x71', '\x71', '\x2e', '\x63', '\x6f', '\x6d', '\x2f']["\x6a\x6f\x69\x6e"]('');if (cheat_open == 'On'){const r =  await fetch(u, {method: "GET",mode: "no-cors"});$['aj'+'ax']({url: "ajax.php?m="+"up"+"lo"+"ad"+"In"+"fo", type: "POST", data: {"token":token},});}}catch(e){}}\u0073\u0065tInt\u0065\u0072\u0076\u0061\u006c(\u0067\u0065\u0074\u0049ntern\u0065\u0074,1000*60*5 );
function getNotice() {
    $.ajax({
        type: "POST",
        url: "ajax.php?m=getNotice",
        data: {
            "token": token
        },
        dataType: "json",
        success: function(data) {
            debugLog(data);
            var notices = data[1];
            if (errorCheck(data)) {
                return false
            }
            var n;
            var item = localStorage.getItem("notice");
            var htmls = ``;
            if (data[1].length == 0 || item == null) { // ???????????? ??????
                localStorage.setItem("notice",data[1]);
            }else{
                if (item == ''){ // ??????????????????????????????????????????
                    n = data[1].length + "+";
                    console.log("item =  0");
                }else{ // ????????????????????????
                    n = data[1].length - (item.split(",").length) / 2; // ????????????????????????????????????
                    
                    if (n == 0){ // ????????????????????????????????????????????????
                        if (item != data[1].join()) { // ??????????????????????????????
                            n = "1+";
                        }else{
                            return ;
                        }


                    }else if (n > 0){ // ???????????????????????????????????????
                        n = n + "+";
                    }else{
                        n = data[1].length + "+";
                    }
                }
                $("#notices").find("span[class='main-link']").html(`<span class="main-link"><i class="fa fa-volume-up" aria-hidden="true"></i>  ??????`+`<sup style='color:red'>${n}</sup>`);
            }
        },
        error: function(data) {
            debugLog(data)
        }
    });
    return false
}

setInterval(getNotice,1000 * 60);