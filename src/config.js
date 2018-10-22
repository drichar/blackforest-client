const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-12fkefdfqh4w4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://bg04v5h7r7.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rvVOInOJ6",
    APP_CLIENT_ID: "23j79jdipdnhtq2p65kkb7bb3u",
    IDENTITY_POOL_ID: "us-east-1:a840f8bc-c33e-4f4a-a101-524ce3bafa9a"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1jhgyjrg5fqgx"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ysj3mxfwu9.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Rei0BQ0r1",
    APP_CLIENT_ID: "c3kh913behoek7k0h6oote4nh",
    IDENTITY_POOL_ID: "us-east-1:0a1cb91e-e0e9-4411-ae43-32af60e6c11d"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
