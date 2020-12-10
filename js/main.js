function load(){
	const h1 = document.querySelector('.h1');
	const bar = document.querySelector('.bar');
	h1.style.opacity = "1";
	h1.style.transform = "translateY(30px)";
	var t = setInterval(function(){bar.style.width = "100%";},2000);
}