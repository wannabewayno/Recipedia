const getSteps = () => {
    const steps = [];
    $('#steps').find(".step-body").each(function(){
        steps.push($(this).text());
    });

}