import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()
export const API = publicRuntimeConfig.PRODUCTION ? 'https:friend.com' : 'http://localhost:5000';
export const APP_NAME = publicRuntimeConfig.APP_NAME;
