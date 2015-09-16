

console.log("Generate Button Chalenge");

// In your HTML, include a ‘generate’ button, that when clicked, 
// will generate a new div container in the index.html. 
 
$(document).ready(function() {

var counter = 0;

$("#generate").on("click", function(event){
	event.preventDefault;
	
	var $div = $("<div></div");
			//add text to div, "line# plus the count number"
	$div.text("Line #" + counter);
			//append the new div here
	$("#containThis").append($div);
			//counter adds 1 new line 
		counter++;



var $removeBtn = $("<button> Remove </button>");
	$div.append($removeBtn);


var $colorBtn = $("<button> Change Color </button>");
	$div.append($colorBtn);


})
});

	$removeBtn.on("click"), function(event){
	event.preventDefault;
	$(this).parent().remove();
	console.log(this);


	$colorBtn.on('click', function(event){
 	event.preventDefault;
 	$(this).parent().toggle();

 	});

};


// In your HTML, include a ‘generate’ button, that when clicked, 
// will generate a new div container in the index.html. 

// The new div should include some text that reads “Line #” and 
// then a number specific to the number of times the generate 
// button has been clicked. 

// In addition to the text, you will 
// need to include two buttons within the new div. 
// One button will be entitled “Change Color” and the other button will entitled “Remove”.


// The Change Color button should change the background color of 
// the div container relative to the Change Color button that was 
// clicked. 

// For the purpose of this challenge, you can add extra 
// functionality that when clicked again, it can change the color 
// back to the original, BUT THIS IS NOT REQUIRED. 


// Focus on core functionality first. Do extra stuff later if you have time.
// The Remove Button should remove the parent Div container of the 
// button that was clicked, removing the entire div, which contains 
// the text, and the two additional buttons (the Change Color and Remove buttons).

// Once you are complete, check in the code into your personal GitHub, 
// entitling the Repo “prime_solo_jq_assessment”. Then, be respectful 
// that some of your peers are still working and remain quiet. Feel 
// free to exit the room once complete if you are feeling like you can 
// no longer contain yourself. The goal is to not overwhelm those who 
// are still working.
// However much you finish, know that I am proud of how far you have come 
// in a week and a half. You got this. Now go break this challenge down.
