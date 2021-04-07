window.addEventListener("load",init);
function $(nev){
    return document.querySelectorAll(nev);
}

function init(){
    for (var i = 0; i < $("aside p img").length; i++) {
    $("aside p img")[i].addEventListener("mouseover",feladat5)
    $("aside p img")[i].addEventListener("mouseout",feladat6)
    }
}
function feladat5(){
    this.classList.add("kiemel");
    
}
function feladat6(){
    this.classList.remove("kiemel");
    
}