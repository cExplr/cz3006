
var outputText = document.getElementById("outputPriceText");


/*Initialization*/

var bQtyTextBox=0; // Tetxtbox of Banana
var oQtyTextBox=0; // Textbox of Orange
var aQtyTextBox=0; // Textbox of Apple

function checkIfNonZero(fruit){
	var qty = 0;
	switch (fruit){
		case 'Apple':
			qty=document.getElementById("AppleQtyText").value;
			break;

		case 'Banana':
			qty=document.getElementById('BananaQtyText').value;
			break;
		case 'Orange' :
			qty=document.getElementById('OrangeQtyText').value;
			break;
		default:
			alert("ERROR! NO SUCH FRUIT 1");
	}
	if ( qty == 0 || qty==null){
		var textbox = fruit +  "QtyText";
		//alert(textbox);
		document.getElementById(textbox).value="0";
	}

	/*
	var ok = qty.search(/^[0-9]*$/);	// Make sure it is just digits
	if (ok != 0){
		output("Quantity field only accepts numbers");
	}else{
		output("")
	}

	*/
}

/*Event handler when submit button is clicked*/

/*On key up to check qty*/


function checkQty(fruit){
	
	var qtyB = document.getElementById("BananaQtyText").value;

	var qtyO = document.getElementById("OrangeQtyText").value;
		
	var qtyA = document.getElementById("AppleQtyText").value;

	var okB = qtyB.search(/^[0-9]*$/);	// Make sure it is just digits
	var okO = qtyO.search(/^[0-9]*$/);
	var okA = qtyA.search(/^[0-9]*$/);
	if (okB != 0 || qtyB < 0 || okA != 0 || qtyA < 0 ||okO != 0 || qtyO < 0){
		output("");
		output("Quantity field only accepts numbers");
	}else
	if (qtyA == 0 && qtyB == 0 && qtyO ==0){
		output("");
	}
	else{
		displayTotalCost(qtyA, qtyB, qtyO);
	}
	
}

function displayTotalCost(a,b,o){
	totalCost = a*0.75+b*0.39+o*0.59;
	//output("\nNo of Apples : " + a+"\n\nNo of Oranges : " + o+"\n\nNo of Bananas : " + b+"\n\nTotal Cost of Fruits : s$" + (totalCost.toFixed(2)) +"\n\n");
	var outputMessage = "No of Apples : " + a+"\nNo of Oranges : " + o+"\nNo of Bananas : " + b+"\nTotal Cost of Fruits : s$" + totalCost.toFixed(2)+"\n";
	output(outputMessage);

}

function output(outputvalue){
	var outputText = document.getElementById("outputPriceText");
	//alert("This is no ok");
	outputText.value = outputvalue;
}

function onSubmitButtonPressed(){
	var totalQty=0;
	/*Get the quantities from textboxes*/
	bQtyTextBox = document.getElementById("BananaQtyText");
	oQtyTextBox = document.getElementById("OrangeQtyText");
	aQtyTextBox = document.getElementById("AppleQtyText");

	totalQty= bQtyTextBox.value + oQtyTextBox.value + aQtyTextBox.value;
	if(totalQty == 0){
		alert("There are no fruits being added!");
	}
	else{
		totalCost = aQtyTextBox.value*0.75+bQtyTextBox.value*0.39+oQtyTextBox.value*0.59;
		var outputMessage = "No of Apples : " + aQtyTextBox.value+"\nNo of Oranges : " + oQtyTextBox.value+"\nNo of Bananas : " + bQtyTextBox.value+"\nTotal Cost of Fruits : s$" + totalCost.toFixed(2)+"\n";
		
		confirm("Confirm ? \n\n"+outputMessage);
	}
	
}
