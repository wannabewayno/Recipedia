/**
 * This functional returns an event listener.
 * Listens for clicks on a nominated delete selector e.g: a <button class="delete-btn">
 * On the specified container objects e.g: <div class="ingredients">
 * Removes the clicked on item whose parent has '.saved-data' class.  
 * @param {String} deleteSelector - the class or id selector of the element that triggers a delete 
 * @param {String} selectorToDelete - the class or id selector of the element to remove from the document 
 * @param {Array<string>} targetContainers - an array of class or id selectors of the container that holds the selectorToDelete elements to delete
 * @param {Callback} callback - 
 */
const removeElement = (deleteSelector,selectorToDelete,targetContainers,callback) => {

    return $(targetContainers.join(', ')).on('click', deleteSelector ,function(event){
        event.stopPropagation();
        const item = $(event.currentTarget).parents(selectorToDelete);
        item.remove();
        
        // name of a callback to execute.
        callback();
    });
}
