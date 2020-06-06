const getSignedUrls = () => {
    //then we need to do an ajax request to the back end to grab our pre-signed Urls and access Key:
    return $.get('/api/signedUrl');
}