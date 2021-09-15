setInterval(time, 1000);
function time() {
	const d = new Date();
	document.getElementById("timeid").innerHTML = d.toLocaleTimeString();
}

setInterval(berasTimer, 1000);
function berasTimer() {
	var countberas = parseInt(document.getElementById("berasid").innerHTML);
	var countberasx = parseInt(document.getElementById("berasnow").innerHTML);
	var current = countberas + countberasx;
	document.getElementById("berasid").innerHTML = current;
}
function setberas(beras) {
	var current = parseInt(document.getElementById("berasid").innerHTML);
	var biayaberas = parseInt(document.getElementById("biayaberasid").innerHTML);
	if (current >= biayaberas) {
		document.getElementById("berasid").innerHTML = current - biayaberas;
		document.getElementById("berasnow").innerHTML = parseInt(document.getElementById("berasnow").innerHTML) + beras;
		document.getElementById("biayaberasid").innerHTML = biayaberas * 2;
	}
}

function dissapear() {
	var current = parseInt(document.getElementById("berasid").innerHTML);
	var currentkayu = parseInt(document.getElementById("kayunow").innerHTML);
	if (current >= 1000){
		document.getElementById("berasid").innerHTML = current - 1000;
		document.getElementById("muncul").style.display = "block";
		document.getElementById("hilang").style.display = "none";
		document.getElementById("kayunow").innerHTML = currentkayu + 1;
	}
}

setInterval(kayuTimer, 1000);
function kayuTimer() {
	var countkayu = parseInt(document.getElementById("kayuid").innerHTML);
	var countkayux = parseInt(document.getElementById("kayunow").innerHTML);
	var current = countkayu + countkayux;
	document.getElementById("kayuid").innerHTML = current;
}
function setkayu(kayu) {
	var current = parseInt(document.getElementById("kayuid").innerHTML);
	var biayakayu = parseInt(document.getElementById("biayakayuid").innerHTML);
	if (current >= biayakayu) {
		document.getElementById("kayuid").innerHTML = current - biayakayu;
		document.getElementById("kayunow").innerHTML = parseInt(document.getElementById("kayunow").innerHTML) + kayu;
		document.getElementById("biayakayuid").innerHTML = biayakayu * 2;
	}
}