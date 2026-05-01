const buttons = document.querySelectorAll('[data-target]');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const targetEl = document.getElementById(targetId);

         const isOpen = targetEl.classList.contains('reveal');

        document.querySelectorAll('.dropdown').forEach(el => {
            el.classList.remove('reveal');
        });

       if(!isOpen) {
            targetEl.classList.add('reveal');
        }
    });
});

const themes = {
    default: {
       bg: "#212121",
        text: "#ffffff",
        outline: "#2e2e2e",
        green: "#188703",
        greenOutline: "#2EB812",
        hover: "#15BF00",
        hoverOutline: "#42F21F",
        yellow: "#BFA900",
        gray: "#333",
        boxText:"#FCFCF8",
        navColor:'#ffffff'
    },
    miami: {
        bg: "#18181A",
        outline:"#FCFCF8",
        text: "#35d4dd",
        green: "#F35588",
        greenOutline: "#f984a9",
        hover: "#f383a6",
        hoverOutline: "#f49ab6",
        yellow: "#facc15",
        gray: "#334155",
        boxText:"#FCFCF8"
    },
    strawberry: {
        bg: "#F37F83",
        text: "#FCFCF8",
        outline:"#FCFCF8",
        green: "#e65761",
        greenOutline:"#fa8c93",
        hover: "#ee8087",
        hoverOutline: "#fcb3b8",
        yellow: "#f2eb9c",
        gray: "#92607d",
        boxText:"#FCFCF8",
        navColor:'#e65761'
    },
    dracula: {
        bg: "#282A36",
        text: "#3d4662",
        outline:"#6272A4",
        green: "#BD93F9",
        greenOutline:"#cdacfb",
        hover: "#d4b8fb",
        hoverOutline: "#dfccf8",
        yellow: "#f2eb9c",
        gray: "#272024",
        boxText:"#FCFCF8",
        navColor:'#BD93F9'
    },
    bushido: {
        bg: "#242933",
        text: "#242933",
        outline:"#f4717a",
        green: "#EC4C56",
        greenOutline:"#EC4C56",
        hover: "#e87078",
        hoverOutline: "#f58e95",
        yellow: "#f2eb9c",
        gray: "#2b2127",
        boxText:"#f3979d",
        navColor:'#EC4C56'
    }
};

function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    for (let key in theme) {
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }
}

document.querySelectorAll('.themeDiv').forEach(div => {
    div.addEventListener('click', () => {
        const themeName = div.dataset.theme;
        applyTheme(themeName);

        localStorage.setItem('theme',themeName)
    });
});

const savedThemes = localStorage.getItem('theme')

if(savedThemes){
    applyTheme(savedThemes)
}


