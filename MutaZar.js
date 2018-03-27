function NuEgaleMutaZarUnu(pozitieD) {
    if ((pozitie - (directie * z1) == pozitieD) && (mutatZ1 != 1)) {
        if ((pozitieD < 26) || (pozitieD > -1)) {
            if (verificareNrPiese(nrPieseColoana, y, color)) {
                PunPiesa(event);
                mutatZ1 = 1;
                ct = "nu";
                nrPieseScoase = 0;
            }
            else if ((nrPieseColoana == 1) && (y != color)) {
                PunPiesa(event);
                mutatZ1 = 1;
                ct = "nu";
                ScotPiesa();
                nrPieseScoase = 0;
            }
            MutPiesaLaLoc(nrPieseColoana, y, curcubeu, pozitie, ct);
        }
        else {
            MutPiesaLaLoc(nrPieseColoana, y, curcubeu, pozitie, ct);
        }
    }
}

function NuEgaleMutaUnZarDoi(pozitieD) {
    if ((pozitie - (directie * z2) == pozitieD) && (mutatZ2 != 1)) {
        if ((pozitieD < 26) || (pozitieD > -1)) {
            if (verificareNrPiese(nrPieseColoana, y, color)) {
                PunPiesa(event);
                mutatZ2 = 1;
                ct = "nu";
                nrPieseScoase = 0;
            }
            else if ((nrPieseColoana == 1) && (y != color)) {
                PunPiesa(event);
                mutatZ2 = 1;
                ct = "nu";
                ScotPiesa();
                nrPieseScoase = 0;
            }
            MutPiesaLaLoc(nrPieseColoana, y, curcubeu, pozitie, ct);
        }
        else {
            MutPiesaLaLoc(nrPieseColoana, y, curcubeu, pozitie, ct);
        }
    }
}

function NuEgaleMutaUnZarUnuSiDoi(pozitieD) {
    if ((pozitie - (directie * z2) - (directie * z1) == pozitieD) && (mutatZ2 != 1) && (mutatZ1 != 1)) {
        if (verificareNrPiese(nrPieseColoana, y, color)) {
            PunPiesa(event);
            mutatZ2 = 1;
            mutatZ1 = 1;
            ct = "nu";
            nrPieseScoase = 0;
        }
        else if ((nrPieseColoana == 1) && (y != color)) {
            PunPiesa(event);
            mutatZ2 = 1;
            mutatZ1 = 1;
            ct = "nu";
            ScotPiesa();
            nrPieseScoase = 0;
        }
        MutPiesaLaLoc(nrPieseColoana, y, curcubeu, pozitie, ct);
    }
}

function EgaleMuta(pozitieD, n) {
    if ((pozitie - (directie * z1 * n) == pozitieD) && (nrmutari < (5 - n))) {
        if (verificareNrPiese(nrPieseColoana, y, color)) {
            PunPiesa(event);
            nrmutari = nrmutari + (n);
            ct = "nu";
            nrPieseScoase = 0;
        }
        else if ((nrPieseColoana == 1) && (y != color)) {
            PunPiesa(event);
            nrmutari = nrmutari + (n);
            ct = "nu";
            ScotPiesa();
            nrPieseScoase = 0;
        }
        MutPiesaLaLoc(nrPieseColoana, y, curcubeu, pozitie, ct);
    }
}

