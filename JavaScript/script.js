const button = document.getElementById('play_button');
let select = 0;
const image = document.getElementById('button_image');
let audio = new Audio();
audio.src = './Media/megalovania.mp3';

button.addEventListener('click', () => {
    
    if (select === 0) {
        image.src = './Media/pausa.png'
        button.style.backgroundColor = 'red';
        audio.play()
        select = 1;
    } else {
        image.src = './Media/tocar.png'
        button.style.backgroundColor = 'green';
        audio.pause();
        select = 0;
    }
})