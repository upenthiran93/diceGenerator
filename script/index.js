const rollButton = document.querySelector('#roll-button');
const diesImage = document.querySelector('#dice');

rollButton.addEventListener('click', rollDice);

function rollDice() {
    // hide the button
    rollButton.style.display = 'none';

    // add the rotate class to the dice image
    diesImage.classList.add('rotate');

    let i = 0;
    const intervalId = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diesImage.src = `asset/dies-${randomNumber}.png`;
        i++;
        if (i >= 10) { // after 1 second (10 * 100ms = 1s), stop the interval
            clearInterval(intervalId);
            // display a final random dice image
            const finalRandomNumber = Math.floor(Math.random() * 6) + 1;
            diesImage.src = `asset/dies-${finalRandomNumber}.png`;
            // remove the rotate class from the dice image
            diesImage.classList.remove('rotate');
            // show the button
            rollButton.style.display = 'block';
        }
    }, 100); // change the image every 100ms
}