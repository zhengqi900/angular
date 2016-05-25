$(document).ready(function() {
	showtime=function(){
		var timestart = new Date().getTime();
		var timeout = new Date(2016,1,6,18,00).getTime();
		var time_back = timeout - timestart ;
		var day = Math.floor(time_back/86400000);
		time_back -= day*86400000;
		var time = Math.floor(time_back/3600000);
		time_back -= time*3600000;
		var minute = Math.floor(time_back/60000);
		time_back -= minute*60000;
		var second = Math.floor(time_back/1000);
		$("#d1").html(day+"天");
		$("#d2").html(time+"时");
		$("#d3").html(minute+"分");
		$("#d4").html(second+"秒");
		if(time_back<=0){
			alert("春节放假了");
			return false;
		}
	}
	showtime();
	var init = setInterval(function(){showtime()},1000);

	function abc(num){
		if(num>3){
			abc(--num);
		}
		console.log(num);		
	}  
	abc(5);
});