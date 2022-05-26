
const togglebox = document.querySelector('#toggle-theme-box')
const items = document.querySelectorAll('.item')

togglebox.addEventListener('change', function(){
    const bg_body = document.body
    const bg_formulario = document.querySelector('.formulario')
    bg_formulario.classList.toggle('dark-nav')
    bg_body.classList.toggle('dark-bg')
    
    items.forEach(function(option) {

      option.classList.toggle('dark-card')

  }
  ) 
})