window.addEventListener("load",init);

function $(nev){
    return document.querySelectorAll(nev);
}

var kep=["kepek/kecske2.png","kepek/kaposzta.png","kepek/farkas.png"];

function init(){
    $("footer p")[0].innerHTML = "Váradi Ákos";
    for (var i = 0; i < $("#bal img").length; i++) {
        $("#bal img")[i].addEventListener("click",feladat3b);

    }
    
}

function feladat3b(){
    var index = this.id-1;
    console.log(kep[index]);
}

