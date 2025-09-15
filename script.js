//your JS code here. If required.
let button=document.getElementById("incrementBtn");
let p=document.getElementById("counter");
function incrementfunc(){
	let n=parseInt(p.textContent);
	p.textContent=n+1;
	alert(`Current Value : ${p.textContent}`);
	
}

button.addEventListener("click",incrementfunc);