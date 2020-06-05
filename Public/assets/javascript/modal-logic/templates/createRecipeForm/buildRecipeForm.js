const buildRecipeForm = () => {
    const Form = `<!-- modal container -->
    <div class="modal-container">
        <!-- modal body -->
        <div class="create-recipe-modal z-depth-5">
            <!-- close modal button -->
            <button class="close-button top-right nude-button">
                <i class="material-icons">close</i>
            </button>
            <!-- this modal is a giant form -->
            <h3 class="center-align">Create a recipe!</h3>
            <!-- create recipe form -->
            <form>
                
                <!-- title image and description container -->
                <section class="">
                    <!-- title input-field -->
                    <div class="input-field">
                        <i class="material-icons prefix">title</i>
                        <input type="text" id="create-title">
                        <label for="create-title">Title?</label>
                    </div>
                    <!-- description input-field -->
                    <div class="input-field">
                        <i class="material-icons prefix">description</i>
                        <input type="text" name="" id="create-description" data-length="80">
                        <label for="create-description" class="truncate">Description: e.g perfect winter warmer</label>
                    </div>
                    <!-- image input field -->
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>image</span>
                            <input type="file" accept="image/*" id="image-file">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" id="create-image">
                        </div>
                    </div>
                    <div id="editor"></div>
                </section>

                <!-- info container -->
                <section class="Valign-center">
                    <!-- servings -->
                    <div class="input-field gapx">
                        <i class="material-icons prefix">person_add</i>
                        <input id="create-servings" type="number"/>
                        <label for="create-servings" class="truncate">Servings</label>
                    </div>
                    <!-- prep time -->
                    <div class="input-field gapx">
                        <i class="material-icons prefix">av_timer</i>
                        <input id="create-prep-time" type="number"/>
                        <label for="create-prep-time" class="truncate">Prep Time</label>
                    </div>
                    <!-- cook time -->
                    <div class="input-field gapx">
                        <i class="material-icons prefix">timelapse</i>
                        <input id="create-cook-time" type="number"/>
                        <label for="create-cook-time" class="truncate">Cook Time</label>
                    </div>
                </section>

                <!-- key word container -->
                <section class="">

                    <div class="Valign-center ygap-small">
                        <!-- diet tags -->
                        <div class="input-field xgap-tiny">
                            <select multiple id="create-diet">
                                <option value="" disabled>Diets:</option>
                                <option value="Gluten Free">Gluten free</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Vegetarien">Vegetarien</option>
                                <option value="Pescetarian">Pescetarian</option>
                                <option value="Paleo">Paleo</option>
                                <option value="Primal">Primal</option>
                                <option value="Whole30">Whole30</option>
                                <option value="Ketogenic">Ketogenic</option>
                                <option value="lacto-vegetarian">lacto-vegetarian</option>
                                <option value="ovo-vegetarian">ovo-vegetarian</option>
                            </select>
                            <label for="diet">Diet</label>
                        </div>
    
                        <!-- cuisine tags -->
                        <div class="input-field gapx">
                            <select id="create-cuisine">
                                <option value="">Cuisine</option>
                                <option value="Australian">Australian</option>
                                <option value="African">African</option>
                                <option value="American">American</option>
                                <option value="British">British</option>
                                <option value="Cajun">Cajun</option>
                                <option value="Caribbean">Caribbean</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Eatern European">Eastern European</option>
                                <option value="European">European</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Greek">Greek</option>
                                <option value="Indian">Indian</option>
                                <option value="Irish">Irish</option>
                                <option value="Italian">Italian</option>
                                <option value="Japanese">Japenese</option>
                                <option value="Jewish">Jewish</option>
                                <option value="Korean">Korean</option>
                                <option value="Latin American">Latin American</option>
                                <option value="Malaysian">Malaysian</option>
                                <option value="Mediterranean">Mediterranean</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Middle Eastern">Middle Eastern</option>
                                <option value="Nordic">Nordic</option>
                                <option value="Singaporean">Singaporean</option>
                                <option value="Southern">Southern</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Swedish">Swedish</option>
                                <option value="Thai">Thai</option>
                                <option value="Vietnamese">Vietnamese</option>
                            </select>
                            <label for="cuisine">Cuisine</label>
                        </div>
                    </div>

                    <!-- key words -->
                    <div class="user-keywords-wrapper">
                        <p class="center-align">Add key words to help other users find this reicpe</p>
                        <div class="chips" id="create-keywords"></div>
                    </div>
                </section>

                <!-- ingredient and method container -->
                <section class="row">
                    <h5 class="center-align">Alright, tell us how to cook it</h5>
                    <!-- ingredient container -->
                    <div class="col s12 m6 l5 xl4">
                        <!-- ingredient title -->
                        <h4>Ingredients</h4>
                        
                        <ul id="ingredients">
                            <!-- ingredients will be added here dynamically -->
        
                        </ul>

                        <!-- ingredient add inputs -->
                        <div class="Valign-start">
                            <!-- input name -->
                            <div class="input-field ingredient-name">
                                <input type="text" id="ingredient-name">
                                <label for="ingredient-name" class="truncate">ingredient name</label>
                            </div>
                            <!-- input number -->
                            <div class="input-field ingredient-value">
                                <input type="number" id="ingredient-value">
                                <label for="ingredient-value">quantity</label>
                            </div>
                            <!-- input unit drop down -->
                            <div class="input-field ingredient-unit">
                                <select id="ingredient-unit">
                                    <option value="gr" selected>gr</option>
                                    <option value="kg" >kg</option>
                                    <option value="cups" >cups</option>
                                    <option value="ml" >ml</option>
                                    <option value="L" >L</option>
                                    <option value="tsp" >tsp</option>
                                    <option value="Tbsp" >Tbsp</option>
                                    <option value="pcs" >pcs</option>
                                </select>
                                <label for="ingredient-unit"></label>
                            </div>
                            <!-- add button -->
                            <button class="add-ingredient-button nude-button" type="button">
                                <i class="material-icons">add</i>
                            </button>
                        </div>
                    </div>
                    <!-- Method container -->
                    <div class="col s12 m6 l7 xl8">
                        <!-- method title -->
                        <h4>Method</h4>

                        <ul id="steps">
                            <!-- steps will be added here dynamically -->
                            
                        </ul>

                        <!-- input to add steps -->
                        <div class="input-field">
                            <textarea id="add-step" class="materialize-textarea" data-count="1"></textarea>
                            <label for="add-step" id="add-step-label">Step 1</label>
                            <button class="add-step-button" type="button">
                                <i class="material-icons zero right">add</i>Add Step
                            </button>
                        </div>
                    </div>
                </section>

                <div class="row">
                    <div class="col s12 center-align">
                        <button id="publish-button" type="button">
                            <i class="medium material-icons right">publish</i>Publish
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>`

    return Form;
}