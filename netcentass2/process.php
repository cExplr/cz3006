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
			margin-top: 0;
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
			font-size:5em;
			text-align: center;
			margin-top: 0;
		}
</style>
</head>
<body>

		<?php 

		//INITIALIZATIONS

			//Get Quantity of fruits
			$qtyO= $_POST["noOranges"] ;
			$qtyB=$_POST["noBananas"];
			$qtyA=$_POST["noApples"];

			//Calculate total cost of each fruit category
			$totalCostOrange = ($qtyO * 0.59);
			$totalCostBanana = ($qtyB * 0.39);
			$totalCostApple = ($qtyA * 0.75);

			//Calculate Total cost of all fruits
			$totalCostOfFruits = $totalCostApple + $totalCostBanana + $totalCostOrange;
	?>


	<div id="TitleOfOrderSummary">ORDER SUMMARY</div><br><br>
	
	<table class="summary" style="width :50%;">
		<tr >
			<th colspan="4">
				<?php printf("%s",$_POST["inputUsername"]); ?>
			</th>
			
		</tr>
		<tr>
			<th rowspan="4";>-</th>
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


<?php 

	//define file path
	$filePath = "order.txt";

	if(file_exists($filePath)){	// Check if file at filepath exists

		
		$orderfptr = fopen($filePath,'r')  or exit("Unable to open file!");		// READ the content inside after opening

		if(flock($orderfptr, LOCK_SH))	//Since we allow multiple users to read the file, we set flock as LOCK_SH (shared)
		{
		// Get the content of the file and store into $ordersContent
		$ordersContent = fread($orderfptr,filesize($filePath)+1);

		//int preg_match ( string $pattern , string $subject  [, array &$matches [, int $flags = 0 [, int $offset = 0 ]]] )
		//With regex, we attempt to find the pattern in the content in ordersContent and use the grouping to store the result as an array
		//WHERE recoreddxxxxx[0] is the string and recordedxxxxx[1] is the digits or the quantity
		preg_match("/Total number of apples: (\d+)/", $ordersContent, $recordedAppleNumber);
		preg_match("/Total number of oranges: (\d+)/", $ordersContent, $recordedOrangeNumber);
		preg_match("/Total number of bananas: (\d+)/", $ordersContent, $recordedBananaNumber);
		
		/* For Debugging */
		//printf("%d\n",intval($recordedAppleNumber[1]));
		//printf("%d\n",intval($recordedBananaNumber[1]));
		//printf("%d\n",intval($recordedOrangeNumber[1]));

		//Get latest number for each fruit
		$newAppleNumber = $qtyA + (int) $recordedAppleNumber[1]; 
		$newOrangeNumber = $qtyO+ (int)$recordedOrangeNumber[1];
		$newBananaNumber = $qtyB + (int)$recordedBananaNumber[1];

		
		//write back into order.txt with fwrite
		/*
		Total number of apples: 0
		Total number of oranges: 0
		Total number of bananas: 0
		*/ 
		}
		else{
			echo "Error locking file1!";
		}

		//NOT FORGETTING TO CLSE FILE
		fclose($orderfptr);

		//NOW ON THE WRITING INTO FILE
		$orderfptr = fopen($filePath,'w')  or exit("Unable to open file!");  // OPEN THE SAME FILE WITH THE INTENTIONG TO WRITE
		if(flock($orderfptr, LOCK_EX)) //Prevent other from accessing the file	// Check that the lock is exclusive and no other user is writing into it
		{																			//If it is exclusive then write with fwrite
			
			//Write content as per the lab manual
			fwrite($orderfptr,"Total number of apples: $newAppleNumber\n");			
			fwrite($orderfptr,"Total number of oranges: $newOrangeNumber\n");
			fwrite($orderfptr,"Total number of bananas: $newBananaNumber\n");

			flock($fptr, LOCK_UN); //release lock since the writing has been done so others can write into this too
		}
		else
				 echo "Error locking file2!";		// FOR DEBUGGING PURPOSE

		// CLOSE THE FILE AFTER COMPLETING
		fclose($orderfptr);
	}

?>
</body>
</html>