const wrap = function(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(res => resolve(res.data))
      .catch(err => {
        if (err && err.response && err.response.data) {
          reject({
            error: err.response.data.error,
            status: err.response.status
          });
        } else {
          reject({ error: err });
        }
      });
  });
};

export default wrap;
