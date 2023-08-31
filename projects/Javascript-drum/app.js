window.addEventListener('keydown', function(e) {
    let audio =document.querySelector(`audio[data-key="${e.key}"]`);
    
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
});

