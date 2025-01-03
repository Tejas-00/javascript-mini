function displayNotification() {
    if (document.title === 'App') {
        document.title = `(2) New messages`;
    } else {
        document.title = 'App';
    }
}
setInterval(displayNotification, 1000);