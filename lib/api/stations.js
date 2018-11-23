import wrap from '../utils/wrap';

export default function(api) {
  return {
    getStations: (page = undefined, limit = undefined) =>
      wrap(api.get('/stations', { params: { page, limit } })),
    getStation: slug => wrap(api.get(`/stations/${slug}`)),
    createStation: (name, tags, playType = 'public') =>
      wrap(
        api.post('/stations', { station: { name, play_type: playType, tags } })
      ),
    followStation: slug => wrap(api.post(`/stations/${slug}/followers`)),
    unfollowStation: slug => wrap(api.delete(`/stations/${slug}/followers`))
  };
}
