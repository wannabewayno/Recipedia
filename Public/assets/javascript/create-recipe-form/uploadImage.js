// get the image the user uploads

const uploadImage = () => {
    const input = $('#image-file').prop('files')[0];
    const fr = new FileReader();
    image = fr.readAsDataURL(input);
    
    $.post('/api/upload',image);
}
 