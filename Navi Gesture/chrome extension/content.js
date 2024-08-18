// Function to send the captured gesture data to the Python backend
function sendGestureToBackend(gesture) {
    fetch('http://127.0.0.1:5000/gesture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ gesture: gesture })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Action:', data.action);
      executeAction(data.action);
    });
  }
  
  // Function to execute the action returned from the backend
  function executeAction(action) {
    if (action === 'scroll_up') {
      window.scrollBy(0, -window.innerHeight);
    } else if (action === 'scroll_down') {
      window.scrollBy(0, window.innerHeight);
    } else if (action === 'next_page') {
      window.history.forward();
    } else if (action === 'prev_page') {
      window.history.back();
    }
  }
  
  document.body.addEventListener('click', function() {
    sendGestureToBackend('click');
  });
  
  // Example of sending a specific gesture
  sendGestureToBackend('swipe_left');
  