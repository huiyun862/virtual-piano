let b = new Audio('/sounds/piano_B.mp3')
let c = new Audio('/sounds/softmiddleC.wav')
let train = new Audio('/sounds/train.mp3')
// document.body.appendChild(b);

document.getElementById('d1').addEventListener('click', ()=>{
    test_play();
    // b.play();
    // b.currentTime = 0;
});
document.getElementById('d2').addEventListener('click', ()=>{
    c.play();
});
document.getElementById('d3').addEventListener('click', ()=>{
    train.play();
});


let pianoSounds:{[key:string]: HTMLAudioElement} = {
    c: null, 
    d: null, 
    e: null, 
    f: null,
    g: null,
    a: null,
    b: null
};
Object.keys(pianoSounds).forEach(key =>{
    pianoSounds[key] = new Audio('/sounds/piano_sounds/'+key+'5.mp3');
});
let sequence = [
    'c', 
    'c', 
    'g', 
    'g',
    'a',
    'a',
    'g'
];
let delayTimeMilliSec = 250;

function delay(time) {
    return new Promise(resolve => { setTimeout(() => resolve(''), time); });
}

async function test_play() {
    for(let i=0; i<sequence.length; i++){
       pianoSounds[sequence[i]].play();
       await delay(delayTimeMilliSec);
       pianoSounds[sequence[i]].pause();
       pianoSounds[sequence[i]].currentTime = 0;
    }    
}