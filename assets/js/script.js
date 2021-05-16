const original = document.querySelector('#original')
const contador = document.querySelector('#contador')
const efeito = document.querySelector('#efeito')
const modificado = document.querySelector('#modificado')


original.addEventListener('keyup', function() {
  contador.innerHTML = original.value.length

  if(efeito.value == "uppercase"){
  modificado.value = original.value.toUpperCase();

}else {
  modificado.value = original.value.toLowerCase();
}
})

