let themesBtn = document.getElementById('themesBtn')
let themesContainer = document.getElementById('themesContainer')

let themesOpen = false;

console.log(themesContainer)

themesBtn.addEventListener('click', () =>{

    if(themesOpen == false){
        themesContainer.classList.add('reveal')
        themesOpen = true
    }else{
        themesContainer.classList.remove('reveal')
        themesOpen = false
    }
})

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
        gray: "#333"
    },
    miami: {
        bg: "#0f172a",
        text: "#e0f2fe",
        green: "#22c55e",
        yellow: "#facc15",
        gray: "#334155"
    },
    strawberry: {
        bg: "#F37F83",
        text: "#FCFCF8",
        outline:"#FCFCF8",
        green: "#EF6E77",
        greenOutline:"#fa8c93",
        hover: "#9cf8cc",
        hoverOutline: "#b6f0d3",
        yellow: "#fff36a",
        gray: "#553347"
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
    });
});