var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var xLobo = 150, yLobo = 150;

var cantidadVacas = random(1, 9);
var cantidadCerdos = random(1, 9);
var cantidadPollos = random(1, 9);

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var lobo = {
    url: "lobo.png",
    cargaOK: false
};

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    mantenerPosicion();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    mantenerPosicion();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    mantenerPosicion();
}

function cargarLobo()
{
    lobo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if( fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(lobo.cargaOK)
    {
        papel.drawImage(lobo.imagen, xLobo, yLobo);
    }
    if(vaca.cargaOK)
    {
        for(var i = 0; i < cantidadVacas; i++)
        {
            papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
        }
    }

    if(cerdo.cargaOK)
    {
        for(var i = 0; i < cantidadCerdos; i++)
        {
            papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
        }
    }

    if(pollo.cargaOK)
    {
        for(var i = 0; i < cantidadPollos; i++)
        {
            papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
        }
    }
}

function mantenerPosicion()
{
	if(vaca.cargaOK)
	{
		for(var i = 0; i < cantidadVacas; i++)
		{
			var x = random(0, 6);
			var y = random(0, 6);
			x = x * 70;
			y = y * 70;
			xVaca[i] = x;
			yVaca[i] = y; 		
		}
	}

    if(cerdo.cargaOK)
	{
		for(var i = 0; i < cantidadCerdos; i++)
		{
			var x = random(0, 6);
			var y = random(0, 6);
			x = x * 70;
			y = y * 70;
			xCerdo[i] = x;
			yCerdo[i] = y; 		
		}
	}

    if(pollo.cargaOK)
	{
		for(var i = 0; i < cantidadPollos; i++)
		{
			var x = random(0, 6);
			var y = random(0, 6);
			x = x * 70;
			y = y * 70;
			xPollo[i] = x;
			yPollo[i] = y; 		
		}
	}
    dibujar();
}
function moverLobo(evento)
{
    var movimiento = 5;
    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT:37,
        RIGHT:39
    };
    if(evento.keyCode == teclas.UP){
        yLobo =  yLobo - movimiento;
        dibujar(xLobo,yLobo);
        console.log("vamos pa arriba papulin")
    }
    else if(evento.keyCode == teclas.DOWN){
        yLobo =  yLobo + movimiento;
        dibujar(xLobo,yLobo);
        console.log("vamos pa abajo");
    }
    else if(evento.keyCode == teclas.LEFT){
        xLobo = xLobo - movimiento;
        dibujar(xLobo,yLobo);
        console.log("vamos pa la izquierda");
    }
    else if(evento.keyCode == teclas.RIGHT){
        xLobo = xLobo + movimiento;
        dibujar(xLobo,yLobo);
        console.log("vamos pa la derecha");
    }
    else{
        console.log("No hare nada");
    } 
}

function random(min, max)
{
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}