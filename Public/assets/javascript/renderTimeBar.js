/**
 * Translates a cartesian coordinate to a polar coordinate
 * We used 0 Degree to be -225 from the X axis as this is 0 in the local coordinate system
 * @param  {Number} centerX 
 * @param  {Number} centerY 
 * @param  {Number} radius 
 * @param  {Number} angleInDegrees
 * @return {String}  
 */
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = (angleInDegrees-225) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
}
  
  /**
   * Given some polar coordinates that describes an arc, generate a path element that draws this arc in an svg
   * @param  {Number} centerX - x coordinate of arc center 
   * @param  {Number} centerY - y coordinate of arc center
   * @param  {Number} radius - radius of arc
   * @param  {Number} startAngle - angle to start drawing arc
   * @param  {Number} endAngle - angle to end arc 
   * @return {String} - returns a string that an SVG path element can use to draw an arc
   */
const describeArc = (centerX, centerY, radius, startAngle, endAngle) => {

    var start = polarToCartesian(centerX, centerY, radius, endAngle);
    var end = polarToCartesian(centerX, centerY, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

/** timeToDegrees()
 * 
 * @param  {Number} cookTime
 * @param  {Number} prepTime 
 * @return {angles} - starting 
 */
const timeToDegrees = (cookTime,prepTime) => {
    //if no preperation time is entered, assume total time is cooking time
    if (!prepTime){
        prepTime = 0;
    }
    const totalTime = prepTime + cookTime;
    const prepRatio = prepTime/totalTime;
    const intersectionAngle = prepRatio*360*0.75;

    return intersectionAngle 
}


/**
 * Takes in time metaData of a recipe object and renders a visual graphic that displays this information in the recipe modal
 * @param {Number} cookTime - cooking time of a recipe
 * @param {Number} prepTime - preperation time required before cooking a recipe
 */
const renderTimeBar = (cookTime,prepTime) => {
    // we get angle where preptime ends and cook time starts
    const intersectionAngle = timeToDegrees(cookTime,prepTime);

    // the width needs to match the image as the time bar will frame the image.
    let width = $('#recipe-img').css('width');
    let height = $('#recipe-img').css('height');

    // from css, it's a string. with a 'px' suffix. so remove it and parse it to a number
    width = parseFloat(width.replace('px',''));
    height = parseFloat(height.replace('px',''));

    // picture is either oversquare or undersquare, we need the smallest side value to properly clip into a circle
    const min = Math.min(width,height)
    const frameLength = min + 15*2
    
    // the center of our circle needs to be in the center of the bounding box
    const centerX = frameLength/2;
    const centerY = frameLength/2;
    // with a radius of half the box minus half the stroke width (as it's on a centerline)
    const radius = (min/2) + 15/2
    
    // we now set these properties of the svg and path elements with this information.
    $('.timeBar').attr({'width':frameLength,'height':frameLength})
    $('.image-container').css({'width':min,'height':min})
    $('#prepPath').attr("d",describeArc(centerX, centerY, radius, 0, intersectionAngle ));
    $('#cookPath').attr("d",describeArc(centerX, centerY, radius, intersectionAngle, 270 ));
}

//calls the function
renderTimeBar(15,10);


