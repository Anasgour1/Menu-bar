let selectFild = document.getElementById("selectFild");
let selecttext = document.getElementById("selecttext");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");


selectFild.onclick = function(){
  list.classList.toggle("hide")
  arrowIcon.classList.toggle("rotate");
}

for(option of options) {
  option.onclick = function(){
    selecttext.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  }
}