function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
}

function showPiles (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].show();
    }
}

function totalPiles () {
    var total = 0;
    for (var i = 0; i < coinCountPerPile.length; i++) {
        total += coinCountPerPile[i];
    }

    return total;
}

function truncatePile (arr) {
    if (arr.length > 0) {
        for (var i = arr.length - 1; i >= 0; i--) {
            arr.splice(i, 1);
        }
    }
}

function getRandomNum (min, max, avoid) {
    var res = Math.floor(Math.random() * (max - min + 1)) + min;
    return res == avoid ? getRandomNum(min, max, avoid) : res;
}

function startGame (who) {
    if (!start) {
        start = true;
        turn = who;
        document.getElementById('intro').style.display = 'none';
        tries++;
    }
}

function keyPressed () {
    if (keyCode === RETURN || key === ' ' || keyCode === ENTER) {
        endTurn();
    }
}