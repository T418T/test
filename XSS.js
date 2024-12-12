function displayMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
         悪意のあるスクリプトがそのまま挿入される
        document.getElementById('output').innerHTML = message;
    }
}
window.onload = displayMessage;
