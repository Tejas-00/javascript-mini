let messageCount = 0;
function displayNotification(messageCount) {
    if (document.title === 'App' && messageCount > 0) {
        document.title = `(${messageCount}) New messages`;
    } else {
        document.title = 'App';
    }
}
setInterval(() => displayNotification(messageCount), 1000);