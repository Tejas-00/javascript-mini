let flag = 0;
function changeText() {
    const buttonElement = document.querySelector('.js-button');
    setTimeout(function() {
        if (flag % 2 === 0) {
            buttonElement.innerHTML = 'Finished!';
            flag++;
        } else if (flag % 2 === 1) {
            buttonElement.innerHTML = 'Start';
            flag--;
        }
    },1000);
    buttonElement.innerHTML = 'loading...';
}