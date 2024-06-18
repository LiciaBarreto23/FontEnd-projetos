function mudarimagem(event){
  const todasimgs = document.querySelector('.descrição-img')
  const primeiraimg = document.querySelector('.descrição-img img')
  const select = event.target
  todasimgs.insertBefore(select,primeiraimg)
}

const imagens = document.querySelectorAll('.descrição-img img')

imagens.forEach((img) => {
  img.addEventListener('click', mudarimagem)
})