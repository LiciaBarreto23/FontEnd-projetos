let body = document.querySelector('body')
let input = document.querySelector("#mode-toggle");
let label = document.querySelector("#mode-label");

label.addEventListener('click', () => {
  if(input.checked){
    body.removeAttribute('id')
    //darkmode
  }else{
    body.setAttribute('id',"darkmode")
  }
})

function preferenciausuario(){
  if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      body.setAttribute('id',"darkmode")
      input.checked = true
    } else {
      body.removeAttribute('id')
    }
  } else {
    body.removeAttribute('id')
  }
}