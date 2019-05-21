
// Get the modal
var modal_cero = document.getElementById('myModal');
var modal_uno = document.getElementById('myModal_1');
var modal_dos = document.getElementById('myModal_2');
var modal_tres = document.getElementById('myModal_3');


var modales = [modal_cero,modal_uno,modal_dos,modal_tres];



// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modales[0].style.display = "block"
}
btn1.onclick = function() {
    modales[1].style.display = "block";
}
btn2.onclick = function() {
    modales[2].style.display = "block";
}
btn3.onclick = function() {
    modales[3].style.display = "block";
}


// Cuando el usuario hace click fuera del modal cierra
window.onclick = function(event) {
    if (event.target == modales[0]) {
        modales[0].style.display = "none";
    }else if (event.target == modales[1]){
        modales[1].style.display = "none";
    }else if (event.target == modales[2]){
        modales[2].style.display = "none";
    }else if(event.target == modales[3]){
        modales[3].style.display = "none";
    }
}
