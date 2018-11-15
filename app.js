var form = document.getElementById('add-item')
var input = document.getElementById('input')
var list = document.getElementById('list')

function addItem(e) {
  // this prevents the page reloads and losing form data
  e.preventDefault()

  // this grabs in user input
  var item = input.value
  
  form.reset()
  // puts user input into a ul
  list.innerHTML += "<li>" + item + "</li>"
}


form.addEventListener('submit', addItem)