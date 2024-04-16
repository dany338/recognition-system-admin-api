const fs = require('fs');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const getEnvs = () => {
  const SECRET_PROJECT_ID = process.env.SECRET_PROJECT_ID;
  const SECRET_VERSION = process.env.SECRET_VERSION;
  const SECRET_NAME = process.env.SECRET_NAME;
  const SERVICE_ACCOUNT_PATH =
    process.env.SERVICE_ACCOUNT_PATH || './service-account-dev.json';
  console.log(
    SECRET_PROJECT_ID,
    SECRET_VERSION,
    SECRET_NAME,
    SERVICE_ACCOUNT_PATH,
  );

  if (!SECRET_PROJECT_ID || !SECRET_VERSION || !SECRET_NAME) {
    throw new Error(
      'SECRET_PROJECT_ID, SECRET_VERSION, and SECRET_NAME are required',
    );
  }

  return {
    SECRET_PROJECT_ID,
    SECRET_VERSION,
    SECRET_NAME,
    SERVICE_ACCOUNT_PATH,
  };
};

const accessSecretVersion = async () => {
  
  const envs = getEnvs();

  try {
    const client = new SecretManagerServiceClient({
      keyFilename: fs.existsSync(envs.SERVICE_ACCOUNT_PATH)
        ? envs.SERVICE_ACCOUNT_PATH
        : process.env.GOOGLE_APPLICATION_CREDENTIALS,
    });

    const name = `projects/${envs.SECRET_PROJECT_ID}/secrets/${envs.SECRET_NAME}/versions/${envs.SECRET_VERSION}`;
    const [version] = await client.accessSecretVersion({ name });

    const payload = version.payload.data
      .toString('utf8')
      .replace(/\s+/g, ' ')
      .trim();
    const payload_json = JSON.parse(payload);

    return payload_json;
  } catch (error) {
    console.error('Error accessing secret version:', error);
    throw error;
  }
};

const getSecrets = async () => {
  try {
    if(fs.existsSync('.env')){
      console.log('run with local .env')
      return 
    }
  
    const envProject = await accessSecretVersion();
    fs.writeFileSync(
      './.env',
      Object.entries(envProject)
        .map(([key, value]) => `${key}=${value}`)
        .join('\n'),
    );
    console.log('======== RUN ENVS ========');
    return envProject;
  } catch (error) {
    console.error('Error writing .env file:', error);
  }
};
getSecrets().then(() => {
  console.log('load environment');
});
