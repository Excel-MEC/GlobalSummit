document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});

var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem);


$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown({constrainWidth:false});
    $('.modal').modal();
});

 
