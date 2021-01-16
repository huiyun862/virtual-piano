let b = new Audio('/sounds/piano_B.mp3')
let c = new Audio('/sounds/softmiddleC.wav')
let train = new Audio('/sounds/train.mp3')
// document.body.appendChild(b);
let keypressed:{[key:string]: boolean} = {
    z: false, 
    x: false, 
    c: false, 
    v: false,
    b: false,
    n: false,
    m: false
};
let attemptedPause:{[key:string]: boolean} = {
    z: false, 
    x: false, 
    c: false, 
    v: false,
    b: false,
    n: false,
    m: false
};
let timeouts:{[key:string]: any} = {
    z: 0, 
    x: 0, 
    c: 0, 
    v: 0,
    b: 0,
    n: 0,
    m: 0
};
let keyNoteLink: {[key:string]: string} = {
    'z': 'c', 
    'x': 'd',
    'c': 'e',
    'v': 'f',
    'b': 'g',
    'n': 'a',
    'm': 'b'
}; 
let noteKeyLink: {[key:string]: string} = {
    'c': 'z', 
    'd': 'x',
    'e': 'c',
    'f': 'v',
    'g': 'b',
    'a': 'n',
    'b': 'm'
}; 
function keyboardPianoPress(key:string){
    if(keyNoteLink.hasOwnProperty(key) && !keypressed[key]){
        document.getElementById(keyNoteLink[key] + '-key').classList.add('clicked');
        attemptedPause[key] = false;
        clearTimeout(timeouts[key]);
        pianoSounds[keyNoteLink[key]].currentTime = 0;
        pianoSounds[keyNoteLink[key]].play();
        keypressed[key] = true;
        timeouts[key] = setTimeout(()=>{
            if(!keypressed[key]){
                pianoSounds[keyNoteLink[key]].pause();
            }
            attemptedPause[key] = true;
        }, 1000);
    }
}

document.body.addEventListener('keydown', (e) =>{
    keyboardPianoPress(e.key);
});
function keyboardPianoRelease(key:string){
    if(keyNoteLink.hasOwnProperty(key)){
        document.getElementById(keyNoteLink[key] + '-key').classList.remove('clicked');
        if(attemptedPause[key]){
            pianoSounds[keyNoteLink[key]].pause();
        }
        keypressed[key] = false;
    }
}
document.body.addEventListener('keyup', (e) =>{
    keyboardPianoRelease(e.key);
});

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
    'g*',
    'f',
    'f',
    'e',
    'e',
    'd',
    'd',
    'c*',
    'g',
    'g',
    'f',
    'f',
    'e',
    'e',
    'd*',
    'g',
    'g',
    'f',
    'f',
    'e',
    'e',
    'd*',
    'c', 
    'c', 
    'g', 
    'g',
    'a',
    'a',
    'g*',
    'f',
    'f',
    'e',
    'e',
    'd',
    'd',
    'c$',
];
let tempo = 240; //beats per minute
let qtrNoteDelay = 60*1000/tempo;
let hfNoteDelay = qtrNoteDelay*2;
let wholeNoteDelay = qtrNoteDelay*4;

// tempo/4*60
//tempo = time of peice/ how many beats 
function delay(time) {
    return new Promise(resolve => { setTimeout(() => resolve(''), time); });
}

async function test_play() {
    for(let i=0; i<sequence.length; i++){
        // pianoSounds[sequence[i][0]].play();
        keyboardPianoPress(noteKeyLink[sequence[i][0]]);
        if(sequence[i].length > 1){
            switch(sequence[i][1]){
                case '*': 
                    await delay(hfNoteDelay);
                    break;
                case '$':
                    await delay(wholeNoteDelay);
                    break;
            }
        }else{
           await delay(qtrNoteDelay);
        }
        // pianoSounds[sequence[i][0]].pause();
        // pianoSounds[sequence[i][0]].currentTime = 0;
        keyboardPianoRelease(noteKeyLink[sequence[i][0]]);
    }    
}


let piano = document.querySelector('.piano');
let keyClicked = null;


piano.addEventListener('mousedown', (e:any)=>{
    keyClicked = e.target.getAttribute('id').charAt(0);
    keyboardPianoPress(noteKeyLink[keyClicked]);
});
document.body.addEventListener('mouseup', (e:any)=>{
    if(keyClicked){
        keyboardPianoRelease(noteKeyLink[keyClicked]);
    }
});