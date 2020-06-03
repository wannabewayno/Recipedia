
const addStep = () => {

    //get the step the user defined
    const stepText = $('#add-step').val();
    //find out what step this is
    let stepCount = $('#add-step').data('count');

    // create a list item, title and body placeholder
    const liEl = $('<li>').addClass('saved-data');
    const pEl = $('<p>').addClass('step-body zero');
    const h6El = $('<h6>').addClass('step-title');
    const headEL = $('<head>').addClass('Valign-start');

    const deleteBtn = createDeleteBtn();
    
    pEl.text(stepText); // fill the body with the step text
    h6El.text(`Step ${stepCount}`); // fill the title with the step number

    headEL.append(h6El,deleteBtn)
    liEl.append(headEL,pEl);

    // add this to the steps list for the user to see their saved step
    $('#steps').append(liEl);

    $('#add-step').val('') // clear the input
    stepCount++ // increase the count

    //update the data attribute
    $('#add-step').data('count',`${stepCount}`);

    //update our placeholder
    $('#add-step-label').text(`Step ${stepCount}`);

    $('#add-step').get(0).focus();
}