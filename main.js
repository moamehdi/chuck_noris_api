var phrase = document.querySelector('.test')
var button = document.getElementById('button')

button.addEventListener('click', async () => {
await fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then(response => phrase.innerHTML =`<p>${response.value}</p>`)
})