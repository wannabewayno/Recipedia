const createDeleteBtn = () => {
    //create a delete button
    const deleteBtn = $('<button>').addClass('remove-button nude-button');
    deleteBtn.attr('type','button');

    // the delete icon
    const deleteIcon = $('<i>').addClass('small material-icons');
    deleteIcon.html('delete');

    //wrap our delete button over the icon
    deleteBtn.append(deleteIcon);

    return deleteBtn;
}