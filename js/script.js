let button = document.getElementById('myButton');
let background = document.getElementsByClassName('left_content')[0];
let text = document.getElementById('nikitos');
button.addEventListener('click', () => {
    background.style.backgroundColor= '#daa0a0';
    alert('Avion style');
    text.innerHTML = '<img src= "img/я с крыльями.jpg" width = "400px"><h1>сюда</h1>';
});
