var numberofsquares=6;

var colors=generateRandomColors(numberofsquares);           

var squares=document.querySelectorAll(".square");
var pickedColor= pickColor();                               
var displayColor=document.getElementById("displayColor");
var messageDisplay=document.getElementById("message");
var h1change=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");


for(var i=0;i<modeButton.length;i++)                 
modeButton[i].addEventListener("click",function(){
modeButton[0].classList.remove("selected");
modeButton[1].classList.remove("selected");
    this.classList.add("selected");
		if(this.textContent==="Easy")
		{
			numberofsquares=3;
		}
		else
		{
			numberofsquares=6;
		}
		reset();

	});


function reset()
{
	colors=generateRandomColors(numberofsquares);   
     //pick a new color 
     pickedColor=pickColor();
     //change colorDisplay to match the new color
     displayColor.textContent=pickedColor;
     
     resetButton.textContent="NEW COLORS";       //to set back the option to newcolors after play again when we restart
     messageDisplay.textContent="";           //so that the space for message is empty when we restart
     //change colors of squares
     for(var i=0; i<squares.length; i++)
     { 
     	if(colors[i]){
     		squares[i].style.display="block";            //for six colors
     		squares[i].style.backgroundColor=colors[i];
     	}
     	else{
     		squares[i].style.display="none";
     	}
     }
     h1change.style.backgroundColor="steelblue";   
 }


resetButton.addEventListener("click",function(){      //event for playing Again(RESET)
	reset();
});


displayColor.textContent=pickedColor;

for(var i=0; i<squares.length; i++)
{ 
	//add initial colors to the squares
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function() {

		var clickedColor=this.style.backgroundColor;

		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="CORRECT";
			resetButton.textContent="PLAY AGAIN";

			//to make all squares of same color when cliked right color
			for(var i=0; i<squares.length; i++)
			{
				squares[i].style.backgroundColor=clickedColor;
			}
			h1change.style.backgroundColor=clickedColor;      

		}
		else
		{
			messageDisplay.textContent="TRY AGAIN";
			this.style.backgroundColor="gray";
		}
	});
}

 
 function pickColor() {                                     
 	var random=Math.floor(Math.random() * colors.length);
 	return colors[random];
 }


function generateRandomColors(num){

	var arr=[];
    for(var i=0; i<num; i++)
	{
		arr.push(randomColor())
	}
	return arr;
}
			
function randomColor(){
	//pick a RED from 0-255
	var red=Math.floor(Math.random() * 256);
	//pick a BLUE from 0-255
    var blue=Math.floor(Math.random() * 256);
    //pick a GREEN from 0-255
    var green=Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue  + ")";
}