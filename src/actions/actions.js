
export function getArtists() {
  return {
    type: 'GET_ARTISTS',
    payload: {
      request: { method: 'get', url: '/Artists/' }
    }
  }
}

export function getSongs() {
  return {
    type: 'GET_SONGS',
    payload: {
      request: { method: 'get', url: '/Songs/' }
    }
  }
}

export function addArtist(artist) {
  return {
    type: 'ADD_ARTIST',
    payload: {
      request: { method: 'post', url: '/Artists/', data: artist }
    }
  }
}

export function addSong(song) {
  return {
    type: 'ADD_SONG',
    payload: {
      request: { method: 'post', url: '/Songs/', data: song }
    }
  }
}

export function deleteArtist(artist) {
  return {
    type: 'DELETE_ARTIST',
    payload: {
      request: { method: 'delete', url: `/Artists/${artist.Id}` }
    }
  }
}

export function deleteSong(song) {
  return {
    type: 'DELETE_SONG',
    payload: {
      request: { method: 'delete', url: `/Songs/${song.Id}/` }
    }
  }
}
