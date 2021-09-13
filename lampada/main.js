const lamp = document.querySelector(".lamp")
const btnOn = document.querySelector(".on")
const btnOff = document.querySelector(".off")


btnOn.addEventListener("click", lampOn)
btnOff.addEventListener("click", lampOff)
lamp.addEventListener("mouseenter", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("dblclick", lampBroken)

function lampBroken (){
  lamp.src = "img/quebrada.jpg"
}

function lampOn (){
  if (lamp.src.includes("ligada.jpg") || lamp.src.includes("desligada.jpg")){
    lamp.src = "img/ligada.jpg"
  }
}

function lampOff (){
  if (lamp.src.includes("ligada.jpg") || lamp.src.includes("desligada.jpg")){
    lamp.src = "img/desligada.jpg"
  }
}



