var main = document.querySelector(".pop");
var	btn = document.querySelector(".button");
var	cross = document.querySelector(".cross");
var section = document.querySelector("section")

btn.addEventListener("click",appear);

function appear(){
	main.style.display = "block";
	section.style.filter = "blur(10px)";
}

cross.addEventListener("click",disappear);

function disappear(){
	main.style.display = "none";
	section.style.filter = "blur(0px)";
}

main.addEventListener("click",disappearMain);

function disappearMain(e){
	if(e.target.className == "pop"){
		main.style.display = "none";
	section.style.display = "blur(0px)";
	}
}