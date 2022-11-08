// toggle_audio_music

let myAudio = document.querySelector("audio");
let isPlaying = false;

function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};


// dark_mode

let changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `css/${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
    console.log(localStorage)
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null || activeTheme === 'light') {
    applyTheme('light');
} else if (activeTheme === 'dark') {
    applyTheme('dark');
}

// mobile_menu

let burgerMenu = document.querySelector('.burger-menu');

let overplay = document.querySelector('.mobile_menu');

let body = document.querySelector('body');

burgerMenu.addEventListener('click',function(){
    body.classList.toggle("overflow");
    this.classList.toggle("close");
    overplay.classList.toggle("overplay");
});
