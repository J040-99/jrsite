document.addEventListener('DOMContentLoaded', function() {
    console.log('Bem-vindo ao meu site!');
});

function openNav() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "180px") {
        sidebar.style.width = "0";
        sidebar.style.fontsize = "0x";
    } else {
        sidebar.style.width = "180px";
        sidebar.style.fontsize = "15px";
    }
}
