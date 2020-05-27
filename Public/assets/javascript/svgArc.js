const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = (angleInDegrees-225) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  
const describeArc = (x, y, radius, startAngle, endAngle) => {

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

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
    //if not preperation time is entered, assume total time is cooking time
    if (!prepTime){
        prepTime = 0;
    }

    const totalTime = prepTime + cookTime;
    const prepRatio = prepTime/totalTime;
    const intersectionAngle = prepRatio*360*0.75;

    return intersectionAngle 
}


const renderTimeBar = (cookTime,prepTime) => {
    const intersectionAngle = timeToDegrees(cookTime,prepTime);
    const radius = 100; 
    const center = 2;
    $('#prepPath').attr("d",describeArc(200, 0, radius, 0, intersectionAngle ));
    $('#cookPath').attr("d",describeArc(200, 0, radius, intersectionAngle, 270 ));
}


renderTimeBar(120,20);


