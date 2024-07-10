document.addEventListener('DOMContentLoaded', function() {
    
    const sonDisplay = document.getElementById('son')
    const plusButton = document.getElementById('plus')
    const minusButton = document.getElementById('minus')

    let count = 0;

   
    function updateCounter() {
        sonDisplay.textContent = count;
    }

    
    plusButton.addEventListener('click', function() {
        count++
        updateCounter()
    })

    
    minusButton.addEventListener('click', function() {
        if (count > 0) {
            count--
            updateCounter()
        }
    })
})