
$(function () {
    $('[data-bs-toggle="popover"]').popover()
});


$("a").click(function(){
     alert("hola")
    
});



//Inicialización Popover
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})