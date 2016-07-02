<?php
	function moreInfo(){

        $idPublica = $_REQUEST["q"];

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

				$data = $conn->prepare("SELECT atividades.idPublica, atividades.data, atividades.hora, atividades.hora_termina , atividades.local, atividades.titulo, atividades.tipo, atividades.descricao, usuarios.nome FROM usuarios, atividades WHERE atividades.status = '1' AND  atividades.userID = usuarios.id AND atividades.idPublica = '$idPublica' ORDER by data, hora ASC");


				$data->execute(array('idPublica' => $idPublica));

				$result = $data->fetchAll();

					//Condition
					if ( count($result) ) {
						foreach($result as $row) {
						$tipo = $row ['tipo'];
						print_r('<p>'." @");
						print_r($row ['local'] . " \ ");
						print_r($row ['hora']." - " );
						print_r($row ['hora_termina']. " \ ");
						print_r($row ['nome']."</p>"."<p>");
						print_r($row ['titulo']. "</p>"."<p>");
						print_r($row ['descricao']."</p>");
						print_r("<a onclick='offInfo();' class='btn fechar col-xs-2 col-xs-offset-10' role='button'><</a>");
							if($tipo == 'Mesa Redonda'){
									print_r('<p class="membros">'.'Participantes:'.'</p>');
									print_r('<p>');
									$data2 = $conn->prepare("SELECT usuarios.nome FROM mesaRedonda, usuarios where mesaRedonda.ativChave = '$idPublica' and usuarios.id = mesaRedonda.userID");

									$data2->execute(array('ativChave' => $idPublica));
									$result2 = $data2->fetchAll();

									foreach($result2 as $row2){
										print_r($row2 ['nome'] . '</br>');
									}
									print_r('</p>');
							}
							$titulo = $row ['titulo'];
							$descricao = $row ['descricao'];

							$titulo = strtr ($titulo, array ('(' => ' ['));
							$titulo = strtr ($titulo, array (')' => '] '));
							$titulo = strtr ($titulo, array ("'" => ' - '));
							$titulo = strtr ($titulo, array ('"' => ' - '));
							$descricao = strtr ($descricao, array ('(' => ' ['));
							$descricao = strtr ($descricao, array (')' => '] '));


							printf('<br/><br/><p><a href= "#" onClick="googleCalendar(\'%s\');">Salvar no Google Calendar</a></p>', $row ['data'].'~'.$row ['hora'].'~'.$row ['hora_termina'].'~'.$titulo.'~'.$row ['local'].'~'.$descricao.'~');

						}
					} else {
						echo "<p>Nenhum resultado encontrado.</p>";
					}

	}

	moreInfo();


?>
