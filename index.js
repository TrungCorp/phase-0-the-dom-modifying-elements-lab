// Write your code here!
const elem = document.getElementById('main')
elem.remove()
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = "Trung is the champion"
document.append(newHeader)