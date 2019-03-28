const wrap = function(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(res => resolve(res.data))
      .catch(err =>
        reject({ error: err.response.data.error, status: err.response.status })
      );
  });
};

export default wrap;
