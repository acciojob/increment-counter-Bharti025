//your JS code here. If required.
let button=document.getElementById("incrementBtn");
let p=document.getElementById("counter");
function incrementfunc(){
	let n=parseInt(p.textContent);
	alert(`The value is ${n}`);
	p.textContent=n+1;
}

button.addEventListener("click",incrementfunc);