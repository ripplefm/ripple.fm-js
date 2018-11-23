import users from './users';
import stations from './stations';
import playlists from './playlists';

export default function(api, config) {
  const endpoints = {};
  Object.assign(endpoints, users(api, config));
  Object.assign(endpoints, stations(api));
  Object.assign(endpoints, playlists(api));
  return endpoints;
}
