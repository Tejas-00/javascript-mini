function addFunc() {
    for (let i = 0; i < 2; i++) {
        console.log(2+3);
    }
}

function runTwice(func) {
    for (let i = 0; i < 2; i++) {
        func();
    }
}