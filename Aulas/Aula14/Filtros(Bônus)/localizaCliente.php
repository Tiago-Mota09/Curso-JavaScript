<?php
			// foram enviados os dados do filtro?
			// se sim, é para fazer a busca
			if(isset($_POST["nome"])){
				
				// Sim, vieram dados para filtrar
				
				// Criando variáveis com os dados que vieram
				$nome		=	$_POST["nome"];
				$UF			=	$_POST["UF"];
				$ddd		=	$_POST["ddd"];
				$telefone	=	$_POST["telefone"];
				$situacao	=	$_POST["situacao"];
				
				$filtro="";
				
				if(!empty($nome)){
					// parte do nome foi informado - aplicar filtro
					$filtro="nome LIKE '$nome%'";
				}
				if($UF!==""){
					if($filtro=="")
						$filtro="uf='$UF'";
					else
						$filtro = $filtro." AND uf='$UF'";
				}
				
				if($ddd<>""){
					if($filtro=="")
						$filtro="ddd='$ddd'";
					else
						$filtro = $filtro." AND ddd='$ddd'";
				}
				
				if($telefone<>""){
					if($filtro=="")
						$filtro="telefone LIKE '%$telefone%'";
					else
						$filtro = $filtro." AND telefone LIKE'%$telefone%'";
				}
				
				if( !empty($situacao) ){
					if($situacao=="D"){
						// devedores
						if($filtro=="")
							$filtro="saldo < 0";
						else
							$filtro = $filtro." AND saldo<0";
					}
					else{
						// credores
						if($filtro=="")
							$filtro="saldo >= 0";
						else
							$filtro = $filtro." AND saldo>=0";
					}
				}
							

				$sql="SELECT * FROM clientes ";
				if($filtro<>"")
					$sql=$sql . " WHERE " . $filtro;
				
				echo $sql;
				
				// montar a tabela
				echo "<table border='1'>";
				// 1a linha de título
				echo "	<tr>";
				echo "		<th>Nome</th>";
				echo "		<th>UF</th>";
				echo "		<th>DDD</th>";
				echo "		<th>Telefone</th>";
				echo "		<th>Saldo</th>";
				echo "	</tr>";
				
				// varrer o banco de dados
				
				// no conectar no MYSQL
				// $con = mysqli_connect( servidor, usuario, senha)
				
				// Abrir/selecionar o banco
				// mysqli_select_db($con, nome do banco)
				
				// Aplicar o comando select ($sql) no banco
				// $rs = mysqli_query($con, $sql)
				
				// verificar se o número de linhas do $rs>0
				// if(mysqli_num_rows($rs)>0) { .. loop p/ exibir}
				
				echo "	<tr>";
				echo "		<td>Arthur</td>";
				echo "		<td>SP</td>";
				echo "		<td>11</td>";
				echo "		<td>9.1234-5678</td>";
				echo "		<td>3.580,00</td>";
				echo "	</tr>";
				
				echo "</table>";
			}
		?>
