const board = document.querySelector('#board')
const SQUARES_NUMBER =400
const colors = ['red', 'blue',  'Salmon ',   'Gold ',   'GreenYellow ',  'Aqua ',    'Brown ', ]

for(let i = 0; i < SQUARES_NUMBER; i++) {
const square = document.createElement('div')
square.classList.add('square')
board.append(square)
square.addEventListener  ('mouseover', ()=> setColor(square))
square.addEventListener('mouseleave', ()=> removeColor(square))



}

function setColor(element) {
const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor(element) {

    element.style.backgroundColor = 'rgb(78, 74, 74)'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {

const index = Math.floor(Math.random() * colors.length)
return colors[index]
}
    
