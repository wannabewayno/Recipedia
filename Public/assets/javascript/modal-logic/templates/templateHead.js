const templateHead = data => {
    const head = 
` <div class="visual-info-container col s12 m6 l8">
    <div class="image-container">
        <img id="recipe-img"  src="${data.image}" alt="recipe image">
        <div class="serves-overlay">
            <span>Serves:${data.servings}</span><i class="material-icons">person_add</i>
        </div>
    </div>

    <div class="time-bar-container">
        <div class="mask">
            <p>${data.prepTime} |${data.cookTime} </p>
        </div>
        <p id="cookTime">${data.cookTime}</p>
        <p id="prepTime">${data.prepTime}</p>
        <svg class="timeBar" width="1" height="1">
            <path id="prepPath" fill="none" stroke="#ff6347" stroke-width="15" />
            <path id="cookPath" fill="none" stroke="#008000" stroke-width="15" />
        </svg>
        <div id="timer-icon-container">
            <i id="timer-icon"class="material-icons">timer</i>
        </div>
    </div>
</div>

<div class="recipe-info col s12 m6 l4">

    <h4 class="title">${data.title}</h4>
    <p class="description">${data.description}</p>
                
    <div class="button-box">

        <button class="favourite-btn" data-id="${recipe.id}">
            <i class="tiny material-icons right">favorite_border</i>favourite
        </button>

        <button class="shopping-list-btn">
            <i class="tiny material-icons right">add</i>Shopping List
        </button>

        <button class="meal-planning-btn">
            <i class="tiny material-icons right">add</i>Planner
        </button>
    </div>

</div>
`
return head;

}