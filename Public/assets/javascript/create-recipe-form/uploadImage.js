// get the image the user uploads

const uploadImage = ( uploadUrl, image ) => {

    $.ajax({
        type: 'PUT',
        url: uploadUrl,
        // Content type must match with the parameter you signed your URL with
        contentType: 'binary/octet-stream',
        // this flag is important, if not set, it will try to send data as a form
        processData: false,
        // the actual file is sent raw
        data: image
        })
        .done(function() {
            console.log('image successfully uploaded');
        })
        .fail(function() {
            console.log("ERROR: image not uploaded");
        });
}
 