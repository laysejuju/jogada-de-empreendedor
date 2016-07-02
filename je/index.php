<!DOCTYPE html>
<html>
	<head>
		<title>Bit.Week 2015 - Agenda</title>
		<link rel="stylesheet" href="style.css" type="text/css"/>
		<link rel="stylesheet" href="css/bootstrap.css" type="text/css"/>
		<script src="js/input-2.js" type="text/javascript"></script>
		<script src="js/jquery-2.1.1.js" type="text/javascript"></script>
		<script src="js/bootstrap.js" type="text/javascript"></script>
		<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Paytone+One' rel='stylesheet' type='text/css'>
		<link rel="icon" href="../images/favicon.png" type="image/x-icon"/>
		<link rel="shortcut icon" href="../images/favicon.png" type="image/x-icon"/>

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

		<meta itemprop="name" content="Bit.Week 2015 - Agenda">
		<meta itemprop="description" content="Confira a programação do Bit Week 2015">
		<meta itemprop="image" content="http://bitweek.com.br/images/bwfb.png">

		<meta property="og:title" content="Bit.Week 2015 - Agenda"/>
		<meta property="og:image" content="http://bitweek.com.br/images/bwfb.png"/>
		<meta property="og:site_name" content="Bit.Week"/>
		<meta property="og:description" content="Confira a programação do Bit Week 2015">

		<meta name="twitter:card" content="summary">
		<meta name="twitter:site" content="@bitweek">
		<meta name="twitter:creator" content="@bitweek">
		<meta name="twitter:url" content="http://www.bitweek.com.br/agenda">
		<meta name="twitter:title" content="Bit.Week 2015 - Agenda">
		<meta name="twitter:description" content="Confira a programação do Bit Week 2015">
		<meta name="twitter:image" content="http://bitweek.com.br/images/bwfb.png">

		<style>
			p a{
			 color: #fff;
			 text-decoration: underline;
			}

			p a:hover{
			 text-decoration: none;
			 color: #fff;
			}

			p a:hover, p a:focus {
			    color: #fff;
			    text-decoration: underline;
			}

			.accordion-group a{
				color: #fff;
				text-decoration: none;
			}

			.borda{
				border-top: solid 2px #f9e4c9;
			}

		</style>

		<script>

			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-67138290-1', 'auto');
			ga('send', 'pageview');


			/*MENU SELECTION*/
			$(document).ready(function() {
				$('.button').click(function(e) {
					e.preventDefault(); //prevent the link from being followed - not working
					$('.button.active').removeClass('active');
					$(this).addClass('active');
				});
			});

		</script>

	</head>
	<body>

		<!-- Menu -->
		<div id="leftMenu" class="accordion">
			<div class="accordion-group">
				<a class="accordion-toggle" data-toggle="collapse" data-parent="#leftMenu" href="#collapseTwo">
					<div class="accordion-heading">
						<img alt="menu" src="menu32@64.png" width="24px" height="24px">
						<div id="eixoFiltrado">Filtrar Eixo</div>
					</div>
				</a>
				<div id="collapseTwo" class="accordion-body collapse" style="height: 0px; ">
					<div class="accordion-inner">
						<ul>
							<a href="http://bitweek.com.br/agenda?eixo=desenvolvimento"><li class="borda">Desenvolvimento Web</li></a>
							<a href="http://bitweek.com.br/agenda?eixo=audiovisual"><li>Audiovisual</li></a>
							<a href="http://bitweek.com.br/agenda?eixo=fotografia"><li>Fotografia</li></a>
							<a href="http://bitweek.com.br/agenda?eixo=jornalismo"><li>Jornalismo</li></a>
							<a href="http://bitweek.com.br/agenda?eixo=empreendedorismo"><li>Empreendedorismo</li></a>
							<a href="http://bitweek.com.br/agenda?eixo=cibercultura"><li>Cibercultura</li></a>
							<a href="http://bitweek.com.br/agenda?eixo=artecriatividade"><li>Arte e Criatividade</li></a>
							<a href="http://bitweek.com.br/agenda?eixo=design"><li>Design</li></a>
							<a href="http://bitweek.com.br/agenda"><li class="bordaOff">VER TUDO</li></a>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- WRAPPER -->
		<div id="wrapper" class="col-xs-10 col-xs-offset-1">

			<!-- TITLE -->
			<header class="col-xs-12 col-lg-12 topo">
					<div class="row">
						<div class="col-md-3">
						<!--	<a class="navbar-brand" href="http://bitweek.com.br"><img src="../images/logo.png" style="width: 100px; height: auto"></a> -->
							<a class="navbar-brand" href="http://bitweek.com.br"><img src="http://bitweek.com.br/images/logo.png" style="width: 100px; height: auto"></a>
						</div>
						<div class="col-md-9">
							<h1>agenda</h1>
						</div>
					</div>
			</header>

			<!-- BUTTONS -->
			<nav class="agenda">
				<div id="menu" class="col-xs-12">
					<div class="button active col-xs-2" onclick="show('dia1','2','3','4','5','6');"><p class="col-xs-offset-2">DIA 19</p></div>
					<div class="button col-xs-2" onclick="show('dia2','1','3','4','5','6');"><p class="col-xs-offset-2">DIA 20</p></div>
					<div class="button col-xs-2" onclick="show('dia3','1','2','4','5','6');"><p class="col-xs-offset-2">DIA 21</p></div>
					<div class="button col-xs-2" onclick="show('dia4','1','2','3','5','6');"><p class="col-xs-offset-2">DIA 22</p></div>
					<div class="button col-xs-2" onclick="show('dia5','1','2','3','4','6');"><p class="col-xs-offset-2">DIA 23</p></div>
					<div class="button col-xs-2" onclick="show('dia6','1','2','3','4','5');"><p class="col-xs-offset-2">DIA 24</p></div>
				</div>

				<!-- DATABASE -->
				<?php
					function showData($dia){
						//User
						$username = 'rapcou_bitweek';

						//Password of the user
						$password = 'B1tw33k';

						//Connection DATABASE
						try{
							$conn = new PDO('mysql:host=66.116.150.166;dbname=rapcou_bitweek', $username, $password,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
							$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
						} catch(PDOException $e) {
						echo 'ERROR: ' . $e->getMessage();
						}

						//QR Code
						if (empty($_SERVER['QUERY_STRING'])){
						   $sala = "";
						   $eixo = "";
						} else {
						   $sala= $_GET['sala'];
						   $eixo= $_GET['eixo'];
						}

						//Query Geral
						if($eixo == "" AND $sala == ""){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' ORDER by data, hora ASC");
						}

						//Querys sala
						if($sala == "biff"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' AND atividades.local = 'Biff' ORDER by data, hora ASC");
						}

						if($sala == "hoverboard"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' AND atividades.local = 'Hoverboard' ORDER by data, hora ASC");
						}

						if($sala == "mcfly"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' AND atividades.local = 'McFly' ORDER by data, hora ASC");
						}

						if($sala == "lorraine"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' AND atividades.local = 'Lorraine McFly' ORDER by data, hora ASC");
						}

						if($sala == "capacitor"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' AND atividades.local = 'Capacitor de Fluxos' ORDER by data, hora ASC");
						}

						if($sala == "jaws19"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' AND atividades.local = 'Jaws 19' ORDER by data, hora ASC");
						}

						//Querys eixo
						if($eixo == "desenvolvimento"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.eixo = 'Desenvolvimento Web' AND atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' ORDER by data, hora ASC");
						}
						if($eixo == "audiovisual"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.eixo = 'Audiovisual' AND atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' ORDER by data, hora ASC");
						}
						if($eixo == "fotografia"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.eixo = 'Fotografia' AND atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' ORDER by data, hora ASC");
						}
						if($eixo == "jornalismo"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.eixo = 'Jornalismo' AND atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' ORDER by data, hora ASC");
						}
						if($eixo == "empreendedorismo"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.eixo = 'Empreendedorismo' AND atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' ORDER by data, hora ASC");
						}
						if($eixo == "cibercultura"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.eixo = 'Cibercultura' AND atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' ORDER by data, hora ASC");
						}
						if($eixo == "artecriatividade"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.eixo = 'Arte e Criatividade' AND atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' ORDER by data, hora ASC");
						}
						if($eixo == "design"){
							$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.local, atividades.titulo, atividades.tipo, atividades.eixo, usuarios.nome FROM usuarios, atividades WHERE atividades.eixo = 'Design' AND atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.data = '$dia' ORDER by data, hora ASC");
						}


						$data->execute(array('data' => $dia));

						$result = $data->fetchAll();

						//Condition

						if ( count($result) ) {
							foreach($result as $row) {
								printf('<a href= "#" onClick="detalhes(\'%s\');"<li class="item">', $row ['idPublica']);
								print_r('<li class="item">');
								print_r($row ['hora']."h"." - ");
								print_r($row ['tipo'].": ");
								print_r("<span class='titulo'>");
								print_r($row ['titulo']."</span>"." @ ");
								print_r($row ['local']."</br>"."<span class='palestrante'>");
								print_r($row ['nome']." | ");
								print_r($row ['eixo']."</span>"."</a></li>");
							}

						  } else {
							echo "No rows returned.";
						  }

					}


				?>

				<!-- CONTENT -->
				<div id="conteudo" class="col-xs-12">
					<ul onload="onDia1" id="dia1">
						<?php
							showData('19/10/2015'); //Function showData show results of the day 19
						?>
					</ul>

					<ul id="dia2">
						<?php
							showData('20/10/2015');
						?>
					</ul>

					<ul id="dia3">
						<?php
							showData('21/10/2015');
						?>
					</ul>

					<ul id="dia4">
						<?php
							showData('22/10/2015');
						?>
					</ul>

					<ul id="dia5">
						<?php
							showData('23/10/2015');
						?>
					</ul>

					<ul id="dia6">
						<?php
							showData('24/10/2015');
						?>
					</ul>
				</div>
			</nav>

			<div id="info" class="detalhes col-xs-6 col-xs-offset-3">
			</div>

			<!-- FOOTER -->
			<footer class="container-fluid col-xs-12 text-center rodape" >
			<p>&copy; 2015 Bit.Week | Todos os direitos resevados | All rights reserved</p>
			</footer>

		</div>

		<script>

				function detalhes (idPublica){

						document.getElementById("info").innerHTML = "<p>CARREGANDO...</p>";
						document.getElementById("info").style.display="block";
						document.getElementById("info").style.backgroundColor="#e66250";


						var xmlhttp = new XMLHttpRequest();
						 xmlhttp.onreadystatechange = function() {
							 if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
								 document.getElementById("info").innerHTML = xmlhttp.responseText;
							 }
						 }
						 xmlhttp.open("GET", "info.php?q="+idPublica, true);
						 xmlhttp.send();



				}

				function offInfo(){
						document.getElementById("info").style.display="none";
						document.getElementById("info").style.backgroundColor="#";
				}

		</script>
		<script src="js/moment.js"></script>
		<script src="js/generate-google-calendar-url.js"></script>
		<script>

		function googleCalendar(info){
			var informacoes = info.split('~');
			var data = informacoes[0].split('/');
			var hora_inicio = informacoes[1].split(':');
			var hora_final = informacoes[2].split(':');
			var titulo = informacoes[3];
			var local = informacoes[4];
			var descricao = informacoes[5];

			var linkGcalendar = generateUrl({
			 start: new Date(data[2], data[1] - 1, data[0], hora_inicio[0], hora_inicio[1]),
			 end: new Date(data[2], data[1]  - 1, data[0], hora_final[0], hora_final[1]),
			 title: '[BIT WEEK] '+titulo,
			 location: local+' @ Departamento de Mídias Digitais - UFPB',
			 details: descricao
			});



			window.open (linkGcalendar,'_blank');



		}

		$( document ).ready(function() {
			var eixo = location.search.split('eixo=')[1] ? location.search.split('eixo=')[1] : '';
			var sala = location.search.split('sala=')[1] ? location.search.split('sala=')[1] : '';

			if (eixo == 'empreendedorismo'){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Empreendedorismo";
			}
			if (eixo == 'desenvolvimento'){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Desenvolvimento Web";
			}
			if (eixo == 'audiovisual'){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Audiovisual";
			}
			if (eixo == 'fotografia'){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Fotografia";
			}
			if (eixo == 'cibercultura'){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Cibercultura";
			}
			if (eixo == 'artecriatividade'){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Arte e Criatividade";
			}
			if (eixo == 'design'){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Design";
			}
			if (eixo == 'jornalismo'){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Jornalismo";
			}

			if (sala == "capacitor"){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Capacitor de Fluxos";
			}

			if (sala == "biff"){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Biff";
			}

			if (sala == "hoverboard"){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Hoverboard";
			}

			if (sala == "mcfly"){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: McFly";
			}

			if (sala == "lorraine"){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Lorraine McFly";
			}

			if (sala == "jaws19"){
				document.getElementById("eixoFiltrado").innerHTML = "Filtro: Jaws 19";
			}





		});
		</script>


	</body>
</html>
