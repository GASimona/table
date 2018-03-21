function NuEgaleMutaZarUnu(pozitieD) {
    if ((pozitie - (directie * z1) == pozitieD) && (mutatZ1 != 1)) {
        PunPiesa(event);
        mutatZ1 = 1;
        ct = "nu";
        if (!verificareNrPiese(nrPieseColoana, y, color)) {
            ScotPiesa()
        }
    }
}

function NuEgaleMutaUnZarDoi(pozitieD) {
    if ((pozitie - (directie * z2) == pozitieD) && (mutatZ2 != 1)) {
        PunPiesa(event);
        mutatZ2 = 1;
        ct = "nu";
        if (!verificareNrPiese(nrPieseColoana, y, color)) {
            ScotPiesa();
        }
    }
}

function NuEgaleMutaUnZarUnuSiDoi(pozitieD) {
    if ((pozitie - (directie * z2) - (directie * z1) == pozitieD) && (mutatZ2 != 1) && (mutatZ1 != 1)) {
        mutatZ2 = 1;
        mutatZ1 = 1;
        ct = "nu";
        PunPiesa(event);
        if (!verificareNrPiese(nrPieseColoana, y, color)) {
            ScotPiesa();
        }
    }
}

function EgaleMuta(pozitieD,n) {
    if ((pozitie - (directie * z1 * n) == pozitieD) && (nrmutari < (5-n))) {
        PunPiesa(event);
        nrmutari = nrmutari + (n);
        ct = "nu";
        if (!verificareNrPiese(nrPieseColoana, y, color)) {
            ScotPiesa();
        }
    }
}

