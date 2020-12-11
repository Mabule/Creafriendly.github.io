function load(){
	const h1 = document.querySelector('.h1');
	const bar = document.querySelector('.bar');
	const down = document.querySelector('.down');
	h1.style.opacity = "1";
	h1.style.transform = "translateY(-30px)";
	var a = setInterval(function(){bar.style.width = "82%";},2000);
	var b = setInterval(function(){
		down.style.opacity = "1";
		down.style.transform = "translateY(0px)";},3500);
}