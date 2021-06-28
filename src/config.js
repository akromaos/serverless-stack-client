const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-akro",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://hp3enh4jpe.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_uUBBBsSda",
    APP_CLIENT_ID: "3feubeltmauttf8iec5p95ec8d",
    IDENTITY_POOL_ID: "us-east-1:d22650b6-7d7b-443b-9a82-f2a00ccde07d",
  },
};

export default config;