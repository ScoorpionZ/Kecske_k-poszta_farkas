window.addEventListener("load",init);

function $(nev){
    return document.querySelectorAll(nev);
}

function ID(nev) {
    return document.getElementById(nev);
}

var kep=["kepek/kecske2.png","kepek/kaposzta.png","kepek/farkas.png"];

function init(){
    for (var i = 0; i < $("aside p img").length; i++) {
        $("aside p img")[i].addEventListener("mouseover",feladat5);
        $("aside p img")[i].addEventListener("mouseout",feladat6);
    }

    $("footer p")[0].innerHTML = "Váradi Ákos, Simon Gergely, Li Richárd, Schmiedmeiszter Ádám";
    for (var i = 0; i < $("#bal img").length; i++) {
        $("#bal img")[i].addEventListener("click",feladat3b);
        $("#bal img")[i].addEventListener("click",feladat7);

    }
}


function feladat3b(){
    var index = this.id-1;
    console.log(kep[index]);
}

function feladat5(){
    this.classList.add("kiemel");
    
}

function feladat6(){
    this.classList.remove("kiemel");
    
}


function feladat7() {
    var img = document.createElement("img");
    img.src = kep[this.id - 1];
    this.style.display = "none";
    ID("csonak").appendChild(img);
    ellenorzes(this.id);
}
var csonak = [];
function ellenorzes(id) {
    csonak += id;
    console.log(id);
    if (csonak.includes(1) && csonak.includes(3) || csonak.includes(1) && csonak.includes(2)) {
        alert("Helytelen választás");
    }
}