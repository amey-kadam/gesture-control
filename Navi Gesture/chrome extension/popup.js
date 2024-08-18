document.getElementById('enable').addEventListener('click', () => {
    chrome.scripting.executeScript({
        target: { allFrames: true },
        files: ['content.js']
    });
    console.log('Gestures enabled');
});

document.getElementById('disable').addEventListener('click', () => {
    chrome.scripting.executeScript({
        target: { allFrames: true },
        function: disableGestures
    });
    console.log('Gestures disabled');
});

function disableGestures() {
    console.log('Gesture recognition disabled');
}
