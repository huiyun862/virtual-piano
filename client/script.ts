import * as $ from 'jquery';





let b = new Audio('/sounds/piano_B.mp3')
let c = new Audio('/sounds/softmiddleC.wav')
let train = new Audio('/sounds/train.mp3')
// document.body.appendChild(b);

interface Bar{
    element: HTMLElement,
    generated: boolean,
    height: number,
    bottom: number,
}

function createBar(target: string): Bar{
    let bar: Bar = {
        element: document.createElement('div'), 
        generated: false,
        height: 0,
        bottom: 0
    };
    bar.element.setAttribute('class', 'bar');
    bar.element.style.height = '0px';
    bar.element.style.bottom = '0px';
    document.getElementById(target).appendChild(bar.element);
    return bar;
}
function finishBar(map: {[key: string]: Bar[]}, note: string){
    let arr = map[note];
    if(arr.length > 0){
        arr[arr.length - 1].generated = true;
    }
}
function processBars(map: {[key: string]: Bar[]}) {
    let i;
    Object.keys(map).forEach((key)=>{
        for(i = 0; i < map[key].length; i++){
            if(map[key][i].generated){
                map[key][i].bottom+= 5;
                map[key][i].element.style.bottom = map[key][i].bottom + 'px';
            }else if(map[key][i].height < 300){
                map[key][i].height+= 5;
                map[key][i].element.style.height = map[key][i].height + 'px';
            }
            if(map[key][i].bottom > 300){
                let bar = map[key].splice(i, 1)[0];
                bar.element.remove();
                i--;
            }
        }
    });
}

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
        barArrayMap[keyNoteLink[key]].push(createBar(keyNoteLink[key] + '-bar-col'));
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
        finishBar(barArrayMap, keyNoteLink[key]);
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
    $.get('/sequence/seq1').then((data) =>{
        sequence = data;
    });
});
document.getElementById('d3').addEventListener('click', ()=>{
    $.get('/sequence/seq2').then((data) =>{
        sequence = data;
    });
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
    pianoSounds[key] = createSound('/sounds/piano_sounds/'+key+'5.mp3');
});
let sequence = [
    // 'c', 
    // 'c,d,e2', 
    // 'g', 
    // 'g',
    // 'a',
    // 'a',
    // 'g1',
    // 'f',
    // 'f',
    // 'e',
    // 'e',
    // 'd',
    // 'd',
    // 'c1',
    // 'g',
    // 'g',
    // 'f',
    // 'f',
    // 'e',
    // 'e',
    // 'd1',
    // 'g',
    // 'g',
    // 'f',
    // 'f',
    // 'e',
    // 'e',
    // 'd1',
    // 'c', 
    // 'c', 
    // 'g', 
    // 'g',
    // 'a',
    // 'a',
    // 'g1',
    // 'f',
    // 'f',
    // 'e',
    // 'e',
    // 'd',
    // 'd',
    // 'c2,e2,g2',
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
function multiRelease(noteArray:string[]) {
    return new Promise(resolve => {
        let longest = 0;
        let resolved = false;
        for(let i=0; i<noteArray.length; i++){
            if(noteArray[i].length > 1){
                if(parseInt(noteArray[i][1])>longest){
                    longest = parseInt(noteArray[i][1]);
                }
            }
        }
        for(let i=0; i<noteArray.length; i++) {
            if(noteArray[i].length > 1){
                switch(noteArray[i][1]){
                    case '1': 
                        delay(hfNoteDelay).then(()=>{
                            keyboardPianoRelease(noteKeyLink[noteArray[i][0]]);
                            if(longest==1 && !resolved){
                                resolved = true;
                                resolve('');
                            }
                        });
                        break;
                    case '2':
                        delay(wholeNoteDelay).then(()=>{
                            keyboardPianoRelease(noteKeyLink[noteArray[i][0]]);
                            if(longest==2 && !resolved){
                                resolved = true;
                                resolve('');
                            }
                        });
                        break;
                }
            }else{
                delay(qtrNoteDelay).then(()=>{
                    keyboardPianoRelease(noteKeyLink[noteArray[i][0]]);
                    if(longest==0 && !resolved){
                        resolved = true;
                        resolve('');
                    }
                });
            }
        }
    });
}
async function test_play() {
    for(let i=0; i<sequence.length; i++){
        // pianoSounds[sequence[i][0]].play();
        let noteArray = sequence[i].split(',');
        for(let j=0; j<noteArray.length; j++){
            keyboardPianoPress(noteKeyLink[noteArray[j][0]]);
        }
        // if(sequence[i].length > 1){
        //     switch(sequence[i][1]){
        //         case '*': 
        //             await delay(hfNoteDelay);
        //             break;
        //         case '$':
        //             await delay(wholeNoteDelay);
        //             break;
        //     }
        // }else{
        //    await delay(qtrNoteDelay);
        // }
        // keyboardPianoRelease(noteKeyLink[sequence[i][0]]);
        await multiRelease(noteArray);
    }    
}

function createSound(src: string): HTMLAudioElement{
    let sound = document.createElement('audio');
    sound.src = src;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "false");
    sound.style.display = "none";
    document.body.appendChild(sound);
    return sound;
}

let barArrayMap: {[key: string]: Bar[]} = {
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    a: [],
    b: []
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

setInterval(()=>{
    processBars(barArrayMap);
}, 50);