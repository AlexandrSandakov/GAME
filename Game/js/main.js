const div = document.getElementById('div')
const value = document.getElementById('clicks')
const field = document.getElementById('field')
const btn = document.getElementById('btn')

let n = 0

div.addEventListener('click', Clicks)
btn.addEventListener('click', Recet)
field.addEventListener('mousemove', Fly)

function Recet() {
  div.style.top = 10 + 'px'
  div.style.left = 10 + 'px'
}

function Clicks() {
  value.value = parseInt(value.value) + 1
}

function Fly() {
  n++
  if (n % 5 == 0) {
    let newx = Math.random() * (field.offsetWidth - div.offsetWidth)
    let newy = Math.random() * (field.offsetHeight - div.offsetHeight)
    div.style.top = newx + 'px'
    div.style.left = newy + 'px'
  }
}

var isItIn = function (parent, child) {
  var box1coords = parent.getBoundingClientRect()
  var box2coords = child.getBoundingClientRect()

  if (
    box2coords.top < box1coords.top ||
    box2coords.right > box1coords.right ||
    box2coords.bottom > box1coords.bottom ||
    box2coords.left < box1coords.left
  ) {
    return true
  }

  return false
}

console.log(isItIn(field, div))
