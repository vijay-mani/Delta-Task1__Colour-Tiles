let score = localStorage.getItem('Score');
let div = document.querySelector("#Score");
div.append(score);
let Counts = localStorage.getItem('Counts');
let stepDiv = document.querySelector("#StepC")
stepDiv.append(Count);
let names = document.querySelector("#name");
localStorage.setItem(names.innerText, score);
