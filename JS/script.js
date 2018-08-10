document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});

$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown({constrainWidth:false});
    $(".button-collapse").sidenav();
    $('.modal').modal();
});

 
