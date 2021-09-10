const submit = document.querySelector(".submit")
const name = document.querySelector("#input_name")
const height = document.querySelector("#input_height")
const weight = document.querySelector("#input_weight")
const result = document.querySelector(".result")

submit.addEventListener("click", calcIMC)


function calcIMC() {
  let imc = parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value))

  if (imc < 18.5){
    return result.innerHTML = `${name.value} seu IMC é ${imc.toFixed(2)} ta magrão ae paizão.`
  } else if (imc > 18.5 && imc < 24.9){
    return result.innerHTML = `${name.value} seu IMC é ${imc.toFixed(2)} ta safe paizão.`
  } else if (imc > 24.9 && imc < 30){
    return result.innerHTML = `${name.value} seu IMC é ${imc.toFixed(2)} ta gordinho paizão.`
  } else {
    return result.innerHTML = `${name.value} seu IMC é ${imc.toFixed(2)} ta imenso paizão.`
  }

}
