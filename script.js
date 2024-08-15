document.addEventListener('DOMContentLoaded', function() {
    console.log('Bem-vindo ao meu site!');
});

function openNav() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width == "180px") {
        sidebar.style.width = "0";
        sidebarn.style.fontSize = "0x";
    } else {
        sidebar.style.width = "180px";
        sidebarn.style.fontSize = "25px";
    }
}