import wrap from '../utils/wrap';

export default function(api) {
  return {
    createPlaylist: (name, visibility = 'public') =>
      wrap(api.post('/playlists', { name, visibility })),
    deletePlaylist: playlistId => wrap(api.delete(`/playlists/${playlistId}`)),
    addTrackToPlaylist: (playlistId, url) =>
      wrap(api.post(`/playlists/${playlistId}`, { url })),
    deleteTrackFromPlaylist: (playlistId, trackId) =>
      wrap(api.delete(`/playlists/${playlistId}/${trackId}`)),
    followPlaylist: playlistId =>
      wrap(api.post(`/playlists/${playlistId}/followers`)),
    unfollowPlaylist: playlistId =>
      wrap(api.delete(`/playlists/${playlistId}/followers`))
  };
}
