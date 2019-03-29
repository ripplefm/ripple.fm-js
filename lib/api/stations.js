import wrap from '../utils/wrap';
let Socket;
if (typeof window === 'undefined') {
  Socket = require('phoenix-channels').Socket;
} else {
  Socket = require('phoenix').Socket;
}

export default function(api) {
  return {
    getStations: (page = undefined, limit = undefined) =>
      wrap(api.get('/stations', { params: { page, limit } })),
    getStation: slug => wrap(api.get(`/stations/${slug}`)),
    createStation: (name, tags, visibility = 'public') =>
      wrap(api.post('/stations', { station: { name, visibility, tags } })),
    followStation: slug => wrap(api.post(`/stations/${slug}/followers`)),
    unfollowStation: slug => wrap(api.delete(`/stations/${slug}/followers`)),
    joinStation: slug => {
      const { baseURL, headers } = api.defaults;
      let socket;
      if (headers.Authorization) {
        socket = new Socket(baseURL.replace('http', 'ws') + '/socket', {
          params: { token: headers.Authorization.substring('Bearer '.length) }
        });
      } else {
        socket = new Socket(baseURL.replace('http', 'ws') + '/socket');
      }
      socket.connect();
      const channel = socket.channel(`stations:${slug}`);
      return new Promise((resolve, reject) => {
        channel
          .join()
          .receive('ok', () =>
            resolve({
              on: channel.on.bind(channel),
              push: channel.push.bind(channel),
              off: channel.off.bind(channel),
              leave: channel.leave.bind(channel),
              channel,
              socket
            })
          )
          .receive('error', ({ reason }) => reject(reason));
      });
    }
  };
}
