/*---Summary-------------------
#MENU
#DADO
#Bolsa de Valores
#BANCO
---------------------*/

//----MENU-------------------------------------------------------------------------

function onDado(){	
	document.getElementById("banco").innerHTML ='';
	document.getElementById("dado").innerHTML ='<button class="btnDado" onClick="sortear();">Sortear</button>';
	document.getElementById("bolsa").innerHTML ='';
	document.getElementById("banco").style.marginBottom = "0px";
	document.getElementById("valorVariacao").innerHTML = '';
	document.getElementById("valorVariacao").style.height = "188px";
}

function onBolsa(){	
	document.getElementById("dado").innerHTML ='';
	document.getElementById("bolsa").innerHTML ='<button class="btnRandom" onClick="variar();">Variar</button>';
	document.getElementById("banco").innerHTML ='';	
	document.getElementById("banco").style.marginBottom = "0px";
	document.getElementById("valorVariacao").innerHTML = '';
	document.getElementById("valorVariacao").style.height = "188px";
	
}

function onBanco(){	
	document.getElementById("dado").innerHTML ='';
	document.getElementById("banco").innerHTML =
	'<div id="grafico"><canvas id="chart-area" width="300" height="300"/></div>' + 
	'<div id="valores"> <div id="valor1" class="valorStyle">'+lucro1+'</div>'+
	'<div id="valor2" class="valorStyle">'+lucro2+'</div>'+
	'<div id="valor3" class="valorStyle">'+lucro3+'</div>'+
	'<div id="valor4" class="valorStyle">'+lucro4+'</div>'+
	'<div id="valor5" class="valorStyle">'+lucro5+'</div>'+
	'<div id="valor6" class="valorStyle">'+lucro6+'</div>'+
	'</div>'+
	'<div id="play1" class="players"></div>' +
	'<div id="play2" class="players"></div>'+
	'<div id="play3" class="players"></div>'+ 
	'<div id="play4" class="players"></div>'+
	'<div id="play5" class="players"></div>'+
	'<div id="play6" class="players"></div></div>';
	
	document.getElementById("banco").style.marginBottom = "-55px";
	document.getElementById("bolsa").innerHTML ='';
	document.getElementById("valorVariacao").innerHTML = '';
	document.getElementById("valorVariacao").style.height = "0";
	document.getElementById("valorVariacao").style.marginTop = "-10px";

	mostrarContas();
	
	//adicionarPlay();
	var pieData = [
				{
					value: lucro1,
					color:"#00A9B9",
					highlight: "#00B7B7",
					label: "AppleBr"
				},
				{
					value: lucro2,
					color: "#B12273",
					highlight: "#BF4289",
					label: "SuperEmpresa"
				},
				{
					value: lucro3,
					color: "#84B259",
					highlight: "#B0D68C",
					label: "TCCNow"
				},
				{
					value: lucro4,
					color: "#BD3231",
					highlight: "#D85858",
					label: "QuebradaSA"
				},
				{
					value: lucro5,
					color: "#563E89",
					highlight: "#7661A4",
					label: "Investe AL"
				},
				{
					value: lucro6,
					color: "#DD962A",
					highlight: "#EFB152",
					label: "The Win"
				}

			];

			var ctx = document.getElementById("chart-area").getContext("2d");
			window.myPie = new Chart(ctx).Pie(pieData);
			
	
}



//----DADO-------------------------------------------------------------------------

//Transição dos números
function number1(){
document.getElementById("valorVariacao").innerHTML ='<spam class="resultDado">'+"1"+'</spam>';
}

function number2(){
document.getElementById("valorVariacao").innerHTML ='<spam class="resultDado">'+"2"+'</spam>';
}

function number3(){
document.getElementById("valorVariacao").innerHTML ='<spam class="resultDado">'+"3"+'</spam>';
}

function number4(){
document.getElementById("valorVariacao").innerHTML ='<spam class="resultDado">'+"4"+'</spam>';
}

function number5(){
document.getElementById("valorVariacao").innerHTML ='<spam class="resultDado">'+"5"+'</spam>';
}

function number6(){
document.getElementById("valorVariacao").innerHTML ='<spam class="resultDado">'+"6"+'</spam>';
}

function sortear(){

	setTimeout(number1,50);
	setTimeout(number2,100);
	setTimeout(number3,150);
	setTimeout(number4,200);
	setTimeout(number5,250);
	setTimeout(number6,300);
	
	setTimeout(mostraDado,350);
	
	//Condições
	function mostraDado(){
	
		var numberDado = Math.round(Math.random() * (6 -1)+1);
	
		document.getElementById("valorVariacao").innerHTML ='<spam class="resultDado">'+numberDado+'</spam>';
		
	}	

}



//----Bolsa de Valores-------------------------------------------------------------

//Transição dos números
function motion(){
document.getElementById("valorVariacao").innerHTML ="<span class='perda'>"+ "<span class='valor'>" +"- "+"3";
}

function motion2(){
document.getElementById("valorVariacao").innerHTML ="<span class='perda'>"+ "<span class='valor'>" +"- "+"2";
}

function motion3(){
document.getElementById("valorVariacao").innerHTML ="<span class='perda'>"+ "<span class='valor'>" +"- "+"1";
}

function motion4(){
document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+ "+ "+"1";
}

function motion5(){
document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+"+ "+"2";
}

function motion6(){
document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+"+ "+"3";
}

function motion7(){
document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+"+ "+"4";
}

//Botão variar números
function variar(){
	setTimeout(motion,50);
	setTimeout(motion2,100);
	setTimeout(motion3,150);
	setTimeout(motion4,200);
	setTimeout(motion5,250);
	setTimeout(motion6,300);
	setTimeout(motion7,350);
	
	setTimeout(condicoes,400);
	
	
	//Condições
	function condicoes(){
	
		var variacaoBolsa = Math.round(Math.random() * (11 -1)+1);
	
		if(variacaoBolsa <= 5){
			document.getElementById("valorVariacao").innerHTML ="<span class='perda'>"+ "<span class='valor'>" + "- "+ variacaoBolsa;
		}
		
		if(variacaoBolsa == 6){
			document.getElementById("valorVariacao").innerHTML ='<span class="equilibrado">'+ "<span class='valor'>";
		}
		
		if(variacaoBolsa == 7){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+ "+ 1";
		}
		
		if(variacaoBolsa == 8){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">'+ "<span class='valor'>" + "+ 2";
		}
		
		if(variacaoBolsa == 9){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>" + "+ 3";
		}
		
		if(variacaoBolsa == 10){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+ "+ 4";
		}
		
		if(variacaoBolsa == 11){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+ "+ 5";
		}
	}	

}

//------BANCO------------------------------------------------------------------------------------

var lucro1, lucro2, lucro3, lucro4, lucro5, lucro6;

lucro1=10;
lucro2=10; 
lucro3=10; 
lucro4=10; 
lucro5=10; 
lucro6=10;    


	function playBox(play,lucro,n,nome){
	document.getElementById(play).innerHTML =  
	'<button class="botao" onClick="subtrairLucro'+n+'()"' +';'+ '">-</button>'+''
	+'<div id="lucro'+n+'" class="user playLucro">'+ '<p>'+nome+ '</p>'+'<p>'+'$' +lucro + '</p>' +'</div>'
	+'<button class="botao" onClick="adicionarLucro'+n+'()"'+';'+'">+</button>';	
	}

	function clearPlayBox(player){
		document.getElementById(player).innerHTML="";	
	}

	function adicionarLucro1(){
		lucro1++;
		playBox("play1",lucro1,1,"AppleBr");
		onBanco();
	}
	
	function adicionarLucro2(){
		lucro2++;
		playBox("play2",lucro2,2,"SuperEmpresa");
		onBanco();
	}

	function adicionarLucro3(){
		lucro3++;
		playBox("play3",lucro3,3,"TCCNow");	
		onBanco();
	}
	
	function adicionarLucro4(){
		lucro4++;
		playBox("play4",lucro4,4,"QuebradaSA");
		onBanco();
	}	

	function adicionarLucro5(){
		lucro5++;
		playBox("play5",lucro5,5, "Investe AL");
		onBanco();
	}	

	function adicionarLucro6(){
		lucro6++;
		playBox("play6",lucro6,6, "The Win");
		onBanco();
	}		
	
	function subtrairLucro1(){
		lucro1--;
		playBox("play1",lucro1,1,"AppleBr");
		onBanco();
	}
	
	function subtrairLucro2(){
		lucro2--;
		playBox("play2",lucro2,2,"SuperEmpresa");
		onBanco();
	}
	
	function subtrairLucro3(){
		lucro3--;
		playBox("play3",lucro3,3,"TCCNow");	
		onBanco();
	}
	
	function subtrairLucro4(){
		lucro4--;
		playBox("play4",lucro4,4,"QuebradaSA");
		onBanco();
	}

	function subtrairLucro5(){
		lucro5--;
		playBox("play5",lucro5,5, "Investe AL");
		onBanco();
	}

	function subtrairLucro6(){
		lucro6--;
		playBox("play6",lucro6,6, "The Win");
		onBanco();
	}
	



function mostrarContas(){
	adicionarPlay();
}

function adicionarPlay(){

			playBox("play1",lucro1,1,"AppleBr");
			playBox("play2",lucro2,2,"SuperU");	
			playBox("play3",lucro3,3,"TCCNow");		
			playBox("play4",lucro4,4,"FalidaSA");
			playBox("play5",lucro5,5,"ALegre");		
			playBox("play6",lucro6,6,"The Win");			

}
	//Funções de adicionar e subtrair lucro
