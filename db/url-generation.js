//load in environment variables
require('dotenv').config();
// Load the SDK and UUID
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');


const s3 = new AWS.S3/*({
    accessKeyId: ,
    secretAccessKey: process.env.
  });*/
 
  const uuidKey = uuidv4();

  const uploadPreSignedUrl = s3.getSignedUrl('putObject', {
      Bucket: 'recipedia-image-bucket',
      Key: uuidKey,
      ACL: 'authenticated-read',
      // This must match with your ajax contentType parameter
      ContentType: 'binary/octet-stream'
  
      /* then add all the rest of your parameters to AWS puttObect here */
  });
  
  const downloadPreSignedUrl = s3.getSignedUrl('getObject', {
      Bucket: 'recipedia-image-bucket',
      Key: uuidKey,
      /* set a fixed type, or calculate your mime type from the file extension */
      ResponseContentType: 'image/jpeg'
      /* and all the rest of your parameters to AWS getObect here */
  });

  const getSignedUrls = () => {
    return new Promise((resolve,reject) => {
      resolve({
          uploadPreSignedUrl:uploadPreSignedUrl,
          downloadPreSignedUrl:downloadPreSignedUrl,
          uuidKey:uuidKey
        });
      reject('Unable to resolve Urls');
    });
}
  
  module.exports = getSignedUrls;

  // now you have both urls
  //console.log( uploadPreSignedUrl, downloadPreSignedUrl ); 