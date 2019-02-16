import wrap from '../utils/wrap';

export default function(api, { authURL }) {
  return {
    getClient: name => wrap(api.get(`${authURL}/api/oauth2/clients/${name}`))
  };
}
