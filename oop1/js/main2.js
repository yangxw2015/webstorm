var mainBox = document.getElementById("mainBox");
var ourPlane = new myPlane(0,0);
ourPlane.createPlane("selfPlane");
var selfPlane = document.getElementById("selfPlane");
var time = setInterval(function(){
	oLeft  = parseInt(selfPlane.style.left)+selfPlane.offsetWidth/2+"px";
	oTop = selfPlane.style.top;
	var myBullet = new bullet(oLeft,oTop);
	myBullet.createBullet();
},100)
mainBox.onmousemove = function(e){
	var e = event||window.event;
	var oLeft = e.clientX - mainBox.offsetLeft - selfPlane.offsetWidth/2;
	var oTop = e.clientY - mainBox.offsetTop - selfPlane.offsetHeight/2;
	if(oLeft<=0){
		oLeft=0;
	}
	if(oLeft>=(mainBox.offsetWidth-selfPlane.offsetWidth)){
		oLeft = mainBox.offsetWidth-selfPlane.offsetWidth;
	}
	if(oTop<=0){
		oTop=0;
	}
	if(oTop>=(mainBox.offsetHeight-selfPlane.offsetHeight)){
		oTop = mainBox.offsetHeight-selfPlane.offsetHeight;
	}
	selfPlane.style.left = oLeft + "px";
	selfPlane.style.top = oTop + "px";
	mainBox.style.cursor = "none";
}
mainBox.onmouseout = function(){
	mainBox.style.cursor = "";
}
function plane(x,y,hp,imgsrc,speed){
	this.planex = x;
	this.planey = y;
	this.planeSpeed = speed;
	this.hp = hp;
	this.imgsrc = imgsrc;
	this.createPlane = function(id){
		this.planeNode = document.createElement("img");
		this.planeNode.id = id
		this.planeNode.src = this.imgsrc;
		this.planeNode.style.left = this.planex+"px";
		this.planeNode.style.top = this.planey+"px";
		this.planeNode.style.position = "absolute";
		mainBox.appendChild(this.planeNode);
		if(this.planeSpeed!=0){
			this.move();
		}		
	}
	this.move = function(){
		var that = this;
		this.time = setInterval(function(){
			var step = 0;
			step += that.planeSpeed;
			that.planeNode.style.top = step + "px";
		},1)	
	}
}
function myPlane(X,Y){
	plane.call(this,X,Y,1,"images/我的飞机.gif",0);
}
function bullet(X,Y){
	this.bulletx = X;
	this.bullety = Y;
	this.createBullet = function(){
		this.bulletNode = document.createElement("img");
		this.bulletNode.src = "images/bullet1.png";
		this.bulletNode.style.position = "absolute";
		this.bulletNode.style.left = this.bulletx;
		this.bulletNode.style.top = this.bullety;
		mainBox.appendChild(this.bulletNode);
		this.move();
	}
	this.move = function(){
		var speed = 2;
		var that = this;
		this.time = setInterval(function(){
			var step = 0;
			step -= speed;
			that.bulletNode.style.top = parseInt(that.bulletNode.style.top) + step + "px";
			if(parseInt(that.bulletNode.style.top)<=0){
				clearInterval(that.time);
				that.bulletNode.parentNode.removeChild(that.bulletNode);
			}
		},1)
	}
}
