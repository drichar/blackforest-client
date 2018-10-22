export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'drichar-notes-app-uploads'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://nqnz1y8vub.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_ZHKT0lXhI',
    APP_CLIENT_ID: '2vbiocp4oqpdlpba5sqdtbaqre',
    IDENTITY_POOL_ID: 'us-east-1:16d1b7ba-ed6d-4970-85eb-b2b7697b0171'
  }
};
