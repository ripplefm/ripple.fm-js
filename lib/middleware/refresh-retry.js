// To run when a request fails with a 401
// will attempt to refresh the users access token
// if failed to refresh, original error will be thrown
export default function(onExpire, api) {
  return async err => {
    const { response } = err;
    const { url, headers } = response.config;
    if (response.status === 401 && headers.Authorization) {
      try {
        const newToken = await onExpire();
        response.config.headers.Authorization = `Bearer ${newToken}`;
        api.defaults.headers.Authorization = `Bearer ${newToken}`;
        return await api.request(response.config);
      } catch (err2) {
        throw err;
      }
    }
    throw err;
  };
}
