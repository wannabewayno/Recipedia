createThumbnail = data => {
    const thumbnail = `<div class="recipe-card" data-id="${data.recipeID}">
        <img src="${data.imageURL}" alt="image of ${data.title}">
        <p class="recipe-title">${data.title}</p>
        <p class="overlay">view recipe</p>
     </div>`
    return thumbnail;
}