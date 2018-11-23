import '@babel/polyfill';
import axios from 'axios';
import refreshRetry from './middleware/refresh-retry';
import endpoints from './api';

const create = (
  args = {
    access: undefined,
    baseURL: 'https://api.ripple.fm/',
    authURL: 'https://accounts.ripple.fm',
    onAccessTokenExpire: undefined
  }
) => {
  const { access, baseURL, authURL, onAccessTokenExpire } = args;
  let headers = {};
  if (access) {
    headers.Authorization = `Bearer ${access}`;
  }
  const api = axios.create({
    baseURL,
    headers
  });

  api.interceptors.response.use(
    res => res,
    refreshRetry(onAccessTokenExpire, api)
  );
  return endpoints(api, { authURL });
};

export default { create };
