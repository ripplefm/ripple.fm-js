import axios from 'axios';
import wrap from '../utils/wrap';

export default function(api, { authURL }) {
  return {
    getCurrentUser: () => wrap(api.get(`${authURL}/api/users/me`))
  };
}
