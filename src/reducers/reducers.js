
const initialState = {
  artists: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {

    case 'GET_ARTISTS_SUCCESS':
      return { ...state, artists: action.payload.data }

    case 'ADD_ARTIST_SUCCESS':
      let artist = action.payload.data;
      return { ...state, artists: state.artists.concat(artist) }

    case 'ADD_SONG_SUCCESS':
      let song = action.payload.data;
      return { ...state,
        artists: state.artists.map(a => {
          if (a.Id === song.ArtistId) {
            a.Songs = a.Songs.concat(song);
          }
          return a;
        })
      }

    case 'DELETE_ARTIST_SUCCESS':
      artist = action.payload.data;
      return { ...state,
        artists: state.artists.filter(a => a.Id !== artist.Id)
      }

    case 'DELETE_SONG_SUCCESS':
      song = action.payload.data;
      return { ...state,
        artists: state.artists.map(a => {
          if (a.Id === song.ArtistId) {
            a.Songs = a.Songs.filter(s => s.Id !== song.Id);
          }
          return a;
        })
      }

    default:
      return state;
  }
}
