import oauth2Clients from './oauth2-clients';
import users from './users';
import stations from './stations';
import playlists from './playlists';
import me from './me';

export default function(api, config) {
  const endpoints = {};
  Object.assign(endpoints, oauth2Clients(api, config));
  Object.assign(endpoints, users(api, config));
  Object.assign(endpoints, stations(api));
  Object.assign(endpoints, playlists(api));
  Object.assign(endpoints, me(api));
  return endpoints;
}
