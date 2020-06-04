
const getHeight = () => {
    let height =  $('#search-container').css('height');
    height = parseFloat(height.replace('px',''));
    
    return height;
}

const scrollToView = pos1 => {
    const pos2 = getHeight();
    const difference = pos2 - pos1;
    window.scrollBy(0,difference);

}
