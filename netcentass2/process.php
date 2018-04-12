<!DOCTYPE html>
<html lang="en">
<head>
	<!-- 

    font-family: 'Black Han Sans', sans-serif;

    font-family: 'Gamja Flower', cursive;

    font-family: 'Bree Serif', serif;

-->
<link href="https://fonts.googleapis.com/css?family=Black+Han+Sans|Bree+Serif|Gamja+Flower" rel="stylesheet"> 
	<meta charset="UTF-8">
	<title>Form Submitted</title>
	<style>

		*{
			margin-top: 5%;
			background-color:#d3d3d3;
			font-family: 'Bree Serif', serif;
		}
		table{
			margin-left :  auto;
			margin-right: auto;
		}
		table, th, td {
   		border: 1px solid black;
		border-collapse: collapse;
		
		}

		th, td {
    		padding: 5px;
			text-align:center; 
			  
		}

		#TitleOfOrderSummary{
			font-size: 3em;
			text-align: center;
			
		}
</style>
</head>


<body>

	<?php 
	$qtyO= $_POST["noOranges"] ;
	$qtyB=$_POST["noBananas"];
	$qtyA=$_POST["noApples"];
	$totalCostOrange = ($qtyO * 0.59);
	$totalCostBanana = ($qtyB * 0.39);
	$totalCostApple = ($qtyA * 0.75);
	$totalCostOfFruits = $totalCostApple + $totalCostBanana + $totalCostOrange;
	?>
	<div id="TitleOfOrderSummary">ORDER SUMMARY</div><br><br>
	
	<table class="summary" style="width : 80%;">
		<tr >
			<th colspan="4">
				<?php printf("%s",$_POST["inputUsername"]); ?>
			</th>
			
		</tr>
		<tr>
			<t rowspan="4";h>-</th>
			<th>Fruit</th>
			<th>Quantity</th>
			<th>Cost</th>
			
		</tr>
		<tr>
			
			<td>Apple - $0.75 each</td>
			<td><?php printf("%d",$qtyA); ?></td>
			<td><?php printf("$ %.2f",$totalCostApple) ?></td>
		</tr>
		<tr>
			
			<td>Orange - $0.59 each</td>
			<td><?php printf("%d",$qtyO); ?></td>
			<td><?php printf("$ %.2f",$totalCostOrange) ?></td>
		</tr>
		<tr>
			
			<td>Banana - $0.39 each</td>
			<td><?php printf("%d",$qtyB); ?></td>
			<td><?php printf("$ %.2f",$totalCostBanana) ?></td>
		</tr>
		<tr>
			<th>Total Cost</th>
			<td>-</td>
			<td>-</td>
			<td><?php printf("$ %.2f",$totalCostOfFruits) ?></td>
		</tr>
	</table>

</body>
</html>