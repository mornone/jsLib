/**
 * Copyright©2012 Xiamen Meiah Pico IT CO., Ltd. 
 * All rights reserved.
 */

var callbackFun;

function closeAlertWin(){
     if(callbackFun)
    	 callbackFun();    
     $(".alertWin").remove();
     $("#XYTipsWindowBg").remove();
  }

//此弹出框为非阻塞框，可将弹出框关闭后要执行的代码放在回调函数中
function customAlert(title,msg,fun){
	if($(".alertWin").length==0 && $("#XYTipsWindowBg").length==0){
		var $boxBgDom="<div id='XYTipsWindowBg' style='position:absolute;background:#000000;filter:alpha(opacity=0);opacity:0;width:100%;left:0;top:0;z-index:870618'><iframe src='about:blank' style='width=100%;height:"+$(document).height()+"px;filter:alpha(opacity=0);opacity:0;z-index:870610' scrolling='no' frameBorder='no'></iframe></div>";
		$($boxBgDom).appendTo("body").animate({opacity:0.5},200);
		var $boxDom;
		callbackFun=fun;
		$boxDom += "<div class='alertWin' id='alertWinId'>";
		$boxDom += "<div class='bt'>";
		$boxDom += "<div class='bt_top'>";
		$boxDom += "<div class='clear'/>";
		$boxDom += "<div class='close' onclick='closeAlertWin();'></div>";
		$boxDom += "<div class='title'><a name='#top'></a>"+title+"</div></div>";
		$boxDom += "</div>";
		$boxDom += "<div class='cont_bottom'>";
		$boxDom += "<div class='msg'><span class='txt'>"+msg+"</span></div>";
		$boxDom += "<input name=''  onclick='closeAlertWin();' type='button' class='eject_btn' style='width:100px;' value=' 确定' />";
		$boxDom += "</div>";
		//使用iframe解决IE6下弹出层被下拉框覆盖的问题
		$boxDom += "<iframe  class='iframe_Y' src='' scrolling='no' frameBorder='no'></iframe>";
		$boxDom += "</div>";
		$($boxDom).appendTo("body");
	}	
 }  

function customAlarmAlert(title,msg,fun){
	if($(".alertWin").length==0 && $("#XYTipsWindowBg").length==0){
		var $boxBgDom="<div id='XYTipsWindowBg' style='position:absolute;background:#000000;filter:alpha(opacity=0);opacity:0;width:100%;left:0;top:0;z-index:870618'><iframe src='about:blank' style='width=100%;height:"+$(document).height()+"px;filter:alpha(opacity=0);opacity:0;z-index:870610' scrolling='no' frameBorder='no'></iframe></div>";
		$($boxBgDom).appendTo("body").animate({opacity:0.5},200);
		var $boxDom;
		callbackFun=fun;
		$boxDom += "<div class='alertWin' id='alertWinId'>";
		$boxDom += "<div class='bt'>";
		$boxDom += "<div class='bt_top'>";
		$boxDom += "<div class='clear'/>";
		$boxDom += "<div class='close' onclick='closeAlertWin();'></div>";
		$boxDom += "<div class='title'><a name='#top'></a>"+title+"</div></div>";
		$boxDom += "</div>";
		$boxDom += "<div class='cont_bottom'>";
		$boxDom += "<div class='msg'>";
		$boxDom += "<img src='"+contextPath+"/images/customAlert/alarm.jpg' style='vertical-align:-9px;'>";
		$boxDom += "<span style='padding-left:10px;'>"+msg+"</span></img></div>";
		$boxDom += "<input name=''  onclick='closeAlertWin();' type='button' class=' eject_btn' style='width:100px;' value=' 确定' />";
		$boxDom += "</div>";
		$boxDom += "<iframe  class='iframe_Y' src='' scrolling='no' frameBorder='no'></iframe>";
		$boxDom += "</div>";
		$($boxDom).appendTo("body");
	}	
 }  

function customSuccessAlert(title,msg,fun){
	if($(".alertWin").length==0 && $("#XYTipsWindowBg").length==0){
		var $boxBgDom="<div id='XYTipsWindowBg' style='position:absolute;background:#000000;filter:alpha(opacity=0);opacity:0;width:100%;left:0;top:0;z-index:870618'><iframe src='about:blank' style='width=100%;height:"+$(document).height()+"px;filter:alpha(opacity=0);opacity:0;z-index:870610' scrolling='no' frameBorder='no'></iframe></div>";
		$($boxBgDom).appendTo("body").animate({opacity:0.5},200);
		var $boxDom;
		callbackFun=fun;
		$boxDom += "<div class='alertWin' id='alertWinId'>";
		$boxDom += "<div class='bt'>";
		$boxDom += "<div class='bt_top'>";
		$boxDom += "<div class='clear'/>";
		$boxDom += "<div class='close' onclick='closeAlertWin();'></div>";
		$boxDom += "<div class='title'><a name='#top'></a>"+title+"</div></div>";
		$boxDom += "</div>";
		$boxDom += "<div class='cont_bottom'>";
		$boxDom += "<div class='msg'>";
		$boxDom += "<img src='"+contextPath+"/images/customAlert/success.jpg' style='vertical-align:-9px;'>";
		$boxDom += "<span style='padding-left:10px;'>"+msg+"</span></img></div>";
		$boxDom += "<input name=''  onclick='closeAlertWin();' type='button' class=' eject_btn' style='width:100px;' value=' 确定' />";
		$boxDom += "</div>";
		$boxDom += "<iframe  class='iframe_Y' src='' scrolling='no' frameBorder='no'></iframe>";
		$boxDom += "</div>";
		$($boxDom).appendTo("body");
	}	
 }  

//重写alert
/*function alert(msg){
	customAlert("温馨提示",msg);
}*/
//带感叹号提示的弹出框（表示警告）
function alarmAlert(msg){
	customAlarmAlert("温馨提示",msg);
}
//带打钩提示的弹出框（表示成功）
function successAlert(msg){
	customSuccessAlert("温馨提示",msg);
}



var sureCallbackFun;
var cancelCallbackFun;

/**
 * @param title
 * @param msg
 * @param sureFun     点确定时要执行的回调函数
 * @param cancelFun   点取消时要执行的回调函数
 * @param fun         confirm框关闭时要执行的回调函数
 */
function customConfirm(title,msg,sureFun,cancelFun,fun){
	if($(".alertWin").length==0 && $("#XYTipsWindowBg").length==0){
		//创建遮罩层
		var $boxBgDom="<div id='XYTipsWindowBg' style='position:absolute;background:#000000;filter:alpha(opacity=0);opacity:0;width:100%;left:0;top:0;z-index:870618'><iframe src='about:blank' style='width=100%;height:"+$(document).height()+"px;filter:alpha(opacity=0);opacity:0;z-index:870610' scrolling='no' frameBorder='no'></iframe></div>";
		$($boxBgDom).appendTo("body").animate({opacity:0.5},200);
		//创建弹出框
		var $boxDom;
		sureCallbackFun=sureFun;
		cancelCallbackFun=cancelFun;
		callbackFun=fun;
		$boxDom += "<div class='alertWin' id='confirmWinId'>";
		$boxDom += "<div class='bt'>";
		$boxDom += "<div class='bt_top'>";
		$boxDom += "<div class='close' onclick='closeAlertWin();'></div>";
		$boxDom += "<div class='title'><a name='#top'></a>"+title+"</div></div>";
		$boxDom += "</div>";
		$boxDom += "<div class='cont_bottom'>";
		if(strLength(msg) <= 42){
			$boxDom += "<div class='msg'>";
			$boxDom += "<img src='"+contextPath+"/images/customAlert/alarm.jpg' style='vertical-align:-9px;'>";
			$boxDom += "<span style='padding-left:10px;'>"+msg+"</span></img></div>";
		}else{
			$boxDom += "<div class='msg'>"+msg+"</div>";
		}
		$boxDom += "<input name=''  onclick='sureConfirmWin();' type='button' class=' eject_btn' style='width:70px;' value=' 确定' />";
		$boxDom += "<input name=''  onclick='cancelConfirmWin();' type='button' class=' eject_cancle_btn' style='width:70px;' value=' 取消' />";
		$boxDom += "</div>";
		$boxDom +=  "<iframe  class='iframe_Y' src='' scrolling='no' frameBorder='no'></iframe>";
		$boxDom += "</div>";
		$($boxDom).appendTo("body");

	}	
 }  

function sureConfirmWin(){
    if(sureCallbackFun)
    	sureCallbackFun();  
    closeAlertWin();
 }

function cancelConfirmWin(){
    if(cancelCallbackFun)
    	cancelCallbackFun();
    closeAlertWin();
}
