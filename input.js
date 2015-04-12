//----Bolsa de Valores------

//Transição dos números
function motion(){
document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" + "-"+"3";
}

function motion2(){
document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" + "-"+"2";
}

function motion3(){
document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" + "-"+"1";
}

function motion4(){
document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" +"0";
}

function motion5(){
document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" + "+"+"1";
}

function motion6(){
document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" + "+"+"2";
}

function motion7(){
document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" + "+"+"3";
}

//Botão variar números
function variar(){
	setTimeout(motion, 50);
	setTimeout(motion2,100);
	setTimeout(motion3,150);
	setTimeout(motion4,200);
	setTimeout(motion5,250);
	setTimeout(motion6,300);
	setTimeout(motion7,350);
	
	setTimeout(condicoes,400);
	
	
	//Condições
	function condicoes(){
	
		var variacaoBolsa = Math.round(Math.random() * (10 -1)+1);
	
		if(variacaoBolsa <= 4){
			document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" + "-"+ variacaoBolsa;
		}
		
		if(variacaoBolsa == 5){
			document.getElementById("valorVariacao").innerHTML ="Bolsa equilibrada";
		}
		
		if(variacaoBolsa == 6){
			document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+1";
		}
		
		if(variacaoBolsa == 7){
			document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+2";
		}
		
		if(variacaoBolsa == 8){
			document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+3";
		}
		
		if(variacaoBolsa == 9){
			document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+4";
		}
		
		if(variacaoBolsa == 10){
			document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+5";
		}
	}	

}

//----------------------------BANCO-------------------------------

var lucro1, lucro2, lucro3, lucro4, lucro5, lucro6;

lucro1=0;
lucro2=0; 
lucro3=0; 
lucro4=0; 
lucro5=0; 
lucro6=0;    

function onBolsa(){	
	document.getElementById("bolsa").innerHTML ='<button class="btnRandom" onClick="variar();">Variar</button>';
	document.getElementById("banco").innerHTML ='';	
	
}

function onBanco(){	
	document.getElementById("banco").innerHTML ='<div id="play1"></div><div id="play2"></div><div id="play3"></div><div id="play4"></div><div id="play5"></div><div id="play6"></div></div>';
	document.getElementById("bolsa").innerHTML ='';
	document.getElementById("valorVariacao").innerHTML = '';
	adicionarPlay();
}


	function playBox(play,lucro,n,nome){
	document.getElementById(play).innerHTML ='<div class="user playUser">'+nome+'</div>'+ '<div class="user playLucro">'+ '$'+ lucro 
	+'<div class="btnsLucro"><button class="botao" onClick="adicionarLucro'+n+'()"' +';'+ '">+</button>'+''
	+'<button class="botao" onClick="subtrairLucro'+n+'()"'+';'+'">-</button></div></div>';	
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
		playBox("play4",lucro4,4,"QuebradaSA");
	}	

	function adicionarLucro5(){
		lucro5++;
		playBox("play5",lucro5,5, "Investe AL");
	}	

	function adicionarLucro6(){
		lucro6++;
		playBox("play6",lucro6,6, "The Win");
	}		
	
	/*
	function adicionarLucro(n){
		lucro2++;
		playBox("play"+ n,lucro2,n);
	}
	*/
	
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
		playBox("play4",lucro4,4,"QuebradaSA");
	}

	function subtrairLucro5(){
		lucro5--;
		playBox("play5",lucro5,5, "Investe AL");
	}

	function subtrairLucro6(){
		lucro6--;
		playBox("play6",lucro6,6, "The Win");
	}
	

//Adicionar Jogadores


function adicionarPlay(){

			playBox("play1",lucro1,1,"AppleBr");
			playBox("play2",lucro2,2,"SuperEmpresa");	
			playBox("play3",lucro3,3,"TCCNow");		
			playBox("play4",lucro4,4,"QuebradaSA");
			playBox("play5",lucro5,5, "Investe AL");		
			playBox("play6",lucro6,6, "The Win");			

}
	//Funções de adicionar e subtrair lucro



