for (z = 0; z < imgs.length; ++z) {
    imgs[z].addEventListener("click", RidicPiesa, true);
}

var tds = document.getElementsByTagName('td');

for (z = 0; z < tds.length; ++z) {
    tds[z].addEventListener("click", IncercSaPunPiesa, true);
}


function mutare(event) {
    document.body.appendChild(ct);

    ct.style.left = (event.clientX + 10) + "px";
    ct.style.top = (event.clientY + 10) + "px";
}