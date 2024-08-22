document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number = document.getElementById('number').value;
    
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'number': number
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('result').textContent = `Error: ${data.error}`;
        } else {
            document.getElementById('result').textContent = `Result: ${data.result}`;
        }
    })
    .catch(error => {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    });
});
