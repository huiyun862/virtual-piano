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
                pianoSounds.c.currentTime = 0;
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
                attemptedPause['x'] = false;
                clearTimeout(timeouts['x']);
                pianoSounds.d.currentTime = 0;
                pianoSounds.d.play();
                keypressed['x'] = true;
                timeouts['x'] = setTimeout(()=>{
                    if(!keypressed['x']){
                        pianoSounds.d.pause();
                    }
                    attemptedPause['x'] = true;
                }, 1000);
            }
            break;
        case 'c':
            if(!keypressed['c']){
                attemptedPause['c'] = false;
                clearTimeout(timeouts['c']);
                pianoSounds.e.currentTime = 0;
                pianoSounds.e.play();
                keypressed['c'] = true;
                timeouts['c'] = setTimeout(()=>{
                    if(!keypressed['c']){
                        pianoSounds.e.pause();
                    }
                    attemptedPause['c'] = true;
                }, 1000);
            }
            break;
        case 'v':
            if(!keypressed['v']){
                attemptedPause['v'] = false;
                clearTimeout(timeouts['v']);
                pianoSounds.f.currentTime = 0;
                pianoSounds.f.play();
                keypressed['v'] = true;
                timeouts['v'] = setTimeout(()=>{
                    if(!keypressed['v']){
                        pianoSounds.f.pause();
                    }
                    attemptedPause['v'] = true;
                }, 1000);
            }
            break;
        case 'b':
            if(!keypressed['b']){
                attemptedPause['b'] = false;
                clearTimeout(timeouts['b']);
                pianoSounds.g.currentTime = 0;
                pianoSounds.g.play();
                keypressed['b'] = true;
                timeouts['b'] = setTimeout(()=>{
                    if(!keypressed['b']){
                        pianoSounds.g.pause();
                    }
                    attemptedPause['b'] = true;
                }, 1000);
            }
            break;
        case 'n':
            if(!keypressed['n']){
                attemptedPause['n'] = false;
                clearTimeout(timeouts['n']);
                pianoSounds.a.currentTime = 0;
                pianoSounds.a.play();
                keypressed['n'] = true;
                timeouts['n'] = setTimeout(()=>{
                    if(!keypressed['n']){
                        pianoSounds.a.pause();
                    }
                    attemptedPause['n'] = true;
                }, 1000);
            }
            break;
        case 'm':
            if(!keypressed['m']){
                attemptedPause['m'] = false;
                clearTimeout(timeouts['m']);
                pianoSounds.b.currentTime = 0;
                pianoSounds.b.play();
                keypressed['m'] = true;
                timeouts['m'] = setTimeout(()=>{
                    if(!keypressed['m']){
                        pianoSounds.b.pause();
                    }
                    attemptedPause['m'] = true;
                }, 1000);
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
            keypressed['z'] = false;
            break;
        case 'x':
            if(attemptedPause['x']){
                pianoSounds.d.pause();
            }
            keypressed['x'] = false;
            break;
        case 'c':
            if(attemptedPause['c']){
                pianoSounds.e.pause();
            }
            keypressed['c'] = false;
            break;
        case 'v':
            if(attemptedPause['v']){
                pianoSounds.f.pause();
            }
            keypressed['v'] = false;
            break;
        case 'b':
            if(attemptedPause['b']){
                pianoSounds.g.pause();
            }
            keypressed['b'] = false;
            break;
        case 'n':
            if(attemptedPause['n']){
                pianoSounds.a.pause();
            }
            keypressed['n'] = false;
            break;
        case 'm':
            if(attemptedPause['m']){
                pianoSounds.b.pause();
            }
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
        pianoSounds[sequence[i][0]].play();
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
        pianoSounds[sequence[i][0]].pause();
        pianoSounds[sequence[i][0]].currentTime = 0;
    }    
}