document.querySelector(".type-text-here").addEventListener("keyup", function(){
	var live = document.querySelector(".type-text-here").value;
	document.querySelector(".show-text-here").value = live;
});