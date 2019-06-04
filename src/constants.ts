export const authorizationURLs = {
  dev: 'http://localhost:5050' as string, // Development
  staging: 'https://accounts.staging.kingsch.at' as string, // Staging ENV
  prod: 'https://accounts.kingsch.at' as string, // Production ENV
};

export const allowedResponseOrigins: Array<string> = [
  'http://localhost:5050', // Development
  'https://accounts.staging.kingsch.at', // Testing
  'https://accounts.kingsch.at', // Production
];

export const kingsChatApiPaths = {
  dev: 'http://localhost:8000' as string, // Development
  staging: 'https://kc-connect.appunite.com' as string, // Staging ENV
  prod: 'https://connect.kingsch.at' as string, // Production ENV
};

export default {
  authorizationURLs,
  allowedResponseOrigins,
  kingsChatApiPaths,
};
