const templateDietTags = dietTags => {
    let htmlDietTags = ``;

    dietTags.forEach(tag => {
    htmlDietTags +=  `<li class="diet-tag">${tag}</li>`;
    });

    return htmlDietTags

}