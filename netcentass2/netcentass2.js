
var outputText = document.getElementById("outputPriceText");


/*Initialization*/

var bQtyTextBox=0; // Tetxtbox of Banana
var oQtyTextBox=0; // Textbox of Orange
var aQtyTextBox=0; // Textbox of Apple


/*Event handler when submit button is clicked*/

/*On mouse up to check qty*/
function checkQty(fruit){
	var qty  = 0;
	switch(fruit){
		case 'banana':
			qty = document.getElementById("BananaQtyText").value;
			break;
		case 'orange':
			qty = document.getElementById("OrangeQtyText").value;
			break;
		case 'apple':
			qty = document.getElementById("AppleQtyText").value;
			break;
		default:
			alert("ERROR: NO SUCH FRUIT!"); // For debugging purpose
			break;
	}
	
	var ok = qty.search(/^[0-9]*$/);	// Make sure it is just digits
	if (ok != 0){
		alert("This is not ok"); // tentatively
	}
}

function onSubmitButtonPressed(){

	/*Get the quantities from textboxes*/
	bQtyTextBox = document.getElementById("BananaQtyText");
	oQtyTextBox = document.getElementById("OrangeQtyText");
	aQtyTextBox = document.getElementById("AppleQtyText");
	alert("There are " + oQtyTextBox.value + " Oranges");
}
