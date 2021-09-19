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

function dissapearkayu() {
	var current = parseInt(document.getElementById("berasid").innerHTML);
	var currentkayu = parseInt(document.getElementById("kayunow").innerHTML);
	if (current >= 1000){
		document.getElementById("berasid").innerHTML = current - 1000;
		document.getElementById("munculkayu").style.display = "block";
		document.getElementById("hilangkayu").style.display = "none";
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

function dissapearbesi() {
	var current = parseInt(document.getElementById("kayuid").innerHTML);
	var currentbesi = parseInt(document.getElementById("besinow").innerHTML);
	if (current >= 1000){
		document.getElementById("kayuid").innerHTML = current - 1000;
		document.getElementById("munculbesi").style.display = "block";
		document.getElementById("hilangbesi").style.display = "none";
		document.getElementById("besinow").innerHTML = currentbesi + 1;
	}
}

setInterval(besiTimer, 1000);
function besiTimer() {
	var countbesi = parseInt(document.getElementById("besiid").innerHTML);
	var countbesix = parseInt(document.getElementById("besinow").innerHTML);
	var current = countbesi + countbesix;
	document.getElementById("besiid").innerHTML = current;
}
function setbesi(besi) {
	var current = parseInt(document.getElementById("besiid").innerHTML);
	var biayabesi = parseInt(document.getElementById("biayabesiid").innerHTML);
	if (current >= biayabesi) {
		document.getElementById("besiid").innerHTML = current - biayabesi;
		document.getElementById("besinow").innerHTML = parseInt(document.getElementById("besinow").innerHTML) + besi;
		document.getElementById("biayabesiid").innerHTML = biayabesi * 2;
	}
}