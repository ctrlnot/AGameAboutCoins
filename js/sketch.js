var start = false;
var score = false;
var tries = 0;
var playerScore = 0;
var cpuScore = 0;
var whoWins = 0;

var currentPile;
var pileOne = [];
var pileTwo = [];
var pileThree = [];
var coinCountPerPile;

var pileCPU = [];
var pilePlayer = [];

var rad; // dynamic radius
var turn = -1; // 1 - Player ; 0 - CPU
var errors = []; // Error messages
var resetPile = false;

var bg;

function setup () {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    bg = loadImage('http://i.imgur.com/UmM6w02.png');
    myCanvas.parent('content');
    rad = Math.ceil(width * .025);
}

function draw () {
    // background(32, 42, 52);
    background(bg);

    coinCountPerPile = [pileOne.length, pileTwo.length, pileThree.length];

    showPiles(pileOne);
    showPiles(pileTwo);
    showPiles(pileThree);

    // Show and update player's pile
    for (var i = 0; i < pilePlayer.length; i++) {
        if (pilePlayer[i].clicked) pilePlayer[i].reset();
        pilePlayer[i].col = color(41,128,185);
        pilePlayer[i].pile = 0;
        pilePlayer[i].update(i, pilePlayer, "player");
        pilePlayer[i].show();
    }

    // Show and update cpu's pile
    for (var i = 0; i < pileCPU.length; i++) {
        if (pileCPU[i].clicked) pileCPU[i].reset();
        pileCPU[i].col = color(192,57,43);
        pileCPU[i].pile = 0;
        pileCPU[i].update(i, pileCPU, "cpu");
        pileCPU[i].show();
    }

    // Show errors
    for (var i = 0; i < errors.length; i++) {
        errors[i].update();
        errors[i].show();
        if (errors[i].alpha < 0) errors.splice(i, 1);
    }

    document.getElementById('turns').innerHTML = "Suffered: " + tries + " time(s)";

    gameState();
}

function endTurn () {
    switch (currentPile) {
            case 1:
                resetPile = true;
                for (var i = pileOne.length - 1; i >= 0 ; i--) {
                    if (pileOne[i].clicked) {
                        // Insert to respective player pile
                        pilePlayer.push(pileOne[i]);

                        pileOne.splice(i, 1);
                    }
                }
                currentPile = 0;
                turn = 0;
            break;

            case 2:
                resetPile = true;
                for (var i = pileTwo.length - 1; i >= 0 ; i--) {
                    if (pileTwo[i].clicked) {
                        // Insert to respective player pile
                        pilePlayer.push(pileTwo[i]);

                        pileTwo.splice(i, 1);
                    } 
                }
                currentPile = 0;
                turn = 0;
            break;

            case 3:
                resetPile = true;
                for (var i = pileThree.length - 1; i >= 0 ; i--) {
                    if (pileThree[i].clicked) {
                        // Insert to respective player pile
                        pilePlayer.push(pileThree[i]);

                        pileThree.splice(i, 1);
                    } 
                }
                currentPile = 0;
                turn = 0;
            break;

            default:
                errors.push(new Error());
            break;
        }
    if (resetPile) currentPile = 0;
}

function mousePressed () {
    var cp = 0;
    resetPile = false;

    for (var i = 0; i < pileOne.length; i++) {
        pileOne[i].click();
        if (pileOne[i].clicked && !resetPile) {
            cp = pileOne[i].pile;
        } else {
            currentPile = 0;
        }
    }

    for (var i = 0; i < pileOne.length; i++) {
        var tmp;

        if (tmp == undefined) {
            tmp = pileOne[i].clicked;
        } else {
            tmp = tmp || pileOne[i].clicked;
        }

        if (tmp && cp == 1) {
            for (var j = 0; j < pileTwo.length; j++) {
                if (pileTwo[j].clicked) pileTwo[j].reset();
            }
            for (var k = 0; k < pileThree.length; k++) {
                if (pileThree[k].clicked) pileThree[k].reset();
            }
        }
    }

    for (var i = 0; i < pileTwo.length; i++) {
        pileTwo[i].click();
        if (pileTwo[i].clicked && !resetPile) {
            cp = pileTwo[i].pile;
        } else {
            currentPile = 0;
            resetPile = false;
        }
    }

    for (var i = 0; i < pileTwo.length; i++) {
        var tmp;

        if (tmp == undefined) {
            tmp = pileTwo[i].clicked;
        } else {
            tmp = tmp || pileTwo[i].clicked;
        }

        if (tmp && cp == 2) {
            for (var j = 0; j < pileOne.length; j++) {
                if (pileOne[j] != null && pileOne[j].clicked) pileOne[j].reset();
            }
            for (var k = 0; k < pileThree.length; k++) {
                if (pileThree[j] != null && pileThree[k].clicked) pileThree[k].reset();
            }
        }
    }

    for (var i = 0; i < pileThree.length; i++) {
        pileThree[i].click();
        if (pileThree[i].clicked && !resetPile) {
            cp = pileThree[i].pile;
        } else {
            currentPile = 0;
            resetPile = false;
        }
    }

    for (var i = 0; i < pileThree.length; i++) {
        var tmp;

        if (tmp == undefined) {
            tmp = pileThree[i].clicked;
        } else {
            tmp = tmp || pileThree[i].clicked;
        }

        if (tmp && cp == 3) {
            for (var j = 0; j < pileOne.length; j++) {
                if (pileOne[j] != null && pileOne[j].clicked) pileOne[j].reset();
            }
            for (var k = 0; k < pileTwo.length; k++) {
                if (pileTwo[j] != null && pileTwo[k].clicked) pileTwo[k].reset();
            }
        }
    }

    currentPile = cp;
}

function gameState () {
    if (start) {
        if (turn) {
            if (totalPiles() <= 0) {
                document.getElementById('end').style.display = 'block';
                document.getElementById('you').className = 'winCol';
                document.getElementById('you').innerHTML = 'YOU WIN! -_-';
                document.getElementById('play-again').innerHTML = "PLAY AGAIN!";
                document.getElementById('play-again').className = "play-again winBg";
            }
        } else {
            if (totalPiles() <= 0) {
                document.getElementById('end').style.display = 'block';
                document.getElementById('you').className = 'loseCol';
                document.getElementById('you').innerHTML = 'YOU SUCK! LOL';
                document.getElementById('play-again').innerHTML = "SUFFER AGAIN!";
                document.getElementById('play-again').className = "play-again loseBg";
            } else {
                cpuMove();
            }
        }
    } else {
        resetGame();
    }
}

function resetGame () {
    start = false;
    document.getElementById('end').style.display = 'none';

    /* --------------- Empty the piles first ------------ */

    truncatePile(pilePlayer);
    truncatePile(pileCPU);
    truncatePile(pileOne);
    truncatePile(pileTwo);
    truncatePile(pileThree);

    /* ---------------- STATIC FOR NOW SMH ------------- */

    // 3 coins for pile one
    for (var i = 0; i < 3; i++) {
        pileOne[i] = new Coin(width / 2, height / 2, rad, 1, (width * 0.25) - (rad * 2 * i), height / 2 - rad);
    }

    // 5 coins for pile two
    for (var i = 0; i < 5; i++) {
        if (i < 3) {
            pileTwo[i] = new Coin(width / 2, height / 2, rad, 2, (width * 0.5 + rad * 2) - (rad * 2 * i), height / 2 - rad * 2);
        } else {
            pileTwo[i] = new Coin(width / 2, height / 2, rad, 2, (width * 0.5 + rad * 7) - (rad * 2 * i), height / 2 - rad * 0.25);
        }
    }

    // 7 coins for pile three
    for (var i = 0; i < 1; i++) {
        if (i < 2) {
            pileThree[i] = new Coin(width / 2, height / 2, rad, 3, (width * 0.75 + rad * 3) - (rad * 2 * i), height / 2 - rad * 2.75);
        } else if (i >= 2 && i < 5) {
            pileThree[i] = new Coin(width / 2, height / 2, rad, 3, (width * 0.75 + rad * 8) - (rad * 2 * i), height / 2 - rad);
        } else {
            pileThree[i] = new Coin(width / 2, height / 2, rad, 3, (width * 0.75 + rad * 13) - (rad * 2 * i), height / 2 + rad * 0.75);
        }
    }

    coinCountPerPile = [pileOne.length, pileTwo.length, pileThree.length];

    document.getElementById('intro').style.display = 'block';
}