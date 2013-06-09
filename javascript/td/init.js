$(function(){
	initImage();
	
	window.setTimeout(__init , 3000);
});

var __init = function (){
	$("#loadingDiv").remove();
	init();		
	initBackGround();
	initMap();
	initTower();
	initController();
	//��ʼִ������
	startTask();
	//��ʼ׼����������ʱ
	mybeStartAttack();

};




//��ʼ�� canvas �� context
var init = function(){				
	$("canvas").attr("width" , canvasWidth);
	$("canvas").attr("height" , canvasHeight);

	$("#background_canvas").attr("width" , canvasWidth);
	$("#background_canvas").attr("height" , canvasHeight);
	
	//canvas init
	map_canvas = $("#map_canvas")[0];
	mouster_canvas = $("#mouster_canvas")[0];
	bullet_canvas = $("#bullet_canvas")[0];
	tower_canvas = $("#tower_canvas")[0];
	background_canvas = $("#background_canvas")[0];
	bak_canvas        = $("#bak_canvas")[0];
	tower_info_canvas = $("#tower_info_canvas")[0];
	info_canvas       = $("#info_canvas")[0];

	//context init
	bak_context        = bak_canvas.getContext('2d');
	map_context		   = map_canvas.getContext('2d');
	background_context = background_canvas.getContext('2d');
	tower_context	   = tower_canvas.getContext('2d');
	tower_info_context = tower_info_canvas.getContext('2d');
	mouster_context    = mouster_canvas.getContext('2d');
	bullet_context     = bullet_canvas.getContext('2d');
	info_context       = info_canvas.getContext('2d');
	
};



var initImage = function(){
	backGround_img = new Image();
	backGround_img.src = 'image/background.png';
	
	floor_img = new Image();
	floor_img.src = 'image/floor.png';
	floor1_img = new Image();
	floor1_img.src = 'image/floor1.png';
	floor2_img = new Image();
	floor2_img.src = 'image/floor2.png';
	floor3_img = new Image();
	floor3_img.src = 'image/floor3.png';
	floor4_img = new Image();
	floor4_img.src = 'image/floor4.png';
	floor5_img = new Image();
	floor5_img.src = 'image/floor5.png';	
	icon_img = new Image();
	icon_img.src = 'image/icon.png';
	icon_img1 = new Image();
	icon_img1.src = 'image/icon1.png';

	logo_img = new Image();
	logo_img.src = 'image/logo.png';
	back_img = new Image();
	back_img.src = 'image/back.png';
	
	tower1_img = new Image();
	tower1_img.src = 'image/tower1.png';
	tower2_img = new Image();
	tower2_img.src = 'image/tower2.png';
	tower3_img = new Image();
	tower3_img.src = 'image/tower3.png';
	tower4_img = new Image();
	tower4_img.src = 'image/tower4.png';
	mouster1_img = new Image();
	mouster1_img.src= 'image/mouster1.png';
	mouster2_img = new Image();
	mouster2_img.src= 'image/mouster2.png';
	mouster3_img = new Image();
	mouster3_img.src= 'image/mouster3.png';

	mouster4_img = new Image();
	mouster4_img.src= 'image/mouster4.png';

	end_img = new Image();
	end_img.src = 'image/end.png';
	bullet1_img = new Image();
	bullet1_img.src = 'image/bullet1.png';
	bullet2_img = new Image();
	bullet2_img.src = 'image/bullet2.png';
	info_img = new Image();
	info_img.src  =  'image/info.jpg';

	time_img = new Image();
	time_img.src = 'image/time.png';

	blood_img = new Image();
	blood_img.src = 'image/blood.gif';

	slower_img = new Image();
	slower_img.src = 'image/slower.png';

}





