document.addEventListener('click', function(e){
    let body = document.querySelector('body');
    let thunder = document.createElement('span');
    thunder.classList.add('thunder');
    let x = e.offsetX;
    let y = e.offsetY;
    thunder.style.left = x+'px';
    thunder.style.top = y+'px';
    body.appendChild(thunder);

    // adding thunder sound
    let sound = document.getElementById('audio');
    sound.play();

    // lightning appears and light images
    let images = [
        'url("images/thunder_1.png")',
        'url("images/thunder_2.png")',
        'url("images/thunder_3.png")',
    ]

    let light = document.createElement('span');
    light.classList.add('light');

    let bg = images[Math.floor(Math.random() * images.length)];
    light.style.backgroundImage = bg;

    light.style.left = Math.random() * innerWidth + 'px';
    light.style.top = Math.random() * innerHeight + 'px';
    body.appendChild(light)

    // removing holes and thunder after 2s
    setTimeout(function() {
        thunder.remove();
        light.remove();
    },4000)

})
