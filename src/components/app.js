import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ArtistList, AddArtistForm } from '../components/artists.js'
import { addArtist, addSong, deleteArtist, deleteSong } from '../actions/actions.js'
import '../styles/app.css'
import '../styles/font-awesome.min.css'

function mapDispatchToProps(dispatch) {
  return ({
    onAddArtist: artist => { dispatch(addArtist(artist)) },
    onAddSong: song => { dispatch(addSong(song)) },
    onDeleteArtist: artist => { dispatch(deleteArtist(artist)) },
    onDeleteSong: song => { dispatch(deleteSong(song)) },
  })
}

function mapStateToProps(state) {
  return ({
    artists: state.artists,
    loading: state.loading,
    error: state.error
  })
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className="App-logo-1 fa fa-music" alt="logo" />
          <i className="App-logo-2 fa fa-music" alt="logo" />
          <i className="App-logo-3 fa fa-music" alt="logo" />
          <h1 className="App-title">Welcome to Music App !</h1>
        </header>
        <div className="App-body">
          <h1>Artists</h1>
          <AddArtistForm onAddArtist={this.props.onAddArtist} />
          {this.props.loading ? 'Loading...' : '' }
          {this.props.error ? this.props.error : ''}
          <ArtistList
            artists={this.props.artists}
            addSong={this.props.onAddSong}
            deleteArtist={this.props.onDeleteArtist}
            deleteSong={this.props.onDeleteSong} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
