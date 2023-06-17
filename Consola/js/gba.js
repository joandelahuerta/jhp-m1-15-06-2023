/* ABRIR CONSOLA */
function openConsole() {
    document.getElementById('openconsole').style.display = "flex";
    document.getElementById('closeconsole').style.display = "none";
    var audio = document.getElementById("cursor");
    audio.play();
}
/* CERRAR CONSOLA */
function closeConsole() {
    document.getElementById('openconsole').style.display = "none";
    document.getElementById('closeconsole').style.display = "flex";
    var audio = document.getElementById("cursor");
    audio.play();
}
/* BAJAR VOLUMEN */
function setHalfVolume() {
    var myAudio = document.getElementById("backgroundost");  
    myAudio.volume = 0.3;
}