$(document).ready(function(){

});//TODO: create a function that spins the magnifying glass
// let's the user know we're working on their query :D
/**
 * 
 * @param {String} target - jquery string targeting the thing we want to spin 
 */
const spinner = target => {
    const interval = setInterval(() => {
        $(target).toggleClass('spinner3D')
    }, 500);
    return interval;
};

const clearSpinner = interval => {
    clearInterval(interval);
}