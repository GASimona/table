var nc = 14;
var nl = 2;
var tablaJoc = document.getElementById('tabla');
var lin;
var col;


function inceputJoc() {
    for (i = 0; i < nl; ++i) {
        var lin = document.createElement('tr');
        tablaJoc.appendChild(lin);
        for (j = 0; j < nc; ++j) {
            var col = document.createElement('td');
            if (i == 0) {
                col.setAttribute('class', 'sus');
            }
            else {
                col.setAttribute('class', 'jos');
            }
            lin.appendChild(col);

            pozitiaPiesei(i, j, col);
            FontInTabla(i, j, col);
        }
    }
    aranjarePieseInTabla();
}

function FontInTabla(i, j, col) {
    if ((j == 6) || (j == 13)) {
        col.style.background = "rgb(87, 85, 85)";
    }
    else {
        col.style.background = "rgb(185, 139, 78)";
    }
}

function pozitiaPiesei(i, j, col) {

    if ((j == 6) && (i == 1)) {
        col.setAttribute('pozitie', 0);
    }
    if ((j == 6) && (i == 0)) {
        col.setAttribute('pozitie', 25);
    }
    if ((j == 13) && (i == 1)) {
        col.setAttribute('pozitie', 222);
    }
    if ((j == 13) && (i == 0)) {
        col.setAttribute('pozitie', 111);
    }
    if (j < 6) {
        if (i == 0) {
            col.setAttribute('pozitie', 1 + j);
        }
        else {
            col.setAttribute('pozitie', 24 - j);
        }
    }
    if ((j > 6) && (j < 13)) {
        if (i == 0) {
            col.setAttribute('pozitie', j);
        }
        else {
            col.setAttribute('pozitie', 25 - j);
        }
    }
}

var listapiese = [
    { x: 0, y: 0, c: 0 }, { x: 0, y: 0, c: 0 },
    { x: 0, y: 5, c: 1 }, { x: 0, y: 5, c: 1 }, { x: 0, y: 5, c: 1 }, { x: 0, y: 5, c: 1 }, { x: 0, y: 5, c: 1 },
    { x: 0, y: 8, c: 1 }, { x: 0, y: 8, c: 1 }, { x: 0, y: 8, c: 1 },
    { x: 0, y: 12, c: 0 }, { x: 0, y: 12, c: 0 }, { x: 0, y: 12, c: 0 }, { x: 0, y: 12, c: 0 }, { x: 0, y: 12, c: 0 },
    { x: 1, y: 0, c: 1 }, { x: 1, y: 0, c: 1 },
    { x: 1, y: 5, c: 0 }, { x: 1, y: 5, c: 0 }, { x: 1, y: 5, c: 0 }, { x: 1, y: 5, c: 0 }, { x: 1, y: 5, c: 0 },
    { x: 1, y: 8, c: 0 }, { x: 1, y: 8, c: 0 }, { x: 1, y: 8, c: 0 },
    { x: 1, y: 12, c: 1 }, { x: 1, y: 12, c: 1 }, { x: 1, y: 12, c: 1 }, { x: 1, y: 12, c: 1 }, { x: 1, y: 12, c: 1 }
];



var contor = 0;

function aranjarePieseInTabla() {
    for (contor == 0; contor < listapiese.length; ++contor) {
        adaugaPiesaLaCoordonatele(listapiese[contor].x, listapiese[contor].y, listapiese[contor].c);
    }
}

function adaugaPiesaLaCoordonatele(i, j, culoare) {
    lin = tablaJoc.children[i];
    col = lin.children[j];
    if (culoare == 0) {
        adaugaPiesa(col, "alb.jpg", culoare);
    }
    else {
        adaugaPiesa(col, "negru.jpg", culoare);
    }
}

function adaugaPiesa(celula, piesa, culoare) {
    var x = document.createElement('img');
    x.setAttribute('src', piesa);
    x.setAttribute("culoare", culoare);
    celula.appendChild(x);
    x.style.width = "50px";
}


