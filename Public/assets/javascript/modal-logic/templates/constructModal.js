/** constructModal()
 * Given tempalted components, this inserts them in the right position in the modal
 * @param   {Object} modalComponents - template literal component strings of html code that make up the modal
 * @param   {String} modalComponents.head
 * @param   {String} modalComponents.dietTags 
 * @param   {String} modalComponents.ingredients 
 * @param   {String} modalComponents.method
 * @returns {String} completed template literal modal. ready to be inserted via jQuery element.html(modal);
 */
const constructModal = modalComponents => {

    const { head, dietTags, ingredients, method } = modalComponents;

    const modal = ` <div class="modal-container">

    <div class="recipe-modal z-depth-5">

        <button class='delete-button nude-button top-right'>
            <i class='small material-icons'>close</i>
        </button>

        <div class="recipe-head row">

            ${head}

        </div>

        
        <ul class="diet-tags Valign-around">
           ${dietTags}
        </ul>

        
        <div class="recipe-content">

            
            <div>
                <h4>Ingredients</h4>
                <ul class="method-list">
                    
                        ${ingredients}
                    
                </ul>
            </div>
            
            <div>
                <h4>Method</h4>
                <ul class="method-list">
                    
                       ${method}
                    
                </ul>
            </div>

        </div>

    </div>

</div>`
    return modal
}