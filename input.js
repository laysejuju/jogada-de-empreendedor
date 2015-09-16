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
	//document.getElementById("creditos").innerHTML ='&copy; Jogada de Empreendedor 2015 Layse Julyanne, Ângela Oliveira & //Cleber Morais | Todos os direitos resevados | All rights reserved';
	document.getElementById("banco").style.marginBottom = "0px";
	document.getElementById("valorVariacao").innerHTML = '';
	document.getElementById("valorVariacao").style.height = "195px";
	document.getElementById("valorVariacao").style.marginTop = "30px";
}

function onBolsa(){	
	document.getElementById("dado").innerHTML ='';
	document.getElementById("bolsa").innerHTML ='<button class="btnRandom" onClick="variar();">Variar</button>';
	document.getElementById("banco").innerHTML ='';	
	//document.getElementById("creditos").innerHTML ='&copy; Jogada de Empreendedor 2015 Layse Julyanne, Ângela Oliveira & //Cleber Morais | Todos os direitos resevados | All rights reserved';
	document.getElementById("banco").style.marginBottom = "0px";
	document.getElementById("valorVariacao").innerHTML = '';
	document.getElementById("valorVariacao").style.height = "195px";
	document.getElementById("valorVariacao").style.marginTop = "30px";
	
}

function onBanco(){	
	document.getElementById("dado").innerHTML ='';
	document.getElementById("banco").innerHTML =
	'<div id="grafico" onClick="onBanco();"><canvas id="chart-area" width="300" height="300"/></div>' + 
	'<div id="valores"> <div id="valor1" class="valorStyle">'+lucro1+'</div>'+
	'<div id="valor2" class="valorStyle">'+lucro2+'</div>'+
	'<div id="valor3" class="valorStyle">'+lucro3+'</div>'+
	'<div id="valor4" class="valorStyle">'+lucro4+'</div>'+
	'<div id="valor5" class="valorStyle">'+lucro5+'</div>'+
	'<div id="valor6" class="valorStyle">'+lucro6+'</div>'+
	'</div>'+
	'<div id="scroll">V</div>'+
	'<div id="scroll2">V</div>'+
	'<div id="play1" class="players"></div>' +
	'<div id="play2" class="players"></div>'+
	'<div id="play3" class="players"></div>'+ 
	'<div id="play4" class="players"></div>'+
	'<div id="play5" class="players"></div>'+
	'<div id="play6" class="players"></div></div>';
	
	document.getElementById("banco").style.marginBottom = "-38px";
	document.getElementById("bolsa").innerHTML ='';
	document.getElementById("creditos").innerHTML='';
	document.getElementById("valorVariacao").innerHTML = '';
	document.getElementById("valorVariacao").style.height = "0";
	document.getElementById("valorVariacao").style.marginTop = "-10px";

	mostrarContas();
	
	var pieData = [
				{
					value: lucro1,
					color:"#00A9B9",
					highlight: "#00A9B9",
					label: "Atualizar"
				},
				{
					value: lucro2,
					color: "#B12273",
					highlight: "#B12273",
					label: "Atualizar"
				},
				{
					value: lucro3,
					color: "#84B259",
					highlight: "#84B259",
					label: "Atualizar"
				},
				{
					value: lucro4,
					color: "#BD3231",
					highlight: "#BD3231",
					label: "Atualizar"
				},
				{
					value: lucro5,
					color: "#563E89",
					highlight: "#563E89",
					label: "Atualizar"
				},
				{
					value: lucro6,
					color: "#DD962A",
					highlight: "#DD962A",
					label: "Atualizar"
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
			lucro1-=variacaoBolsa; lucro2-=variacaoBolsa; lucro3-=variacaoBolsa; lucro4-=variacaoBolsa; lucro5-=variacaoBolsa; lucro6-=variacaoBolsa;
		}
		
		if(variacaoBolsa == 6){
			document.getElementById("valorVariacao").innerHTML ='<span class="equilibrado">'+ "<span class='valor'>";
			
		}
		
		if(variacaoBolsa == 7){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+ "+ 1";
			lucro1+=1; lucro2+=1; lucro3+=1; lucro4+=1; lucro5+=1; lucro6+=1;
		}
		
		if(variacaoBolsa == 8){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">'+ "<span class='valor'>" + "+ 2";
			lucro1+=2; lucro2+=2; lucro3+=2; lucro4+=2; lucro5+=2; lucro6+=2;
		}
		
		if(variacaoBolsa == 9){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>" + "+ 3";
			lucro1+=3; lucro2+=3; lucro3+=3; lucro4+=3; lucro5+=3; lucro6+=3;
		}
		
		if(variacaoBolsa == 10){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+ "+ 4";
			lucro1+=4; lucro2+=4; lucro3+=4; lucro4+=4; lucro5+=4; lucro6+=4;
		}
		
		if(variacaoBolsa == 11){
			document.getElementById("valorVariacao").innerHTML ='<span class="ganho">' + "<span class='valor'>"+ "+ 5";
			lucro1+=5; lucro2+=5; lucro3+=5; lucro4+=5; lucro5+=5; lucro6+=5;
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
	}
	
	function adicionarLucro2(){
		lucro2++;
		playBox("play2",lucro2,2,"SuperEmpresa");
	}

	function adicionarLucro3(){
		lucro3++;
		playBox("play3",lucro3,3,"TCCNow");
	}
	
	function adicionarLucro4(){
		lucro4++;
		playBox("play4",lucro4,4,"FalidaSA");
	}	

	function adicionarLucro5(){
		lucro5++;
		playBox("play5",lucro5,5, "Investe AL");
	}	

	function adicionarLucro6(){
		lucro6++;
		playBox("play6",lucro6,6, "The Win");
	}		
	
	function subtrairLucro1(){
		lucro1--;
		playBox("play1",lucro1,1,"AppleBr");
	}
	
	function subtrairLucro2(){
		lucro2--;
		playBox("play2",lucro2,2,"SuperEmpresa");
	}
	
	function subtrairLucro3(){
		lucro3--;
		playBox("play3",lucro3,3,"TCCNow");	
	}
	
	function subtrairLucro4(){
		lucro4--;
		playBox("play4",lucro4,4,"FalidaSA");
	}

	function subtrairLucro5(){
		lucro5--;
		playBox("play5",lucro5,5, "Investe AL");
	}

	function subtrairLucro6(){
		lucro6--;
		playBox("play6",lucro6,6, "The Win");
	}
	
function mostrarContas(){
	adicionarPlay();
}

function adicionarPlay(){

			playBox("play1",lucro1,1,"AppleBr");
			playBox("play2",lucro2,2,"SuperEmpresa");	
			playBox("play3",lucro3,3,"TCCNow");		
			playBox("play4",lucro4,4,"FalidaSA");
			playBox("play5",lucro5,5,"Investe AL");		
			playBox("play6",lucro6,6,"The Win");			
}