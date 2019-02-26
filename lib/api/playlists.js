import wrap from '../utils/wrap';

export default function(api) {
  return {
    createPlaylist: (name, visibility = 'public') =>
      wrap(api.post('/playlists', { name, visibility })),
    deletePlaylist: slug => wrap(api.delete(`/playlists/${slug}`)),
    addTrackToPlaylist: (slug, url) =>
      wrap(api.post(`/playlists/${slug}`, { url })),
    deleteTrackFromPlaylist: (slug, trackId) =>
      wrap(api.delete(`/playlists/${slug}/${trackId}`)),
    followPlaylist: slug => wrap(api.post(`/playlists/${slug}/followers`)),
    unfollowPlaylist: slug => wrap(api.delete(`/playlists/${slug}/followers`))
  };
}
