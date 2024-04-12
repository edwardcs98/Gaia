$(document).ready(function () {
    $('.col-1, .col-2').fadeIn(1000); // 1000 milisegundos (1 segundo)
});

$(document).ready(function () {
    $(window).scroll(function () {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        var seccionPos = $('#servicios').offset().top;

        if (scrollPos + windowHeight > seccionPos) {
            $('.servicios').each(function () {
                $(this).css('opacity', '1');
            });
        }
    });
});

$(document).ready(function () {
    $('#infome').click(function () {
        $('.col-1 h3').fadeOut('slow', function () {
            $('.col-1 p').fadeIn('slow');
        });
    });
});



//funci�n que carga las animaciones de las habilidades
function cargarAnimaciones() {
    $(function () {
        $('.chart1').easyPieChart({
            size: 160,
            barColor: "#c2003e",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#52515",
            lineCap: "circle",
            animate: 1000,
        });
        $('.chart2').easyPieChart({
            size: 160,
            barColor: "#c2003e",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 1000,
        });
        $('.chart3').easyPieChart({
            size: 160,
            barColor: "#c2003e",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 1000,
        });
        $('.chart4').easyPieChart({
            size: 160,
            barColor: "#c2003e",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#c2003e",
            lineCap: "circle",
            animate: 1000,
        });
        $('.chart5').easyPieChart({
            size: 160,
            barColor: "#c2003e",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 1000,
        });
        $('.chart6').easyPieChart({
            size: 160,
            barColor: "#c2003e",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 1000,
        });

    })
}

//Funci�n para filtrar las categor�as de los trabajos
function verCategoria(cat) {
    const items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for (let i = 0; i < itemCat.length; i++) {
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}
//Funci�n que detecta cuando lanzar la animaci�n de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("chart");
        habilidades[0].classList.add("chart1");
        habilidades[1].classList.add("chart2");
        habilidades[2].classList.add("chart3");
        habilidades[3].classList.add("chart4");
        habilidades[4].classList.add("chart5");
        habilidades[5].classList.add("chart6");

        cargarAnimaciones();
    }
}

//detecto el scrolling para aplicar la animaci�n de las habilidaes
window.onscroll = function () {
    efectoHabilidades();
}

//funci�n que muestra el menu responsive{
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function () {
            x.className = "";
            span.remove();
        }
    } else {
        x.className = "";
    }
}

//Este codigo es para agregar una funci�n a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for (i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}



