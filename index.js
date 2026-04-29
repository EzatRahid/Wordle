const Words = ["about","above","abuse","actor","acute","admit","adopt","adult",
  "after","again","agent","agree","ahead","alarm","album","alert",
  "alike","alive","allow","alone","along","alter","among","anger",
  "angle","angry","apart","apple","apply","arena","argue","arise",
  "array","aside","asset","audio","audit","avoid","award","aware",
  "badly","baker","bases","basic","basis","beach","began","begin",
  "begun","being","below","bench","billy","birth","black","blame",
  "blind","block","blood","board","boost","booth","bound","brain",
  "brand","bread","break","breed","brief","bring","broad","broke",
  "brown","build","built","buyer","cable","calif","carry","catch",
  "cause","chain","chair","chart","chase","cheap","check","chest",
  "chief","child","china","chose","civil","claim","class","clean",
  "clear","click","clock","close","coach","coast","could","count",
  "court","cover","craft","crash","cream","crime","cross","crowd",
  "crown","curve","cycle","daily","dance","dated","dealt","death",
  "debut","delay","depth","doing","doubt","dozen","draft","drama",
  "drawn","dream","dress","drill","drink","drive","drove","dying",
  "eager","early","earth","eight","elite","empty","enemy","enjoy",
  "enter","entry","equal","error","event","every","exact","exist",
  "extra","faith","false","fault","fiber","field","fifth","fifty",
  "fight","final","first","fixed","flash","fleet","floor","fluid",
  "focus","force","forth","forty","forum","found","frame","frank",
  "fraud","fresh","front","fruit","fully","funny","giant","given",
  "glass","globe","going","grace","grade","grand","grant","grass",
  "great","green","gross","group","grown","guard","guess","guest",
  "guide","happy","harry","heart","heavy","hence","henry","horse",
  "hotel","house","human","ideal","image","index","inner","input",
  "issue","japan","jimmy","joint","jones","judge","known","label",
  "large","laser","later","laugh","layer","learn","lease","least",
  "leave","legal","level","light","limit","links","lives","local",
  "logic","loose","lower","lucky","lunch","major","maker","march",
  "maria","match","maybe","mayor","meant","media","metal","might",
  "minor","minus","mixed","model","money","month","moral","motor",
  "mount","mouse","mouth","movie","music","needs","never","newly",
  "night","noise","north","noted","novel","nurse","occur","ocean",
  "offer","often","order","other","ought","paint","panel","paper",
  "party","peace","peter","phase","phone","photo","piece","pilot",
  "pitch","place","plain","plane","plant","plate","point","pound",
  "power","press","price","pride","prime","print","prior","prize",
  "proof","proud","prove","queen","quick","quiet","quite","radio",
  "raise","range","rapid","ratio","reach","ready","refer","right",
  "rival","river","robin","roger","roman","rough","round","route",
  "royal","rural","scale","scene","scope","score","sense","serve",
  "seven","shall","shape","share","sharp","sheet","shelf","shell",
  "shift","shine","shirt","shock","shoot","short","shown","sight",
  "since","sixth","sixty","sized","skill","sleep","slide","small",
  "smart","smile","smith","smoke","solid","solve","sorry","sound",
  "south","space","spare","speak","speed","spend","spent","split",
  "spoke","sport","staff","stage","stake","stand","start","state",
  "steam","steel","stick","still","stock","stone","stood","store",
  "storm","story","strip","stuck","study","stuff","style","sugar",
  "suite","super","sweet","table","taken","taste","taxes","teach",
  "teeth","terry","texas","thank","their","theme","there","these",
  "thick","thing","think","third","those","three","threw","throw",
  "tight","times","tired","title","today","topic","total","touch",
  "tough","tower","track","trade","train","treat","trend","trial",
  "tried","tries","truck","truly","trust","truth","twice","under",
  "union","unity","until","upper","upset","urban","usage","usual",
  "valid","value","video","virus","visit","vital","voice","waste",
  "watch","water","wheel","where","which","while","white","whole",
  "whose","woman","women","world","worry","worse","worst","worth",
  "would","wound","write","wrong","wrote","yield","young","youth"]

let targetWord = Words[Math.floor(Math.random() * Words.length)].toUpperCase()

let currentGuess = '';
let currentRow = 0;

let gameOver = false

let newGameBtn = document.getElementById('newGame')

let alertBox = document.getElementById('alert')
let alertTimer;

const updateAlert = (message) =>{
    alertBox.textContent = message
    alertBox.classList.add('show')

    clearTimeout(alertTimer)

    alertTimer = setTimeout(() =>{
        alertBox.classList.remove('show')
    },4000)
}

// Restarts game
newGameBtn.addEventListener('click',() =>{
    let rows = document.querySelectorAll('.row')
    let boxes = rows[currentRow].querySelectorAll('.box')

        targetWord = Words[Math.floor(Math.random() * Words.length)].toUpperCase()

        document.querySelectorAll('.box').forEach(box => {
        box.textContent = '';
        box.style.backgroundColor = '';
        });

        currentRow = 0;
        gameOver = false
        updateAlert('Game reset!')

        console.log(targetWord)
})


// Submits word
const submitGuess = () =>{
    console.log('Submited: ', currentGuess)
    let rows = document.querySelectorAll('.row')
    let boxes = rows[currentRow].querySelectorAll('.box')

    if (currentGuess === targetWord) {
        updateAlert('You Win! Want to play again?')
        gameOver = true;
    }
    
    boxes.forEach((box,i) =>{
        if(currentGuess[i] == targetWord[i]){
            box.style.backgroundColor = '#188703';
        }
        else if(targetWord.includes(currentGuess[i])){
            box.style.backgroundColor = '#BFA900'
        }
        if(currentRow == 6){
            updateAlert('You ran out of tries!')
            gameOver = true
        }
    })

    currentRow++;
    currentGuess = ''
}

// Updates each box with user input
const updateBox = () =>{
    let rows = document.querySelectorAll('.row')
    let boxes = rows[currentRow].querySelectorAll('.box')

    boxes.forEach((box,i) => {
        box.textContent = currentGuess[i] || ''
        
    })
}


// Main input listener
document.addEventListener("keydown",(e) =>{
    if(gameOver) return

    let key = e.key
    
    if(key == 'Backspace'){
        currentGuess = currentGuess.slice(0 , -1)
    }

    else if(key == 'Enter'){
        e.preventDefault()
        submitGuess()
        return
    }

    else if(/^[a-zA-Z]$/.test(key)){
         if (currentGuess.length < 5) {
        currentGuess += key.toUpperCase();
    }
    }

    console.log(currentGuess)
    updateBox()
})
