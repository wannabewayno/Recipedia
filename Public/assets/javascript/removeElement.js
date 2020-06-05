/**
 * This functional returns an event listener.
 * Listens for clicks on a nominated delete selector e.g: a <button class="delete-btn">
 * On the specified container objects e.g: <div class="ingredients">
 * Removes the clicked on item whose parent has '.saved-data' class.  
 * @param {String} deleteSelector the class or id selector of the element that triggers a delete 
 * @param {String} selectorToDelete the class or id selector of the element to remove from the document 
 * @param {...String} targetContainers the class or id of the container that holds the '.saved-data' elements to delete
 */
const removeElement = (deleteSelector,selectorToDelete,...targetContainers) => {

    return $(targetContainers.join(', ')).on('click', deleteSelector ,function(event){
        event.stopPropagation();
    
        const item = $(event.currentTarget).parents(selectorToDelete);
        item.remove();
    });
}
