
const initialState = {
  artists: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {

    case 'GET_ARTISTS':
      return {
        ...state,
        loading: true,
        error: null
      }

    case 'GET_SONGS':
      return {
        ...state,
        loading: true,
        error: null
      }

    case 'GET_ARTISTS_SUCCESS':
      return {
        ...state,
        loading: false,
        artists: action.payload.data
      }

    case 'GET_SONGS_SUCCESS':
      let songs = action.payload.data;
      return {
        ...state,
        loading: false,
        artists: state.artists.map(a => {
          a.Songs = songs.filter(s => s.ArtistId === a.Id);
          return a;
        })
      }

    case 'ADD_ARTIST_SUCCESS':
      let artist = action.payload.data;
      return {
        ...state,
        loading: false,
        artists: state.artists.concat(artist)
      }

    case 'ADD_SONG_SUCCESS':
      let song = action.payload.data;
      return {
        ...state,
        loading: false,
        artists: state.artists.map(a => {
          if (a.Id === song.ArtistId) {
            if (!a.Songs) {
              a.Songs = [];
            }
            a.Songs = a.Songs.concat(song);
          }
          return a;
        })
      }

    case 'DELETE_ARTIST_SUCCESS':
      artist = action.payload.data;
      return {
        ...state,
        loading: false,
        artists: state.artists.filter(a => a.Id !== artist.Id)
      }

    case 'DELETE_SONG_SUCCESS':
      song = action.payload.data;
      return {
        ...state,
        loading: false,
        artists: state.artists.map(a => {
          if (a.Id === song.ArtistId) {
            a.Songs = a.Songs.filter(s => s.Id !== song.Id);
          }
          return a;
        })
      }
      
    case 'GET_ARTISTS_FAIL':
      return {
        ...state,
        loading: false,
        error: 'Error while fetching artists'
      }

    case 'ADD_ARTIST_FAIL':
      return {
        ...state,
        loading: false,
        error: 'Error while adding artist'
      }

    case 'ADD_SONG_FAIL':
      return {
        ...state,
        loading: false,
        error: 'Error while adding song'
      }

    case 'DELETE_ARTIST_FAIL':
      return {
        ...state,
        loading: false,
        error: 'Error while deleting artist'
      }

    case 'DELETE_SONG_FAIL':
      return {
        ...state,
        loading: false,
        error: 'Error while deleting song'
      }

    default:
      return state;
  }
}
