document.querySelector('.m1 .p1').innerHTML = Math.floor(Math.random() * 100) + 1;
document.querySelector('.m1 .p2').innerHTML = Math.floor(Math.random() * 100) + 1;
document.querySelector('.m2 .p1').innerHTML = Math.floor(Math.random() * 100) + 1;
document.querySelector('.m2 .p2').innerHTML = Math.floor(Math.random() * 100) + 1;
var m1p1 = document.querySelector('.m1 .p1').innerHTML;
var m1p2 = document.querySelector('.m1 .p2').innerHTML;
var m2p1 = document.querySelector('.m2 .p1').innerHTML;
var m2p2 = document.querySelector('.m2 .p2').innerHTML;
const attsp1 = 10;
const attsp2 = 35;
const defm1p1 = 15;
const defm1p2 = 40;
const defm2p1 = 25;
const defm2p2 = 75;

function serang(musuh) {
    var sp1 = document.querySelector('.saya .p1').value;
    var sp2 = document.querySelector('.saya .p2').value;
    var totalatts = 0;
    var prajurit = new Array ();

    if (sp1 != 0) {
        prajurit["sp1"] = sp1
    }
    if (sp2 != 0) {
        prajurit["sp2"] = sp2
    }
    console.log(prajurit.splice(0,1))

    if (musuh == "m1") {
        totalatts = ((sp1 * attsp1) + (sp2 * attsp2)) - ((m1p1 * defm1p1) + (m1p2 * defm1p2));
    }
    else {
        totalatts = ((sp1 * attsp1) + (sp2 * attsp2)) - ((m2p1 * defm2p1) + (m2p2 * defm2p2));
    }

    var sisasp1 = ((totalatts / 2) / attsp1);
    var sisasp2 = ((totalatts / 2) / attsp2);
    var sisamp1 = 0;
    var sisamp2 = 0;

    if (sp1 <= sisasp1) {
        sisasp1 = sp1;
        sisasp2 = sp2;
        sisamp1 = 0;
        sisamp2 = 0;
    }
    else if (sisasp1 <= 0) {
        sisasp1 = 0;
        sisasp2 = 0;
    }

    document.getElementById("sisa" + musuh).innerHTML = "<br>Prajurit 1 Saya = " + Math.round(sisasp1) + "<br>Prajurit 2 Saya = " + Math.round(sisasp2) + "<br>Prajurit 1 Musuh = " + Math.round(sisamp1) + "<br>Prajurit 2 Musuh = " + Math.round(sisamp2);
}