/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/script.ts":
/*!**************************!*\
  !*** ./client/script.ts ***!
  \**************************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var screenHeight = window.innerHeight;
var barColH = screenHeight * 0.85;
function createBar(target) {
    var bar = {
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
function finishBar(map, note) {
    var arr = map[note];
    if (arr.length > 0) {
        var bar = arr[arr.length - 1];
        bar.generated = true;
        if (bar.height > 2) {
            bar.height -= 2;
            bar.element.style.height = bar.height + 'px';
            bar.bottom += 2;
            bar.element.style.bottom = bar.bottom + 'px';
        }
    }
}
function processBars(map) {
    var i;
    Object.keys(map).forEach(function (key) {
        for (i = 0; i < map[key].length; i++) {
            if (map[key][i].generated) {
                map[key][i].bottom += 5;
                map[key][i].element.style.bottom = map[key][i].bottom + 'px';
            }
            else if (map[key][i].height < barColH) {
                map[key][i].height += 5;
                map[key][i].element.style.height = map[key][i].height + 'px';
            }
            if (map[key][i].bottom > barColH) {
                var bar = map[key].splice(i, 1)[0];
                bar.element.remove();
                i--;
            }
        }
    });
}
var keypressed = {
    z: false,
    x: false,
    c: false,
    v: false,
    b: false,
    n: false,
    m: false
};
var attemptedPause = {
    z: false,
    x: false,
    c: false,
    v: false,
    b: false,
    n: false,
    m: false
};
var timeouts = {
    z: 0,
    x: 0,
    c: 0,
    v: 0,
    b: 0,
    n: 0,
    m: 0
};
var keyNoteLink = {
    'z': 'c',
    'x': 'd',
    'c': 'e',
    'v': 'f',
    'b': 'g',
    'n': 'a',
    'm': 'b'
};
var noteKeyLink = {
    'c': 'z',
    'd': 'x',
    'e': 'c',
    'f': 'v',
    'g': 'b',
    'a': 'n',
    'b': 'm'
};
function keyboardPianoPress(key) {
    if (keyNoteLink.hasOwnProperty(key) && !keypressed[key]) {
        document.getElementById(keyNoteLink[key] + '-key').classList.add('clicked');
        barArrayMap[keyNoteLink[key]].push(createBar(keyNoteLink[key] + '-bar-col'));
        attemptedPause[key] = false;
        clearTimeout(timeouts[key]);
        pianoSounds[keyNoteLink[key]].currentTime = 0;
        pianoSounds[keyNoteLink[key]].play();
        keypressed[key] = true;
        timeouts[key] = setTimeout(function () {
            if (!keypressed[key]) {
                pianoSounds[keyNoteLink[key]].pause();
            }
            attemptedPause[key] = true;
        }, 1000);
    }
}
document.body.addEventListener('keydown', function (e) {
    keyboardPianoPress(e.key);
});
function keyboardPianoRelease(key) {
    if (keyNoteLink.hasOwnProperty(key)) {
        document.getElementById(keyNoteLink[key] + '-key').classList.remove('clicked');
        finishBar(barArrayMap, keyNoteLink[key]);
        if (attemptedPause[key]) {
            pianoSounds[keyNoteLink[key]].pause();
        }
        keypressed[key] = false;
    }
}
document.body.addEventListener('keyup', function (e) {
    keyboardPianoRelease(e.key);
});
document.getElementById('d1').addEventListener('click', function () {
    test_play();
    // b.play();
    // b.currentTime = 0;
});
document.getElementById('d2').addEventListener('click', function () {
    $.get('/sequence/seq1').then(function (data) {
        sequence = data;
    });
});
document.getElementById('d3').addEventListener('click', function () {
    $.get('/sequence/seq2').then(function (data) {
        sequence = data;
    });
});
var pianoSounds = {
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    a: null,
    b: null
};
Object.keys(pianoSounds).forEach(function (key) {
    pianoSounds[key] = createSound('/sounds/piano_sounds/' + key + '5.mp3');
});
var sequence = [
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
var tempo = 240; //beats per minute
var qtrNoteDelay = 60 * 1000 / tempo;
var hfNoteDelay = qtrNoteDelay * 2;
var wholeNoteDelay = qtrNoteDelay * 4;
// tempo/4*60
//tempo = time of peice/ how many beats 
function delay(time) {
    return new Promise(function (resolve) { setTimeout(function () { return resolve(''); }, time); });
}
function multiRelease(noteArray) {
    return new Promise(function (resolve) {
        var longest = 0;
        var resolved = false;
        for (var i = 0; i < noteArray.length; i++) {
            if (noteArray[i].length > 1) {
                if (parseInt(noteArray[i][1]) > longest) {
                    longest = parseInt(noteArray[i][1]);
                }
            }
        }
        var _loop_1 = function (i) {
            if (noteArray[i].length > 1) {
                switch (noteArray[i][1]) {
                    case '1':
                        delay(hfNoteDelay).then(function () {
                            if (noteArray[i][0] != 'h') {
                                keyboardPianoRelease(noteKeyLink[noteArray[i][0]]);
                            }
                            if (longest == 1 && !resolved) {
                                resolved = true;
                                resolve('');
                            }
                        });
                        break;
                    case '2':
                        delay(wholeNoteDelay).then(function () {
                            if (noteArray[i][0] != 'h') {
                                keyboardPianoRelease(noteKeyLink[noteArray[i][0]]);
                            }
                            if (longest == 2 && !resolved) {
                                resolved = true;
                                resolve('');
                            }
                        });
                        break;
                }
            }
            else {
                delay(qtrNoteDelay).then(function () {
                    if (noteArray[i][0] != 'h') {
                        keyboardPianoRelease(noteKeyLink[noteArray[i][0]]);
                    }
                    if (longest == 0 && !resolved) {
                        resolved = true;
                        resolve('');
                    }
                });
            }
        };
        for (var i = 0; i < noteArray.length; i++) {
            _loop_1(i);
        }
    });
}
function test_play() {
    return __awaiter(this, void 0, void 0, function () {
        var i, noteArray, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < sequence.length)) return [3 /*break*/, 4];
                    noteArray = sequence[i].split(',');
                    for (j = 0; j < noteArray.length; j++) {
                        if (noteArray[0][0] == 'h') {
                            break;
                        }
                        else {
                            keyboardPianoPress(noteKeyLink[noteArray[j][0]]);
                        }
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
                    return [4 /*yield*/, multiRelease(noteArray)];
                case 2:
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
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function createSound(src) {
    var sound = document.createElement('audio');
    sound.src = src;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "false");
    sound.style.display = "none";
    document.body.appendChild(sound);
    return sound;
}
var barArrayMap = {
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    a: [],
    b: []
};
var piano = document.querySelector('.piano');
var keyClicked = null;
piano.addEventListener('mousedown', function (e) {
    keyClicked = e.target.getAttribute('id').charAt(0);
    keyboardPianoPress(noteKeyLink[keyClicked]);
});
document.body.addEventListener('mouseup', function (e) {
    if (keyClicked) {
        keyboardPianoRelease(noteKeyLink[keyClicked]);
    }
});
piano.addEventListener('touchstart', function (e) {
    keyClicked = e.target.getAttribute('id').charAt(0);
    keyboardPianoPress(noteKeyLink[keyClicked]);
});
document.body.addEventListener('touchend', function (e) {
    if (keyClicked) {
        keyboardPianoRelease(noteKeyLink[keyClicked]);
    }
});
window.addEventListener('resize', function () {
    if (window.innerHeight != screenHeight) {
        screenHeight = window.innerHeight;
        barColH = screenHeight * 0.85;
    }
});
setInterval(function () {
    processBars(barArrayMap);
}, 50);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_modules__["./client/script.ts"]();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXJ0dWFsLXBpYW5vLy4vY2xpZW50L3NjcmlwdC50cyIsIndlYnBhY2s6Ly92aXJ0dWFsLXBpYW5vL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx5QkFBeUIsb0JBQW9CLEVBQUUsUUFBUSxFQUFFO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7OztVQ2haRDtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxudmFyIGJhckNvbEggPSBzY3JlZW5IZWlnaHQgKiAwLjg1O1xyXG5mdW5jdGlvbiBjcmVhdGVCYXIodGFyZ2V0KSB7XHJcbiAgICB2YXIgYmFyID0ge1xyXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGdlbmVyYXRlZDogZmFsc2UsXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIGJvdHRvbTogMFxyXG4gICAgfTtcclxuICAgIGJhci5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmFyJyk7XHJcbiAgICBiYXIuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuICAgIGJhci5lbGVtZW50LnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KS5hcHBlbmRDaGlsZChiYXIuZWxlbWVudCk7XHJcbiAgICByZXR1cm4gYmFyO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmlzaEJhcihtYXAsIG5vdGUpIHtcclxuICAgIHZhciBhcnIgPSBtYXBbbm90ZV07XHJcbiAgICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB2YXIgYmFyID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcclxuICAgICAgICBiYXIuZ2VuZXJhdGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoYmFyLmhlaWdodCA+IDIpIHtcclxuICAgICAgICAgICAgYmFyLmhlaWdodCAtPSAyO1xyXG4gICAgICAgICAgICBiYXIuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBiYXIuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgYmFyLmJvdHRvbSArPSAyO1xyXG4gICAgICAgICAgICBiYXIuZWxlbWVudC5zdHlsZS5ib3R0b20gPSBiYXIuYm90dG9tICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcHJvY2Vzc0JhcnMobWFwKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1hcFtrZXldLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXBba2V5XVtpXS5nZW5lcmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIG1hcFtrZXldW2ldLmJvdHRvbSArPSA1O1xyXG4gICAgICAgICAgICAgICAgbWFwW2tleV1baV0uZWxlbWVudC5zdHlsZS5ib3R0b20gPSBtYXBba2V5XVtpXS5ib3R0b20gKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1hcFtrZXldW2ldLmhlaWdodCA8IGJhckNvbEgpIHtcclxuICAgICAgICAgICAgICAgIG1hcFtrZXldW2ldLmhlaWdodCArPSA1O1xyXG4gICAgICAgICAgICAgICAgbWFwW2tleV1baV0uZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBtYXBba2V5XVtpXS5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtYXBba2V5XVtpXS5ib3R0b20gPiBiYXJDb2xIKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFyID0gbWFwW2tleV0uc3BsaWNlKGksIDEpWzBdO1xyXG4gICAgICAgICAgICAgICAgYmFyLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG52YXIga2V5cHJlc3NlZCA9IHtcclxuICAgIHo6IGZhbHNlLFxyXG4gICAgeDogZmFsc2UsXHJcbiAgICBjOiBmYWxzZSxcclxuICAgIHY6IGZhbHNlLFxyXG4gICAgYjogZmFsc2UsXHJcbiAgICBuOiBmYWxzZSxcclxuICAgIG06IGZhbHNlXHJcbn07XHJcbnZhciBhdHRlbXB0ZWRQYXVzZSA9IHtcclxuICAgIHo6IGZhbHNlLFxyXG4gICAgeDogZmFsc2UsXHJcbiAgICBjOiBmYWxzZSxcclxuICAgIHY6IGZhbHNlLFxyXG4gICAgYjogZmFsc2UsXHJcbiAgICBuOiBmYWxzZSxcclxuICAgIG06IGZhbHNlXHJcbn07XHJcbnZhciB0aW1lb3V0cyA9IHtcclxuICAgIHo6IDAsXHJcbiAgICB4OiAwLFxyXG4gICAgYzogMCxcclxuICAgIHY6IDAsXHJcbiAgICBiOiAwLFxyXG4gICAgbjogMCxcclxuICAgIG06IDBcclxufTtcclxudmFyIGtleU5vdGVMaW5rID0ge1xyXG4gICAgJ3onOiAnYycsXHJcbiAgICAneCc6ICdkJyxcclxuICAgICdjJzogJ2UnLFxyXG4gICAgJ3YnOiAnZicsXHJcbiAgICAnYic6ICdnJyxcclxuICAgICduJzogJ2EnLFxyXG4gICAgJ20nOiAnYidcclxufTtcclxudmFyIG5vdGVLZXlMaW5rID0ge1xyXG4gICAgJ2MnOiAneicsXHJcbiAgICAnZCc6ICd4JyxcclxuICAgICdlJzogJ2MnLFxyXG4gICAgJ2YnOiAndicsXHJcbiAgICAnZyc6ICdiJyxcclxuICAgICdhJzogJ24nLFxyXG4gICAgJ2InOiAnbSdcclxufTtcclxuZnVuY3Rpb24ga2V5Ym9hcmRQaWFub1ByZXNzKGtleSkge1xyXG4gICAgaWYgKGtleU5vdGVMaW5rLmhhc093blByb3BlcnR5KGtleSkgJiYgIWtleXByZXNzZWRba2V5XSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleU5vdGVMaW5rW2tleV0gKyAnLWtleScpLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxuICAgICAgICBiYXJBcnJheU1hcFtrZXlOb3RlTGlua1trZXldXS5wdXNoKGNyZWF0ZUJhcihrZXlOb3RlTGlua1trZXldICsgJy1iYXItY29sJykpO1xyXG4gICAgICAgIGF0dGVtcHRlZFBhdXNlW2tleV0gPSBmYWxzZTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dHNba2V5XSk7XHJcbiAgICAgICAgcGlhbm9Tb3VuZHNba2V5Tm90ZUxpbmtba2V5XV0uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIHBpYW5vU291bmRzW2tleU5vdGVMaW5rW2tleV1dLnBsYXkoKTtcclxuICAgICAgICBrZXlwcmVzc2VkW2tleV0gPSB0cnVlO1xyXG4gICAgICAgIHRpbWVvdXRzW2tleV0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFrZXlwcmVzc2VkW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHBpYW5vU291bmRzW2tleU5vdGVMaW5rW2tleV1dLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0ZW1wdGVkUGF1c2Vba2V5XSA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGtleWJvYXJkUGlhbm9QcmVzcyhlLmtleSk7XHJcbn0pO1xyXG5mdW5jdGlvbiBrZXlib2FyZFBpYW5vUmVsZWFzZShrZXkpIHtcclxuICAgIGlmIChrZXlOb3RlTGluay5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5Tm90ZUxpbmtba2V5XSArICcta2V5JykuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG4gICAgICAgIGZpbmlzaEJhcihiYXJBcnJheU1hcCwga2V5Tm90ZUxpbmtba2V5XSk7XHJcbiAgICAgICAgaWYgKGF0dGVtcHRlZFBhdXNlW2tleV0pIHtcclxuICAgICAgICAgICAgcGlhbm9Tb3VuZHNba2V5Tm90ZUxpbmtba2V5XV0ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAga2V5cHJlc3NlZFtrZXldID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBrZXlib2FyZFBpYW5vUmVsZWFzZShlLmtleSk7XHJcbn0pO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZDEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRlc3RfcGxheSgpO1xyXG4gICAgLy8gYi5wbGF5KCk7XHJcbiAgICAvLyBiLmN1cnJlbnRUaW1lID0gMDtcclxufSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJC5nZXQoJy9zZXF1ZW5jZS9zZXExJykudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHNlcXVlbmNlID0gZGF0YTtcclxuICAgIH0pO1xyXG59KTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2QzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmdldCgnL3NlcXVlbmNlL3NlcTInKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgc2VxdWVuY2UgPSBkYXRhO1xyXG4gICAgfSk7XHJcbn0pO1xyXG52YXIgcGlhbm9Tb3VuZHMgPSB7XHJcbiAgICBjOiBudWxsLFxyXG4gICAgZDogbnVsbCxcclxuICAgIGU6IG51bGwsXHJcbiAgICBmOiBudWxsLFxyXG4gICAgZzogbnVsbCxcclxuICAgIGE6IG51bGwsXHJcbiAgICBiOiBudWxsXHJcbn07XHJcbk9iamVjdC5rZXlzKHBpYW5vU291bmRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIHBpYW5vU291bmRzW2tleV0gPSBjcmVhdGVTb3VuZCgnL3NvdW5kcy9waWFub19zb3VuZHMvJyArIGtleSArICc1Lm1wMycpO1xyXG59KTtcclxudmFyIHNlcXVlbmNlID0gW1xyXG4vLyAnYycsIFxyXG4vLyAnYyxkLGUyJywgXHJcbi8vICdnJywgXHJcbi8vICdnJyxcclxuLy8gJ2EnLFxyXG4vLyAnYScsXHJcbi8vICdnMScsXHJcbi8vICdmJyxcclxuLy8gJ2YnLFxyXG4vLyAnZScsXHJcbi8vICdlJyxcclxuLy8gJ2QnLFxyXG4vLyAnZCcsXHJcbi8vICdjMScsXHJcbi8vICdnJyxcclxuLy8gJ2cnLFxyXG4vLyAnZicsXHJcbi8vICdmJyxcclxuLy8gJ2UnLFxyXG4vLyAnZScsXHJcbi8vICdkMScsXHJcbi8vICdnJyxcclxuLy8gJ2cnLFxyXG4vLyAnZicsXHJcbi8vICdmJyxcclxuLy8gJ2UnLFxyXG4vLyAnZScsXHJcbi8vICdkMScsXHJcbi8vICdjJywgXHJcbi8vICdjJywgXHJcbi8vICdnJywgXHJcbi8vICdnJyxcclxuLy8gJ2EnLFxyXG4vLyAnYScsXHJcbi8vICdnMScsXHJcbi8vICdmJyxcclxuLy8gJ2YnLFxyXG4vLyAnZScsXHJcbi8vICdlJyxcclxuLy8gJ2QnLFxyXG4vLyAnZCcsXHJcbi8vICdjMixlMixnMicsXHJcbl07XHJcbnZhciB0ZW1wbyA9IDI0MDsgLy9iZWF0cyBwZXIgbWludXRlXHJcbnZhciBxdHJOb3RlRGVsYXkgPSA2MCAqIDEwMDAgLyB0ZW1wbztcclxudmFyIGhmTm90ZURlbGF5ID0gcXRyTm90ZURlbGF5ICogMjtcclxudmFyIHdob2xlTm90ZURlbGF5ID0gcXRyTm90ZURlbGF5ICogNDtcclxuLy8gdGVtcG8vNCo2MFxyXG4vL3RlbXBvID0gdGltZSBvZiBwZWljZS8gaG93IG1hbnkgYmVhdHMgXHJcbmZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoJycpOyB9LCB0aW1lKTsgfSk7XHJcbn1cclxuZnVuY3Rpb24gbXVsdGlSZWxlYXNlKG5vdGVBcnJheSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgdmFyIGxvbmdlc3QgPSAwO1xyXG4gICAgICAgIHZhciByZXNvbHZlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm90ZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChub3RlQXJyYXlbaV0ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG5vdGVBcnJheVtpXVsxXSkgPiBsb25nZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2VzdCA9IHBhcnNlSW50KG5vdGVBcnJheVtpXVsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICBpZiAobm90ZUFycmF5W2ldLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobm90ZUFycmF5W2ldWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5KGhmTm90ZURlbGF5KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3RlQXJyYXlbaV1bMF0gIT0gJ2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRQaWFub1JlbGVhc2Uobm90ZUtleUxpbmtbbm90ZUFycmF5W2ldWzBdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9uZ2VzdCA9PSAxICYmICFyZXNvbHZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheSh3aG9sZU5vdGVEZWxheSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm90ZUFycmF5W2ldWzBdICE9ICdoJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkUGlhbm9SZWxlYXNlKG5vdGVLZXlMaW5rW25vdGVBcnJheVtpXVswXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvbmdlc3QgPT0gMiAmJiAhcmVzb2x2ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5KHF0ck5vdGVEZWxheSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVBcnJheVtpXVswXSAhPSAnaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRQaWFub1JlbGVhc2Uobm90ZUtleUxpbmtbbm90ZUFycmF5W2ldWzBdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb25nZXN0ID09IDAgJiYgIXJlc29sdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm90ZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdGVzdF9wbGF5KCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpLCBub3RlQXJyYXksIGo7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGkgPCBzZXF1ZW5jZS5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBub3RlQXJyYXkgPSBzZXF1ZW5jZVtpXS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub3RlQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVBcnJheVswXVswXSA9PSAnaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRQaWFub1ByZXNzKG5vdGVLZXlMaW5rW25vdGVBcnJheVtqXVswXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKHNlcXVlbmNlW2ldLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzd2l0Y2goc2VxdWVuY2VbaV1bMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSAnKic6IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGF3YWl0IGRlbGF5KGhmTm90ZURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgJyQnOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGF3YWl0IGRlbGF5KHdob2xlTm90ZURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGF3YWl0IGRlbGF5KHF0ck5vdGVEZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGtleWJvYXJkUGlhbm9SZWxlYXNlKG5vdGVLZXlMaW5rW3NlcXVlbmNlW2ldWzBdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbXVsdGlSZWxlYXNlKG5vdGVBcnJheSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKHNlcXVlbmNlW2ldLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzd2l0Y2goc2VxdWVuY2VbaV1bMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSAnKic6IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGF3YWl0IGRlbGF5KGhmTm90ZURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgJyQnOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGF3YWl0IGRlbGF5KHdob2xlTm90ZURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGF3YWl0IGRlbGF5KHF0ck5vdGVEZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGtleWJvYXJkUGlhbm9SZWxlYXNlKG5vdGVLZXlMaW5rW3NlcXVlbmNlW2ldWzBdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU291bmQoc3JjKSB7XHJcbiAgICB2YXIgc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgc291bmQuc3JjID0gc3JjO1xyXG4gICAgc291bmQuc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XHJcbiAgICBzb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcImZhbHNlXCIpO1xyXG4gICAgc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzb3VuZCk7XHJcbiAgICByZXR1cm4gc291bmQ7XHJcbn1cclxudmFyIGJhckFycmF5TWFwID0ge1xyXG4gICAgYzogW10sXHJcbiAgICBkOiBbXSxcclxuICAgIGU6IFtdLFxyXG4gICAgZjogW10sXHJcbiAgICBnOiBbXSxcclxuICAgIGE6IFtdLFxyXG4gICAgYjogW11cclxufTtcclxudmFyIHBpYW5vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpYW5vJyk7XHJcbnZhciBrZXlDbGlja2VkID0gbnVsbDtcclxucGlhbm8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGtleUNsaWNrZWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykuY2hhckF0KDApO1xyXG4gICAga2V5Ym9hcmRQaWFub1ByZXNzKG5vdGVLZXlMaW5rW2tleUNsaWNrZWRdKTtcclxufSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoa2V5Q2xpY2tlZCkge1xyXG4gICAgICAgIGtleWJvYXJkUGlhbm9SZWxlYXNlKG5vdGVLZXlMaW5rW2tleUNsaWNrZWRdKTtcclxuICAgIH1cclxufSk7XHJcbnBpYW5vLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAga2V5Q2xpY2tlZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKS5jaGFyQXQoMCk7XHJcbiAgICBrZXlib2FyZFBpYW5vUHJlc3Mobm90ZUtleUxpbmtba2V5Q2xpY2tlZF0pO1xyXG59KTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoa2V5Q2xpY2tlZCkge1xyXG4gICAgICAgIGtleWJvYXJkUGlhbm9SZWxlYXNlKG5vdGVLZXlMaW5rW2tleUNsaWNrZWRdKTtcclxuICAgIH1cclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ICE9IHNjcmVlbkhlaWdodCkge1xyXG4gICAgICAgIHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICBiYXJDb2xIID0gc2NyZWVuSGVpZ2h0ICogMC44NTtcclxuICAgIH1cclxufSk7XHJcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIHByb2Nlc3NCYXJzKGJhckFycmF5TWFwKTtcclxufSwgNTApO1xyXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL2NsaWVudC9zY3JpcHQudHNcIl0oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=