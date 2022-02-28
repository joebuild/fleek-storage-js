const { S3Client } = require('@aws-sdk/client-s3');
const { storageEndpoint } = require('../config');

const initS3 = (apiKey, apiSecret) => {
  if (!apiKey || !apiSecret) {
    throw new Error('Missing Fleek credentials.');
  }

  return new S3Client({
    apiVersion: '2006-03-01',
    accessKeyId: apiKey,
    secretAccessKey: apiSecret,
    endpoint: storageEndpoint,
    region: 'us-east-1',
    s3ForcePathStyle: true,
  });
};

module.exports = initS3;
