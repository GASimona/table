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
            // if (i == 0) {
            //     td.setAttribute('class', 'sus');
            // } 
            // else {
            //     td.setAttribute('class', 'jos');
            // }
            lin.appendChild(col);

            pozitiaPiesei(i, j, col);

            aranjarePieseInTabla(i, j, col);

        }
    }
}

function pozitiaPiesei(i, j, col) {

    if (j == 6) {
        col.setAttribute('pozitie', 25);
    }
    if (j == 13) {
        col.setAttribute('pozitie', 26);
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

function aranjarePieseInTabla(i, j, col) {
    if ((j == 6) || (j == 13)) {
        col.style.background = "rgb(87, 85, 85)";
    }
    else {
        col.style.background = "rgb(185, 139, 78)";
    }
    if ((j == 0) && (i == 0)) {
        for (a = 0; a < 2; ++a) {
            adaugaPiesaALaCoordonatele(i, j);
        }
    }
    if ((j == 5) && (i == 0)) {
        for (a = 0; a < 5; ++a) {
            adaugaPiesaNLaCoordonatele(i, j);
        }
    }
    if ((j == 8) && (i == 0)) {
        for (a = 0; a < 3; ++a) {
            adaugaPiesaNLaCoordonatele(i, j);
        }
    }
    if ((j == 12) && (i == 0)) {
        for (a = 0; a < 5; ++a) {
            adaugaPiesaALaCoordonatele(i, j);
        }
    }
    if ((j == 0) && (i == 1)) {
        for (a = 0; a < 2; ++a) {
            adaugaPiesaNLaCoordonatele(i, j);
        }
    }
    if ((j == 5) && (i == 1)) {
        for (a = 0; a < 5; ++a) {
            adaugaPiesaALaCoordonatele(i, j);
        }
    }
    if ((j == 8) && (i == 1)) {
        for (a = 0; a < 3; ++a) {
            adaugaPiesaALaCoordonatele(i, j);
        }
    }
    if ((j == 12) && (i == 1)) {
        for (a = 0; a < 5; ++a) {
            adaugaPiesaNLaCoordonatele(i, j);
        }
    }
}


function adaugaPiesaALaCoordonatele(i, j) {
    lin = tablaJoc.children[i];
    col = lin.children[j];
    adaugaPiesa(col, "alb.jpg", 0);
}

function adaugaPiesaNLaCoordonatele(i, j) {
    var lin = tablaJoc.children[i];
    var col = lin.children[j];
    adaugaPiesa(col, "negru.jpg", 1);

}


function adaugaPiesa(celula, piesa, culoare) {
    var x = document.createElement('img');
    x.setAttribute('src', piesa);
    x.setAttribute("culoare", culoare);
    celula.appendChild(x);
    x.style.width = "50px";
}


