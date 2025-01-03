function displayMessage() {
        const messageElement = document.querySelector('.js-message');
        messageElement.innerHTML = 'Added';
        setTimeout(function () {messageElement.innerHTML = ''}, 2000);
    }