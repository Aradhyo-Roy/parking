canvas=document.getElementById("player");
ctx.canvas.getContext("2d");
carheight=50;
carwidth=70;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
carx=400;
cary=300;
function add() {
	backgroundimage=new Image();
	backgroundimage.onload=uploadBackground();
	backgroundimage.src=background_image;

	greencarimage=new Image();
	greencarimage.onload=uploadgreencar();
	greencarimage.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backroundimage,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencarimage,carx,cary,carwidth,carheight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(cary >=0){
        cary = cary - 10;
        uploadbackround();
        uploadgreencar();
    }
}

function down()
{
	if(cary <=500){
        cary = cary + 10;
        uploadbackround();
        uploadgreencar();
    }
}

function left()
{
	if(carx >=0){
        carx = carx - 10;
        uploadbackround();
        uploadgreencar();
    }
}

function right()
{
	if(carx <=0){
        carx = carx + 10;
        uploadbackround();
        uploadgreencar();
    }
}
