const templateMethod = method => {
    const htmlMethod = ``;
    method.forEach((step,index) => {
        htmlMethod += `<li class="step">
                            <h6 class="step-title">Step ${index}</h6>
                            <p class="step-text">${step}</p>
                        </li>`
    });

    return htmlMethod;
}