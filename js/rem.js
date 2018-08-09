
var designWidth=750;

resize();
function resize(){
	var width=document.documentElement.clientWidth;
	document.documentElement.style.fontSize=width/designWidth*100+'px';
}
window.onresize=function (){
	resize();
}