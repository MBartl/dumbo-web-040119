const button = document.getElementById('hello-button')
const listElement = document.getElementById('blobs')

button.addEventListener('click', function(){
  listElement.innerHTML += '<li>🌮</li>'
})

listElement.addEventListener('click', function(event){
  if (event.srcElement.id !== 'blobs'){
    cycle = ["🍩", "🌮", "🥥", "🍣"]
    display = (cycle.indexOf(event.srcElement.innerText)+1)%4
    event.srcElement.innerText = cycle[display]
  }
})

listElement.addEventListener('contextmenu', function(event){
  if (event.srcElement.id !== 'blobs'){
    event.preventDefault()
    listElement.removeChild(event.target)
  }
})
