window.addEventListener("load",init);

function $(nev){
    return document.querySelectorAll(nev);
}

var kep=["kepek/kecske2.png","kepek/kaposzta.png","kepek/farkas.png"];

function init(){
    for (var i = 0; i < $("aside p img").length; i++) {
        $("aside p img")[i].addEventListener("mouseover",feladat5)
        $("aside p img")[i].addEventListener("mouseout",feladat6)
    }

    $("footer p")[0].innerHTML = "Váradi Ákos";
    for (var i = 0; i < $("#bal img").length; i++) {
        $("#bal img")[i].addEventListener("click",feladat3b);

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

