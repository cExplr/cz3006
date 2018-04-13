



/*Initialization*/

var outputText = document.getElementById("outputPriceText"); // Textbox of username

function checkIfNonZero(fruit){
	var qty = 0;
	switch (fruit){
		// Depending on fruits, we want to get the quantity of that specific input
		//So i used the switch case control flow here
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

	//If quantity is 0 or is backspaced with no input
	if ( qty == 0 || qty==null){
		var textbox = fruit +  "QtyText";
		//alert(textbox);
		document.getElementById(textbox).value="0";  // Add back the default value of 0
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
	//Initialization
	var submitbutton = document.getElementById("submitButton"); // Get the submit button object


	var qtyB = document.getElementById("BananaQtyText").value;
	var qtyO = document.getElementById("OrangeQtyText").value;
	var qtyA = document.getElementById("AppleQtyText").value;


	// Regex to check that the inputs are purely integers since no decimal point should be allowed
	var okB = qtyB.search(/^[0-9]*$/);
	var okO = qtyO.search(/^[0-9]*$/);
	var okA = qtyA.search(/^[0-9]*$/);

	if (okB != 0 || qtyB < 0 || okA != 0 || qtyA < 0 ||okO != 0 || qtyO < 0){
		//Anything that does not fit in the described regex  will come here
		submitbutton.disabled = true;	// The submit button wil be disabled
		output("");						//Clear outputTextBox
		output("NaN\n\nQuantity field only accepts digits");  // Display Error Message

	}else
	//IF NO FRUITS WERE BOUGHT
	if (qtyA == 0 && qtyB == 0 && qtyO ==0){
		output("");
		submitbutton.disabled = false;	//Submit buton will still be pressable
	}
	else{
		displayTotalCost(qtyA, qtyB, qtyO);	// If nothing goes wrong, then display total cost of items
		submitbutton.disabled = false;		//Make sure submit button is pressable
	}
	
}

function displayTotalCost(a,b,o){
	totalCost = a*0.75+b*0.39+o*0.59;
	//output("\nNo of Apples : " + a+"\n\nNo of Oranges : " + o+"\n\nNo of Bananas : " + b+"\n\nTotal Cost of Fruits : s$" + (totalCost.toFixed(2)) +"\n\n");
	//toFixed(2) allows us to write floating point values to 2 dp
	var outputMessage = "No of Apples : " + a+"\nNo of Oranges : " + o+"\nNo of Bananas : " + b+"\nTotal Cost of Fruits : s$" + totalCost.toFixed(2)+"\n";
	output(outputMessage); // Print the outputMessage

}

function output(outputvalue){
	var outputText = document.getElementById("outputPriceText");
	//alert("This is no ok"); // DEBUGGING PIRPOSE
	outputText.value = outputvalue;   //Display message into the otputtextbox
}

/*WHEN THE SUBMIT BUTTON IS PRESSED */
function onSubmitButtonPressed(){

	//vairable initialization
	var totalQty=0;
	var paymentMode="";

	/*Get the textboxes object */
	bQtyTextBox = document.getElementById("BananaQtyText");
	oQtyTextBox = document.getElementById("OrangeQtyText");
	aQtyTextBox = document.getElementById("AppleQtyText");
	usernameTextBox = document.getElementById("usernameText");


	totalQty= bQtyTextBox.value + oQtyTextBox.value + aQtyTextBox.value; // Calculate the total quantity of all the fruits

	if(totalQty == 0){				// Check if any number of fruits is added
		alert("There are no fruits being added!");	//This is the reason why we still allow the buttpon to be pressable
	}
	else{

		//Initialize variables of radiobuttons
		var payBy = "";
		var visa = document.getElementById("modeV");
		var discovery = document.getElementById("modeD");
		var mastercard = document.getElementById("modeM");

		//Finding out which radiobutton has been checked
		if (visa.checked){
				payBy = visa.value;
		}
		else if(discovery.checked){
			payBy=discovery.value;
		}
		else{
			payBy = mastercard.value;
		}

		totalCost = aQtyTextBox.value*0.75+bQtyTextBox.value*0.39+oQtyTextBox.value*0.59;  // Calculate the total cost of all the fruits

		var outputMessage = "No of Apples : " + aQtyTextBox.value+"\nNo of Oranges : " + oQtyTextBox.value+"\nNo of Bananas : " + bQtyTextBox.value+"\nTotal Cost of Fruits : s$" + totalCost.toFixed(2)+"\n\n Payment By : "+ payBy;
		alert("Dear \n"+ usernameTextBox.value + "\n\n"+outputMessage); // Inform user about the order list
	}
}