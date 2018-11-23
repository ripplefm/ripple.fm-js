const wrap = async promise => {
  try {
    const res = await promise;
    return res.data;
  } catch (err) {
    throw { error: err.response.data.error, status: err.response.status };
  }
};

export default wrap;
