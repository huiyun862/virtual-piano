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
document.body.addEventListener('keydown', (e) =>{
    switch(e.key){
        case 'z':
            if(!keypressed['z']){
                attemptedPause['z'] = false;
                clearTimeout(timeouts['z']);
                pianoSounds.c.play();
                keypressed['z'] = true;
                timeouts['z'] = setTimeout(()=>{
                    if(!keypressed['z']){
                        pianoSounds.c.pause();
                    }
                    attemptedPause['z'] = true;
                }, 1000);
            }
            break;
        case 'x':
            if(!keypressed['x']){
                pianoSounds.d.play();
                keypressed['x'] = true;
            }
            break;
        case 'c':
            if(!keypressed['c']){
                pianoSounds.e.play();
                keypressed['c'] = true;
            }
            break;
        case 'v':
            if(!keypressed['v']){
                pianoSounds.f.play();
                keypressed['v'] = true;
            }
            break;
        case 'b':
            if(!keypressed['b']){
                pianoSounds.g.play();
                keypressed['b'] = true;
            }
            break;
        case 'n':
            if(!keypressed['n']){
                pianoSounds.a.play();
                keypressed['n'] = true;
            }
            break;
        case 'm':
            if(!keypressed['m']){
                pianoSounds.b.play();
                keypressed['m'] = true;
            }
            break;
    }
});
document.body.addEventListener('keyup' ,(e) =>{
    switch(e.key){
        case 'z':
            if(attemptedPause['z']){
                pianoSounds.c.pause();
            }
            pianoSounds.c.currentTime = 0;
            keypressed['z'] = false;
            break;
        case 'x':
            pianoSounds.d.pause();
            pianoSounds.d.currentTime = 0;
            keypressed['x'] = false;
            break;
        case 'c':
            pianoSounds.e.pause();
            pianoSounds.e.currentTime = 0;
            keypressed['c'] = false;
            break;
        case 'v':
            pianoSounds.f.pause();
            pianoSounds.f.currentTime = 0;
            keypressed['v'] = false;
            break;
        case 'b':
            pianoSounds.g.pause();
            pianoSounds.g.currentTime = 0;
            keypressed['b'] = false;
            break;
        case 'n':
            pianoSounds.a.pause();
            pianoSounds.a.currentTime = 0;
            keypressed['n'] = false;
            break;
        case 'm':
            pianoSounds.b.pause();
            pianoSounds.b.currentTime = 0;
            keypressed['m'] = false;
            break;
    }
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