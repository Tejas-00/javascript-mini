function change(buttonClass) {
    const buttonElement = document.querySelector(buttonClass);
    setTimeout(function() {
        if (buttonElement.innerHTML === 'Start') {
            buttonElement.innerHTML = 'Finished!';
            console.log('Finished!');
        } else {
            buttonElement.innerHTML = 'Start';
            console.log('Starrt');
        }
    },1000)
}