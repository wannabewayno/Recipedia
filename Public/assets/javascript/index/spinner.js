

/** spinner()
 * let's the user know we're working on their query :D
 * Spins the magnifying glass around it's handle axis indefinitely until cancelled by clearSpinner();
 * @param {String} target - jquery string targeting the thing we want to spin 
 */
const spinner = target => {
    const interval = setInterval(() => {
        $(target).toggleClass('spinner3D')
    }, 500);
    return interval;
};

/** clearSpinner()
 * 
 * @param {Element} interval -  the spinner instance to cancel 
 */
const clearSpinner = interval => {
    clearInterval(interval);
}