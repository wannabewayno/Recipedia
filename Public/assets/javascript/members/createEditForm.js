/**
 * Creates the form below - send data via patch route to database to update individual user settings
 * <form action="/api/user" method="patch">
 *   <div class="input-field">
 *   	<input class="editInput" value="data-action" ></input>
 *   	<label for="editInput">data-label</label>
 *   </div>
 *   <div>
 *      <button type="button" class="patch-button">
 *          <i class="material-icons">publish</i>
 *      </button>
 *      <button type="button" class="undo-btn xgap-tiny">
 *          <i class="material-icons">under</i>
 *      </button>
 *   </div>
 * </form>
 * @param {String} value - the item to edit 
 */
const createEditForm = (value,dataLabel,field) => {
    console.log(field);
    // create all necessary html elements
    const form = $('<form>').attr({'action':'/api/user','method':'post'}).addClass('Valign-center');
    const divInput = $('<div>').addClass('input-field');
    const divButtons = $('<div>').addClass('Valign-center');
    const label = $('<label>').attr('for','editInput').addClass('active').text(dataLabel);
    const input = $('<input>').attr({'value':value}).addClass('editInput').data({'field':field});
    const buttonPublish = $('<button>').attr({'type':'button'}).addClass('patch-button xgap-tiny')
    const buttonUndo = $('<button>').attr({'type':'button'}).data({'value':value,'dataLabel':dataLabel,'field':field}).addClass('undo-btn xgap-tiny');
    const iconPublish = $('<i>').addClass('material-icons').text('publish');
    const iconUndo = $('<i>').addClass('material-icons').text('undo');

    // arrange the elements
    buttonPublish.append(iconPublish);
    buttonUndo.append(iconUndo)
    divInput.append(input,label);
    divButtons.append(buttonPublish,buttonUndo)
    form.append(divInput,divButtons);

    return form;
}
