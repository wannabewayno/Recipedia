// a list of all function paths this file depends on to run.
const dependencies = [
    //------ files not in this directory ------
    `getDropdownValues.js`
];

$(document).ready(function() {
    // Initializers
    // ==========================================================================

    //inserts scripts for every new function we create so that we don't have to.
    dependencies.forEach(dependency => {
        const script = `<script src="./assets/javascript/${dependency}"></script>`
        $(script).insertBefore('#index');
    });
})