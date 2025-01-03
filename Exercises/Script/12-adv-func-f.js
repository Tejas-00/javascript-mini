let isClicked = false;
let timeoutId;
function displayMessage() {
    if (isClicked === false) {
        const messageElement = document.querySelector('.js-message');
        messageElement.innerHTML = 'Added';
        timeoutId = setTimeout(function () {messageElement.innerHTML = ''}, 2000);
        isClicked = true;
    }
    else {
        clearTimeout(timeoutId);
        isClicked = false;
        displayMessage();
    }
}