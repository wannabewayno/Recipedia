//load in environment variables
require('dotenv').config();

// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('uuid');

// Create name for uploaded object key
const keyName = 'recipeImage1';
const bucketName = 'recipedia-image-bucket'
// Use S3 ManagedUpload class as it supports multipart uploads
var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucketName,
      Key: keyName,
      Body: "HELLO WORLD AGAIN!",// this is where the file will go
      ACL: "public-read"
    }
  });

const promise = upload.promise();

promise.then(data => {
    console.log(data);
})
.catch(error => console.error(err, err.stack))


// // Create a promise on S3 service object
// const s3 = new AWS.S3({apiVersion: '2006-03-01'})

// // Create params for putObject call
// var objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
// // Create object upload promise
// var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();

// uploadPromise.then(
//     function(data) {
//     console.log("Successfully uploaded data to " + bucketName + "/" + keyName);

//SAMPLE DELETE FOR DELETING A RECIPE
// function deletePhoto(albumName, photoKey) {
//     s3.deleteObject({ Key: photoKey }, function(err, data) {
//       if (err) {
//         return alert("There was an error deleting your photo: ", err.message);
//       }
//       alert("Successfully deleted photo.");
//       viewAlbum(albumName);
//     });
//   }