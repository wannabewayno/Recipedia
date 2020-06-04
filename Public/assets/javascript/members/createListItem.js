/**
 * Creates the original list item -
 * <div>
 *   <span class="label">Allergy:</span>
 *   <span class="data xgap-tiny">Nut allergy</span>
 * </div>
 * <div>
 *   <button class="edit-btn">
 *       <i class="material-icons">edit</i>
 *   </button>
 *   <button class="remove-btn">
 *       <i class="material-icons">delete</i>
 *   </button>
 * </div>
 * @param {String} value - the item to edit
 * @param {String} dataLabel -  the value label 
 */
const createListItem = (value,dataLabel,field,classes) => {

    // create all necessary html elements
    const divData = $('<div>');
    const divButtons = $('<div>');
    const spanLabel = $('<span>').addClass('label').data({'field':field}).text(dataLabel);
    const spanData = $('<span>').addClass('data xgap-tiny').text(value);
    const iconEdit = $('<icon>').addClass('material-icons').text('edit');
    const buttonEdit = $('<button>').addClass('edit-btn').append(iconEdit);

    let iconDelete;
    let buttonDelete;

    if (classes.indexOf('account') === -1) {
        iconDelete = $('<icon>').addClass('material-icons').text('delete');
        buttonDelete = $('<button>').addClass('remove-btn xgap-tiny').append(iconDelete);
    }

    // arrange the elements
    divData.append(spanLabel,spanData)
    divButtons.append(buttonEdit,buttonDelete);

    return [divData,divButtons];
}
