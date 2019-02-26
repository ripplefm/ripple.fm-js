import wrap from '../utils/wrap';

export default function(api) {
  return {
    getCreatedStations: () => wrap(api.get('/me/stations')),
    getFollowedStations: () => wrap(api.get('/me/stations/following')),
    getCreatedPlaylists: () => wrap(api.get('/me/playlists')),
    getFollowedPlaylists: () => wrap(api.get('/me/playlists/following'))
  };
}
