// Run when a request fails with a 401
// will attempt to refresh the users access token
// if failed to refresh, original error will be thrown
export default function(onExpire, api) {
  return function(err) {
    return new Promise((resolve, reject) => {
      const { response } = err;
      const { headers } = response.config;
      if (response.status === 401 && headers.Authorization) {
        onExpire()
          .then(newToken => {
            response.config.headers.Authorization = `Bearer ${newToken}`;
            api.defaults.headers.Authorization = `Bearer ${newToken}`;
            return api.request(response.config);
          })
          .then(res => resolve(res))
          .catch(_ => reject(err));
      }
    });
  };
}
